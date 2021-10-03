import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { SearchBar } from "react-native-elements";
const Search = () => {
  //const [text, onChangeText] = React.useState(null);
  const [search, setSearch] = useState("");
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(searchtext) => setSearch(searchtext)}
      value={search}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchouter: {
    paddingTop: 20,
  },
});

export default Search;
