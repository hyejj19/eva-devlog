import Header from './Header';

export default function Layout({ children }) {
  return (
    <main className="flex flex-col items-center h-full w-full px-4 lg:px-0">
      <section className="flex flex-col items-center h-full w-full max-w-[900px]">
        <Header />
        {children}
        <footer className="h-[100px] flex justify-center items-center text-sm text-gray-600 border-t w-full">
          Copyright ⓒ 2023 parkhyejung All rights reserved.
        </footer>
      </section>
    </main>
  );
}
