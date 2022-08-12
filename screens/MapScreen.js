import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View className=" max-h-[50%] flex-shrink">
                <Map />
            </View>
            <View className="h-1/2" onPress={Keyboard.dismiss}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </KeyboardAvoidingView>
    )
}

export default MapScreen