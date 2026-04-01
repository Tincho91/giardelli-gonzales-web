import { AreaOfInterest } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/areasOfInterest`;

const getAreasOfInterest = async (): Promise<AreaOfInterest[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch areas of interest: ${res.statusText}`);
  }

  return res.json();
};

export default getAreasOfInterest;
