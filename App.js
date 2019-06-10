import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import TextInputComponent from './TextInputComponent';
import AppHeader from './AppHeader';
import BottomTabs from './BottomTabs';
import ButtonComp from './ButtonComp';
import BarChartComp from './BarChartComp';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider>
        <AppHeader></AppHeader>
        <BarChartComp/>
        <BottomTabs></BottomTabs>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
