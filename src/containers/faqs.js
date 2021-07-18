import React from "react";
import { Accordion } from "../components";
import CtaForm from "../components/cta-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>

      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <CtaForm>
        <CtaForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </CtaForm.Text>
        <CtaForm.Break />
        <CtaForm.Input placeholder="Email address" />
        <CtaForm.Button>Get Started</CtaForm.Button>
      </CtaForm>
    </Accordion>
  );
}
