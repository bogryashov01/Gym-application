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
    setValue(e);
  };
  const onSubmitEditing = () => {
    dispatch(AsyncActions.getFilteredRehabillitationAsync(value))
    console.log(value, 'value')
  }

  return (
    <SearchInput
      colorScheme={colorScheme}
      value={value}
      onChange={onSearchInputChange}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

export default SearchInputContainer;
