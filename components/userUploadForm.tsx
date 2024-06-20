"use client";

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { CldUploadWidget } from 'next-cloudinary';
import toast from 'react-hot-toast';

import { Input } from './ui/input';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/ui/spinner';
import Container from './ui/container';


interface UploadResult {
  info?: {
    url?: string;
  };
}

interface UserUploadFormProps {
  initialUserData: string;
  areasOfInterest: any;
}

const UserUploadForm: React.FC<UserUploadFormProps> = ({ initialUserData, areasOfInterest }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [cvUrl, setCvUrl] = useState('');
  const [isCVUploaded, setIsCVUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const onUpload = (result: UploadResult) => {
    if (result.info && result.info.url) {
      setCvUrl(result.info.url);
      setIsCVUploaded(true);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isCVUploaded) {
      toast.error('Please upload your CV before submitting.', {
        position: 'bottom-center',
      });
      setIsLoading(false);
      return;
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/users`;

    try {
      const response = await axios.post(apiUrl, {
        name,
        email,
        phoneNumber,
        clerkId: initialUserData,
        linkedinUrl,
        cvUrl,
        areaOfInterestId: selectedArea,
      });

      const emailData = {
        user: {
          name: name,
          cv: cvUrl,
          email: email,
        },
      };

      await axios.post('/api/userRegisterEmail', emailData);

      await axios.post('/api/userRegisterNotification', emailData);

      toast.success('Usuario Creado!', {
        position: 'bottom-center',
      });

      location.reload();
    } catch (error) {

      toast.error('Error creando el Usuario', {
        position: 'bottom-center',
      });

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white relative min-h-[87vh] py-10 xl:flex xl:flex-col xl:justify-center">
      <div className="absolute top-0 sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <Container>
        <div className="relative flex flex-col justify-center mb-5">
          <h1 className="text-4xl font-extrabold my-10 text-customBlue text-center">Crear Perfil</h1>

          <div className="w-full mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4 w-full mx-auto md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="name" className="text-left w-full text-customBlue">Nombre y Apellido</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="email" className="text-left w-full text-customBlue">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0">
                <label htmlFor="phoneNumber" className="text-left w-full text-customBlue">Teléfono</label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                  required
                />
              </div>
              <div className="relative flex flex-col items-center justify-center md:mt-0 ">
                <label htmlFor="linkedinUrl" className="text-left w-full text-customBlue">LinkedIn (opcional)</label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  placeholder="LinkedIn"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="w-full border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue"
                />
              </div>
              <div className="md:col-span-2 md:flex md:items-end md:justify-between">
                <div className="md:w-[65%]">
                  <label htmlFor="areaOfInterest" className="text-left w-full text-customBlue">Área de Interés</label>
                  <select
                    id="areaOfInterest"
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full border border-customBlue rounded-3xl px-4 py-2 bg-transparent text-customBlue focus:outline-none focus:border-customFocusColor z-10"
                  >
                    <option value="" disabled selected>Selecciona el área de tu interés</option>
                    {areasOfInterest.map((area: any) => (
                      <option key={area.id} value={area.id}>
                        {area.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:w-2/3 md:justify-end mt-5">
                  {/*// @ts-ignore */}
                  <CldUploadWidget uploadPreset="d2obllus" onUpload={onUpload}>
                    {({ open }) => (
                      <Button
                        type="button"
                        onClick={(e) => open()}
                        className="text-md px-4 py-2 mb-4 md:mb-0 text-customOrange border-customOrange border-[2px] bg-white rounded-3xl hover:bg-customOrange hover:text-white w-full md:w-auto"
                      >
                        ADJUNTAR CV
                      </Button>
                    )}
                  </CldUploadWidget>

                  <Button
                    type="submit"
                    className="text-md px-4 py-2 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none focus:bg-customBlue-dark border-none w-full md:w-auto"
                  >
                    {isLoading ? <Spinner /> : 'CREAR PERFIL'}
                  </Button>
                </div>
              </div>
              <div className='w-full flex justify-center'>
                {isCVUploaded && <p className="text-green-600 mb-4 md:mb-0">CV Subido Correctamente!</p>}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserUploadForm;