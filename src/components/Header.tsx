export default function Header() {
  return (
    <header className="bg-gray-300 flex w-full justify-between px-2 pt-5 pb-2">
      <div>블로그 아이콘</div>
      <nav className="flex space-x-3">
        <div>home</div>
        <div>posts</div>
        <div>resume</div>
        <div>다크모드</div>
      </nav>
    </header>
  );
}
