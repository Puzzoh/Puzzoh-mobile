import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import styles, { colors } from "../styles/index";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import FontAwesome from "@expo/vector-icons/Ionicons";
import DateTimePicker from '@react-native-community/datetimepicker';
const windowWidth = Dimensions.get("window").width;

export default function SignUp() {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: "",
    firstName: '',
    lastName: '',
  });

  type RootStackParamList = {
    ConfirmSignUp: { username: string };
    SignIn: undefined;
  };
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const onSignUpPressed = async () => {
    try {
      await Auth.signUp({
        username: state.username,
        password: state.password,
        attributes: {
          email: state.email,
          name: state.username,
        },
      });
      navigation.navigate('ConfirmSignUp', { username: state.username });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShow(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={screenStyles.container1}>
        <Text style={styles.heading1}>Sign Up</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="John"
              value={state.firstName}
              onChangeText={(text) => setState({ ...state, firstName: text })}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={state.lastName}
              onChangeText={(text) => setState({ ...state, lastName: text })}
            />
          </View>
        </View>
        <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>Birthday</Text>
        <Button onPress={showMode} title="Choose your birthday" />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={{ backgroundColor: 'orange' }}
          />
        )}
        <Text>
          Selected Date: {date.toLocaleDateString()}
        </Text>
        <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="John123"
          value={state.username}
          onChangeText={(text) => setState({ ...state, username: text })}
        />
        <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="john@example.com"
          value={state.email}
          onChangeText={(text) => setState({ ...state, email: text })}
        />
        <Text style={[styles.heading3, { marginVertical: 10, fontSize: 20 }]}>
          Create a password
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setState({ ...state, password: text })}
            secureTextEntry={true}
            value={state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            onChangeText={(text) =>
              setState({ ...state, confirmedPassword: text })
            }
            secureTextEntry={true}
            value={state.confirmedPassword}
          />
        </View>
        <TouchableOpacity style={styles.spanButton} onPress={onSignUpPressed}>
          <Text style={styles.chosenText}>Register</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 50, flexWrap: 'wrap' }}>
          <Text style={styles.bodyText}>Already have an account?</Text>
          <TouchableOpacity onPress={onSignInPress}>
            <Text style={styles.highlightText}> Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.bgText}>or continue with</Text>
        <View style={screenStyles.socialLogin}>
          <FontAwesome
            name="ios-logo-facebook"
            size={48}
            color={colors.primary}
          />
          <FontAwesome
            name="ios-logo-apple"
            size={48}
            color={colors.primary}
            style={{ marginHorizontal: 20 }}
          />
          <FontAwesome
            name="ios-logo-google"
            size={48}
            color={colors.primary}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const screenStyles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    width: windowWidth,
    padding: 20,
  },
  socialLogin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 50,
  },
});

const parastyles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    margin: 10,
  },
  heading3: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
});