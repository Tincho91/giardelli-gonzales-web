"use client";

import { useEffect, useState } from 'react';
import { User, AreaOfInterest } from '@/types';
import { useUser } from '@clerk/clerk-react';
import Spinner from '@/components/ui/spinner';
import getUsers from '@/actions/get-users';
import getAreasOfInterest from '@/actions/get-areasOfInterest';
import UserUpdateForm from '@/components/userUpdateForm';
import UserUploadForm from '@/components/userUploadForm';
import { Button } from '@/components/ui/button';

const CVPage: React.FC = () => {
  const { user, isLoaded } = useUser(); // Ensure the user hook is loaded
  const [loading, setLoading] = useState(true);
  const [currentUserData, setCurrentUserData] = useState<User | null>(null);
  const [areasOfInterest, setAreasOfInterest] = useState<AreaOfInterest[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const checkUserAndLoadData = async () => {
      if (!isLoaded) {
        // Wait until the user is fully loaded
        return;
      }

      if (!user) {
        // Redirect to sign-in page if user is not signed in
        window.location.href = '/sign-in';
      } else {
        // Fetch user data and areas of interest if user is signed in
        setLoading(true);
        setError(null);

        try {
          const [usersFromDB, fetchedAreasOfInterest] = await Promise.all([
            getUsers(),
            getAreasOfInterest(),
          ]);

          const foundUser = usersFromDB.find(u => u.clerkId === user.id);
          setCurrentUserData(foundUser ?? null);
          setAreasOfInterest(fetchedAreasOfInterest);
        } catch (fetchError) {
          console.error('Error loading CV page data:', fetchError);
          setError('No se pudo cargar tu perfil en este momento. Intenta nuevamente.');
        } finally {
          setLoading(false);
        }
      }
    };

    checkUserAndLoadData();
  }, [user, isLoaded, retryKey]);

  if (!isLoaded || loading) {
    // Show spinner while loading
    return (
      <div className="bg-white relative flex items-center justify-center min-h-[87vh] w-full">
        <div className="absolute sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
          <img src="/images/positionsVector.png" className="w-full" />
        </div>
        <div className='h-full flex justify-center items-center'>
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white relative flex items-center justify-center min-h-[87vh] w-full">
        <div className="absolute sm:top-[-1%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
          <img src="/images/positionsVector.png" className="w-full" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-6 text-center">
          <p className="text-customBlue">{error}</p>
          <Button
            type="button"
            className="px-4 py-2 text-sm text-white bg-customOrange rounded-3xl hover:bg-customBlue border-none"
            onClick={() => setRetryKey((prev) => prev + 1)}
          >
            Reintentar
          </Button>
        </div>
      </div>
    );
  }

  return currentUserData
    ? <UserUpdateForm user={currentUserData} />
    : <UserUploadForm initialUserData={user?.id ?? ""} areasOfInterest={areasOfInterest} />;
};

export default CVPage;
