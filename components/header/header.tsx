
export default function Header() {
  return (
    <header className="bg-secondary text-white px-4 py-2 flex justify-between items-center">
      <h1 className="bold text-3xl mt-3">LOGO</h1>
      <div className="flex gap-16 text-lg  font-bold">
        <p>Home</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </header>
  );
}