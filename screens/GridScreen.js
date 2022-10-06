import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import GridProduct from "../components/GridProduct";
import {ArrowLeftIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon, ShoppingCartIcon,} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style ={styles.container}>
      <View style = {styles.view1}>
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
        >
          <ArrowLeftIcon color={"white"} fontSize={20} />
        </TouchableOpacity>
        <View style = {styles.view2}>
          <MagnifyingGlassIcon color={"black"} fontSize={20} />
          <TextInput
            placeholder="Search..."
            value="Dây cáp USB"
            className="flex-1"
          />
        </View>
        <View style = {styles.view3}>
          <TouchableOpacity onPress={() => {}} style ={{flex:1, alignItems: "center"}}>
            <ShoppingCartIcon color={"white"} fontSize={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EllipsisHorizontalIcon color={"white"} fontSize={20} />
          </TouchableOpacity>
        </View>
      </View>
      <GridProduct />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1 :{
    flexDirection: 'row',
    backgroundColor: 'cyan',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center', 
    zIndex:100,
    marginTop:30,
    padding:10

    
  },
  view2: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: "white",
    padding:10
  },
  view3: {
    flex: 0.3,
    flexDirection: "row"
  }
  
});
