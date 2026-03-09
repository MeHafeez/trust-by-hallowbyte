import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Fatima Rahma Foundation website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-8">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80" alt="Terms and conditions" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Terms &amp; Conditions
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
                Fatima Rahma Foundation is a registered charitable trust managed by{" "}
                <strong className="text-gray-900">HallowByte Innovate Private Limited</strong>.
                By accessing and using this website, you agree to the following terms.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <div>
                <h2 className="text-xl text-gray-900">1. About the Organization</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Fatima Rahma Foundation (&quot;the Foundation&quot;) is a charitable trust operated under the guidance
                  and management of HallowByte Innovate Private Limited. The Foundation&apos;s mission is to provide
                  healthcare support, education, and food distribution to underprivileged communities across India.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">2. Use of Website</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  This website is provided for informational and donation purposes. You agree to use the website
                  only for lawful purposes. You must not misuse, disrupt, or attempt to gain unauthorized access to
                  the website or its systems.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">3. Donations</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  All donations made through this platform are voluntary and non-refundable unless otherwise specified.
                  Donations are used exclusively for the charitable purposes stated on the website, including medical
                  support, education programs, and food distribution. The Foundation reserves the right to allocate
                  funds to the most urgent cases if a specific case receives more than the required amount.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">4. Tax Benefits</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Donations to Fatima Rahma Foundation may be eligible for tax deduction under Section 80G of the
                  Indian Income Tax Act. Tax receipts will be issued for all eligible donations. Please consult
                  your tax advisor for specific guidance.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">5. Case Submissions</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Cases submitted for support are subject to verification by our team. The Foundation reserves the
                  right to accept, reject, or prioritize cases based on urgency, verification status, and available
                  resources. Submitting a case does not guarantee financial support.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">6. Volunteer Terms</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Volunteers participate on a voluntary basis and are not employees of the Foundation or
                  HallowByte Innovate Private Limited. Volunteers agree to act in accordance with the Foundation&apos;s
                  code of conduct and represent the organization with integrity.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">7. Intellectual Property</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  All content on this website, including text, images, logos, and design elements, is the property
                  of Fatima Rahma Foundation and HallowByte Innovate Private Limited. You may not reproduce,
                  distribute, or use any content without prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">8. Transparency</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  The Foundation is committed to complete transparency. Financial reports, case updates, and
                  fund utilization details are published regularly on our Transparency Dashboard. Donors may
                  request additional information about how their contributions are utilized.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">9. Limitation of Liability</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  The Foundation and HallowByte Innovate Private Limited shall not be held liable for any
                  indirect, incidental, or consequential damages arising from the use of this website or services.
                  The website is provided &quot;as is&quot; without warranties of any kind.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">10. Modifications</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  We reserve the right to update these terms at any time. Continued use of the website after
                  changes constitutes acceptance of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">11. Governing Law</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  These terms are governed by the laws of India. Any disputes shall be subject to the exclusive
                  jurisdiction of the courts in Guntur, Andhra Pradesh and Hyderabad, Telangana.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-gray-900">12. Contact</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:contact@fatimarahma.org" className="font-semibold text-primary-500 hover:underline">
                    contact@fatimarahma.org
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
