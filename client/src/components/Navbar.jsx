const Navbar = () => {
  return (
    <nav className="bg-gray-900/25 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        IoT ML Workshop
      </div>
      <div className="space-x-4">
        <a href="#news" className="hover:underline">News</a> |
        <a href="#organizing-committee" className="hover:underline">Organizing Committee</a> |
        <a href="#speakers" className="hover:underline">Speakers</a> |
        <a href="#schedule" className="hover:underline">Schedule</a> |
        <a href="#about" className="hover:underline">About</a>
      </div>
    </nav>
  );
}

export default Navbar;