import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | whitstable.shop',
  description: 'Privacy policy for whitstable.shop - how we collect, use, and protect your data.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: January 2024</p>

        <section>
          <h2>1. Introduction</h2>
          <p>
            whitstable.shop (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website whitstable.shop.
          </p>
          <p>
            By using our Service, you agree to the collection and use of information in
            accordance with this policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <p>We may collect information you provide directly to us, such as:</p>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
            <li><strong>Profile Information:</strong> Username, profile photo, and bio</li>
            <li><strong>User Content:</strong> Reviews, ratings, and comments you post</li>
            <li><strong>Business Information:</strong> If you claim a business listing, we collect business name, address, phone number, opening hours, and other relevant details</li>
            <li><strong>Communications:</strong> Information you provide when contacting us for support</li>
          </ul>

          <h3>2.2 Information Collected Automatically</h3>
          <p>When you visit our website, we automatically collect certain information:</p>
          <ul>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked</li>
            <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
            <li><strong>Location Data:</strong> General location based on IP address (country/region level)</li>
          </ul>
          <p>
            We use privacy-focused analytics (Plausible/Umami) that do not use cookies or
            track individuals across websites.
          </p>

          <h3>2.3 Information from Third Parties</h3>
          <p>We may receive information about you from third parties:</p>
          <ul>
            <li><strong>Authentication Providers:</strong> If you sign in with Google or other providers, we receive your name and email</li>
            <li><strong>Publicly Available Information:</strong> Business information from public directories</li>
          </ul>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our Service</li>
            <li>Create and manage your account</li>
            <li>Process business claims and listing updates</li>
            <li>Display your reviews and contributions</li>
            <li>Send you updates about your account or listings (if opted in)</li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>Monitor and analyse usage patterns and trends</li>
            <li>Detect, investigate, and prevent fraudulent or unauthorised activity</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>4. Sharing of Information</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li><strong>Public Content:</strong> Reviews, ratings, and profile information you choose to make public</li>
            <li><strong>Service Providers:</strong> Third-party companies that help us operate our service (hosting, email, analytics)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Supabase:</strong> Database and authentication (hosted in EU)</li>
            <li><strong>Vercel:</strong> Website hosting and delivery</li>
            <li><strong>Mapbox:</strong> Map display and location services</li>
            <li><strong>Plausible/Umami:</strong> Privacy-focused website analytics</li>
          </ul>
          <p>
            These services have their own privacy policies, and we encourage you to review them.
          </p>
        </section>

        <section>
          <h2>6. Cookies and Tracking</h2>
          <p>
            We use minimal cookies necessary for the operation of our Service:
          </p>
          <ul>
            <li><strong>Authentication cookies:</strong> To keep you logged in</li>
            <li><strong>Preference cookies:</strong> To remember your settings (e.g., saved shops)</li>
          </ul>
          <p>
            Our analytics solution (Plausible/Umami) does not use cookies and does not track
            you across websites. No cookie consent banner is required for these analytics.
          </p>
        </section>

        <section>
          <h2>7. Data Retention</h2>
          <p>We retain your information for as long as necessary to:</p>
          <ul>
            <li>Provide you with our Service</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p>
            If you delete your account, we will delete or anonymise your personal data within
            30 days, except where we are required to retain it by law.
          </p>
        </section>

        <section>
          <h2>8. Your Rights (GDPR)</h2>
          <p>Under the UK GDPR and Data Protection Act 2018, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong>Portability:</strong> Request transfer of your data to another service</li>
            <li><strong>Object:</strong> Object to processing of your data</li>
            <li><strong>Restrict:</strong> Request restriction of processing</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@whitstable.shop
          </p>
        </section>

        <section>
          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your
            personal data against unauthorised access, alteration, disclosure, or destruction.
            These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit (HTTPS)</li>
            <li>Encryption of sensitive data at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
          </ul>
          <p>
            However, no method of transmission over the Internet is 100% secure, and we cannot
            guarantee absolute security.
          </p>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Our servers are located in the European Union. If you access our Service from
            outside the EU, your information may be transferred to and processed in the EU.
          </p>
          <p>
            We ensure appropriate safeguards are in place for any international transfers
            of personal data in accordance with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Our Service is not directed to children under 16. We do not knowingly collect
            personal information from children under 16. If you are a parent or guardian
            and believe your child has provided us with personal information, please contact
            us so we can delete it.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the
            &ldquo;Last updated&rdquo; date.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: privacy@whitstable.shop</li>
            <li>Website: https://whitstable.shop/contact</li>
          </ul>
          <p>
            You also have the right to lodge a complaint with the Information Commissioner&apos;s
            Office (ICO) if you believe your data protection rights have been violated.
          </p>
          <p>
            ICO Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">https://ico.org.uk</a>
          </p>
        </section>
      </div>

      <style jsx>{`
        .privacy-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .container {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
        }

        h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 0.5rem;
        }

        .last-updated {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 2rem;
        }

        section {
          margin-bottom: 2rem;
        }

        h2 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 1rem;
          padding-top: 1rem;
          border-top: 1px solid #e5e7eb;
        }

        section:first-of-type h2 {
          border-top: none;
          padding-top: 0;
        }

        h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #374151;
          margin: 1rem 0 0.5rem;
        }

        p {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        ul {
          color: #4b5563;
          line-height: 1.7;
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: #3b82f6;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        strong {
          color: #374151;
        }
      `}</style>
    </main>
  );
}
