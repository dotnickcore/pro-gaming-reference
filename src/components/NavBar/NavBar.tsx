import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div className="h-full md:ml-[250px]">
      <div className="flex items-center justify-end h-full px-4 py-8">
        <div className="flex-1 max-w-xl">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default NavBar