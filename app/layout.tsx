import React from 'react';
import '../src/styles/globals.css';

import Header from '../src/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main className="flex flex-col items-center h-full w-full px-4 lg:px-0">
          <section className="flex flex-col items-center h-full w-full max-w-[900px]">
            <Header />
            {children}
            <footer className="h-[100px] flex justify-center items-center text-sm text-gray-600 dark:text-gray-400 border-t w-full mt-16">
              Copyright ⓒ 2023 parkhyejung All rights reserved.
            </footer>
          </section>
        </main>
      </body>
    </html>
  );
}
