import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import StartUp from "../screens/StartUp";
import { authentication, db } from "../firebase/firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function LossPessimist({ navigation }) {
  const [Name, setName] = useState("");
  const [totalGame, setTotalGame] = useState(0);
  const [totalLosses, setTotalLosses] = useState(0);
  //const [TotalWins, setTotalWins] = useState(0);

  const user = authentication.currentUser;
  var uid = user.uid;
  const docref = doc(db, "player", uid);

  useEffect(() => {
    getDoc(docref).then((doc) => {
      setName(doc.get("name"));
      setTotalGame(doc.get("TotalGame"));
      setTotalLosses(doc.get("TotalLosses"));
    });
    updateDoc(doc(db, "player", uid), {
      TotalGame: totalGame + 1,
      TotalLosses: totalLosses + 1,
    });
  }, []);

  //console.log("hi:" + Name);

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "powderblue",
          borderColor: "black",
          borderWidth: 3,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          borderRadius: 20,
          // position: "absolute",
          // width: 350,
          // height: 350,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#D9E8F1",
            height: 138,
            width: 340,
            top: 200,
            position: "absolute",
          }}
          opacity={0.6}
        >
          <Text style={styles.text}>
            وقعت بالمحبطين!{"\n"}لم توصل الاستبيان سليم إلى العمادة
          </Text>

          <Image
            source={require("../assets/pessimist.png")}
            style={{
              flex: 1,
              width: 70,
              height: 114,
              resizeMode: "contain",
              left: 252,
              top: 10,
              position: "absolute",
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            height: 138,
            width: 440,
            left: -30,
            top: 313,
            position: "absolute",
          }}
        >
          {/*
           */}
          <Image
            source={require("../assets/jouds.png")}
            style={{
              flex: 1,
              width: 177,
              height: 155,
              resizeMode: "contain",
              left: 22,
              top: 120,
              //bottom: 30,
              position: "absolute",
            }}
          />
          <View
            style={{
              position: "absolute",
              width: 151,
              height: 57,
              borderWidth: 1,
              borderColor: "#DAE5EB",
              borderRadius: 10,
              top: 125,
              left: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/joudicon.png")}
              style={{
                flex: 1,
                width: 44,
                height: 41,
                resizeMode: "contain",
                position: "absolute",
                left: 100,
                backgroundColor: "#D8E3E1",
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                height: 21,
                width: 141,
                top: 15,
                position: "absolute",
                fontStyle: "normal",
                right: 25,
                fontWeight: "bold",
                fontSize: 13,
                lineHeight: 24,
                textAlign: "center",
                color: "#6F97B1",
              }}
            >
              {Name}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            position: "absolute",
            width: 151,
            height: 57,
            borderRadius: 10,
            bottom: 20,
            left: 170,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ bottom: 190 }}>
            <Button
              onPress={() => navigation.navigate("StartUp")}
              title="العب مجددا!!"
              color="black"
            />
          </View>
        </View>
        {/*  */}
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    position: "absolute",
    height: 69,
    width: 242,
    position: "absolute",
    top: 40,
    textAlign: "right",
    left: -2,
    fontSize: 12,
    lineHeight: 22,
    fontWeight: "bold",
    color: "#4C5784",
    fontStyle: "normal",
    flex: 1,
  },
});
