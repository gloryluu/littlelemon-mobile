import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {validateEmail} from '../utils';

function SubscribeScreen({navigation}) {
  const [email, setEmail] = useState('');

  function isEmailValid(str) {
    return str.trim().length && validateEmail(str);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardDismissMode="on-drag">
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={require('../assets/little-lemon-logo-grey.png')}
          />
          <Text style={styles.text}>
            Subscribe to our newsletter for our latest delicious recipes!
          </Text>
        </View>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder={'Type your email'}
          keyboardType={'email-address'}
        />
        <TouchableHighlight
          style={[
            styles.button,
            isEmailValid(email)
              ? {backgroundColor: '#007300', borderColor: '#007300'}
              : {backgroundColor: 'grey', borderColor: 'grey'},
          ]}
          disabled={!isEmailValid(email)}
          onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
          underlayColor="#00730050">
          <Text style={styles.buttonText}>Subscribe</Text>
        </TouchableHighlight>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 24,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 117,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    padding: 24,
  },
  input: {
    marginHorizontal: 16,
    height: 40,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  button: {
    padding: 10,
    margin: 16,

    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SubscribeScreen;
