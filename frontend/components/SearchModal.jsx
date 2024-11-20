import { View, Text, Platform, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/styles';
import { StatusBar } from 'expo-status-bar';
import { Headline, Searchbar } from 'react-native-paper';

const SearchModal = ({
    searchQuery,
    setActiveSearch,
    setsearchQuery,
    products = []
}) => {

    const navigation = useNavigation();

    const backAction = () => {
        setsearchQuery('');
        setActiveSearch(false);
        return true;
    };

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        return () => backHandler.remove();
    }, []);

    return (
        <View style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            zIndex: 100,
            backgroundColor: colors.color2,
            padding: 35,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
        }}>
            <SafeAreaView>
                <Searchbar 
                    placeholder='Search...' 
                    onChangeText={(query) => setsearchQuery(query)}
                    value={searchQuery}
                    style={{
                        marginTop: 20,
                    }}
                />

                <ScrollView>
                    <View style={{
                        paddingVertical: 40,
                        paddingHorizontal: 10,
                    }}>
                        {products.map(i => (
                            <SearchItem 
                                key={i._id} 
                                imgSrc={i.images[0]?.url} 
                                name={i.name}
                                price={i.price}
                                handler={() => navigation.navigate('productdetails', { id: i._id })}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const SearchItem = ({ price, name, imgSrc, handler }) => (
    <TouchableOpacity onPress={handler}>
        <View style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: colors.color2,
            elevation: 5,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginVertical: 30,
        }}>
            <Image 
                source={{ uri: imgSrc }}
                style={{
                    width: 80,
                    height: 80,
                    position: 'absolute',
                    resizeMode: 'contain',
                    top: -15,
                    left: 10,
                    borderTopLeftRadius: 20,
                    borderBottomRightRadius: 20,
                }}
            />
            <View style={{
                width: '80%',
                paddingHorizontal: 30,
            }}>
                <Text numberOfLines={1}>{name}</Text>
                <Headline 
                    numberOfLines={1}
                    style={{
                        fontWeight: '900',
                    }}
                >
                    ${price}
                </Headline>
            </View>
        </View>
    </TouchableOpacity>
);

export default SearchModal;
