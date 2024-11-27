import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formheading } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

export const orders = [
  {
    _id: "uyhgyitrf",
    shippingInfo: {
      address: "3 rue Abda",
      city: "Rabat",
      country: "Morocco",
      pinCode: "3232",
    },
    createdAt: "12-2-2024T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 20000,
  },
  {
    _id: "uyhgyiefgtrf",
    shippingInfo: {
      address: "32 rue Sadaqa",
      city: "Rabat",
      country: "Morocco",
      pinCode: "4343",
    },
    createdAt: "12-2-2024T2243",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 200,
  },
];


const Orders = () => {
    const loading = false;


  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formheading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;