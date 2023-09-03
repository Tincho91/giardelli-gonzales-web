import { Position } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/positions`;

const getPosition = async (id: string): Promise<Position> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getPosition;
