import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface WaitlistConfirmationProps {
  position: number;
}

export const WaitlistConfirmation = ({ position }: WaitlistConfirmationProps) => (
  <Html>
    <Head />
    <Preview>You&apos;re on the Echo waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={topLabel}>WAITLIST CONFIRMED</Text>
        <Heading style={h1}>You&apos;re on the list.</Heading>
        <Text style={text}>
          Thank you for joining the Echo waitlist. You&apos;ll be among the first to
          experience the future of personal finance.
        </Text>
        <Section style={positionSection}>
          <Text style={positionLabel}>YOUR POSITION</Text>
          <Text style={positionNumber}>#{position}</Text>
        </Section>
        <Text style={footer}>
          We&apos;ll notify you when it&apos;s your turn. Welcome to sovereignty.
        </Text>
      </Container>
    </Body>
  </Html>
);

// Styles following "Deep Black" and "Platinum" theme
const main = {
  backgroundColor: "#050505",
  fontFamily: "'Outfit', 'Inter', sans-serif",
  padding: "40px 0",
};

const container = {
  backgroundColor: "#0A0A0B",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "12px",
  padding: "40px",
  maxWidth: "480px",
  margin: "0 auto",
};

const topLabel = {
  color: "#2da6fa",
  fontSize: "12px",
  fontWeight: "700" as const,
  letterSpacing: "2px",
  textAlign: "center" as const,
  margin: "0 0 20px 0",
};

const h1 = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "900" as const,
  textAlign: "center" as const,
  margin: "0 0 20px 0",
};

const text = {
  color: "#9ca3af",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
  margin: "0 0 30px 0",
};

const positionSection = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const positionLabel = {
  color: "#636366",
  fontSize: "10px",
  fontWeight: "700" as const,
  letterSpacing: "1px",
  margin: "0 0 10px 0",
};

const positionNumber = {
  color: "#ffffff",
  fontSize: "48px",
  fontWeight: "900" as const,
  margin: "0",
};

const footer = {
  color: "#636366",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};

export default WaitlistConfirmation;
