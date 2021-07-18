import React from "react";
import { Container, Input, Button, Break, Text } from "./styles/cta-form";

export default function CtaForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// Compound components
// CtaForm.Wrapper = function CtaFormWrapper({ children, ...restProps }) {
//   return <Wrapper {...restProps}>{children}</Wrapper>;
// };
CtaForm.Input = function CtaFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};
CtaForm.Button = function CtaFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};
CtaForm.Text = function CtaFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
CtaForm.Break = function CtaFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
