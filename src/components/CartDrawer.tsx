import React, { useState } from 'react';
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

  const [orderNotes, setOrderNotes] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    const itemsData = cart.map((item) => ({
      name: item.selectedSize
        ? `${item.product.name} (Size: ${item.selectedSize})`
        : item.product.name,
      quantity: item.quantity,
      price: item.product.price,
    }));
    const url = generateWhatsAppOrderUrl(itemsData, totalPrice, orderNotes);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn select-none">
      {/* Dark Blur Backdrop */}
      <div
        className="absolute inset-0 bg-[#050B14]/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#07111F] text-[#F5F0E6] border-l border-[#203B5C] shadow-2xl flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#203B5C] bg-[#101F33]">
            <div className="flex items-center gap-2.5">
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F0E6]">
                Your Bag
              </h2>
              {cart.length > 0 && (
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D6B878]">
                  ({cart.reduce((a, b) => a + b.quantity, 0)})
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#B8B3A8] hover:text-[#D6B878] transition-colors focus:outline-hidden cursor-pointer"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>

          {/* Complimentary Delivery Banner in Deep Emerald */}
          <div className="px-6 py-2.5 bg-[#0B2B20] border-b border-[#315A48]/50 text-[11px] font-sans text-[#D6B878] text-center tracking-wide">
            Complimentary delivery within Addis Ababa
          </div>

          {/* Cart Content */}
          {cart.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[#101F33] border border-[#203B5C] flex items-center justify-center mb-4 text-[#D6B878]">
                <ShoppingBag className="w-7 h-7" strokeWidth={1.3} />
              </div>
              <p className="font-serif text-2xl text-[#F5F0E6] mb-2 font-normal">
                Your bag is empty
              </p>
              <p className="text-xs text-[#D4D0C6] font-light max-w-xs mb-8 leading-relaxed">
                Explore our handcrafted Ethiopian jewelry and discover pieces with architectural soul.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3.5 bg-[#D6B878] hover:bg-[#E8CD96] text-[#07111F] text-xs font-semibold uppercase tracking-[0.18em] transition-all cursor-pointer shadow-lg shadow-black/40"
              >
                Continue Exploring
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#203B5C]/60">
                {cart.map((item) => (
                  <div key={item.product.id + (item.selectedSize || '')} className="py-4 flex gap-4 items-center">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#101F33] border border-[#203B5C] shrink-0 overflow-hidden">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-sm sm:text-base font-normal text-[#F5F0E6] truncate">
                        {item.product.name}
                      </h3>
                      {item.selectedSize && (
                        <p className="text-[10px] font-sans text-[#D6B878] tracking-wide">
                          Size: {item.selectedSize}
                        </p>
                      )}
                      <p className="font-sans text-xs text-[#D6B878] mt-0.5 mb-2 tabular-nums font-medium">
                        ETB {item.product.price.toLocaleString()}
                      </p>

                      {/* Stepper */}
                      <div className="inline-flex items-center border border-[#203B5C] bg-[#101F33]">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1 text-[#F5F0E6] hover:text-[#D6B878] transition-colors cursor-pointer"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 font-sans text-xs font-medium tabular-nums text-[#F5F0E6]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 text-[#F5F0E6] hover:text-[#D6B878] transition-colors cursor-pointer"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Action */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-[#B8B3A8] hover:text-[#D6B878] transition-colors p-2 shrink-0 cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" strokeWidth={1.4} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Order Notes Field */}
              <div className="px-6 py-3 border-t border-[#203B5C] bg-[#101F33]">
                <label className="block text-[10px] font-sans uppercase tracking-[0.16em] text-[#D4D0C6] mb-1.5">
                  Order Notes / Custom Sizing (Optional)
                </label>
                <input
                  type="text"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="e.g. Ring size US 7, gift packaging..."
                  className="w-full bg-[#050B14] border border-[#203B5C] px-3 py-2 text-xs text-[#F5F0E6] placeholder-[#B8B3A8]/40 focus:outline-hidden focus:border-[#D6B878]"
                />
              </div>

              {/* Drawer Footer with Subtotal & WhatsApp CTA */}
              <div className="p-6 border-t border-[#203B5C] bg-[#050B14]">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-sans uppercase tracking-[0.18em] text-[#D4D0C6]">
                    Subtotal
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-sans text-[#B8B3A8]">ETB</span>
                    <span className="font-sans text-xl font-medium text-[#F5F0E6] tabular-nums">
                      {totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-4 gold-btn-shine text-[#07111F] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#07111F]" />
                  <span>Order via WhatsApp Concierge</span>
                </button>

                <p className="text-[10px] text-[#B8B3A8] font-sans text-center mt-3 tracking-wide">
                  Orders are finalized directly with our Addis Ababa atelier.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
