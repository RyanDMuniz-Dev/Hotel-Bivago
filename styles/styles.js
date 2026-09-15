// styles.js
import { StyleSheet } from 'react-native';

export const resortStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  imageCard: {
    position: 'relative',
    margin: 16,
    borderRadius: 24,
    backgroundColor: '#FFF',
    overflow: 'hidden', // Evita que a imagem saia das bordas arredondadas
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  image: {
    width: '100%', // Preenche a largura total do card responsivamente
    height: 250,   // Ajuste a altura desejada
    resizeMode: 'cover',
  },
  tag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#E67E22',
  },
  infoContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  location: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    color: '#7F8C8D',
    fontWeight: '600',
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: '#576574',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#10ac84',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});