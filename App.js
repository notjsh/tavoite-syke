import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Age, setAge] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput placeholder='Enter age'
       keyboardType='number-pad'
       value={Age}
        onChangeText={text => setAge(text)}/>
      <Text>Heart Rate Limit</Text>
      <Text>{((220-Age)*0.65).toFixed(0)} - {((220-Age)*0.85).toFixed(0)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
});
