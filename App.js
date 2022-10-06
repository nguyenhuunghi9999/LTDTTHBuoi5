import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import {ArrowUturnLeftIcon,Bars3Icon,HomeIcon,} from "react-native-heroicons/solid";
import ListScreen from "./screens/ListScreen";
import MainScreen from "./screens/MainScreen";
import GridScreen from "./screens/GridScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style = {styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GridScreen" component={GridScreen} />
        </Stack.Navigator>
        <View style ={styles.view}>
          <TouchableOpacity>
            <Bars3Icon color={"white"} fontSize={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeIcon color={"white"} fontSize={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ArrowUturnLeftIcon color={"white"} fontSize={30} />
          </TouchableOpacity>
        </View>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    flexDirection: 'row',
    bottom: 0,
    left:0,
    backgroundColor:'cyan',
    width:'100%',
    height: 50,
    padding:10,
    justifyContent: 'space-between',
    alignItems:'center'
  }

});

