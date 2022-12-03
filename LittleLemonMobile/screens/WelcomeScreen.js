import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Image
        style={styles.image}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text style={styles.text}>
        Little Lemon, your local{'\n'}Mediterranean Bistro
      </Text>
    </View>
    <TouchableHighlight
      style={styles.button}
      onPress={() => navigation.navigate('Subscribe')}
      underlayColor="#00730050">
      <Text style={styles.buttonText}>NewsLetter</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 176,
    resizeMode: 'cover',
    marginBottom: 64,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    padding: 10,
    margin: 16,
    backgroundColor: '#007300',
    borderColor: '#007300',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default WelcomeScreen;
