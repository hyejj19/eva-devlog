export default function Header() {
  return (
    <header className="flex w-full justify-between pt-5 pb-2 h-[80px] items-end">
      <div>
        <span className="text-3xl font-bold">Develog</span>
        <span className="text-3xl font-bold text-main-orange">.</span>
      </div>
      <nav className="flex space-x-3">
        <div>home</div>
        <div>posts</div>
        <div>resume</div>
        <div>다크모드</div>
      </nav>
    </header>
  );
}
