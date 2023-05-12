'use client';

export default function TagList() {
  return (
    <article className="w-[280px] h-full hidden md:block">
      <h2 className="subtitle">Tags</h2>
      <ul className="space-y-2 text-sm pt-2">
        <li className="hover-text">React (1)</li>
        <li className="hover-text">Next.js (1)</li>
        <li className="hover-text">Express (1)</li>
        <li className="hover-text">Algorithm (1)</li>
        <li className="hover-text">Computer Science (1)</li>
        <li className="hover-text">Essay (1)</li>
      </ul>
    </article>
  );
}
