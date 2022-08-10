import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView className="h-full bg-white">
            <View className="p-5">
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                />
            </View>
            {/* <Text>Ọubér [ UBER ] Clone</Text> */}
        </SafeAreaView>
    )
}

export default HomeScreen