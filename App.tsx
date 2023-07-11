import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import RootProvider from "./RootProvider";
import MainNavigator from "./src/navigation/MainNavigator";

Amplify.configure(awsconfig);

const App = () => {
  return (
    <RootProvider>
      <SafeAreaView style={styles.app}>
        <MainNavigator />
      </SafeAreaView>
    </RootProvider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
});

export default App;
