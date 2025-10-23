import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Toast from "@radix-ui/react-toast";
import { Navbar } from "../components/navBar.jsx";
import { addToCart as addItem, removeFromCart as removeItem } from "../components/cartSlice.jsx";

export const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Oak Wood Dining Table",
      description: "Solid oak table with a matte finish and extendable leaf.",
      price: "₹24,999",
      imagePath: "/images/dining_table.jpg",
    },
    {
      id: 2,
      name: "Velvet Accent Chair",
      description: "Plush velvet chair with curved arms and brass legs.",
      price: "₹14,200",
      imagePath: "/images/velvet_chair.jpg",
    },
    {
      id: 3,
      name: "Minimalist Floor Lamp",
      description: "Slim metal floor lamp with warm LED illumination.",
      price: "₹6,450",
      imagePath: "/images/floor_lamp.jpg",
    },
    {
      id: 4,
      name: "Marble Coffee Table",
      description: "Round marble top table with powder-coated steel base.",
      price: "₹18,600",
      imagePath: "/images/coffee_table.jpg",
    },
    {
      id: 5,
      name: "Handwoven Area Rug",
      description: "100% wool rug with geometric patterns and tassel edges.",
      price: "₹9,990",
      imagePath: "/images/rug.jpg",
    },
    {
      id: 6,
      name: "Modern Bookshelf",
      description: "Five-tier bookshelf crafted from teak veneer and steel.",
      price: "₹22,750",
      imagePath: "/images/bookshelf.jpg",
    },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastContent, setToastContent] = React.useState({ title: "", description: "" });

  const showToast = React.useCallback((title, description) => {
    setToastContent({ title, description });
    setToastOpen(true);
  }, []);

  const handleAddToCart = React.useCallback(
    (product) => {
      const exists = cartItems.some((item) => item.id === product.id);
      if (exists) {
        showToast("Already in Cart", `${product.name} is already in your cart.`);
        return;
      }

      dispatch(addItem(product));
      showToast("Product Added", `${product.name} has been added to your cart.`);
    },
    [cartItems, dispatch, showToast],
  );

  const handleRemoveFromCart = React.useCallback(
    (product) => {
      const exists = cartItems.some((item) => item.id === product.id);
      if (!exists) {
        showToast("Not Found", `${product.name} is not currently in your cart.`);
        return;
      }

      dispatch(removeItem(product.id));
      showToast("Product Removed", `${product.name} has been removed from your cart.`);
    },
    [cartItems, dispatch, showToast],
  );

  const handleToastOpenChange = React.useCallback((open) => {
    setToastOpen(open);
    if (!open) {
      setToastContent({ title: "", description: "" });
    }
  }, []);

  return (
    <Toast.Provider duration={3000} swipeDirection="right">
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <section className="mx-auto max-w-6xl px-6 py-12">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover our curated collection of home décor and furniture, thoughtfully designed to
              elevate every corner of your space.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const isInCart = cartItems.some((item) => item.id === product.id);

              return (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                    <p className="mt-3 flex-1 text-sm text-gray-600">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-semibold text-emerald-600">{product.price}</span>
                      <button
                        type="button"
                        className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                        onClick={() =>
                          isInCart ? handleRemoveFromCart(product) : handleAddToCart(product)
                        }
                      >
                        {isInCart ? "Remove from Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <Toast.Root
        className="pointer-events-auto w-full rounded-lg bg-white p-4 shadow-lg"
        open={toastOpen}
        onOpenChange={handleToastOpenChange}
      >
        <Toast.Title className="text-sm font-semibold text-gray-900">{toastContent.title}</Toast.Title>
        <Toast.Description className="mt-1 text-sm text-gray-600">
          {toastContent.description}
        </Toast.Description>
        <Toast.Close asChild>
          <button
            type="button"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white transition hover:bg-emerald-600"
          >
            Close
          </button>
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport className="fixed top-4 right-4 z-50 flex w-80 max-w-[90vw] flex-col gap-3 outline-none" />
    </Toast.Provider>
  );
};
