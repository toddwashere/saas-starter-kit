import type { Role, SystemRole } from '@prisma/client';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
      roles: { teamId: string; role: Role }[];
      systemRoles: SystemRole[];
    };
  }

  interface Profile {
    requested: {
      tenant: string;
    };
    roles: string[];
    systemRoles: string[];
    groups: string[];
  }
}
