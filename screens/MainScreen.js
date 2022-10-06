import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet} from "react-native";

function MainScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: true,
    });
  }, []);
  return (
    <View style = {styles.container}>
      <TouchableOpacity
        style = {styles.button}
        onPress={() => nav.navigate("GridScreen")}>
        <Text style = {{color:'white', fontSize:50}}>Grid</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.button}
        onPress={() => nav.navigate("ListScreen")}>
        <Text style = {{color:'white', fontSize:50}}>List</Text>
      </TouchableOpacity>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding:30
  },
  button: {
    backgroundColor: 'blue',
    height:100,
    width:150,
    alignItems:'center'
  }
});