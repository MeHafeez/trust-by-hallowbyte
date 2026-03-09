import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Fatima Rahma Foundation — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-8">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80" alt="Privacy policy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl prose-headings:font-display prose-headings:font-bold">
            <div className="rounded-2xl bg-warm-50 p-6 ring-1 ring-gray-100">
              <p className="text-sm text-gray-600">
                Fatima Rahma Foundation, a trust by{" "}
                <strong className="text-gray-900">HallowByte Innovate Private Limited</strong>,
                is committed to protecting your privacy. This policy explains how we collect,
                use, and safeguard your personal information.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <div>
                <h2 className="text-xl text-gray-900">1. Information We Collect</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">We may collect the following types of information:</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary-500">•</span> <strong>Personal Information:</strong> Name, email, phone number, address when you donate, volunteer, or contact us.</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> <strong>Payment Information:</strong> UPI ID, bank details, or payment gateway data processed securely through third-party providers.</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> <strong>Case Information:</strong> Medical documents, patient details, and hospital information submitted for case verification.</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> <strong>Usage Data:</strong> Browser type, IP address, pages visited, and interaction patterns through cookies and analytics.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">2. How We Use Your Information</h2>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Processing and tracking donations</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Verifying and managing medical/educational cases</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Communicating updates about cases you&apos;ve supported</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Issuing tax receipts and acknowledgments</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Coordinating volunteer activities</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Improving our website and services</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Sending newsletters and impact updates (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">3. Data Protection</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We implement industry-standard security measures to protect your data, including encrypted
                  connections (SSL/TLS), secure payment processing through certified gateways, and restricted
                  access to personal information. We do not store payment card details on our servers.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">4. Data Sharing</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We do not sell, rent, or trade your personal information. We may share data with:
                </p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Payment processors (for donation transactions)</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Hospitals (for verified case payments)</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Legal authorities (when required by law)</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> HallowByte Innovate Private Limited (as the managing entity)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">5. Cookies</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Our website uses cookies to enhance your experience, analyze traffic, and remember your
                  preferences. You can control cookie settings through your browser. Disabling cookies may
                  affect some functionality of the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">6. Third-Party Services</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We may use third-party services such as analytics tools, payment gateways, and communication
                  platforms. These services have their own privacy policies, and we encourage you to review them.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">7. Your Rights</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">You have the right to:</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Access the personal data we hold about you</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Request correction of inaccurate data</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Request deletion of your data (subject to legal requirements)</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Opt out of marketing communications at any time</li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span> Withdraw consent for data processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">8. Children&apos;s Privacy</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Our website is not directed at children under 13. We do not knowingly collect personal
                  information from children. If you believe a child has provided us with personal data,
                  please contact us and we will promptly delete it.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">9. Changes to This Policy</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We may update this privacy policy from time to time. Changes will be posted on this page
                  with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">10. Contact Us</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  For privacy-related inquiries, contact our Data Protection Officer at{" "}
                  <a href="mailto:privacy@fatimarahma.org" className="font-semibold text-primary-500 hover:underline">
                    privacy@fatimarahma.org
                  </a>{" "}
                  or visit our <Link href="/contact" className="font-semibold text-primary-500 hover:underline">Contact page</Link>.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-gray-100">
              <p className="text-xs text-gray-400">
                Fatima Rahma Foundation — A trust by{" "}
                <strong className="text-gray-600">HallowByte Innovate Private Limited</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
