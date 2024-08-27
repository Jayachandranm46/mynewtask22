import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';
import CustomHeader from '../CustomHeader';
import {useSelector} from 'react-redux';
import imageMapping from '../common/Imagemapping';
import BottomSheet, {
  useBottomSheet,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';

const CheckoutScreen = ({navigation}) => {

  const data = useSelector(state => state.Chekout.checkoutdata);
  console.log('date--jayachandra-->',data)
  const bottomSheetRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {}),
  );
  const [bottomsheetopen, setBottomsheetopen] = useState(false);

  const calculateTotalAmount = () => {
    return selectedItems.reduce((total, item) => {
      const quantity = quantities[item.id] || 1;
      return total + item.totalAmount * quantity;
    }, 0);
  };

  const handleSelectItem = item => {
    const isSelected = selectedItems.some(
      selectedItem => selectedItem.id === item.id,
    );

    if (isSelected) {
      setSelectedItems(prevItems =>
        prevItems.filter(selectedItem => selectedItem.id !== item.id),
      );
    } else {
      setSelectedItems(prevItems => [...prevItems, item]);
    }

    setBottomsheetopen(true);
    bottomSheetRef.current?.expand();
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

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={style.container}>
      <CustomHeader
        title={'Checkout'}
        notificationName="Checkout"
        navigation={navigation}
      />
      <ScrollView contentContainerStyle={style.scrollViewContent}>
        <View style={{flex: 1}}>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
              const isSelected = selectedItems.some(
                selectedItem => selectedItem.id === item.id,
              );
              const quantity = quantities[item.id] || 1;

              return (
                <TouchableOpacity
                  onPress={() => handleSelectItem(item)}
                  style={[
                    style.itemContainer,
                    {backgroundColor: isSelected ? '#D3F9D8' : '#F6FFFA'},
                  ]}>
                  <View style={style.itemId}>
                    <Text style={style.font}>{item.id}</Text>
                  </View>
                  <View style={style.imageContainer}>
                    <Image
                      source={imageMapping[item.image]}
                      style={style.image}
                      resizeMode='cover'
                    />
                  </View>
                  <View style={style.itemDetails}>
                    <Text style={style.font}>{item.name}    250 G</Text>
                    <View style={style.quantityContainer}>
                      <Text style={[style.font, {fontSize:23}]}>
                        1 X
                      </Text>
                      <Text style={[style.font,{marginLeft:7,fontSize:22}]}>
                        25
                      </Text>
                    </View>
                  </View>
                  <View style={style.itemPrice}>
                    <Text style={[style.font,{color:'#05A845'}]}>Rs {item.totalAmount}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          {bottomsheetopen ? (
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={['40%', '1%', '45%']}
              onChange={handleSheetChanges}
              enablePanDownToClose
              style={style.bottomSheet}
              handleStyle={{
                backgroundColor: '#F6FFFA',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRightWidth: 1,
                borderColor: '#05A845',
              }}
              handleIndicatorStyle={{backgroundColor: 'black', width: 40}}>
              <BottomSheetView style={style.bottomslider}>
                <View style={style.contentWrapper}>
                  <View style={style.row}>
                    <Text style={[style.font,{fontSize:18}]}>Sub Total</Text>
                    <View style={{marginLeft:40}}>
                      <Icon name='more-vertical' size={20} color='#05A845' />
                    </View>
                    <Text style={[style.font,{fontSize:20,color:'#05A845'}]}>
                      Rs {calculateTotalAmount()}
                    </Text>
                  </View>
                  <View style={style.row}>
                    <Text style={style.font}>Shipping Cost</Text>
                    <View style={{marginRight:10}}>
                      <Icon name='more-vertical' size={20} color='#05A845'/>
                    </View>
                    <Text style={[style.font,{fontSize:20,color:'#05A845'}]}>200</Text>
                  </View>
                  <View style={style.row}>
                    <Text style={[style.font,{fontSize:20}]}>Estimating Tax</Text>
                    <View style={{marginRight:30}}>
                      <Icon name='more-vertical' size={20} color='#05A845'/>
                    </View>
                    <Text style={[style.font,{fontSize:20,color:'#05A845'}]}>200</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 20,
                    }}>
                    <TouchableOpacity
                      style={[style.loginbtn, {backgroundColor: '#05A845'}]}
                      
                      onPress={()=>navigation.navigate('Complete')}>
                      <Text style={[style.logintxt, {color: '#FFFFFF'}]}>
                        Proceed
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </BottomSheetView>
            </BottomSheet>
          ) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default CheckoutScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    width: '100%',
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'space-between',
    padding:15
  },
  itemId: {
    marginLeft: 10,
  },
  font: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
  itemPrice: {
    marginLeft: 18,
  },
  icon: {
    width: 15,
    height: 15,
  },
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemDetails: {
    marginLeft: 20,
  },
  imageContainer: {
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width:72,
    height:115
  },
  loginbtn: {
    width: '100%',
    height: 43,
    borderWidth: 1,
    marginTop: 9,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#05A845',
  },
  bottomslider: {
    flex: 1,
    backgroundColor: '#F6FFFA',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#F6FFFA',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    padding: 15,
  },
  bottomSheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10, 
  },
});
