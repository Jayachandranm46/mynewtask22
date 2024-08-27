import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, Dimensions, ImageBackground, FlatList, ScrollView, TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import Arrow from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from "react-redux";
import { StoreData } from "../store/Addtocardslice";
import { useToast } from "react-native-toast-notifications";

const Home = ({ navigation }) => {
    const width = Dimensions.get('window').width;
    const [numColumns, setNumColumns] = useState(2);
    const dispatch = useDispatch();
    const toast = useToast();

    const Categories = [
        {
            name: 'Every Day Fresh And Clean With Your Products',
            image: require('../../assets/banner-1.png')
        },
        {
            name: 'The Best Organic Products Online',
            image: require('../../assets/banner-2.png')
        },
    ];

    const TrendingDeals = [
        {
            name: 'Fortune Oil',
            image: require('../../assets/fortune.png')
        },
        {
            name: 'Almonds',
            image: require('../../assets/Almonds.png')
        },
        {
            name: 'Garlic',
            image: require('../../assets/Garlic.png')
        },
        {
            name: 'Organic Spices',
            image: require('../../assets/OrganicSpices.png')
        },
    ];

    const cate = [
        {
            name: 'Vegetable',
            image: require('../../assets/Vegetable.png')
        },
        {
            name: 'Spinach',
            image: require('../../assets/Spinach.png')
        },
        {
            name: 'Grains',
            image: require('../../assets/Grains.png')
        },
        {
            name: 'Masala',
            image: require('../../assets/Masala.png')
        },
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
        
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>
                        <Text style={styles.headerText}>Angel Christinal</Text>
                        <View style={styles.location}>
                            <Image
                                source={require('../../assets/location.png')}
                                style={styles.locationImage}
                            />
                            <Text style={styles.locationText}>Peelamedu</Text>
                        </View>
                    </View>
                    <View style={styles.headerRight}>
                        <Image
                            source={require('../../assets/Notification.png')}
                            style={styles.notificationImage}
                        />
                        <Image
                            source={require('../../assets/Photo.png')}
                            style={styles.photoImage}
                        />
                    </View>
                </View>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBox}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="search products"
                        />
                        <View style={styles.searchButton}>
                            <Image
                                source={require('../../assets/Search.png')}
                                style={styles.searchIcon}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel
                        loop
                        width={width}
                        height={width / 2}
                        autoPlay
                        data={Categories}
                        scrollAnimationDuration={1000}
                        renderItem={({ item }) => (
                            <View style={styles.carouselItem}>
                                <View style={styles.carouselImageContainer}>
                                    <ImageBackground
                                        source={item.image}
                                        style={styles.imageBackground}
                                        resizeMode="cover"
                                    >
                                        <View style={styles.overlay}>
                                            <Text style={styles.carouselText}>
                                                {item.name}
                                            </Text>
                                            <TouchableOpacity style={styles.shopButton}>
                                                <Text style={styles.shopButtonText}>
                                                    Shop now
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.categoriesContainer}>
                    <View style={styles.categoriesHeader}>
                        <Text style={styles.categoriesTitle}>Explore By Categories</Text>
                        <Image
                            source={require('../../assets/Arrow1.png')}
                            style={styles.arrowImage}
                        />
                    </View>
                    <FlatList
                        data={cate}
                        horizontal
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.categoryItem}>
                                <Image
                                    source={item.image}
                                    style={styles.categoryImage}
                                />
                                <Text style={styles.categoryText}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>
                <View style={styles.trendingDealsContainer}>
                    <View style={styles.trendingDealsHeader}>
                        <Text style={styles.trendingDealsTitle}>Trending Deals</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('TrendingDeals')}
                        >
                            <Arrow name='arrowright' size={36} color='#05A845' style={styles.arrowIcon} />
                        </TouchableOpacity>
                    </View>
                    </View>
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
                        color:'#000'
                    }}>259g</Text>
                    <View style={{
                          display:'flex',
                          flexDirection:'row',
                          marginLeft:10
                        }}>
                    <Star name='star' size={17} color='#FBBC05'/>
                    <Text style={{marginLeft:7}}>4.2</Text>
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
                    style={{marginLeft:10,color:'#000'}}
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
    )
}

export default Home;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    headerLeft: {
        justifyContent: 'center',
        marginLeft: 17,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        flexDirection: 'row',
        marginTop: 10,
    },
    locationImage: {
        width: 16,
        height: 23,
    },
    locationText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationImage: {
        width: 28,
        height: 28,
        marginRight: 20,
    },
    photoImage: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    searchContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBox: {
        width: 352,
        height: 55,
        borderWidth: 1.5,
        borderColor: '#05A845',
        flexDirection: 'row',
        borderRadius: 17,
    },
    textInput: {
        width: 300,
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
    carouselContainer: {
        flex: 1,
        marginTop: 10,
    },
    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselImageContainer: {
        width: '95%',
        height: '95%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: 20,
    },
    carouselText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    shopButton: {
        width: 100,
        height: 40,
        backgroundColor: '#05A845',
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    categoriesContainer: {
        marginTop: 20,
    },
    categoriesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoriesTitle: {
        fontSize: 20,
        marginLeft: 20,
        color:'#000'
    },
    arrowImage: {
        width: 28,
        height: 20,
        marginRight: 20,
    },
    categoryItem: {
        marginEnd: 9,
        marginLeft: 10,
    },
    categoryImage: {
        width: 90,
        height: 86,
    },
    categoryText: {
        fontSize: 17,
        fontWeight: 'bold',
        color:'#000',
    },
    trendingDealsContainer: {
        marginTop: 10,
    },
    trendingDealsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trendingDealsTitle: {
        fontSize: 20,
        marginLeft: 20,
        color:'#000',
    },
    arrowIcon: {
        width: 48,
    },
    trendingItem: {
        width: 164,
        height: 208,
        borderRadius: 10,
        marginEnd: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#FFFFFF',
    },
    trendingInner: {
        width: 145.38,
        height: 132,
        borderWidth: 1,
        borderColor: '#05A845',
        borderRadius: 12,
        paddingLeft: 12,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trendingImage: {
        width: 72,
        height: 115,
    },
    heartIcon: {
        marginLeft: 10,
    },
    trendingDetails: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    trendingPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    trendingQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    quantityRow: {
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    ratingText: {
        marginLeft: 7,
    },
    trendingQuantityRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    quantitySelector: {
        flexDirection: 'row',
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
    backgroundColor:'#FFFFFF'
 },
});
