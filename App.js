import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <HomeScreen />
      </TailwindProvider>
    </Provider>
  );
}
