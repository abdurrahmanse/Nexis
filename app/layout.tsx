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
              <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-fuchsia-400/30 dark:bg-fuchsia-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-cyan-400/30 dark:bg-cyan-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-10000" />
                <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-400/30 dark:bg-indigo-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
              </div>
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
