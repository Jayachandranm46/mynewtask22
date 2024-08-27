import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from "../CustomHeader";
import { useToast } from "react-native-toast-notifications";
import { useDispatch } from "react-redux";
import { StoreData } from "../store/Addtocardslice";
import imageMapping from "../common/Imagemapping";

const TrendingDeals = ({ navigation }) => {
    const width = Dimensions.get('window').width;
    const [numColumns, setNumColumns] = useState(2);
    const dispatch = useDispatch();
    const toast = useToast();

    const TrendingDeals = [
        { id: 1, name: 'Fortune Oil', image: 1, amount: 40 },
        { id: 2, name: 'Almonds', image: 2, amount: 70 },
        { id: 3, name: 'Garlic', image: 3, amount: 100 },
        { id: 4, name: 'Organic Spices', image: 4, amount: 140 },
        { id: 5, name: 'Mixed Vegetables', image: 5, amount: 65 },
        { id: 6, name: 'Roasted Peas', image: 6, amount: 110 },
    ];

    const AddToCart = (item) => {
        toast.show("Added to Cart", {
            type: "succes",
            placement: "bottom",
            duration: 4000,
            animationType: "slide",
            style: {
              backgroundColor: 'green', 
              borderRadius: 10, 
              padding: 15, 
            },
            textStyle: {
              color: '#fff', 
              fontWeight: 'bold', 
            }
          });
        dispatch(StoreData(item));
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <CustomHeader navigation={navigation} title='Trending Deals' notification={true} />

            <ScrollView style={{ flex: 1 }}>
                {/* Search Input */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <TextInput style={styles.textInput} placeholder="Search products" />
                        <View style={styles.searchButton}>
                            <Image source={require('../../assets/Search.png')} style={styles.searchIcon} />
                        </View>
                    </View>
                    <View>
                        <Image source={require('../../assets/Menu2.png')} style={styles.menuIcon} />
                    </View>
                </View>

                {/* Trending Deals List */}
                <FlatList
              data={TrendingDeals}
              numColumns={numColumns}
              keyExtractor={(item,index)=>index.toString()}
              renderItem={({item,index})=>(
                <TouchableOpacity
                style={styles.trending}
                >
                    <View style={styles.inner}>
                        <Image
                        source={item.image}
                        style={{
                            width:72,
                            height:115
                        }}
                        />
                           <TouchableOpacity
                        style={{marginLeft:10}}
                        >
                        <Icon name='heart' size={25} color='#05A845'/>
                        </TouchableOpacity>

                    </View>
                    {/* <Text>{item.name}</Text> */}
                     <View style={{
                         flex: 1, 
                         width: '100%',
                         paddingHorizontal: 10, 
                         paddingBottom: 10,
                    }}>
                        <View style={{ flexDirection: 'row',
            justifyContent: 'space-between',
                   width: '100%',
                     }}>

                    <Text style={{
                        color:'#000'
                    }}>{item.name}</Text>
                    <Text style={{
                        fontWeight:'bold',
                        color:'#000'
                    }}>RS {item.amount}</Text>
                    </View>

                    <View
                    style={{
                        display:'flex',
                        flexDirection:'row'
                    }}
                    >

                     <View>
                    
                        <View style={{ flexDirection: 'row',
            justifyContent: 'space-between',
                   width: '100%',
                     }}>
                        <View style={{
                          display:'flex',
                          flexDirection:'row'
                        }}>

                    <Text style={{
                        fontWeight:'bold',
                        color:'#000'
                    }}>259g</Text>
                    <View style={{
                          display:'flex',
                          flexDirection:'row',
                          marginLeft:10
                        }}>
                    <Star name='star' size={17} color='#FBBC05'/>
                    <Text style={{marginLeft:7,color:'#000'}}>4.2</Text>
                    </View>

                    
                    </View>
                    </View>

                        <View style={{ flexDirection: 'row',
            justifyContent: 'space-between',
                   width: '100%',
                     }}>
                        <View style={{
                          display:'flex',
                          flexDirection:'row'
                        }}>

                    <Text style={{
                        fontWeight:'bold',
                        color:'#000'
                    }}>Quantity</Text>
                    <View style={{
                          display:'flex',
                          flexDirection:'row'
                        }}>
                            <TouchableOpacity>
                        <Image source={require('.../../../assets/Arrow.png')}
                        style={{
                            width:18,
                            height:25,
                            marginLeft:10
                        }}
                        />
                    </TouchableOpacity>
                    <Text
                    style={{marginLeft:10}}
                    >1  </Text>
                    </View>

                    
                    </View>
                    </View>
                    </View>
                    <View>
                    <TouchableOpacity
                    onPress={()=>AddToCart(item)}
                    >
                        <Image source={require('.../../../assets/Add.png')}
                        style={{
                            width:28,
                            height:28,
                            marginLeft:10,
                            marginTop:10
                        }}
                        />
                    </TouchableOpacity>
                    </View>
                    </View>



                    </View>



                </TouchableOpacity>
              )}
              
              /> 

            </ScrollView>
        </SafeAreaView>
    );
}

export default TrendingDeals;

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    searchBox: {
        width: 310,
        height: 55,
        borderWidth: 1.5,
        borderColor: '#05A845',
        flexDirection: 'row',
        borderRadius: 17,
    },
    textInput: {
        width: 260,
        height: 52,
        borderRadius: 16,
        paddingLeft: 20,
        fontSize: 20,
        backgroundColor: '#FFFFFF',
    },
    searchButton: {
        width: 50,
        height: 55,
        backgroundColor: '#05A845',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
    menuIcon: {
        width: 30,
        height: 30,
    },
    trendingItem: {
        width: (Dimensions.get('window').width - 48) / 2, 
        margin: 8,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    // inner: {
    //     width: '100%',
    //     height: 132,
    //     borderWidth: 1,
    //     borderColor: '#05A845',
    //     borderRadius: 12,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 10,
    // },
    trendingImage: {
        width: 72,
        height: 115,
    },
    heartIcon: {
        marginLeft: 10,
    },
    itemDetails: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    weightRating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    quantitySection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityControl: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowImage: {
        width: 18,
        height: 25,
        marginLeft: 10,
    },
    quantityText: {
        marginLeft: 10,
    },
    addImage: {
        width: 28,
        height: 28,
        marginLeft: 10,
        marginTop: 10,
    },
    trending:{
        width:164,
        height:208,
     //    borderWidth:0.1,
        borderRadius:10,
        left:16,
        marginEnd:20,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        backgroundColor:'#FFFFFF',
     },
     inner:{
        width:145.38,
        height:132,
        borderWidth:1,
        borderColor:'#05A845',
        borderRadius:12,
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        justifyContent:'center',
        // padding:10
        paddingLeft:12,
        paddingTop:10,
        position:'relative',
        marginTop:10
    },
});
