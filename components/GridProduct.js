import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AirbnbRating } from "react-native-ratings";
const data = [
  {
    id: 7,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/carbusbtops21.png"),
  },
  {
    id: 6,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/daucam1.png"),
  },
  {
    id: 5,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/dauchuyendoi1.png"),
  },
  {
    id: 4,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/giacchuyen1.png"),
  },
  {
    id: 3,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/dauchuyendoipsps21.png"),
  },
  {
    id: 2,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/daynguon1.png"),
  },
  {
    id: 1,
    name: "Cáp chuyển từ Cổng USB sang PS2",
    rating: 4,
    price: 69900,
    imgLink: require("../assets/giacchuyen1.png"),
  },
];
export default function GridProduct() {
  return (
    <FlatList
      style ={{flex:1}}
      numColumns={2}
      data={data}
      keyExtractor={(item, i) => i}
      renderItem={({ item }) => (
        <View
          style={{
            display: "flex",
            width: "50%",
            padding: 2,
            paddingVertical: 3,
            justifyContent: "space-between",
          }}
        >
          <Image source={item.imgLink} style ={{width:'100%', height:100}} />
          <View className="p-3 justify-evenly flex-1 self-start px-5">
            <Text className="text-black truncate w-[150px]">{item.name}</Text>
            <View className="flex-row">
              <AirbnbRating
                showRating={false}
                defaultRating={item.rating}
                size={15}
              />
              <Text style={{ color: "gray" }}>(15)</Text>
            </View>
            <View className="flex-row">
              <Text className="text-black font-bold"> {item.price} đ</Text>
              <Text
                style={{
                  color: "gray",
                  flex: 0.5,
                  textAlign: "center",
                }}
              >
                -39%
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
}
