import SearchBar from "../SearchBar/SearchBar";

function NavBar() {
  return (
    <div className="h-full ml-[250px]">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex-1">
          <SearchBar /> 
        </div>
      </div>
    </div>
  );
}

export default NavBar