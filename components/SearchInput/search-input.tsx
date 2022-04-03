// Modules
import { TextInput, StyleSheet } from "react-native";
interface Props {
  onChange: ((text: string) => void) | undefined;
  value: string;
}

const SearchInput: React.FC<Props> = ({ onChange, value }) => {
  return (
    <TextInput
      value={value}
      style={styles.SearchInput}
      onChangeText={onChange}
      placeholder="Search exercise for gym or rehabitation"
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  SearchInput: {
    marginLeft: 15,
  },
});

export default SearchInput;
