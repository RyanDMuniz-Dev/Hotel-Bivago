import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Paisagem() {
  return (
        <View style={{}}>
      <Text style={{}}>Aqui ficarão as fotos da Paisagem do Resort!</Text>
      
      <Link href="/" style={{}}>
        Voltar para Home
      </Link>
    </View>
  );
}