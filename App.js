import React, { Component } from "react";
import { View, Text } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Diego'
    };
  }



  render() {
    return (
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 23, color: 'red', textAlign: 'center' }}>{this.state.nome}</Text>

      </View>
    );
  }

}


export default App;