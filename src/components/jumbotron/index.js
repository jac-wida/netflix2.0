import React from "react";
import {
  Inner,
  Container,
  Image,
  Title,
  SubTitle,
  Pane,
  Item,
} from "./styles/jumbotron";
export default function Jumbotron({ children, direction = "row", ...rest }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...rest }) {
  return <Pane {...rest}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...rest }) {
  return <Image {...rest} />;
};
