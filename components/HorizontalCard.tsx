import { Image, Pressable } from 'react-native';
import { Text } from '@/components/Themed';
import React from 'react';

export default function HorizontalCard({ image, title, onPress }: any) {
  return (
    <Pressable onPress={onPress} className="flex flex-col items-center rounded-lg mx-2">
      <Image
        source={{ uri: image }}
        className="w-48 h-64 rounded-lg"
        resizeMode="cover"
      />
      <Text className="text-white text-md mt-2 w-48" fontWeight="light" numberOfLines={1} ellipsizeMode="tail">
        {title}
      </Text>
    </Pressable>
  )
} 