"use client";

import React, { useState, useEffect } from 'react';

import NoResults from '@/components/ui/no-results';
import PositionCard from '@/components/ui/position-card';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterComponentProps {
  initialPositions: any[];
  areasOfInterest: any[];
  modalities: any[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ initialPositions, areasOfInterest, modalities }) => {
  const [positions, setPositions] = useState<any[]>(initialPositions);
  const [filteredPositions, setFilteredPositions] = useState<any[]>(initialPositions);
  const [positionName, setPositionName] = useState<string>('');
  const [areaOfInterest, setAreaOfInterest] = useState<string>('');
  const [modality, setModality] = useState<string>('');

  useEffect(() => {
    setPositions(initialPositions);
    setFilteredPositions(initialPositions);
  }, [initialPositions]);

  const handleSearch = () => {
    const newFilteredPositions = positions.filter(position => {
      return (
        (!positionName || position.name.toLowerCase().includes(positionName.toLowerCase())) &&
        (!areaOfInterest || position.areaOfInterest.id === areaOfInterest) &&
        (!modality || position.modality.id === modality)
      );
    });
    setFilteredPositions(newFilteredPositions);
  };

  const handleClear = () => {
    setPositionName('');
    setAreaOfInterest('');
    setModality('');
    setFilteredPositions(positions);
  };

  return (
    <div>
      <div>
        <div className="mb-8 md:items-center lg:flex lg:justify-between ">
          <div className='flex flex-col mb-4 md:flex-row'>
            <div className='flex relative mb-4 md:mr-4 md:mb-0'>
              <input
                type="text"
                value={positionName}
                onChange={(e) => setPositionName(e.target.value)}
                placeholder="Postulaciones"
                className="px-4 py-2 pl-10 text-white bg-customBlue rounded-3xl hover:bg-customBlue-dark focus:outline-none border-none w-full"
              />
              <Search size={20} className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white" />
            </div>
            <select
              value={areaOfInterest}
              onChange={(e) => setAreaOfInterest(e.target.value)}
              className="px-4 py-2 mb-4 md:mr-4 md:mb-0 text-white bg-customBlue rounded-3xl hover:bg-customBlue-dark focus:outline-none border-none w-full md:w-auto"
            >
              <option value="">Area de interés</option>
              {areasOfInterest.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
                </option>
              ))}
            </select>
            <select
              value={modality}
              onChange={(e) => setModality(e.target.value)}
              className="px-4 py-2 text-white bg-customBlue rounded-3xl hover:bg-customBlue-dark focus:outline-none border-none w-full md:w-auto"
            >
              <option value="">Modalidad</option>
              {modalities.map((mod) => (
                <option key={mod.id} value={mod.id}>
                  {mod.name}
                </option>
              ))}
            </select>
          </div>
          <div className='flex'>
            <Button
              onClick={handleClear}
              className="mb-4 mr-5 md:mr-4 text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none w-auto"
            >
              LIMPIAR
            </Button>
            <Button
              onClick={handleSearch}
              className="text-white bg-customOrange rounded-3xl hover:bg-customBlue focus:outline-none border-none w-auto"
            >
              BUSCAR
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-6 lg:col-span-4 lg:mt-0">
        {filteredPositions.length === 0 && <NoResults />}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPositions.map((item) => (
            <PositionCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
