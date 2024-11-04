import Container from '@/components/ui/container';
import getPositions from "@/actions/get-positions";
import getModalities from '@/actions/get-modalities';
import getAreasOfInterest from '@/actions/get-areasOfInterest';
import Spinner from '@/components/ui/spinner';

import FilterComponent from './components/filterComponent';


export const revalidate = 0;

interface PositionsPageProps {
  searchParams: {
    areaOfInterestId: string;
    modalityId: string;
  }
}

const PositionsPage: React.FC<PositionsPageProps> = async ({
  searchParams
}) => {

  let Positions, areasOfInterest, modalities;

  // Use try-catch block to handle errors during data fetching
  try {
    // Fetch data concurrently
    [Positions, areasOfInterest, modalities] = await Promise.all([
      getPositions({
        areaOfInterestId: searchParams.areaOfInterestId,
        modalityId: searchParams.modalityId,
      }),
      getAreasOfInterest(),
      getModalities(),
    ]);
    Positions = Positions.filter(position => !position.isArchived);
  } catch (error) {
    // Handle error here (e.g., log, show an error message)
    console.error('Error fetching data:', error);
  }

  // Render loading spinner if data fetching is in progress
  if (!Positions || !areasOfInterest || !modalities) {
    return <Spinner />;
  }



  return (
    <div className="bg-white relative min-h-full">
      <div className="absolute top-[0%] md:top-[-2%] lg:top-[-10%] xl:top-[-20%] left-0 right-0 z-[0]">
        <img src="/images/positionsVector.png" className="w-full" />
      </div>
      <div className='z-40 relative'>
        <Container>
          <p className="text-center text-4xl font-extrabold py-10 text-customBlue">BÚSQUEDAS ACTIVAS</p>
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div>
              <FilterComponent initialPositions={Positions} areasOfInterest={areasOfInterest} modalities={modalities} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PositionsPage;
