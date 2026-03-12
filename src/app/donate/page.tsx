"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Smartphone,
  Building2,
  Globe,
  CheckCircle,
  Shield,
  Eye,
  Copy,
  ArrowRight,
} from "lucide-react";

const presetAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const bankDetails: {
  name: string;
  account: string;
  ifsc: string;
  bank: string;
  branch: string;
  upiId: string;
} = {
  name: "Fatima Rahma Foundation",
  account: "1234567890123456",
  ifsc: "SBIN0001234",
  bank: "State Bank of India",
  branch: "Guntur Main Branch",
  upiId: "9885550459@pthdfc",
};

type PaymentMethod = "upi";

export default function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [method, setMethod] = useState<PaymentMethod>("upi");
  const [step, setStep] = useState(1);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80" alt="Donate" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
          </div>
          <div className="islamic-pattern absolute inset-0 opacity-10" />
          <div className="container-custom relative text-center">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Donate
            </h1>
          </div>
        </section>
        <section className="section-padding bg-warm-50">
          <div className="container-custom">
            <div className="mx-auto max-w-lg text-center">
              <div className="card py-12">
                <CheckCircle className="mx-auto h-20 w-20 text-primary-500" />
                <h2 className="mt-6 font-display text-3xl font-bold text-gray-900">
                  Jazakallah Khair!
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  Thank you for your generous donation
                </p>
                <p className="mt-6 font-display text-4xl font-bold text-primary-500">
                  ₹{(customAmount ? parseInt(customAmount) : amount).toLocaleString("en-IN")}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  {method === "upi" &&
                    "Please complete the UPI payment using the QR code or UPI ID provided."}
                  {/* {method === "bank" && "Please transfer the amount to the bank account shared."} */}
                  {/* {method === "online" && "Your payment is being processed."} */}
                </p>
                <p className="mt-6 text-sm text-gray-500">
                  A confirmation email will be sent to <strong>{donorEmail}</strong>.
                  You can track your donation in the transparency dashboard.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button
                    onClick={() => { setSubmitted(false); setStep(1); }}
                    className="btn-primary gap-2"
                  >
                    <Heart className="h-4 w-4" />
                    Donate Again
                  </button>
                  <a href="/transparency" className="btn-outline gap-2">
                    <Eye className="h-4 w-4" />
                    View Transparency
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=80" alt="Donate" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-800/85 to-primary-900/90" />
        </div>
        <div className="islamic-pattern absolute inset-0 opacity-10" />
        <div className="container-custom relative text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
            Donate
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl">
            Your Generosity Saves Lives
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-300">
            100% of your donation goes directly to the cause. Every rupee is
            tracked and accounted for.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Secure Payment
            </span>
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4" /> Full Transparency
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" /> Tax Deductible
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Progress Steps */}
            <div className="mb-10 flex items-center justify-center gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      step >= s
                        ? "bg-primary-500 text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    {s}
                  </div>
                  <span className={`hidden text-sm sm:block ${step >= s ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                    {s === 1 ? "Amount" : s === 2 ? "Details" : "Payment"}
                  </span>
                  {s < 3 && <div className={`h-px w-12 ${step > s ? "bg-primary-500" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Amount */}
              {step === 1 && (
                <div className="card">
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Choose Donation Amount
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Select a preset amount or enter a custom one
                  </p>

                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {presetAmounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => { setAmount(a); setCustomAmount(""); }}
                        className={`rounded-xl border-2 px-4 py-4 text-center font-semibold transition-all ${
                          amount === a && !customAmount
                            ? "border-primary-500 bg-primary-50 text-primary-500"
                            : "border-gray-200 text-gray-700 hover:border-primary-200"
                        }`}
                      >
                        ₹{a.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">
                      Custom Amount
                    </label>
                    <div className="relative mt-1.5">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
                      <input
                        type="number"
                        min={1}
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full rounded-lg border border-gray-200 py-3 pl-8 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-primary mt-8 w-full gap-2"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Donor Details */}
              {step === 2 && (
                <div className="card">
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Your Details
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Donating ₹{(customAmount ? parseInt(customAmount) : amount).toLocaleString("en-IN")}
                  </p>

                  <div className="mt-8 space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        required
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      />
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          required
                          value={donorEmail}
                          onChange={(e) => setDonorEmail(e.target.value)}
                          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                          type="tel"
                          value={donorPhone}
                          onChange={(e) => setDonorPhone(e.target.value)}
                          className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Message (optional)
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        placeholder="Leave a message of hope..."
                      />
                    </div>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">
                        Make my donation anonymous
                      </span>
                    </label>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-outline flex-1"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-primary flex-1 gap-2"
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <div className="card">
                  <h2 className="font-display text-2xl font-bold text-gray-900">
                    Choose Payment Method
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Amount: ₹{(customAmount ? parseInt(customAmount) : amount).toLocaleString("en-IN")}
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        key: "upi" as const,
                        icon: Smartphone,
                        label: "Pay with UPI & QR",
                        detail: "Scan QR or use GPay, PhonePe, Paytm",
                      },
                      // { key: "bank" as const, icon: Building2, label: "Bank Transfer", detail: "NEFT / RTGS / IMPS" },
                      // { key: "online" as const, icon: Globe, label: "Online", detail: "Card / Net Banking" },
                    ].map((m) => (
                      <button
                        key={m.key}
                        type="button"
                        onClick={() => setMethod(m.key)}
                        className={`rounded-xl border-2 p-4 text-left transition-all ${
                          method === m.key
                            ? "border-primary-500 bg-primary-50"
                            : "border-gray-200 hover:border-primary-200"
                        }`}
                      >
                        <m.icon className={`h-6 w-6 ${method === m.key ? "text-primary-500" : "text-gray-400"}`} />
                        <p className="mt-2 font-semibold text-gray-900">{m.label}</p>
                        <p className="text-xs text-gray-500">{m.detail}</p>
                      </button>
                    ))}
                  </div>

                  {/* Payment details */}
                  <div className="mt-8 rounded-xl bg-warm-100 p-6">
                    {method === "upi" && (
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Pay with UPI & QR
                        </h3>
                        <div className="mt-4 flex flex-col items-center gap-4">
                          <div className="overflow-hidden rounded-xl bg-white p-3 shadow-sm">
                            <Image
                              src="/images/payment-qr.png"
                              alt="Scan to pay via UPI"
                              width={220}
                              height={220}
                              className="rounded-lg"
                            />
                          </div>
                          <p className="text-sm font-medium text-gray-700">Scan with any UPI app</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between rounded-lg bg-white p-4">
                          <div>
                            <p className="text-xs text-gray-500">UPI ID</p>
                            <p className="font-mono font-semibold text-gray-900">
                              {bankDetails.upiId}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleCopy(bankDetails.upiId, "upi")}
                            className="flex items-center gap-1.5 rounded-lg bg-primary-50 px-3 py-2 text-xs font-semibold text-primary-500"
                          >
                            <Copy className="h-3.5 w-3.5" />
                            {copied === "upi" ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <p className="mt-3 text-xs text-gray-500">
                          Open any UPI app and send to the above UPI ID, or scan the QR code.
                        </p>
                      </div>
                    )}

                    {/* {method === "bank" && (
                      <div>
                        <h3 className="font-semibold text-gray-900">Bank Transfer Details</h3>
                        <div className="mt-4 space-y-3">
                          {[
                            { label: "Account Name", value: bankDetails.name, key: "name" },
                            { label: "Account Number", value: bankDetails.account, key: "account" },
                            { label: "IFSC Code", value: bankDetails.ifsc, key: "ifsc" },
                            { label: "Bank", value: bankDetails.bank, key: "bank" },
                            { label: "Branch", value: bankDetails.branch, key: "branch" },
                          ].map((d) => (
                            <div key={d.key} className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
                              <div>
                                <p className="text-xs text-gray-500">{d.label}</p>
                                <p className="font-mono text-sm font-semibold text-gray-900">{d.value}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => handleCopy(d.value, d.key)}
                                className="flex items-center gap-1 text-xs font-semibold text-primary-500"
                              >
                                <Copy className="h-3 w-3" />
                                {copied === d.key ? "Copied!" : "Copy"}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {/* {method === "online" && (
                      <div className="text-center py-6">
                        <Globe className="mx-auto h-10 w-10 text-primary-500" />
                        <h3 className="mt-3 font-semibold text-gray-900">Online Payment Gateway</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          You will be redirected to our secure payment gateway to complete
                          the transaction via Credit Card, Debit Card, or Net Banking.
                        </p>
                      </div>
                    )} */}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-outline flex-1"
                    >
                      Back
                    </button>
                    <button type="submit" className="btn-primary flex-1 gap-2">
                      <Heart className="h-4 w-4" />
                      Complete Donation
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                256-bit SSL Encrypted
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" />
                100% Transparent
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                80G Tax Exemption
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
