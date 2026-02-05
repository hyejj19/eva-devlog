'use client';

export default function ContentLayout({ children }) {
  return (
    <section className="flex flex-col md:flex-row w-full h-full justify-between pt-20 md:space-x-5">
      {children}
    </section>
  );
}
