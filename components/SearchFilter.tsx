import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

interface SearchFilterProps {
  searchTerm: string;
  //update
  setSearchTerm: (term: string) => void;
}

//searching
const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <View style={styles.searchcontainer}>
      <TextInput
        style={styles.searchinput}
        placeholder=" Search..."
        value={searchTerm}
        // update the search term
        onChangeText={setSearchTerm}
      />
    </View>
  );
};

export default SearchFilter;
