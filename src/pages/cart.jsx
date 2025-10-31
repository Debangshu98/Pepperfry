import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../components/cartSlice.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const formatCurrency = (value) =>
    value.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[₹,]/g, "")),
    0,
  );

  const shippingFee = cartTotal > 0 ? 499 : 0;
  const grandTotal = cartTotal + shippingFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-500">
            Shopping Cart
          </p>
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Review your curated pieces
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Keep the items you love, update quantities, or continue exploring custom finds crafted to
            elevate every room.
          </p>
        </header>

        {cartItems.length === 0 ? (
          <div className="mx-auto max-w-3xl rounded-3xl bg-white/80 p-12 text-center shadow-xl backdrop-blur">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-500">
              <span className="text-2xl">🛒</span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-gray-900">
              Your cart is feeling a little empty
            </h2>
            <p className="mt-3 text-gray-600">
              Discover handcrafted furniture, lighting, and décor designed to bring warmth into your
              home.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Browse Products
              </Link>
              <Link
                to="/home"
                className="inline-flex items-center justify-center rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-600 transition hover:border-emerald-400 hover:text-emerald-700"
              >
                Return Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <section className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-emerald-100 pb-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Your handpicked collection
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {cartItems.length} {cartItems.length === 1 ? "item" : "items"} selected
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => dispatch(clearCart())}
                  className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-500 transition hover:border-gray-300 hover:text-gray-700"
                >
                  Clear Cart
                </button>
              </div>

              <ul className="space-y-6">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex flex-1 items-center gap-5">
                      <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-emerald-50">
                        <img
                          src={item.imagePath}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-500">
                          curated
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="mt-2 text-sm text-gray-600">
                          {item.description || "Crafted with premium materials and timeless appeal."}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
                      <span className="text-lg font-semibold text-emerald-600">
                        {item.price}
                      </span>
                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-600"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between rounded-2xl bg-emerald-50/80 px-6 py-5 text-sm text-emerald-700">
                <div>
                  Complimentary styling advice
                  <span className="ml-2 inline-flex rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-500">
                    New
                  </span>
                </div>
                <Link to="/contact" className="font-semibold underline underline-offset-4">
                  Schedule a session
                </Link>
              </div>
            </section>

            <aside className="flex h-full flex-col justify-between rounded-3xl bg-gray-900 p-8 text-white shadow-2xl">
              <div>
                <h2 className="text-2xl font-semibold">Order summary</h2>
                <p className="mt-2 text-sm text-gray-300">
                  Secure checkout with encrypted payment and complimentary delivery insurance.
                </p>

                <dl className="mt-8 space-y-4 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-300">Items</dt>
                    <dd className="font-semibold text-white">{formatCurrency(cartTotal)}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-300">Styling & support</dt>
                    <dd className="font-semibold text-white">Included</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-300">Shipping</dt>
                    <dd className="font-semibold text-white">
                      {shippingFee === 0 ? "Complimentary" : formatCurrency(shippingFee)}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 rounded-2xl bg-white/10 p-5">
                  <div className="flex items-center justify-between text-base font-semibold">
                    <span>Total due today</span>
                    <span>{formatCurrency(grandTotal)}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-300">
                    Taxes calculated at checkout. Free returns within 14 days.
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-3">
                <button
                  type="button"
                  className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-400/30 transition hover:-translate-y-0.5 hover:bg-emerald-600"
                  onClick={() => navigate('/AddressPage')}
                >
                  Proceed to Checkout
                </button>
                <Link
                  to="/products"
                  className="flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Continue shopping
                </Link>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
