import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

//import {Final } from './assets/imagens/final-fantasy3-1.png';

import AppIntroSlider from 'react-native-app-intro-slider';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88; //O item vai ter 88% Do tamanho do SLIDER que foi obtido

const slides = [
  {
    key: '1',
    title: 'Final Fantasy 3',
    tipo: 'RPG',
    image: require('./assets/imagens/final-fantasy3-1.png')
  },
  {
    key: '2',
    title: 'Chrono trigger',
    tipo: 'RPG',
    image: require('./assets/imagens/chrono1.png')
  },
  {
    key: '3',
    title: 'Super mario RPG',
    tipo: 'RPG',
    image: require('./assets/imagens/super-mario-rpg1.png')
  }
];

export default function App() {
  const [show,setShow] = useState(false);

  function renderItemSlides({item}) {
    return(
      <View style={{width:SLIDER_WIDTH}} key={item.key}>
        <Image 
         source={item.image}
         style={{
          resizeMode: 'cover',
          height:'300px',
          width: '98%',
          marginRight: '2px',
          marginLeft:'2px' 
         }} 
         />
        <Text style={{
         paddingTop: 25,
         paddingBottom: 10,
         fontSize: 23,
         fontWeight: 'bold',
         color: 'purple',
         textAlign: 'center'
        }}>
          {item.title}
        </Text>
        <Text style={{
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          paddingHorizontal: 25,
        }}>
          Tipo: 
          <Text style={{
           fontSize: 16,
           marginLeft: '6px',
           fontWeight: 'bold',
           color: 'purple',
           }}>{item.tipo}
          </Text>
        </Text>
        <Text style={{
          paddingTop: 5,
          paddingBottom: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'start',
          paddingHorizontal: 25,
        }}>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    )
  }

  if(show) {
    return <Text>Carregando...</Text>
  }

  return (
    <View style={styles.container}>
      <AppIntroSlider 
        renderItem={renderItemSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: 'purple',
          width:30
        }}
        //Outras funcionalidades com componente App Intro Slider
        //Add nome para o botão custom
        renderNextButton={ () => <Text>Proximo</Text> }
        renderDoneButton={ () => <Text>Concluído!</Text> }
        onDone={ () => alert('Chegamos ao fim!') }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '1rem',
    backgroundColor: 'rgba(52, 52, 52, 0.8)'//'black'
  },
  cardCarouselItem: {
    width: ITEM_WIDTH
  },
  image: {
    height: 250,
    borderRadius: 8
  }
});