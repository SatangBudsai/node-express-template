import { user } from "@prisma/client";
import prisma from "../config/prisma";

export const userService = {
  getAll: async (): Promise<user[]> => {
    const res = await prisma.user.findMany();
    return res;
  },
};
