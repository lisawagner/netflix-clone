import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

// Compount components
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
