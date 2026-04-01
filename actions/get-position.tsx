import { Position } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/positions`;

const getPosition = async (id: string): Promise<Position> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch position: ${res.statusText}`);
  }

  return res.json();
};

export default getPosition;
