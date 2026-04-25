  "use client";
  import { SessionProvider } from "next-auth/react";

  export function Providers({ children }: { children: React.ReactNode }) {
    return <SessionProvider>{children}</SessionProvider>;
  }

  // Source: https://stackoverflow.com/questions/72357417/next-auth-usesession-must-be-wrapped-in-a-sessionprovider-error-on-the