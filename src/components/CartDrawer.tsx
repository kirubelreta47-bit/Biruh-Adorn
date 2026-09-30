import React from 'react';
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { generateWhatsAppOrderUrl } from '../config/brand';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsData = cart.map((item) => ({
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const url = generateWhatsAppOrderUrl(itemsData, totalPrice);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0B121E]/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] text-[#0B121E] shadow-2xl border-l border-[#E0DBD0] flex flex-col">
          {/* Drawer Header matching reference */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#EBE7DF]">
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#0B121E]">
              Your Bag
            </h2>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#0B121E] hover:text-[#C5A880] transition-colors rounded-full focus:outline-hidden cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Content */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#EAE5DA] flex items-center justify-center mb-4 text-[#8E98A8]">
                <ShoppingBag className="w-6 h-6" strokeWidth={1.4} />
              </div>
              <p className="font-serif text-xl text-[#0B121E] mb-2">
                Your bag is empty
              </p>
              <p className="text-xs text-[#5C6474] font-light max-w-xs mb-6">
                Explore our handcrafted Ethiopian jewelry and discover pieces with form.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 bg-[#0B121E] text-[#FAF8F5] text-xs font-medium uppercase tracking-widest hover:bg-[#C5A880] hover:text-[#0B121E] transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Items List matching exact layout */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EBE7DF]">
                {cart.map((item) => (
                  <div key={item.product.id} className="py-4 flex gap-4 items-center">
                    {/* Square Thumbnail */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#EAE5DA] shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-sans text-xs sm:text-sm font-medium text-[#0B121E]">
                        {item.product.name}
                      </h3>
                      <p className="font-sans text-xs text-[#5C6474] mt-0.5 mb-2 tabular-nums">
                        ETB {item.product.price.toLocaleString()}
                      </p>

                      {/* Stepper matching reference: [-] 1 [+] */}
                      <div className="inline-flex items-center border border-[#D5CEBE] bg-[#FAF8F5] rounded-xs">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1 text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 font-sans text-xs font-medium tabular-nums text-[#0B121E]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Trash icon matching reference on far right */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#8E98A8] hover:text-[#B91C1C] transition-colors p-2 shrink-0 cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Total & Checkout Section matching reference */}
              <div className="px-6 py-6 border-t border-[#EBE7DF] bg-[#FAF8F5] space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-xs sm:text-sm text-[#0B121E]">Total</span>
                  <span className="font-sans text-sm sm:text-base font-semibold tabular-nums text-[#0B121E]">
                    ETB {totalPrice.toLocaleString()}
                  </span>
                </div>

                {/* Button 1: Order via WhatsApp (Dark navy button with WhatsApp icon) */}
                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-[#0B121E] text-[#FAF8F5] text-xs font-medium tracking-wide hover:bg-[#1A253A] transition-all flex items-center justify-center gap-2.5 rounded-xs shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Order via WhatsApp</span>
                </button>

                {/* Button 2: Continue Shopping (Light button with outline) */}
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3.5 bg-[#FAF8F5] text-[#0B121E] border border-[#0B121E] text-xs font-medium tracking-wide hover:bg-[#EFE8DC] transition-all flex items-center justify-center rounded-xs cursor-pointer"
                >
                  <span>Continue Shopping</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
