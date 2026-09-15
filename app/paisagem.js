import { View, Text, Image, StyleSheet } from 'react-native';

export default function Resort() {
  return (
      <View style={{alignItems:'center', backgroundColor: '#744c17a9'}}>
        <View>
          <Text style = {styles.titulo}>Bem vindos ao Hotel bivago</Text>
        </View>
        <View>
            <Text style = {styles.texto1}>Situado entre as montanhas da Chapada Diamantina, e perto do Rio Lençóis, o Canto das Aguas Hotel dispõe de lindos jardins, uma sauna e piscina. Este hotel ecológico apresenta uma decoração elegante e oferece Wi-Fi gratuito nas áreas comuns.

            Os quartos do Cantos das Águas oferecem uma decoração moderna e rústica. Além disso, dispõem de frigobar, TV de tela plana via satélite e banheiros privativos.

            Você pode relaxar em uma das áreas de estar situadas no jardim do hotel. Há também um bar e um restaurante no local, que serve pratos da cozinha contemporânea.
            
            Parque Nacional da Chapada Diamantina
            0 m
            Praça Otaviano Alves
            350 m
            Balneário Santo Antônio
            13 km

            Restaurantes e cafés

            RestauranteAzul
            40 m
            RestauranteCozinha na Pedra
            150 m
            RestauranteBurritos y Taquitos
            200 m
            </Text>
        </View>    
      </View>  
  );
}
const styles = StyleSheet.create({
    titulo:{
      fontSize: 25,
      textAlign: 'center',
      color: '#ffffffff'
    },
    texto1:{
      fontSize: 20,
      textAlign: 'center',
      color: '#ffffffff'
    }
  })