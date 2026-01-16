import { Resend } from "resend";

// Resend client for transactional emails
export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "Echo <hello@echo-os.com>";
