import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import SubscribeScreen from './screens/SubscribeScreen';

// App.js is already setup by wrapping NavigationContainer around Root Navigator
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  );
}
