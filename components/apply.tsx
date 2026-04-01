"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LogIn } from "lucide-react";
import { toast } from 'react-hot-toast';
import Router from "next/router";
import { useRouter } from "next/navigation";
import { User } from '@/types';
import { useUser } from '@clerk/clerk-react';
import { Button } from "./ui/button";
import { Position } from "@/types";
import getUsers from "@/actions/get-users";


interface ApplyProps {
  data: Position;
  onClose?: () => void;
  isShortDescription?: boolean;
}

const Apply: React.FC<ApplyProps> = ({ data, onClose, isShortDescription }) => {
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const router = useRouter();
  const { user } = useUser();
  const clerkUserId = user?.id;

  useEffect(() => {
    const fetchUsers = async () => {
      const usersFromDB: User[] = await getUsers();
      const currentUser = usersFromDB.find(u => u.clerkId === clerkUserId);
      setCurrentUserData(currentUser ?? null);
    };

    fetchUsers();
  }, [user, clerkUserId]);

  const handleApplyClick = async () => {
    try {
      if (!currentUserData?.id) {
        toast.error("Primero, completa tu perfil.", {
          position: 'bottom-center',
        });
        return;
      }

      const formData = {
        positionId: data?.id,
      };

      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${currentUserData.id}`,
        formData
      );

      if (response.status === 200) {
        const emailData = {
          user: {
            name: currentUserData.name,
            cv: currentUserData.cvUrl,
            email: currentUserData.email,
            phone: currentUserData.phoneNumber,
          },
          application: {
            name: data.name,
          },
        };

        // Email para Giardelli-Gonzalez
        await axios.post('/api/userApplicationEmail', emailData);

        // Email para usuario
        await axios.post('/api/userNotificationEmail', emailData);

        toast.success("Aplicación exitosa para el puesto.", {
          position: 'bottom-center',
        });
        window.location.reload();

      } else {
        toast.error(`Falló la aplicación para el puesto. Estado: ${response.status}`, {
          position: 'bottom-center',
        });
        console.error("Error aplicando para el puesto:", response.data);
      }
    } catch (error) {
      toast.error("Se produjo un error al aplicar para el puesto.", {
        position: 'bottom-center',
      });
      console.error("Error aplicando para el puesto:", error);
    }
  };

  const hasApplied = currentUserData?.applications?.some(
    (app) => app.positionId === data?.id
  );

  return (
    <div className='flex align-middle'>
      <div className="flex items-center gap-x-3 align-middle">
        {currentUserData ? (
          hasApplied ? (
            <Button className="px-4 py-[25px] text-white bg-customOrange rounded-3xl focus:outline-none border-none w-full md:w-auto">
              Aplicación en revisión
            </Button>
          ) : (
            <Button onClick={handleApplyClick} className="px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none w-full md:w-auto">
              Aplicar
              <LogIn size={20} className='ml-2' />
            </Button>
          )
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-customBlue">
              Primero debes completar tu perfil
            </p>
            <a href="/cv" className="mt-2">
              <Button className="px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none">
                AQUÍ
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apply;
