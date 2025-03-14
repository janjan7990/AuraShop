import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaFrameContext } from 'react-native-safe-area-context'

export default function TabSetting() {
  return (
    <SafeAreaView style={{flex: 1}} >
        <View style={{flex:1, justifyContent: "center",alignItems: "center"}}>
            <Text>setting</Text>
        </View>
    </SafeAreaView>
  );
}

