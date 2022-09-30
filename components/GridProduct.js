import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
const data = [
  {
    name: "Ca nấu lẩu, nấu mì mi mini",
    producer: "Devang",
    imgLink: require("../assets/ca_nau_lau.png"),
  },
  {
    name: "1KG KHÔ GÀ BƠ TỎI",
    producer: "Devang",
    imgLink: require("../assets/ga_bo_toi.png"),
  },
  {
    name: "Xe cần cẩu đa năng",
    producer: "Devang",
    imgLink: require("../assets/xa_can_cau.png"),
  },
  {
    name: "Đồ chơi dạng mô hình",
    producer: "Thế giới đồ chơi",
    imgLink: require("../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    name: "Lãnh đạo giản đơn",
    producer: "Minh Long Book",
    imgLink: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    name: "Hiểu lòng con trẻ",
    producer: "Minh Long Book",
    imgLink: require("../assets/hieu_long_con_tre.png"),
  },
  {
    name: "Donal Trump Thiên tài lãnh đạo",
    producer: "Minh Long Book",
    imgLink: require("../assets/trump_1.png"),
  },
];
export default function GridProduct() {
  return (
    <FlatList
      className=" flex-1"
      numColumns={2}
      data={data}
      keyExtractor={(item) => item.name}
      key={(item) => item.name}
      renderItem={({ item }) => (
        <View
          style={{
            display: "flex",
            width: "100%",
            padding: 1,
            paddingVertical: 3,
            borderBottomWidth: 0.5,
            borderColor: "gray",
            borderStyle: "solid",
            justifyContent: "space-between",
          }}
        >
          <Image source={item.imgLink} className={"w-40 h-20"} />
          <View className="p-3 justify-evenly flex-1 self-start">
            <Text className="text-black">{item.name}</Text>
            <Text style={{ color: "gray" }}>
              Shop
              <Text className="text-black"> {item.producer}</Text>
            </Text>
          </View>
        </View>
      )}
    />
  );
}
