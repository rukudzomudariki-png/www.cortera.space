export const CONTACT_EMAIL = "team@cortera.space";

export type MailtoOptions = {
  subject: string;
  body: string;
};

export function buildMailto({ subject, body }: MailtoOptions): string {
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body.replace(/\n/g, "\r\n"));
  return `mailto:${CONTACT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
}
