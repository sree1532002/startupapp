import React from "react";
import DisplayInfo from "./components/displayinfo";
import FiltersChoose from "./components/filters";
import FullInfo from "./components/fullinfo";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DisplayInfo" component={DisplayInfo} />
        <Stack.Screen name="FullInfo" component={FullInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
