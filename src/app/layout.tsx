import Head from 'next/head';
import { Metadata } from 'next';
import React from 'react';
import Header from '../components/common/Header';
import '../styles/globals.css';
import 'highlight.js/styles/tomorrow-night-bright.css';

export const metadata: Metadata = {
  title: 'Evalog.',
  description: '이 곳은 제가 공부하고 느낀 것을 기록하는 공간입니다.',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: {
    name: 'eva',
    url: 'https://github.com/hyejj19',
  },
  openGraph: {
    title: 'Evalog.',
    siteName: 'Evalog.',
    type: 'website',
    url: 'https://evalog.vercel.app/',
    images:
      'https://private-user-images.githubusercontent.com/89173923/313081213-8348bd8e-006a-41ed-be6f-68ce94ce7592.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0ODE5NDQsIm5iZiI6MTcxMDQ4MTY0NCwicGF0aCI6Ii84OTE3MzkyMy8zMTMwODEyMTMtODM0OGJkOGUtMDA2YS00MWVkLWJlNmYtNjhjZTk0Y2U3NTkyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNVQwNTQ3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWFiYjI2ZjBhZTA5MDg3NDIxMGNlODc4MmFkNTkxZWMxMDY1YjgwOTAzYWJlZDc0ODlmYzY1YTYxYWUwODZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O9iNjMNJk4LQulVsB8xw8lqAp0xw79uIBdx4MbYx_N8',
    description: '이 곳은 제가 공부하고 느낀 것을 기록하는 공간입니다.',
  },
  twitter: {
    title: 'Evalog.',
    card: 'summary',
    description: '이 곳은 제가 공부하고 느낀 것을 기록하는 공간입니다.',
    images:
      'https://private-user-images.githubusercontent.com/89173923/313081213-8348bd8e-006a-41ed-be6f-68ce94ce7592.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTA0ODE5NDQsIm5iZiI6MTcxMDQ4MTY0NCwicGF0aCI6Ii84OTE3MzkyMy8zMTMwODEyMTMtODM0OGJkOGUtMDA2YS00MWVkLWJlNmYtNjhjZTk0Y2U3NTkyLmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzE1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMxNVQwNTQ3MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYWFiYjI2ZjBhZTA5MDg3NDIxMGNlODc4MmFkNTkxZWMxMDY1YjgwOTAzYWJlZDc0ODlmYzY1YTYxYWUwODZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O9iNjMNJk4LQulVsB8xw8lqAp0xw79uIBdx4MbYx_N8',
    creator: 'eva',
  },
};

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
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
