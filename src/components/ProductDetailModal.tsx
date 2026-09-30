import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowLeft, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateHome: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNavigateHome,
}) => {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<'details' | 'material' | 'care' | null>('details');

  if (!product) return null;

  const currentImage = product.images[selectedImageIndex] || product.images[0];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const toggleSection = (section: 'details' | 'material' | 'care') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#0B121E]/80 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      {/* Modal Card Container */}
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] shadow-2xl border border-[#E0DBD0] min-h-screen sm:min-h-auto sm:max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Mobile/Desktop Header with Prominent Back Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#EBE7DF] bg-[#FAF8F5]/95 backdrop-blur-md">
          {/* Back Button for Easy Mobile Navigation */}
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#0B121E] hover:text-[#C5A880] transition-colors py-1 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Shop</span>
          </button>

          {/* Close Icon Button */}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#0B121E] hover:text-[#C5A880] transition-colors rounded-full focus:outline-hidden cursor-pointer bg-[#EAE5DA]/50 sm:bg-transparent"
            aria-label="Close product detail"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 lg:p-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            {/* Gallery (Left Col 7) */}
            <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-3">
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 shrink-0">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-[#F4F1EA] border transition-all cursor-pointer shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-[#0B121E] opacity-100'
                          : 'border-[#E5DFD4] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Photo */}
              <div className="relative aspect-4/5 flex-1 bg-[#F4F1EA] border border-[#E5DFD4] overflow-hidden">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Product Information (Right Col 5) */}
            <div className="md:col-span-5 flex flex-col">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#8E98A8] block mb-1">
                {product.categoryLabel}
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl text-[#0B121E] font-normal leading-tight mb-2">
                {product.name}
              </h1>

              <div className="font-sans text-lg sm:text-xl font-medium text-[#0B121E] mb-4 tabular-nums">
                ETB {product.price.toLocaleString()}
              </div>

              <p className="font-sans text-xs text-[#5C6474] font-light leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Quantity Selector */}
              <div className="mb-6 flex items-center gap-4">
                <span className="text-xs font-sans text-[#6A7280]">Quantity</span>
                <div className="inline-flex items-center border border-[#D5CEBE] bg-[#FFFFFF]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer"
                    aria-label="Decrease"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3 font-sans text-xs font-medium tabular-nums text-[#0B121E]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-[#0B121E] hover:text-[#C5A880] transition-colors cursor-pointer"
                    aria-label="Increase"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Add to Bag Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs mb-6 ${
                  added
                    ? 'bg-[#25D366] text-white'
                    : 'bg-[#0B121E] text-[#FAF8F5] hover:bg-[#C5A880] hover:text-[#0B121E]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              {/* Back to Browse button on Mobile bottom */}
              <div className="sm:hidden mb-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 border border-[#D5CEBE] text-xs font-sans uppercase tracking-widest text-[#5C6474] text-center"
                >
                  ← Continue Shopping
                </button>
              </div>

              {/* Clean Accordions */}
              <div className="border-t border-[#EBE7DF] divide-y divide-[#EBE7DF]">
                {/* Details */}
                <div className="py-2.5">
                  <button
                    type="button"
                    onClick={() => toggleSection('details')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#0B121E] font-medium text-left cursor-pointer"
                  >
                    <span>Details</span>
                    <span className="text-[#8E98A8] text-sm">{openSection === 'details' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'details' && (
                    <ul className="mt-2 space-y-1 text-xs text-[#5C6474] font-light pl-4 list-disc marker:text-[#C5A880]">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Material */}
                <div className="py-2.5">
                  <button
                    type="button"
                    onClick={() => toggleSection('material')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#0B121E] font-medium text-left cursor-pointer"
                  >
                    <span>Material</span>
                    <span className="text-[#8E98A8] text-sm">{openSection === 'material' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'material' && (
                    <div className="mt-2 text-xs text-[#5C6474] font-light leading-relaxed">
                      <p className="font-medium text-[#0B121E] mb-1">{product.material}</p>
                      <p>Handcrafted using ethically reclaimed metals and regional Ethiopian highland stones.</p>
                    </div>
                  )}
                </div>

                {/* Care */}
                <div className="py-2.5">
                  <button
                    type="button"
                    onClick={() => toggleSection('care')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#0B121E] font-medium text-left cursor-pointer"
                  >
                    <span>Care</span>
                    <span className="text-[#8E98A8] text-sm">{openSection === 'care' ? '−' : '+'}</span>
                  </button>
                  {openSection === 'care' && (
                    <ul className="mt-2 space-y-1 text-xs text-[#5C6474] font-light pl-4 list-disc marker:text-[#C5A880]">
                      {product.care.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
