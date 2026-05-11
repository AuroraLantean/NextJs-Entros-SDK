"use client";

import { AddressType, darkTheme, PhantomProvider } from "@phantom/react-sdk";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";
import { phantomAppId } from "@/lib/initconditions";

export function Provider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <PhantomProvider
        config={{
          providers: ["google", "apple", "phantom", "injected"], // Enabled auth methods
          appId: phantomAppId,
          addressTypes: [
            //AddressType.ethereum,
            AddressType.solana,
            //AddressType.bitcoinSegwit,
            //AddressType.sui,
          ],
          authOptions: {
            redirectUrl: "https://yourapp.com/auth/callback", // Must be whitelisted in Phantom Portal
          },
        }}
        theme={darkTheme}
        appIcon="https://your-app.com/icon.png"
        appName="EntrosNextJs"
      >
        {children}
      </PhantomProvider>
    </NextThemesProvider>
  );
}
