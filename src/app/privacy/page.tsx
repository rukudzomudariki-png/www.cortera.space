import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the Cortera website.",
  openGraph: { images: [{ url: ASSETS.heroRobot }] },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy *Policy*." lede="Effective Date: October 25, 2026. Last Updated: October 25, 2026." />
      <Section variant="paper">
        <Container className="py-[var(--section-padding)] max-w-[72ch]">
          <h2>1. Introduction</h2>
          <p>Cortera Inc. (&quot;Cortera,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an AI control plane and robotics company building infrastructure to govern autonomous agents and develop intelligent mining systems.</p>
          <p>This Privacy Policy explains how we collect, use, disclose, store, and protect personal information when you visit our website, communicate with us, apply to work with us, or use our services.</p>
          <p>We are committed to handling personal information responsibly and transparently.</p>
          <p>By using our website, you acknowledge that you have read this Privacy Policy. Where applicable law requires consent to a particular form of data processing, we will seek that consent separately.</p>

          <h2>2. Information We Collect</h2>
          <p>Depending on how you interact with Cortera, we may collect the following categories of information.</p>
          <h3>2.1 Information You Provide</h3>
          <p>This may include:</p>
          <ul>
            <li>Name and contact information.</li>
            <li>Email address and professional affiliation.</li>
            <li>Company or organizational information.</li>
            <li>Information submitted through contact forms, applications, or partnership inquiries.</li>
            <li>Communications and correspondence with our team.</li>
            <li>Information voluntarily provided when requesting access to our products or services.</li>
          </ul>
          <p>Please do not submit confidential technical information, trade secrets, credentials, or sensitive personal information through public website forms unless we have expressly established an appropriate process for receiving it.</p>

          <h3>2.2 Information Collected Automatically</h3>
          <p>When you visit our website, certain technical information may be collected automatically, depending on our website configuration. This may include:</p>
          <ul>
            <li>IP address.</li>
            <li>Browser type and version.</li>
            <li>Device and operating system information.</li>
            <li>Pages visited and interactions with the website.</li>
            <li>Referring websites.</li>
            <li>Access timestamps and diagnostic information.</li>
          </ul>
          <p>This information may be collected through server logs, cookies, or similar technologies where implemented.</p>

          <h3>2.3 Product and Service Information</h3>
          <p>If you use Cortera&apos;s software, APIs, AI infrastructure, or other products, we may process additional information necessary to provide and maintain those services.</p>
          <p>Depending on the product and its configuration, this could include account information, technical logs, API usage records, agent execution metadata, system events, and operational telemetry.</p>
          <p>The information processed will depend on the services you use and the agreements governing those services.</p>

          <h2>3. How We Use Information</h2>
          <p>We may use personal information to:</p>
          <ul>
            <li>Operate and maintain our website.</li>
            <li>Respond to inquiries and requests.</li>
            <li>Communicate with customers, developers, partners, and prospective customers.</li>
            <li>Provide, maintain, and improve our products and services.</li>
            <li>Diagnose technical problems and monitor service reliability.</li>
            <li>Protect our systems against fraud, abuse, unauthorized access, and security threats.</li>
            <li>Evaluate partnership, employment, or business opportunities.</li>
            <li>Comply with applicable legal obligations.</li>
            <li>Enforce our agreements and protect our legal rights.</li>
          </ul>
          <p>We will process personal information only for appropriate purposes and in accordance with applicable law.</p>

          <h2>4. Legal Basis for Processing</h2>
          <p>Where applicable law requires a legal basis for processing personal information, we will rely on an appropriate basis, which may include:</p>
          <ul>
            <li>Your consent.</li>
            <li>The performance of a contract or steps taken at your request before entering into a contract.</li>
            <li>Compliance with legal obligations.</li>
            <li>Legitimate interests, where permitted by law and where those interests are not overridden by your rights.</li>
          </ul>
          <p>Where processing relies on consent, you may withdraw that consent subject to applicable law. Withdrawal does not affect the lawfulness of processing conducted before withdrawal.</p>

          <h2>5. Cookies and Similar Technologies</h2>
          <p>Our website may use cookies or similar technologies to support essential functionality, remember preferences, understand website usage, or improve performance.</p>
          <p>The technologies used will depend on our website configuration.</p>
          <p>Where required by law, we will obtain consent before using non-essential cookies or similar technologies.</p>
          <p>You may be able to manage cookies through your browser settings or any cookie-preference controls we provide. Disabling certain cookies may affect website functionality.</p>

          <h2>6. How We Share Information</h2>
          <p>We do not sell personal information as part of our ordinary business practices.</p>
          <p>We may disclose personal information to the following categories of recipients where necessary and lawful:</p>
          <p><strong>Service providers:</strong> Companies that provide website hosting, infrastructure, storage, communications, analytics, security, or other operational services.</p>
          <p><strong>Business partners:</strong> Organizations involved in delivering a service or pursuing a collaboration, where disclosure is appropriate and legally permitted.</p>
          <p><strong>Professional advisers:</strong> Lawyers, accountants, auditors, and other professional advisers who need the information for legitimate business purposes.</p>
          <p><strong>Legal and regulatory authorities:</strong> Government agencies, regulators, courts, or law enforcement bodies where disclosure is required by law or otherwise legally justified.</p>
          <p><strong>Business transactions:</strong> Parties involved in a merger, acquisition, financing, restructuring, or transfer of business assets, subject to appropriate safeguards and applicable law.</p>
          <p>We seek to limit disclosures to what is reasonably necessary for the relevant purpose.</p>

          <h2>7. Artificial Intelligence and Automated Systems</h2>
          <p>Cortera develops technology relating to autonomous software agents, AI infrastructure, and robotics.</p>
          <p>Depending on the service, technical information may be processed to execute tasks, monitor system behavior, diagnose failures, maintain observability, or improve reliability.</p>
          <p>The information processed by an AI system depends on its configuration and the data supplied to it.</p>
          <p>We will not represent that information submitted to a Cortera service is excluded from model training, human review, or other secondary processing unless the applicable product documentation or agreement expressly provides that protection.</p>
          <p>Where automated processing has legal or similarly significant effects on individuals, we will address applicable transparency and individual-rights requirements.</p>

          <h2>8. Data Retention</h2>
          <p>We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law.</p>
          <p>Retention periods may depend on the nature of the information, the purpose for which it was collected, contractual obligations, security requirements, and legal obligations.</p>
          <p>When information is no longer required, we will take appropriate steps to delete it, anonymize it, or otherwise dispose of it in accordance with applicable law and our retention practices.</p>

          <h2>9. Data Security</h2>
          <p>We take appropriate technical and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, loss, or destruction.</p>
          <p>However, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security.</p>
          <p>If a personal data incident occurs, we will respond and provide notifications as required by applicable law.</p>

          <h2>10. International Data Transfers</h2>
          <p>Cortera may use service providers or infrastructure located in countries other than the country in which personal information was collected.</p>
          <p>Where personal information is transferred internationally, we will implement safeguards and satisfy applicable legal requirements governing such transfers.</p>
          <p>Information about relevant transfers and safeguards may be provided upon request where required by law.</p>

          <h2>11. Your Privacy Rights</h2>
          <p>Depending on your location and applicable law, you may have the right to:</p>
          <ul>
            <li>Request access to personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of personal information in certain circumstances.</li>
            <li>Object to or request restrictions on certain processing.</li>
            <li>Withdraw consent where processing relies on consent.</li>
            <li>Request a copy of certain information in a portable format.</li>
            <li>Lodge a complaint with the relevant data-protection authority.</li>
          </ul>
          <p>To exercise an applicable right, contact us using the details provided below.</p>
          <p>We may need to verify your identity before fulfilling a request. Certain legal exceptions may apply.</p>

          <h2>12. Children&apos;s Privacy</h2>
          <p>Our website and services are not directed at children under the age of 18.</p>
          <p>We do not knowingly collect personal information from children in circumstances where such collection is prohibited by applicable law.</p>
          <p>If you believe a child has provided us with personal information unlawfully, please contact us so that we can assess the matter and take appropriate action.</p>

          <h2>13. Third-Party Websites and Services</h2>
          <p>Our website may contain links to websites, applications, or services operated by third parties.</p>
          <p>We do not control those third parties&apos; privacy practices. Their own policies and terms govern their services.</p>
          <p>We encourage you to review the relevant policies before providing personal information to them.</p>

          <h2>14. Changes to This Policy</h2>
          <p>We may update this Privacy Policy to reflect changes in our operations, products, legal obligations, or privacy practices.</p>
          <p>We will publish the updated version on our website and revise the &quot;Last Updated&quot; date.</p>
          <p>Where required by law, we will provide additional notice or obtain consent before implementing material changes.</p>

          <h2>15. Contact Us</h2>
          <p>For questions about this Privacy Policy, requests concerning personal information, or other privacy-related matters, contact:</p>
          <p>Cortera Inc.<br />Website: https://cortera.space<br />Privacy Contact: support@cortera.space</p>
          <p>This Policy should be read alongside any applicable product-specific privacy notices, data-processing agreements, or other contractual terms.</p>
        </Container>
      </Section>
    </>
  );
}
