import React, { useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../CustomHeader";
import { useSelector, useDispatch } from "react-redux";
import imageMapping from "../common/Imagemapping";
import { CheckoutData } from "../store/chekoutpage";

const AddtoCard = ({ navigation }) => {
    const data = useSelector((state) => state.Addfavorite.AddtoCardDate);
    const dispatch = useDispatch();
    const [selectedItems, setSelectedItems] = useState([]);
    const [quantities, setQuantities] = useState(
        data.reduce((acc, item) => {
            acc[item.id] = 1; 
            return acc;
        }, {})
    );

    const handleSelectItem = (item) => {
        const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);

        if (isSelected) {
            setSelectedItems(prevItems => prevItems.filter(selectedItem => selectedItem.id !== item.id));
        } else {
            setSelectedItems(prevItems => [...prevItems, item]);
        }
    };

    const handleQuantityChange = (item, change) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.max(1, (prevQuantities[item.id] || 1) + change);
            return {
                ...prevQuantities,
                [item.id]: newQuantity,
            };
        });
    };

    const Checkoutpage = () => {
        const checkoutData = selectedItems.map(item => {
            const quantity = quantities[item.id] || 1;
            const totalAmount = item.amount * quantity; 

            return {
                ...item,
                quantity,
                totalAmount
            };
        });
        dispatch(CheckoutData(checkoutData));
        navigation.navigate('CheckoutScreen');
    };

    return (
        <View style={styles.container}>
            <CustomHeader
                title={'My Cart'}
                notification={true}
                notificationName='delete'
                navigation={navigation}
            />

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {data.length > 0 ? (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            const isSelected = selectedItems.some(selectedItem => selectedItem.id === item.id);
                            const quantity = quantities[item.id] || 1;

                            return (
                                <TouchableOpacity
                                    onPress={() => handleSelectItem(item)}
                                    style={[
                                        styles.itemContainer,
                                        { backgroundColor: isSelected ? '#D3F9D8' : '#F6FFFA' }
                                    ]}
                                >
                                    <View style={styles.itemId}>
                                        <Text style={styles.font}>{item.id}</Text>
                                    </View>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={imageMapping[item.image]}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View style={styles.itemDetails}>
                                        <Text style={styles.font}>{item.name}</Text>
                                        <Text style={styles.font}>View product details</Text>
                                        <View style={styles.quantityContainer}>
                                            <TouchableOpacity onPress={() => handleQuantityChange(item, 1)}>
                                                <Image
                                                    source={require('../../assets/plus.png')}
                                                    style={styles.icon}
                                                />
                                            </TouchableOpacity>
                                            <Text style={[styles.font, styles.quantity]}>{quantity}</Text>
                                            <TouchableOpacity onPress={() => handleQuantityChange(item, -1)}>
                                                <Image
                                                    source={require('../../assets/min.png')}
                                                    style={[styles.icon, styles.marginLeft]}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={styles.itemPrice}>
                                        <Text style={styles.font}>Rs {item.amount * quantity}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                ) : (
                    <View style={styles.noDataContainer}>
                        <Text style={styles.noDataText}>No data available</Text>
                    </View>
                )}
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Bottom')}>
                    <Text style={styles.continueText}>Continue Shopping</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.checkoutButton]} onPress={() => Checkoutpage()}>
                    <Text style={styles.checkoutText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    font: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#000'
    },
    itemContainer: {
        width: '100%',
        height: 140,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    itemId: {
        marginLeft: 10,
    },
    imageContainer: {
        marginLeft: 17,
        width: 86,
        height: 83,
        overflow: 'hidden',
        borderRadius: 20,
    },
    image: {
        width: 73,
        height: 115,
        borderRadius: 20,
    },
    itemDetails: {
        marginLeft: 20,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 26,
    },
    quantity: {
        marginLeft: 10,
    },
    marginLeft: {
        marginLeft: 10,
    },
    itemPrice: {
        marginLeft: 18,
    },
    noDataContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%',
    },
    noDataText: {
        fontSize: 50,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20, // Ensure there is space at the bottom
    },
    continueButton: {
        width: 343,
        height: 43,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#05A845',
        marginBottom: 10, 
    },
    continueText: {
        fontSize: 16,
        color: '#05A845',
        fontWeight: 'bold',
    },
    checkoutButton: {
        width: 343,
        height: 43,
        // borderWidth: 1,
        borderRadius: 16,
        backgroundColor: '#05A845',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkoutText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default AddtoCard;

