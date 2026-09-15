import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

import { resortStyles } from '../styles/styles';

export default function ResortHome() {
  return (
    <ScrollView style={resortStyles.container} showsVerticalScrollIndicator={false}>
      
      <View style={resortStyles.imageCard}>
        <Image 
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGjQdMUMQGGe81THwpMYzh8PIvo21ydzaSjEtmgE37jxkpkB1kznoIqym&s=10' }} 
          style={resortStyles.image}
        />
        <View style={resortStyles.tag}>
          <Text style={resortStyles.tagText}>⭐ 4.9 Premium</Text>
        </View>
      </View>

      <View style={resortStyles.infoContainer}>
        <Text style={resortStyles.location}>Chapada Dimantina, Bahia</Text>
        <Text style={resortStyles.title}>Hotel Bivago</Text>
        
        <Text style={resortStyles.description}>
          Experimente o máximo conforto em meio à natureza. O nosso resort oferece piscinas aquecidas, alta gastronomia, chalés privativos e atividades exclusivas para toda a família se desconectar da rotina.
        </Text>

        <Link href="/resort" asChild>
          <TouchableOpacity style={resortStyles.button} activeOpacity={0.8}>
            <Text style={resortStyles.buttonText}>Explorar Paisagens</Text>
          </TouchableOpacity>
        </Link>
      </View>

    </ScrollView>
  );
}
