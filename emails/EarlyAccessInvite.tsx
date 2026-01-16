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

interface EarlyAccessInviteProps {
  inviteCode: string;
  expiresIn?: string;
}

export const EarlyAccessInvite = ({
  inviteCode,
  expiresIn = "48 hours",
}: EarlyAccessInviteProps) => (
  <Html>
    <Head />
    <Preview>Your Echo invitation has arrived!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={topLabel}>INVITATION GRANTED</Text>
        <Heading style={h1}>Welcome to the OS.</Heading>
        <Text style={text}>
          The wait is over. You&apos;ve been granted early access to Echo, the
          first truly &quot;Alive&quot; Money Operating System.
        </Text>
        <Section style={codeSection}>
          <Text style={codeLabel}>YOUR ACTIVATION CODE</Text>
          <Text style={codeText}>{inviteCode}</Text>
        </Section>
        <Button
          href={`https://echo-os.com/activate?code=${inviteCode}`}
          style={button}
        >
          Initialize Your Echo
        </Button>
        <Text style={footer}>
          This link is unique to you and will expire in {expiresIn}. Step into
          sovereignty.
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

const codeSection = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "8px",
  padding: "20px",
  margin: "0 0 30px 0",
  textAlign: "center" as const,
};

const codeLabel = {
  color: "#636366",
  fontSize: "10px",
  fontWeight: "700" as const,
  letterSpacing: "1px",
  margin: "0 0 10px 0",
};

const codeText = {
  color: "#ffffff",
  fontSize: "32px",
  fontWeight: "900" as const,
  letterSpacing: "4px",
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
  padding: "12px 20px",
  margin: "0 auto 30px auto",
};

const footer = {
  color: "#636366",
  fontSize: "12px",
  textAlign: "center" as const,
  margin: "0",
};

export default EarlyAccessInvite;
