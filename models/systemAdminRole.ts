import { prisma } from '@/lib/prisma';


export const getIsSystemAdmin = async (userId: string) => {
   const isAdmin = await prisma.systemAdminRole.count({
      where: { userId },
   }) > 0;
   return isAdmin;
}
