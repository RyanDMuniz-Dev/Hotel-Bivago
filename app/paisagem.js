import { View, Text, Image, StyleSheet } from 'react-native';

export default function Resort() {
  return (
      <View style={{alignItems:'center', backgroundColor: '#744c17a9'}}>
        <View>
          <Text style = {styles.titulo}>Bem vindos ao Hotel bivago</Text>
        </View>
        <View style={{ height: 20 }}/> //espaço de uma linha
        <View>
          <Image source={{ uri: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/562153980.jpg?k=4bf6161dbe25ff3da7041013f0ef8985c367242eb9f08607f3225518a4c058db&o=', 
          width:200, height: 300}}></Image>
            <Text style = {styles.texto}>
                Situado entre as montanhas da Chapada Diamantina, e perto do Rio Lençóis, o Canto das Aguas Hotel dispõe de lindos jardins, uma sauna e piscina. Este hotel ecológico apresenta uma decoração elegante e oferece Wi-Fi gratuito nas áreas comuns.

            Os quartos do Cantos das Águas oferecem uma decoração moderna e rústica. Além disso, dispõem de frigobar, TV de tela plana via satélite e banheiros privativos.

            Você pode relaxar em uma das áreas de estar situadas no jardim do hotel. Há também um bar e um restaurante no local, que serve pratos da cozinha contemporânea.
            </Text>
        </View>
        <View style={{ height: 20 }}/> //espaço de uma linha
        <View>
            <Text style = {styles.subtitulo}>
                Proximidades do hotel
            </Text>

            <Image source={{ uri: 'https://guiaviajarmelhor.com.br/wp-content/uploads/2018/12/guia-completo-chapada-diamantina-1-800x600.jpg', 
          width:200, height: 300}}>
            </Image>
            <Text style= {styles.texto}>Parque Nacional da Chapada Diamantina - 0 m{'\n'}</Text>

           <Image source={{ uri: 'https://bahiaemrevista.com.br/wp-content/uploads/2018/08/Praca-Santo-Antonio_Santo-Antonio-Alem-do-Carmo_Foto-Max-Haack_Agecom_1-1-1.jpg', 
          width:200, height: 300}}>
            </Image> 
            <Text style= {styles.texto}>Praça Otaviano Alves - 350 m{'\n'}</Text>

            <Image source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/49/34/d3/cachoeira-com-pouca-agua.jpg?w=700&h=400&s=1', 
          width:200, height: 300}}>
            </Image> 
            <Text style= {styles.texto}>Balneário Santo Antônio - 13 km{'\n'}</Text>

            <View style={{ height: 20 }}/> //espaço de uma linha

            <Text style= {styles.subtitulo}>Restaurantes e cafés{'\n'} </Text>
            <Image source={{ uri: 'https://www.guiachapadadiamantina.com.br/wp-content/uploads/2020/05/guia-chapada-diamantina-restaurante-azul-7.jpg', 
          width:200, height: 300}}>
            </Image>
            <Text style= {styles.texto}>Restaurante Azul - 40 m{'\n'} </Text>

              <Image source={{ uri: 'https://iysmmzngndrnbjbjucxa.supabase.co/storage/v1/object/public/place-photos/ChIJ86cpOBwHQgcRafqk_IGCaKs/0.jpg', 
          width:200, height: 300}}>
            </Image>
            <Text style= {styles.texto}>Restaurante Cozinha na Pedra - 150 m{'\n'} </Text>

            <Image source={{ uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a2/b4/48/burritos-y-taquitos-santa.jpg?w=900&h=500&s=1', 
          width:200, height: 300}}>
            </Image>
            <Text style= {styles.texto}>Restaurante Burritos y Taquitos - 200 m{'\n'}</Text>
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
    texto:{
      fontSize: 18,
      textAlign: 'center',
      color: '#ffffffff'
    },
    subtitulo:{
        fontSize: 22,
        textAlign:'center',
        color: '#00a2ff'
    }
    //tem que criar algo pra mostrar os textos embaixo das imagens que seria a descrição do que é cada imagem
  })