import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { QueryProvider } from "@/lib/providers/query-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import "../styles/globals.css";
import { inter, sfPro } from "./fonts";

export { generateMetadata } from "@/lib/metadata";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cx(sfPro.variable, inter.variable, "flex min-h-screen flex-col")}>
          <QueryProvider>
            <ThemeProvider>
              <div className="fixed -z-10 h-screen w-full bg-linear-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-950 dark:to-black" />
              <Suspense fallback="...">
                <Navbar />
              </Suspense>
              <main className="flex-1 w-full flex flex-col items-center py-32">
                {children}
              </main>
              <Footer />
              <VercelAnalytics />
            </ThemeProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
