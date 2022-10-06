import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import ListProduct from "../components/ListProduct";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ArrowUturnLeftIcon,
  Bars3Icon,
  HomeIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
export default function ListScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 w-full h-full overflow-x-hidden">
      <View className="flex-row fixed top-0 left-0 bg-cyan-500 z-10 w-full h-14 mt-10 justify-between px-10 items-center">
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
        >
          <ArrowLeftIcon color={"white"} fontSize={20} />
        </TouchableOpacity>
        <Text className="text-white">Chat</Text>
        <TouchableOpacity onPress={() => {}}>
          <ShoppingCartIcon color={"white"} fontSize={20} />
        </TouchableOpacity>
      </View>
      <Text className="bg-[#c4c4c4] p-3 px-10 text-black">
        Bạn có thắc mắc với shop vui lòng đừng ngại chat với shop
      </Text>
      <ListProduct />
    </SafeAreaView>
  );
}
