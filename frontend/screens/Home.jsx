import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useState } from 'react';
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from '../components/SearchModal';
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [{ category: "Nice", _id: 'sdnjskad' },
    { category: "Nice2", _id: 'sgaer' },
    { category: "Nice3", _id: 'asgsehsrt' },
    { category: "Nice4", _id: 'bsryjerty' },
    { category: "Nice5", _id: 'sdnjskggfsdsfsad' },
    { category: "Nice6", _id: 'ahtyrj' },
    { category: "Nice7", _id: 'sdnjskaergsvtrgad' },
  ];

export const products = [
    {
    price: 112,
    stock: 23,
    name: 'Shoe',
    _id: 'wefadsfaer',
    category:'Clothing',
    images: [{
        url: 'https://th.bing.com/th/id/R.588c91bfba1ed32b8b0ae41dc7fb7c4d?rik=B%2fHZWgczMJDP0Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fshoes-png-running-shoes-png-image-1200.png&ehk=fzyBl6G%2bpf7aJ7Q57f2XNebhdNDvdl3LgXoS9ITvZ8U%3d&risl=&pid=ImgRaw&r=0',
    },],
},
{
    price: 989,
    stock: 21,
    name: 'IPhone',
    _id: 'hgtyjytj',
    category:'Tech',
    images: [{
        url: 'https://th.bing.com/th/id/R.7e84d93b14f1d605078fdf072d8303f0?rik=H7%2b1%2flA3DLvgwA&pid=ImgRaw&r=0',
    },],
},
];

const Home = () => {
  

  const [category, setCategory] = useState('')
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setsearchQuery] = useState('');

  const navigate = useNavigation()

  const categoryButtonHandler= (id) => {
    setCategory(id);
  };


const addToCartHandler = (id)=> {
    console.log('add to cart', id);
};

  return (
<>
{
    activeSearch && (
        <SearchModal searchQuery={searchQuery} setsearchQuery={setsearchQuery} setActiveSearch={setActiveSearch} products={products} />
    )
}

    <View style={{
      ...defaultStyle
      }}
      >
      <Header />
      {/* Heading Row */}
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Heading */}
        <Heading 
        text1='Our'
        text2='Products'
        />
        {/* Search Bar */}
        <View>
          <TouchableOpacity onPress={()=>setActiveSearch((prev => !prev))}>
            <Avatar.Icon
              icon={"magnify"}
              size={50}
              color={"gray"}
              style={{ backgroundColor: colors.color2, elevation: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories */}
      <View
        style={{
          flexDirection: "row",
          height: 80,
        }}
      >

        <ScrollView horizontal contentContainerStyle={{
            alignItems: 'center',
        }} showsHorizontalScrollIndicator={false}>
        {
        categories.map((item, index)=>(
            <Button
            key={item._id}
          style={{
            backgroundColor: category === item._id ? colors.color1 : colors.color5,
            borderRadius: 100,
            margin: 5,
          }}
          onPress={()=>categoryButtonHandler(item._id)}
        >
          <Text
            style={{
              fontSize: 12,
              color: category === item._id ? colors.color2 : 'gray',
            }}
          >
            {item.category}
          </Text>
        </Button>
        ))
        }
        </ScrollView>
        
      </View>


{/* Products */}
<View style={{
    flex: 1,
}}>
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator= {false}
    >

{
    products.map((item, index)=>(
        <ProductCard 
        stock={item.stock}
        name={item.name}
        price={item.price}
        image={item.images[0] ?.url}
        addToCartHandler={addToCartHandler}
        id={item._id}
        key={item._id}
        i={index}
        navigate={navigate}
        />
    ))
}

    </ScrollView>

</View>

    </View>

    {/* Footer */}
    <Footer activeRoute={'home'}/>
    </>
  );
};

export default Home;
