import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Amplify, { Auth, Hub } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import * as Font from "expo-font";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/authScreens/SignIn";
import SignUp from "./src/authScreens/SignUp";
import ConfirmSignUp from "./src/authScreens/ConfirmSignUp";
import ChangePassword from "./src/authScreens/ChangePassword";
import ForgotPassword from "./src/authScreens/ForgotPassword";
import Gender from "./src/infoScreens/Gender";
import Pronounce from "./src/infoScreens/Pronounce";
import Purpose from "./src/infoScreens/Purpose";
import Interest from "./src/infoScreens/Interest";
import FoodPref from "./src/infoScreens/FoodPref";
import MainScreen from "./src/mainScreens/NavigationScreen";
import OnboardingSlider from "./src/components/OnboardingSlider";
import Settings from "./src/mainScreens/Settings";
import EditInfo from "./src/mainScreens/EditInfo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";
import { setContext } from "apollo-link-context";

Amplify.configure(awsconfig);

const httpLink = createHttpLink({
  uri: awsconfig.aws_appsync_graphqlEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const currUser = await Auth.currentAuthenticatedUser();
    const accessToken = currUser.signInUserSession.accessToken.jwtToken;
    // console.log(accessToken);
    return {
      headers: {
        ...headers,
        authorization: accessToken ? `Bearer ${accessToken}` : "",
        "X-API-KEY": awsconfig.aws_appsync_apiKey,
      },
    };
  } catch (error) {
    console.log("Error fetching tokens:", error);
    return {
      headers: {
        ...headers,
        "X-API-KEY": awsconfig.aws_appsync_apiKey,
      },
    };
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]), //authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {
  // const [fontLoaded, setFontLoaded] = useState(false);
  const [mainScreens, showMainScreens] = useState(false);
  const [user, setUser] = useState(undefined);

  const fetchFonts = () => {
    return Font.loadAsync({
      Lexend: require("./assets/fonts/LexendDeca.ttf"),
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Poppins_Semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      Poppins_Bold: require("./assets/fonts/Poppins-Bold.ttf"),
      Poppins_Italic: require("./assets/fonts/Poppins-Italic.ttf"),
    });
  };

  useEffect(() => {
    async function getFonts() {
      await fetchFonts();
      // setFontLoaded(true);
    }
    getFonts();
  }, []);

  // if (!fontLoaded) {
  //   return (
  //     <View style={appStyles.loading}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // }

  const authenticateUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(user);
    } catch (err) {
      setUser(null);
      console.log("Error fetching tokens:", err);
    }
  };

  const updateUserAttributes = async (attributeUpdates) => {
    try {
      await Auth.updateUserAttributes(
        Auth.currentAuthenticatedUser(),
        attributeUpdates
      );
      console.log("User attributes updated successfully");
    } catch (error) {
      console.log("Error updating user attributes:", error);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        authenticateUser();
      }
    };
    Hub.listen("auth", listener);
    return () => {
      Hub.remove("auth", listener);
    };
  }, []);

  if (!mainScreens) {
    return <OnboardingSlider onDone={() => showMainScreens(true)} />;
  }

  if (user === undefined) {
    return (
      <View style={appStyles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  };

  return (
    <SafeAreaView style={appStyles.root}>
      <ApolloProvider client={client}>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            {user ? (
              <>
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name={"Settings"} component={Settings} />
                <Stack.Screen name={"EditInfo"} component={EditInfo} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
                <Stack.Screen
                  name="ForgotPassword"
                  component={ForgotPassword}
                />
                <Stack.Screen
                  name="ChangePassword"
                  component={ChangePassword}
                />
                <Stack.Screen name="Gender" component={Gender} />
                <Stack.Screen name="Pronounce" component={Pronounce} />
                <Stack.Screen name="Purpose" component={Purpose} />
                <Stack.Screen name="Interest" component={Interest} />
                <Stack.Screen name="FoodPref" component={FoodPref} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </SafeAreaView>
  );
};

const appStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
