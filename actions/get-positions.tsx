import { Position } from "@/types";
import qs from "query-string";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/positions`;

interface Query {
  modalityId?: string;
  technologyId?: string;
  areaOfInterestId?: string;
  locationId?: string;
  availabilityId?: string;
  companyId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const getPositions = async ( query: Query ): Promise<Position[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: { 
      modalityId: query.modalityId,
      technologyId: query.technologyId, 
      areaOfInterestId: query.areaOfInterestId,
      locationId: query.locationId,
      availabilityId: query.availabilityId,
      companyId: query.companyId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    },
  });

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('NetPosition response was not ok');
  }
  return res.json();
};

export default getPositions;
