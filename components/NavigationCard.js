import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLAY_KEY} from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigationCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw `bg-white flex-1`}>
      <Text style={tw `text-center py-5 text-xl`}>Good Morning,ELTEGANI</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
          styles={toInputBoxStyles}
          minLength={2}
          fetchDetails={true}
          returnKeytype={"search"}
          query={{
            key:GOOGLE_PLAY_KEY,
            language:'en'
           }}
           onPress={(data,details=null)=>{
            dispatch(setDestination({
              location:details.geometry.location,
              description:data.description
            })
            );
            navigation.navigate("RideOptionsCard")
           }}
           enablePoweredByContainer={false}
           placeholder='Where to?'
           nearbyPlacesAPI='GooglePlacesSearch'
           debounce={400}
          />
        </View>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    paddingTop:20,
    flex:0
  },
  textInput:{
    backgroundColor:"#DDDDDF",
    borderRadius:0,
    fontSize:18
  },
  textInputContainer:{
    paddingHorizontal:20,
    paddingBottom:0
  }
})