// Modules
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';

// Components
import SearchInput from './search-input';

// Engine
import rehabillitationAsyncActions from '../../engine/rehabilitation/async-actions';
import gymAsyncActions from '../../engine/gym/async-actions';

function SearchInputContainer(props) {
  const { mainPage } = props;
  const [value, setValue] = useState('');
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const onSearchInputChange = (e: any) => {
    setValue(e);
  };
  const onSubmitEditing = () => {
    // TODO: create more interesting variant
    if (mainPage) {
      dispatch(rehabillitationAsyncActions.getFilteredRehabillitationAsync(value));
    } else {
      dispatch(gymAsyncActions.getFilteredGymExerciseAsync(value));
    }
  };

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
