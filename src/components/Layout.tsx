import Header from './Header';

export default function Layout({ children }) {
  return (
    <main className="flex flex-col items-center h-full w-full">
      <section className="flex flex-col items-center h-full w-full max-w-[1000px]">
        <Header />
        {children}
      </section>
    </main>
  );
}
