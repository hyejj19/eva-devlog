'use client';

export default function ContentLayout({ children }) {
  return (
    <section className="flex flex-col md:flex-row w-full h-full justify-between pt-20 md:gap-10">
      {children}
    </section>
  );
}
