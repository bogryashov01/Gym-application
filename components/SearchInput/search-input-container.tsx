// Modules
import { useState } from "react";
import { useColorScheme } from "react-native";
import { useDispatch } from "react-redux";

// Components
import SearchInput from "./search-input";

// Engine
import AsyncActions from '../../engine/rehabilitation/async-actions'

function SearchInputContainer() {
  const [value, setValue] = useState("");
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const onSearchInputChange = (e: any) => {
    setValue(e?.target?.value);
  };
  // const onSubmitEditing = () => {
  //   dispatch(AsyncActions.getFilteredRehabillitationAsync)
  // }

  return (
    <SearchInput
      colorScheme={colorScheme}
      value={value}
      onChange={onSearchInputChange}
      onSubmitEditing={()=>{console.log('ololo')}}
    />
  );
}

export default SearchInputContainer;
