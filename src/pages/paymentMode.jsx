import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentMode = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  const formatCurrency = (value) =>
    value.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[₹,]/g, "")),
    0,
  );

  const shippingFee = cartTotal > 0 ? 499 : 0;
  const orderTotal = cartTotal + shippingFee;

  const paymentOptions = [
    {
      id: "card",
      title: "Credit or Debit Card",
      description: "Visa, Mastercard, RuPay, American Express",
      details: [
        { label: "Card number", placeholder: "XXXX XXXX XXXX 1234" },
        { label: "Name on card", placeholder: "Full Name" },
        { label: "Expiry", placeholder: "MM/YY" },
        { label: "CVV", placeholder: "●●●" },
      ],
    },
    {
      id: "upi",
      title: "UPI",
      description: "PhonePe, Google Pay, Paytm, and more",
      details: [{ label: "UPI ID", placeholder: "name@upi" }],
    },
    {
      id: "netbanking",
      title: "Net Banking",
      description: "Select from 50+ banks",
      details: [],
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay with cash or card on delivery",
      details: [],
    },
  ];

  const selectedPayment = paymentOptions.find((option) => option.id === selectedMethod);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">Secure Checkout</p>
            <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">Choose your payment method</h1>
            <p className="mt-3 text-sm text-gray-600">
              Complete your purchase with encrypted payment, buyer protection, and free returns for 14 days.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-gray-400">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">1</span>
            <span>Cart</span>
            <span className="h-px w-10 bg-gray-200" />
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">2</span>
            <span>Address</span>
            <span className="h-px w-10 bg-gray-200" />
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500 text-emerald-500">3</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <section className="space-y-8 rounded-3xl bg-white/95 p-8 shadow-xl backdrop-blur">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Payment options</h2>
              <p className="mt-2 text-sm text-gray-500">Select your preferred payment method to continue.</p>
            </div>

            <div className="space-y-4">
              {paymentOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedMethod(option.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition ${
                    selectedMethod === option.id
                      ? "border-emerald-400 bg-emerald-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-emerald-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-widest text-emerald-500">{option.title}</div>
                      <div className="mt-2 text-sm text-gray-600">{option.description}</div>
                    </div>
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                        selectedMethod === option.id ? "border-emerald-500 bg-emerald-500" : "border-gray-300"
                      }`}
                    >
                      <span className="text-white">{selectedMethod === option.id ? "✓" : ""}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {selectedPayment && selectedPayment.details.length > 0 && (
              <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Enter details</h3>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {selectedPayment.details.map((detail) => (
                    <label key={detail.label} className="flex flex-col gap-2 text-sm">
                      <span className="font-semibold text-gray-700">{detail.label}</span>
                      <input
                        type="text"
                        placeholder={detail.placeholder}
                        className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                      />
                    </label>
                  ))}
                </div>
                {selectedMethod === "netbanking" && (
                  <div className="mt-6">
                    <label className="text-sm font-semibold text-gray-700">Select bank</label>
                    <select className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100">
                      <option>State Bank of India</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-gray-100 bg-white/60 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Billing address</h3>
                  <p className="mt-1 text-sm text-gray-500">Invoice and receipts will be sent to this address.</p>
                </div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={billingSameAsShipping}
                    onChange={(event) => setBillingSameAsShipping(event.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-500 focus:ring-emerald-400"
                  />
                  Same as shipping
                </label>
              </div>

              {!billingSameAsShipping && (
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                  <input
                    type="text"
                    placeholder="Street address"
                    className="sm:col-span-2 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                  <input
                    type="text"
                    placeholder="PIN code"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/cart"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
              >
                Return to Cart
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Place Order Securely
              </button>
            </div>
          </section>

          <aside className="space-y-6 rounded-3xl bg-gray-900 p-8 text-white shadow-2xl">
            <div>
              <h2 className="text-2xl font-semibold">Order summary</h2>
              <p className="mt-2 text-sm text-gray-400">Encrypted payment with buyer protection and priority support.</p>
              <div className="mt-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-300">
                    Your cart is empty. Add products to continue.
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div>
                        <div className="text-sm font-semibold text-white">{item.name}</div>
                        <div className="mt-1 text-xs text-gray-400">
                          {item.description || "Handcrafted for timeless appeal."}
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-emerald-300">{item.price}</div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between text-gray-300">
                <span>Items total</span>
                <span className="font-semibold text-white">{formatCurrency(cartTotal)}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Shipping</span>
                <span className="font-semibold text-white">
                  {shippingFee === 0 ? "Complimentary" : formatCurrency(shippingFee)}
                </span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>Taxes</span>
                <span className="font-semibold text-white">To be calculated</span>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Total payable</span>
                <span>{formatCurrency(orderTotal)}</span>
              </div>
              <p className="mt-2 text-xs text-gray-300">Securely processed with 256-bit SSL encryption.</p>
            </div>

            <div className="text-xs text-gray-400">
              By placing your order you agree to the Pepperfry Terms of Service and Refund Policy.
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PaymentMode;
