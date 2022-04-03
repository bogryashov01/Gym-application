// Modules
import { TextInput, StyleSheet } from "react-native";
interface Props {
  colorScheme: string;
  onChange: ((text: string) => void) | undefined;
  value: string;
  onSubmitEditing: ()=> void,
}

const SearchInput: React.FC<Props> = ({ colorScheme, onChange, value, onSubmitEditing }) => {
  return (
    <TextInput
      value={value}
      style={styles(colorScheme).SearchInput}
      placeholderTextColor={colorScheme === "dark" ? "#fff" : "#000"}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      placeholder="Search exercise for gym or rehabitation"
      keyboardType="ascii-capable"
    />
  );
};

const styles = (colorScheme: string) => StyleSheet.create({
  SearchInput: {
    marginLeft: 15,
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
});

export default SearchInput;
