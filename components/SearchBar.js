import React, { Component } from "react";
import Styled from "styled-components";
import { TextInput, View } from "react-native";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <Terminal>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Type here to translatse!"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </View>
      </Terminal>
    );
  }
}

const Terminal = Styled.View`
border-radius:5;
border-width:2;
margin-bottom:29;
`;
