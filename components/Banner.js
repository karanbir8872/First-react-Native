import React from "react";
import Styled from "styled-components";
import { Text, View } from "react-native";

export default class Banner extends React.Component {
  render() {
    return (
      <Container>
        <View>
          <Text>Opeghuhun ufp Aphghp.jvnbs to starst working on your app!</Text>
        </View>
      </Container>
    );
  }
}

const Container = Styled.View`
  background-Color: yellow;
  margin-top:70;
`;
