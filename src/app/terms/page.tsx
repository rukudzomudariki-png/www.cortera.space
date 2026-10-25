import { Metadata } from "next";
import { ASSETS } from "@/config/assets";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for the Cortera website.",
  openGraph: { images: [{ url: ASSETS.heroRobot }] },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of *Service*." lede="Effective Date: October 25, 2026. Last Updated: October 25, 2026." />
      <Section variant="paper">
        <Container className="py-[var(--section-padding)] prose max-w-[72ch]">
          <h2>1. Introduction</h2>
          <p>These Terms of Service (&quot;Terms&quot;) govern access to and use of the Cortera website, including its publicly available content, documentation, and other website features.</p>
          <p>Cortera Inc. (&quot;Cortera,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is an AI control plane and robotics company building infrastructure to govern autonomous agents and develop intelligent mining systems.</p>
          <p>By accessing or using our website, you agree to these Terms. If you do not agree, you must discontinue use of the website.</p>
          <p>Additional terms may apply to particular products, APIs, software, research programs, or commercial services.</p>

          <h2>2. Eligibility</h2>
          <p>You must have the legal capacity required under applicable law to agree to these Terms.</p>
          <p>If you access or use the website on behalf of an organization, you represent that you have authority to act on its behalf.</p>
          <p>If you do not have the required authority or legal capacity, you must not agree to these Terms on behalf of another person or organization.</p>

          <h2>3. Permitted Use</h2>
          <p>You may access and use our website for lawful purposes, including:</p>
          <ul>
            <li>Learning about Cortera and its products.</li>
            <li>Reviewing our technical documentation and publicly available research.</li>
            <li>Contacting our team.</li>
            <li>Exploring legitimate business, research, and partnership opportunities.</li>
          </ul>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website in violation of applicable law.</li>
            <li>Attempt to gain unauthorized access to our systems, infrastructure, or accounts.</li>
            <li>Interfere with website availability, security, or functionality.</li>
            <li>Introduce malicious code or conduct unauthorized security testing.</li>
            <li>Misrepresent your identity or affiliation.</li>
            <li>Use the website to infringe another person&apos;s rights.</li>
            <li>Circumvent access restrictions or abuse website features.</li>
            <li>Use our website or services to develop, facilitate, or carry out unlawful activities.</li>
          </ul>
          <p>We reserve the right to restrict access where reasonably necessary to protect our systems, users, or legal interests.</p>

          <h2>4. Intellectual Property</h2>
          <p>Unless otherwise indicated, the website and its content, including text, graphics, logos, designs, documentation, and other materials, are owned by Cortera or its licensors and are protected by applicable intellectual-property laws.</p>
          <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use publicly available website content for lawful informational purposes.</p>
          <p>Except as permitted by law, an applicable open-source license, or our prior written authorization, you may not reproduce, distribute, modify, commercially exploit, or create derivative works from protected materials.</p>
          <p>Nothing in these Terms transfers ownership of intellectual property to you.</p>

          <h2>5. Software, APIs, and Open-Source Projects</h2>
          <p>Cortera may publish software packages, APIs, frameworks, libraries, developer tools, or technical documentation.</p>
          <p>The availability of these materials does not automatically grant you a license to use them beyond the permissions expressly provided.</p>
          <p>Open-source software is governed by its applicable license. If an open-source license conflicts with these Terms concerning the licensed software, the open-source license will control to the extent of the conflict.</p>
          <p>Use of commercial software, hosted APIs, or other products may require separate agreements, account registration, payment, or compliance with product-specific requirements.</p>

          <h2>6. Artificial Intelligence and Robotics</h2>
          <p>Cortera develops technology related to autonomous agents, AI infrastructure, robotics, and intelligent industrial systems.</p>
          <p>Information published on the website about these technologies is provided for general informational purposes unless expressly identified as binding product documentation or contractual commitments.</p>
          <p>AI systems may generate inaccurate, incomplete, unexpected, or unsuitable outputs. Outputs should be independently evaluated before being relied upon.</p>
          <p>Robotics and autonomous systems may interact with physical environments, machinery, equipment, people, and other systems. Their use requires appropriate engineering controls, testing, supervision, risk assessment, and compliance with applicable safety standards and laws.</p>
          <p>No website content authorizes the use of a Cortera system as the sole safety mechanism for a physical operation.</p>
          <p>Unless expressly agreed in a separate written contract, we do not represent that website content, demonstrations, research, or prototype descriptions constitute a certified, production-ready, or safety-critical system.</p>

          <h2>7. No Professional or Operational Advice</h2>
          <p>Website content, including technical articles, demonstrations, research, and product descriptions, is provided for informational purposes.</p>
          <p>It does not constitute engineering certification, mining advice, legal advice, investment advice, or a guarantee that a particular system is suitable for a specific operation.</p>
          <p>You are responsible for obtaining appropriate professional advice and independently assessing whether a product or technology is suitable for your intended use.</p>

          <h2>8. Confidentiality and Submissions</h2>
          <p>Please do not submit confidential information, trade secrets, proprietary source code, or sensitive technical material through public website forms unless we have expressly agreed to receive it under appropriate confidentiality arrangements.</p>
          <p>Unless a separate written agreement provides otherwise, submitting general feedback or suggestions does not create an obligation for Cortera to keep that submission confidential or to compensate you for it.</p>
          <p>Nothing in this section overrides confidentiality obligations that already apply under a separate agreement or applicable law.</p>

          <h2>9. Third-Party Services</h2>
          <p>Our website may reference or link to third-party websites, software, repositories, or services.</p>
          <p>We do not control third-party services and are not responsible for their availability, content, security, or policies.</p>
          <p>Your use of third-party services is subject to the applicable third-party terms and policies.</p>

          <h2>10. Availability and Changes</h2>
          <p>We may modify, suspend, discontinue, or restrict access to website features or content at any time, subject to applicable law and any separate contractual commitments.</p>
          <p>We do not guarantee uninterrupted availability or that all website content will always be current, complete, or error-free.</p>
          <p>We may update these Terms from time to time. The updated version will be published on our website with a revised &quot;Last Updated&quot; date.</p>
          <p>Where required by law, we will provide additional notice or obtain consent to material changes.</p>

          <h2>11. Disclaimer of Warranties</h2>
          <p>To the maximum extent permitted by applicable law, the website and its publicly available content are provided on an &quot;as is&quot; and &quot;as available&quot; basis.</p>
          <p>Cortera disclaims warranties that cannot lawfully be excluded, and otherwise disclaims implied warranties to the extent permitted by law, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          <p>We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.</p>
          <p>Nothing in these Terms excludes a warranty or right that cannot lawfully be excluded.</p>

          <h2>12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, Cortera will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, revenue, business opportunities, data, or goodwill arising from your use of the website.</p>
          <p>To the maximum extent permitted by applicable law, Cortera&apos;s aggregate liability arising from or relating to these Terms or your use of the website will not exceed the greater of the amounts you paid directly to Cortera for access to the website during the twelve months preceding the event giving rise to the claim or US$100.</p>
          <p>If you have paid nothing for website access, the amount used to calculate this limitation will be US$100.</p>
          <p>These limitations apply only to the extent permitted by applicable law. They do not exclude liability that cannot lawfully be excluded or limited, including any liability for which applicable law prohibits such limitation.</p>
          <p>Separate product or commercial agreements may contain different liability provisions.</p>

          <h2>13. Indemnification</h2>
          <p>To the extent permitted by applicable law, you agree to indemnify Cortera against third-party claims, damages, and reasonable costs arising directly from your unlawful use of the website or your material violation of these Terms.</p>
          <p>This obligation does not apply to the extent a claim results from Cortera&apos;s own breach, negligence, misconduct, or other conduct for which you cannot lawfully be required to indemnify us.</p>

          <h2>14. Suspension and Termination</h2>
          <p>We may suspend or restrict your access to the website if reasonably necessary to address security risks, unlawful activity, material violations of these Terms, or operational requirements.</p>
          <p>Where appropriate and legally permissible, we may provide notice of the restriction.</p>
          <p>Provisions that by their nature should survive termination, including applicable intellectual-property provisions, disclaimers, limitations of liability, and dispute-related provisions, will survive to the extent permitted by law.</p>

          <h2>15. Governing Law and Disputes</h2>
          <p>These Terms are subject to the laws of [Insert governing jurisdiction], excluding conflict-of-law rules to the extent permitted by law.</p>
          <p>Disputes arising from these Terms will be handled by the competent courts of [Insert jurisdiction], unless applicable law requires another forum or the parties have agreed to a different dispute-resolution process.</p>
          <p>Nothing in this section limits mandatory consumer rights or other protections that cannot lawfully be waived.</p>

          <h2>16. Severability</h2>
          <p>If any provision of these Terms is found to be unlawful, invalid, or unenforceable, the remaining provisions will continue in effect to the extent permitted by law.</p>

          <h2>17. Entire Agreement</h2>
          <p>These Terms govern your use of the website and constitute the agreement between you and Cortera concerning that use, subject to any applicable additional terms.</p>
          <p>They do not replace separate written agreements governing commercial services, software licenses, data processing, employment, or other specific relationships.</p>

          <h2>18. Contact Information</h2>
          <p>For questions concerning these Terms, contact:</p>
          <p>Cortera Inc.<br />Website: https://www.cortera.space<br />Email: support@cortera.space</p>
        </Container>
      </Section>
    </>
  );
}
