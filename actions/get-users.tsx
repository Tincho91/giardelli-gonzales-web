import { User } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;

const getUsers = async (): Promise<User[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.statusText}`);
  }

  const data = await res.json();

  return data;
};

export default getUsers;
