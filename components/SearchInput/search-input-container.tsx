// Modules
import { useState } from "react";

// Components
import SearchInput from "./search-input";

function SearchInputContainer() {
  const [value, setValue] = useState("");

  const onSearchInputChange = (e: any) => {
    setValue(e?.target?.value);
  };

  return <SearchInput value={value} onChange={onSearchInputChange} />;
}

export default SearchInputContainer;
