import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import '../styles/globals.css';
import 'highlight.js/styles/tomorrow-night-bright.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/tomorrow-night-bright.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js" />
      </Head>
      <body suppressHydrationWarning>
        <main className="flex flex-col items-center h-full w-full px-4 lg:px-0">
          <section className="flex flex-col items-center h-full w-full max-w-[900px]">
            <Header />
            {children}
            <footer className="h-[100px] flex justify-center items-center text-sm text-gray-600 dark:text-gray-400 border-t w-full mt-16">
              ⓒ 2023 parkhyejung All rights reserved.
            </footer>
          </section>
        </main>
      </body>
    </html>
  );
}
