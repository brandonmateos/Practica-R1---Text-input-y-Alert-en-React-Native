import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Switch, TextInput } from 'react-native';

export default class App extends Component <Props> {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      
      textValue: '',
    };
  }

  onChangeText = (text) => {
    this.setState({ textValue: text });
    console.warn(`El texto es: ${text}`);
  }

  onChange = (value) => {
    console.warn(`El switch cambiara a: ${value}`);
    this.setState({ switchValue: value })
  }

  onPressLearnMore = () => {
    console.warn('Presionaste el boton');
    alert(this.state.textValue);
  }

  render() {
    return (
      <View style={styles.container}>
      
        <TextInput
          style={{ height: 40 }}
          placeholder="Escribe aqui"
          onChangeText={this.onChangeText}
          defaultValue={this.state.textValue}
        />
        <Switch
          onValueChange={() => this.onChange(!this.state.switchValue) }
          value={this.state.switchValue}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Text>Hola Mundo :3</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
