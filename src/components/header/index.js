import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

export default function Header({ bg = true, children, ...rest }) {
  return bg ? <Background {...rest}>{children}</Background> : children;
}

Header.Frame = function HeadeFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = function HeadeLogo({ to, ...rest }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...rest} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...rest }) {
  return <ButtonLink {...rest}> {children}</ButtonLink>;
};
