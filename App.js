import * as React from "react";
import { Text, TouchableOpacity,StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import About from "./components/About";
import ItemDetail from "./components/ItemDetail";
import Home from "./components/Home";
import Todo from "./components/Todo";
import LibraryHours from "./components/LibraryHours";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="LibraryHours" component={LibraryHours} />
          <Stack.Screen name="Todo" component={Todo} />
          <Stack.Screen name="Home" component={Home}
            options={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity 
                  onPress={() => navigation.navigate("About")}
                  style={styles.headerRightButton}
                > 
                  <Text>About</Text>
                  <AntDesign name="caretright" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  headerRightButton: {
    flexDirection:"row",
    alignItems:"center",
  }
});

export default App;