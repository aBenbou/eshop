import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors, defaultStyle } from '../styles/styles'
import Header from '../components/Header'
import Heading from '../components/Heading'
import { Button } from 'react-native-paper'
import CartItem from '../components/CartItem'
import { useNavigation } from '@react-navigation/native'

export const cartItems= [
    {
    name:'Macbook',
    image:'https://th.bing.com/th/id/R.8593980719357abc021e94c5524207ca?rik=cW86JIeD8F9ENw&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-17015283614248ry9g.png&ehk=MbYqVcq7JPjSm9qrh0wwn02CnhDMPH4pYKDsgGor8Wg%3d&risl=&pid=ImgRaw&r=0',
    product:'fewgaef',
    stock:1,
    price: 111,
    quantity:1,
},
{
    name:'IPhone',
    image:'https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png',
    product:'asdgvzfdb',
    stock:2,
    price: 222,
    quantity:2,
},
{
    name:'Shoe',
    image:'https://th.bing.com/th/id/R.9a06a9d5fb3daddd463ae7f84b82904f?rik=rmzjFSmnzPFs%2fA&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery2%2fShoes-Transparent.png&ehk=HcjBGNR%2fOAi53Ivk5xUrsK1j17ceBgSxZQbgmr50TCc%3d&risl=1&pid=ImgRaw&r=0',
    product:'easeth',
    stock:3,
    price: 333,
    quantity:3,
},
];



const Cart = () => {
    
    const navigate = useNavigation();

    const incrementHandler = (id, qty, stock) => {
        console.log('increasing', id, qty, stock);
    };
    const decrementHandler = (id, qty) => {
        console.log('idecreasing', id, qty);
    };
    
    return (
        <View
            style={{
                ...defaultStyle,
                padding: 0,
            }}
        >
            {/* Header */}
            <Header
                back={true}
                emptyCart={true}
            />
            {/* Heading */}
            <Heading
                text1='Shopping'
                text2='Cart'
                containerStyle={{
                    marginLeft: 35,
                    paddingTop: 70,
                }}
            />

            <View style={{
                paddingVertical: 20,
                flex: 1,
            }}>

<ScrollView showsVerticalScrollIndicator={false}>

            {
                cartItems.map((i,index)=>(
                    <CartItem 
                    navigate={navigate}
                    key={i.product} 
                    id={i.product}
                    name={i.name}
                    stock={i.stock}
                    amount={i.price}
                    imgSrc={i.image}
                    index={index}
                    qty={i.quantity}
                    incrementHandler={incrementHandler}
                    decrementHandler={decrementHandler}
                    />
                ))
            }

</ScrollView>

            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 35,
            }}>
                <Text>5 items</Text>
                <Text>$900</Text>
            </View>
            <TouchableOpacity onPress={
                cartItems.length > 0 ? 
                ()=> navigate.navigate('confirmorder') :
                null
        }
        >
                <Button
                style={{
                    backgroundColor:colors.color3,
                    borderRadius:100,
                    padding:5,
                    margin:30,
                }}
                icon={'cart'}
                textColor={colors.color2}
                >Checkout</Button>
            </TouchableOpacity>
        </View>
    );
};

export default Cart