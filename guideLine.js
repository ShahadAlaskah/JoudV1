import React, { Component, useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    Button,
    ImageBackground,
    Image,
    Alert,
    Pressable,
  } from "react-native";
  import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
  import FlashMessage from "react-native-flash-message";
  import { showMessage, hideMessage } from "react-native-flash-message";
  import Board from "../screens/board";
  import LossPessimist from "../screens/lossPessimist";
  import LossTape from "../screens/lossTape";
  import Modal from "react-native-modal";
  import { db } from "../firebase/firebase-config";
  import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
  import Win from "./win";

export default function GuideLine({ navigation }) {
    return( 
    <View style={{flex:1,backgroundColor:'powderblue'}}>
    <View style={{flex:1}}>
    <Pressable
          style={styles.buttonp}
          onPress={() => {
            navigation.navigate("StartUp");
          }}
        ><Text styles={styles.text}> Pre </Text>
        </Pressable>
        <Pressable
          style={styles.buttonNex}
          onPress={() => {
            navigation.navigate("SinglePlayerMode");
          }}
        >
       <Text styles={styles.text}> Nex </Text>
        </Pressable>
    </View>
    </View> 
    );
  }

  const styles = StyleSheet.create({
    
    buttonp: {
      width: 102,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 4,
      backgroundColor: "#DAE5EB", position:'absolute',flex:1,top:650,left:30,
    },
    buttonNex: {
        width: 102,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        backgroundColor: "#DAE5EB", position:'absolute',flex:1,top:650,right:30,
      },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "#5c879c",
    },
  });
  