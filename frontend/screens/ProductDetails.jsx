import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { colors, defaultStyle } from '../styles/styles';
import Header from '../components/Header';
import Carousel from 'react-native-snap-carousel';
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
    size: 20,
    style: {
        borderRadius: 5,
        backgroundColor: colors.color5,
        height: 25,
        width: 25,
    }
}

const ProductDetails = ({ route: { params } }) => {
    console.log(params.id);

    const name = "iPhone";
    const price = 980;
    const stock = 5;
    const description = 'Experience lightning-fast performance with the A18 Bionic chip and a stunning 6.8-inch Super Retina XDR display with Dynamic ProMotion for ultra-smooth visuals. Capture every moment with the advanced 48MP triple-lens camera, offering up to 10x optical zoom and enhanced low-light performance. Enjoy all-day battery life with fast charging and the latest iOS 17 for top-notch security. Built with premium materials and IP68 water resistance, the iPhone 16 combines durability with elegance.';
    const isCarousel = useRef(null);
    const [quantity, setQuantity] = useState(1);

    const images = [
        {
            id: 'wfeqwv',
            url: 'https://th.bing.com/th/id/R.7e84d93b14f1d605078fdf072d8303f0?rik=H7%2b1%2flA3DLvgwA&pid=ImgRaw&r=0',
        },
        {
            id: 'htrd',
            url: 'https://purepng.com/public/uploads/large/purepng.com-apple-iphone-xappleapple-iphonephonesmartphonemobile-devicetouch-screeniphone-xiphone-10electronicsobjects-2515306895701eqxj.png',
        },
    ];

    const incrementQty = () => {
        if (quantity >= stock) return
        setQuantity((prev) => prev + 1);
    };
    const decrementQty = () => {
        if (quantity <= 1) return
        setQuantity((prev) => prev - 1);
    };

    const addToCartHandler = () => {
        if (stock === 0) return Toast.show({
            type: 'error',
            text1: 'Out of Stock',
        });
        Toast.show({
            type: 'success',
            text1: `Added ${quantity} ${quantity > 1 ? 'items' : 'item'} to cart`
        })
    };

    return (
        <View style={{
            ...defaultStyle,
            padding: 0,
            backgroundColor: colors.color1,
        }}>
            <Header back={true} />

            {/* Carousel */}
            <Carousel
                layout='stack'
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                ref={isCarousel}
                data={images}
                renderItem={CarouselCardItem}
            />
            <View style={{
                backgroundColor: colors.color2,
                padding: 35,
                flex: 1,
                marginTop: -380,
                borderTopLeftRadius: 55,
                borderTopRightRadius: 55,
            }}>
                <Text
                    numberOfLines={2}
                    style={{
                        fontSize: 25,
                    }}
                >
                    {name}
                </Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '900',
                    }}
                >${price}
                </Text>
                <Text
                    numberOfLines={8}
                    style={{
                        letterSpacing: 1,
                        lineHeight: 20,
                        marginVertical: 15,
                    }}>{description}</Text>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 5,
                }}>
                    <Text style={{
                        color: colors.color3,
                        fontWeight: '100',
                    }}>Quantity</Text>

                    <View style={{
                        width: 80,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    >

                        <TouchableOpacity onPress={decrementQty} >
                            <Avatar.Icon
                                icon={'minus'}
                                {...iconOptions}
                            />
                        </TouchableOpacity>
                        <Text style={style.quantity}>{quantity}</Text>

                        <TouchableOpacity onPress={incrementQty} >
                            <Avatar.Icon
                                icon={'plus'}
                                {...iconOptions}
                            />
                        </TouchableOpacity>

                    </View>

                </View>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={addToCartHandler}
                >
                    <Button
                        icon={'cart'}
                        style={style.btn}
                        textColor={colors.color2}
                    >
                        Add to Cart
                    </Button>
                </TouchableOpacity>

            </View>
        </View>
    )
}


const CarouselCardItem = ({ item, index }) => (
    <View
        style={style.container}
        key={index}
    >
        <Image
            source={{ uri: item.url }}
            style={style.image}
        />
    </View>
);




const style = StyleSheet.create({
    container: {
        backgroundColor: colors.color1,
        width: ITEM_WIDTH,
        paddingVertical: 40,
        height: 380,
    },
    image: {
        width: ITEM_WIDTH,
        resizeMode: 'contain',
        height: 250,
    },
    quantity: {
        backgroundColor: colors.color4,
        height: 25,
        width: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.color5,
    },
    btn: {
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        marginVertical: 35,
    }
});

export default ProductDetails;