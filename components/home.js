// components/home.js

import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../services/firebase";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      userId: "",
    };
  }

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Signin");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    this.state = {
      userId: firebase.auth().currentUser.uid,
      userName: firebase.auth().currentUser.displayName,
    };
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome {this.state.userName}, Good Morning!
        </Text>

        <Button color="#008080" title="Logout" onPress={() => this.signOut()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#aaa",
  },
  text: {
    fontSize: 20,
    marginBottom: 22,
  },
});
