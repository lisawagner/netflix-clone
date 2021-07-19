import React from "react";
import { Feature, CtaForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <CtaForm>
            <CtaForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </CtaForm.Text>
            <CtaForm.Break />
            <CtaForm.Input placeholder="Email address" />
            <CtaForm.Button>Get Started</CtaForm.Button>
          </CtaForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
