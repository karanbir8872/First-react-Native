import React from "react";
import renderer from "react-test-renderer";

import { MonoText } from "../StyledText";

it(`renders correctly`, () => {
  const tree = renderer
    .create(<MonoText>Snapshooooot test!</MonoText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
