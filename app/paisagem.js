import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function Resort() { 
  return ( 
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}
    > 
      <View> 
        <Text style={styles.titulo}>Bem vindos ao Hotel bivago</Text> 
      </View> 
      
      <View style={{ height: 20 }}/> 
      
      <View style={styles.card}> 
        <Image 
          source={{ uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/562153980.jpg?k=4bf6161dbe25ff3da7041013f0ef8985c367242eb9f08607f3225518a4c058db&o=' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}> 
          Situado entre as montanhas da Chapada Diamantina, e perto do Rio Lençóis, o Canto das Aguas Hotel dispõe de lindos jardins, uma sauna e piscina. Este hotel ecológico apresenta uma decoração elegante e oferece Wi-Fi gratuito nas áreas comuns. Os quartos do Cantos das Águas oferecem uma decoração moderna e rústica. Além disso, dispõem de frigobar, TV de tela plana via satélite e banheiros privativos. Você pode relaxar em uma das áreas de estar situadas no jardim do hotel. Há também um bar e um restaurante no local, que serve pratos da cozinha contemporânea. 
        </Text> 
      </View> 
      
      <View style={{ height: 20 }}/> 
      
      <View style={styles.card}> 
        <Text style={styles.subtitulo}> Proximidades do hotel </Text> 
        
        <Image 
          source={{ uri: 'https://guiaviajarmelhor.com.br/wp-content/uploads/2018/12/guia-completo-chapada-diamantina-1-800x600.jpg' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Parque Nacional da Chapada Diamantina - 0 m</Text> 
        
        <Image 
          source={{ uri: 'https://bahiaemrevista.com.br/wp-content/uploads/2018/08/Praca-Santo-Antonio_Santo-Antonio-Alem-do-Carmo_Foto-Max-Haack_Agecom_1-1-1.jpg' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Praça Otaviano Alves - 350 m</Text> 
        
        <Image 
          source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/34/d3/cachoeira-com-pouca-agua.jpg?w=700&h=400&s=1' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Balneário Santo Antônio - 13 km</Text> 
        
        <View style={{ height: 20 }}/> 
        
        <Text style={styles.subtitulo}>Restaurantes e cafés</Text> 
        
        <Image 
          source={{ uri: 'https://www.guiachapadadiamantina.com.br/wp-content/uploads/2020/05/guia-chapada-diamantina-restaurante-azul-7.jpg' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Restaurante Azul - 40 m</Text> 
        
        <Image 
          source={{ uri: 'https://iysmmzngndrnbjbjucxa.supabase.co/storage/v1/object/public/place-photos/ChIJ86cpOBwHQgcRafqk_IGCaKs/0.jpg' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Restaurante Cozinha na Pedra - 150 m</Text> 
        
        <Image 
          source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a2/b4/48/burritos-y-taquitos-santa.jpg?w=900&h=500&s=1' }} 
          style={styles.imagem}
        /> 
        <Text style={styles.texto}>Restaurante Burritos y Taquitos - 200 m</Text> 
      </View> 
    </ScrollView> 
  ); 
} 

const styles = StyleSheet.create({ 
  container: {
    backgroundColor: '#744c17a9', 
  },
  contentContainer: {
    alignItems: 'center', 
    paddingVertical: 20, 
  },
  card: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  imagem: {
    width: 250, 
    height: 200, 
    borderRadius: 10, 
    marginVertical: 10, 
  },
  titulo: { 
    fontSize: 25, 
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#ffffff' 
  }, 
  texto: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#ffffff',
    marginBottom: 15,
  }, 
  subtitulo: { 
    fontSize: 22, 
    fontWeight: 'bold',
    textAlign: 'center', 
    color: '#00a2ff',
    marginTop: 15,
  } 
});
