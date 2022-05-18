import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import home from './assets/home.png';
import bolt from './assets/bolt.png';
import star from './assets/star.png';
import favorite from './assets/favorite.png';
import block from './assets/block.png';
import box from './assets/box.png';

import { Card } from 'react-native-paper';

const Utton = (props) => {
  const [action, reAction] = useState(props.color); //probably not needed...

  return (
    <TouchableOpacity style={[styles.view, , { backgroundColor: action }]} 
    onPress={() =>{
      if(action == "steelblue"){
        reAction(props.color);
      }else{
      reAction("steelblue");
      }
      alert('You have clicked' + props.text);
    }}>
      <View>
      <Image style= {styles.center} source={props.image}/>
      <Text style={styles.center}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}


//<Text>{props.text}</Text>
export default function App() {
  return (
    <View style={styles.container}>
        <View style={[styles.flex_dir,styles.center]}>
          <Utton text=' home' image = {home} color="blue"/>
          <Utton text=' bolt' image = {bolt} color="red"/>
        </View>
        <View style={[styles.flex_dir,styles.center]}>
          <Utton text=' box' image = {box} color="green"/>
          <Utton text=' favorite' image= {favorite} color= "yellow"/>
        </View>
        <View style={[styles.flex_dir,styles.center]}>
          <Utton text=' block' image = {block} color= "orange"/>
          <Utton text=' star' image= {star} color= "grey"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 96,
    width: 96,
    margin: 5,
    backgroundColor: "#abdbe3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45,
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'space-evenly',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  center:{
    alignItems: "center",
    justifyContent:"space-evenly"
  },
  flex_dir: {
    flexDirection: "row",
  }
});


