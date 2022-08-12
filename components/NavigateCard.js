import { View, Text, SafeAreaView, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { setDestination } from '../slices/navSlice';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView className="bg-white flex-1">
            <Text className="text-center py-5 text-xl">Good Monring, studio_xlnce</Text>

            <View className="flex-shrink flex-grow border-t border-gray-200">
                <View>
                    <GooglePlacesAutocomplete
                        placeholder="Where To?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        minLength={2}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en',
                        }}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description,
                                }),
                            );
                                
                            navigation.navigate("RideOptionsCard");
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debounce={400}
                        />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#dddddf",
        borderRadius: 0,
        fontSize: 12,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});