import React from 'react';
import { Image, ScrollView, Pressable } from 'react-native';
import { View, Text } from '@/components/Themed';
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="p-4">
          {/* Profile Info */}
          <View className="items-center mb-6 mt-5">
            <Image
              source={{ uri: 'https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-1/484184623_593298453698808_6717067791139619911_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGli55BOTU76_OrX82QJUvR95YUAhsHMSn3lhQCGwcxKaC0fwnVYEPn2AOp8r7lIST1VNOGeBkQzFq74Im0g5QC&_nc_ohc=oSpVhXvXrrwQ7kNvgEpHAQ8&_nc_oc=AdjWVmzbb6qgLwW-5y7-CURITJZFt4m9UCr3se514Bga27895l25OwUAsnz5VTxPkRU&_nc_zt=24&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=Df3R0I-i2kzo4yHoI2HOQA&oh=00_AYEafa1PCliJQzdQvHzeny6oRbxqOoWY4G2xtCeVIZkPDw&oe=67DED8D3' }}
              className="w-20 h-20 rounded-full"
            />
            <Text className="text-3xl mt-5" fontWeight='medium'>Thanaporn Sawatronsakul</Text>
            <Text className="text-blue-400 text-base">ดูโปรไฟล์ Marketplace</Text>
          </View>

          {/* Buttons */}
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รายการที่บันทึกไว้')}>
              <FontAwesome name="heart" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">รายการที่บันทึกไว้</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: กล่องข้อความ')}>
              <FontAwesome name="envelope" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">กล่องข้อความ</Text>
            </Pressable>
          </View>
          <View className="flex-row justify-around mb-6">
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: รีวิว')}>
              <FontAwesome name="star" size={24} className='dark:!text-white'   />
              <Text className="mt-2 text-center">รีวิว</Text>
            </Pressable>
            <Pressable className="items-center p-4 rounded-lg w-5/12 border border-gray-100" android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }} onPress={() => console.log('Pressed: ดูล่าสุด')}>
              <FontAwesome name="clock-o" size={24} className='dark:!text-white' />
              <Text className=" mt-2 text-center">ดูล่าสุด</Text>
            </Pressable>
          </View>

          {/* Sections */}
          <Section title="การขาย">
            <SectionItem icon="list" text="รายการสินค้าของคุณ" />
            <SectionItem icon="bolt" text="การดำเนินการด่วน" />
            <SectionItem icon="users" text="ผู้ติดตามบน Marketplace" />
            <SectionItem icon="line-chart" text="กิจกรรมการขายทั้งหมด" />
          </Section>

          <Section title="การตั้งค่า">
            <SectionItem icon="cog" text="กำลังติดตาม" />
          </Section>

          <Section title="บัญชี">
            <SectionItem icon="map-marker" text="ตำแหน่ง" />
            <SectionItem icon="lock" text="ความปลอดภัย" />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View className="mb-6">
    <Text className="text-lg text-gray-100" fontWeight='medium'>{title}</Text>
    {children}
  </View>
);

const SectionItem = ({ icon, text }: { icon: string, text: string }) => (
  <Pressable
    className="flex-row items-center mb-4 p-2 rounded-lg"
    onPress={() => console.log(`Pressed: ${text}`)}
    android_ripple={{ color: 'rgba(104, 104, 104, 0.3)' }}
  >
    <FontAwesome name={icon as any} size={24} className="mr-4 dark:!text-white" />
    <Text className="text-base">{text}</Text>
  </Pressable>
);