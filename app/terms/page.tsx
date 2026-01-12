import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | whitstable.shop',
  description: 'Terms of Service for whitstable.shop - rules and guidelines for using our platform.',
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="terms-page">
      <div className="container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: January 2024</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using whitstable.shop (&ldquo;the Service&rdquo;), you agree to be bound
            by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms,
            please do not use the Service.
          </p>
          <p>
            We reserve the right to update these Terms at any time. Your continued use of
            the Service after any changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            whitstable.shop is a local business directory and community platform for
            Whitstable, Kent. We provide:
          </p>
          <ul>
            <li>A directory of local shops, restaurants, and businesses</li>
            <li>User reviews and ratings</li>
            <li>Local events calendar</li>
            <li>Local information (tide times, parking, etc.)</li>
            <li>Business listing management for owners</li>
          </ul>
        </section>

        <section>
          <h2>3. User Accounts</h2>

          <h3>3.1 Registration</h3>
          <p>
            To access certain features, you must create an account. You agree to provide
            accurate, current, and complete information during registration.
          </p>

          <h3>3.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account
            credentials and for all activities under your account. Notify us immediately
            of any unauthorised use.
          </p>

          <h3>3.3 Account Termination</h3>
          <p>
            We reserve the right to suspend or terminate accounts that violate these Terms
            or for any other reason at our discretion.
          </p>
        </section>

        <section>
          <h2>4. User Content</h2>

          <h3>4.1 Your Content</h3>
          <p>
            You retain ownership of content you submit (reviews, photos, etc.), but grant
            us a worldwide, non-exclusive, royalty-free licence to use, display, reproduce,
            and distribute such content in connection with the Service.
          </p>

          <h3>4.2 Content Guidelines</h3>
          <p>You agree that your content will not:</p>
          <ul>
            <li>Be false, misleading, or fraudulent</li>
            <li>Infringe on intellectual property rights</li>
            <li>Contain personal attacks, harassment, or hate speech</li>
            <li>Include spam, advertising, or promotional material</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Contain malicious code or links</li>
          </ul>

          <h3>4.3 Review Guidelines</h3>
          <p>When writing reviews, you must:</p>
          <ul>
            <li>Base reviews on genuine personal experiences</li>
            <li>Be honest and fair in your assessment</li>
            <li>Not write reviews for businesses you own or work for</li>
            <li>Not accept payment or incentives for reviews</li>
            <li>Not include personal information about staff</li>
          </ul>

          <h3>4.4 Content Removal</h3>
          <p>
            We reserve the right to remove any content that violates these Terms or that
            we deem inappropriate, without prior notice.
          </p>
        </section>

        <section>
          <h2>5. Business Listings</h2>

          <h3>5.1 Listing Information</h3>
          <p>
            Business listings are created from publicly available information. We strive
            for accuracy but do not guarantee the completeness or accuracy of listings.
          </p>

          <h3>5.2 Claiming a Business</h3>
          <p>
            Business owners can claim their listing to manage information. By claiming a
            listing, you confirm you are authorised to represent that business.
          </p>

          <h3>5.3 Business Owner Responsibilities</h3>
          <p>Business owners who claim listings agree to:</p>
          <ul>
            <li>Provide accurate and up-to-date information</li>
            <li>Not misrepresent their business</li>
            <li>Respond to reviews professionally and respectfully</li>
            <li>Not manipulate reviews or ratings</li>
          </ul>
        </section>

        <section>
          <h2>6. Prohibited Activities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the Service</li>
            <li>Use automated systems (bots, scrapers) without permission</li>
            <li>Interfere with or disrupt the Service</li>
            <li>Impersonate others or misrepresent your affiliation</li>
            <li>Collect or harvest user information without consent</li>
            <li>Engage in any activity that could harm the Service or its users</li>
          </ul>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>

          <h3>7.1 Our Content</h3>
          <p>
            The Service and its original content, features, and functionality are owned
            by whitstable.shop and are protected by copyright, trademark, and other laws.
          </p>

          <h3>7.2 Trademarks</h3>
          <p>
            &ldquo;whitstable.shop&rdquo; and our logo are trademarks. You may not use them without
            our prior written permission.
          </p>

          <h3>7.3 Third-Party Content</h3>
          <p>
            The Service may contain links to third-party websites. We are not responsible
            for the content or practices of these sites.
          </p>
        </section>

        <section>
          <h2>8. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES
            OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
          </p>
          <p>We do not warrant that:</p>
          <ul>
            <li>The Service will be uninterrupted or error-free</li>
            <li>Information on the Service is accurate or complete</li>
            <li>Defects will be corrected</li>
            <li>The Service is free of viruses or harmful components</li>
          </ul>
        </section>

        <section>
          <h2>9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WHITSTABLE.SHOP SHALL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>Loss of profits, data, or goodwill</li>
            <li>Service interruption</li>
            <li>Computer damage or system failure</li>
            <li>Any damages arising from your use of the Service</li>
          </ul>
          <p>
            Our total liability shall not exceed the amount you paid us in the 12 months
            prior to the claim, or £100, whichever is greater.
          </p>
        </section>

        <section>
          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless whitstable.shop, its officers,
            directors, employees, and agents from any claims, damages, losses, or expenses
            arising from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>11. Dispute Resolution</h2>

          <h3>11.1 Informal Resolution</h3>
          <p>
            Before filing a formal complaint, you agree to contact us to attempt to
            resolve the dispute informally.
          </p>

          <h3>11.2 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws
            of England and Wales, without regard to conflict of law principles.
          </p>

          <h3>11.3 Jurisdiction</h3>
          <p>
            Any disputes arising from these Terms shall be subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2>12. General Provisions</h2>

          <h3>12.1 Entire Agreement</h3>
          <p>
            These Terms, together with our Privacy Policy, constitute the entire agreement
            between you and whitstable.shop regarding the Service.
          </p>

          <h3>12.2 Severability</h3>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining
            provisions will remain in full force and effect.
          </p>

          <h3>12.3 Waiver</h3>
          <p>
            Our failure to enforce any right or provision of these Terms will not be
            considered a waiver of those rights.
          </p>

          <h3>12.4 Assignment</h3>
          <p>
            You may not assign or transfer these Terms without our prior written consent.
            We may assign our rights and obligations without restriction.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>Email: legal@whitstable.shop</li>
            <li>Website: https://whitstable.shop/contact</li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .terms-page {
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
      `}</style>
    </main>
  );
}
