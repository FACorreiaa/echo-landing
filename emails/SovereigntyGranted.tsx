import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SovereigntyGrantedProps {
  inviteCode: string;
  expiresIn?: string;
}

export const SovereigntyGranted = ({
  inviteCode,
  expiresIn = "48 hours",
}: SovereigntyGrantedProps) => (
  <Html>
    <Head />
    <Preview>Your Echo invitation has arrived - Sovereignty Granted</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={topLabel}>ACCESS GRANTED</Text>
        <Heading style={h1}>Welcome to the OS.</Heading>
        <Text style={text}>
          Your invitation to <strong>Echo</strong> is now active. You have been
          granted exclusive entry to the first truly &quot;Alive&quot; Money
          Operating System.
        </Text>
        <Section style={codeSection}>
          <Text style={codeLabel}>YOUR ACTIVATION KEY</Text>
          <Text style={codeText}>{inviteCode}</Text>
        </Section>
        <Button
          href={`https://echo-os.live/activate?code=${inviteCode}`}
          style={button}
        >
          Initialize System
        </Button>
        <Text style={footer}>
          This invitation is unique to your identity and expires in {expiresIn}.
          Step into sovereignty.
        </Text>
      </Container>
    </Body>
  </Html>
);

// Styles following "Deep Black" and "Electric Blue" theme
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
  fontSize: "32px",
  fontWeight: "900" as const,
  textAlign: "center" as const,
  margin: "0 0 24px 0",
};

const text = {
  color: "#9ca3af",
  fontSize: "16px",
  lineHeight: "26px",
  textAlign: "center" as const,
  margin: "0 0 30px 0",
};

const codeSection = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  padding: "24px",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const codeLabel = {
  color: "#636366",
  fontSize: "10px",
  fontWeight: "700" as const,
  letterSpacing: "1px",
  margin: "0 0 12px 0",
};

const codeText = {
  color: "#ffffff",
  fontSize: "36px",
  fontWeight: "900" as const,
  letterSpacing: "8px",
  margin: "0",
};

const button = {
  backgroundColor: "#2da6fa",
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "700" as const,
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "14px 24px",
  margin: "0 auto 30px auto",
};

const footer = {
  color: "#636366",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};

export default SovereigntyGranted;
