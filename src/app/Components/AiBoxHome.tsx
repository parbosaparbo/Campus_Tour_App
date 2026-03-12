import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AiBoxHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.outerbox}>
      <View style={styles.innerbox}>
        <View style={styles.topbox}>
          <View style={styles.robotbox}>
            <FontAwesome5 size={28} name="robot" color="white" />
          </View>
          <View style={styles.robotinfo}>
            <Text style={styles.aitext1}>AI Assistent</Text>
            <Text style={styles.aitext2}>Always ready to help</Text>
          </View>
        </View>
        {/* bottom box start here */}
        <View style={styles.bottombox}>
          <View style={styles.infoarea}>
            <Text style={styles.introtext1}>Welcome to Campus!</Text>
            <Text style={styles.introtext2}>
              Explore the campus with AI-powered guidance and discover amazing
              places.{" "}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate("")// map route to be added
              //  Alert.alert("clicked you")
            }
          >
            <Text style={styles.buttontext}>
              {" "}
              <AntDesign size={15} name="wechat" color="#183062ff" /> Start AI
              Toour
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  outerbox: {
    width: "100%",
    marginBottom: "5%",
  },
  innerbox: {
    width: "90%",
    borderRadius: 20,
    //backgroundColor: '#9754d9',
    backgroundColor: "#183062ff",
    marginLeft: "5%",
  },

  topbox: {
    height: 50,
    width: "90%",
    // backgroundColor:'red',
    marginLeft: "5%",
    marginTop: "5%",
    flex: 1,
    flexDirection: "row",
  },
  robotbox: {
    height: 50,
    width: 50,
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(19, 68, 173)",
    borderRadius: 50,
  },
  robotinfo: {
    height: 50,
    width: "70%",
    marginLeft: 10,
    gap: 3,
    marginTop: 5, // need to change
  },
  aitext1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  aitext2: {
    fontSize: 9,
    fontWeight: 300,
    color: "white",
  },

  // bottom box
  bottombox: {
    width: "90%",
    marginLeft: "5%",
    marginTop: "5%",
  },
  introtext1: {
    fontSize: 28,
    fontWeight: 700,
    color: "white",
  },
  introtext2: {
    fontSize: 11,
    color: "white",
  },
  infoarea: {
    width: "100%",
    //backgroundColor:'red',
    gap: 4,
  },

  button: {
    height: 40,
    width: "100%",
    marginTop: "5%",
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: "5%",
  },
  buttontext: {
    color: "#183062ff",
    fontWeight: "bold",
    paddingLeft: "2%",
    fontSize: 11,
  },
});

export default AiBoxHome;
