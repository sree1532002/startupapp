import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  CheckBox,
  SafeAreaView,
} from "react-native";
import { SearchBar } from "react-native-elements";

const FiltersChoose = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const [search, setSearch] = useState("");
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [isSelected4, setSelection4] = useState(false);
  const [isSelected5, setSelection5] = useState(false);
  const [isSelected6, setSelection6] = useState(false);
  const [isSelected7, setSelection7] = useState(false);
  const [isSelected8, setSelection8] = useState(false);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Location</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Courses</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Fees</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected4}
            onValueChange={setSelection4}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Rating</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected5}
            onValueChange={setSelection5}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Ranking</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected6}
            onValueChange={setSelection6}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Campus Strength</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected7}
            onValueChange={setSelection7}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Campus Strength</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected8}
            onValueChange={setSelection8}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Hostel</Text>
        </View>
      </View>
      <Button title="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <>
      <SearchBar
        placeholder="Search..."
        onChangeText={(searchtext) => setSearch(searchtext)}
        value={search}
        style={styles.searchouter}
      />
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Button title="Filters" onPress={() => drawer.current.openDrawer()} />
        </View>
      </DrawerLayoutAndroid>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    //padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    //marginBottom: 5,
    padding: 0,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  searchouter: {
    //paddingTop: 20,
  },
});

export default FiltersChoose;
