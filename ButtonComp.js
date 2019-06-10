import * as React from 'react';
import { Button } from 'react-native-paper';

const ButtonComp = () => (
  <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
);

export default ButtonComp;