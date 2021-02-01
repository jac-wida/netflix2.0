import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Container = function AccordionContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Accordion.Inner = function AccordionInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Accordion.Title = function AccordionTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...rest }) {
  return <Frame {...rest}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...rest }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...rest}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...rest }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      {...rest}
    >
      {children}
      {toggleShow ? (
        <img src='/images/icons/close-slim.png' alt='Close' />
      ) : (
        <img src='/images/icons/add.png' alt='Open' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...rest }) {
  const { toggleShow } = useContext(ToggleContext);
  return toggleShow ? <Body {...rest}>{children}</Body> : null;
};
