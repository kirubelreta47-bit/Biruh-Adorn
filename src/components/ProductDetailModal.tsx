import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowLeft, Check, MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { BRAND_CONFIG } from '../config/brand';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateHome: () => void;
}

const RING_SIZES = ['Adjustable (US 6–9)', 'US 6', 'US 7', 'US 8', 'US 9', 'Custom Size'];

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.category === 'rings' ? 'Adjustable (US 6–9)' : ''
  );
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<'details' | 'material' | 'care' | null>('details');

  if (!product) return null;

  const currentImage = product.images[selectedImageIndex] || product.images[0];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const sizeText = selectedSize ? ` (Size: ${selectedSize})` : '';
    const text = `Hello Biruh Adorn! I am interested in purchasing:\n• ${product.name} × ${quantity}${sizeText} — ETB ${(product.price * quantity).toLocaleString()}\n\nPlease let me know the availability and delivery details.`;
    const waUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const toggleSection = (section: 'details' | 'material' | 'care') => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 bg-[#050B14]/85 backdrop-blur-md overflow-y-auto animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-[#101F33] border border-[#203B5C] shadow-2xl min-h-screen sm:min-h-auto sm:max-h-[92vh] flex flex-col overflow-hidden text-[#F5F0E6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Back Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 border-b border-[#203B5C] bg-[#101F33]/95 backdrop-blur-md">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.18em] text-[#D6B878] hover:text-[#E8CD96] transition-colors py-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Collection</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#F5F0E6]/70 hover:text-[#D6B878] transition-colors focus:outline-hidden cursor-pointer"
            aria-label="Close product detail"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-5 sm:p-8 lg:p-10 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Gallery Column (Left Col 7) */}
            <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 shrink-0">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 bg-[#07111F] border transition-all cursor-pointer shrink-0 ${
                        selectedImageIndex === idx
                          ? 'border-[#D6B878] opacity-100'
                          : 'border-[#203B5C] opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Main Photo Stage */}
              <div className="relative aspect-4/5 flex-1 bg-[#07111F] border border-[#203B5C] overflow-hidden">
                <img
                  src={currentImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Product Information Column (Right Col 5) */}
            <div className="md:col-span-5 flex flex-col text-left">
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D6B878] block mb-2">
                {product.categoryLabel}
              </span>

              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F0E6] font-normal leading-tight mb-3">
                {product.name}
              </h1>

              {/* Price in ETB */}
              <div className="font-sans text-xl sm:text-2xl font-medium text-[#F5F0E6] mb-4 tabular-nums">
                ETB {product.price.toLocaleString()}
              </div>

              {/* Short Description */}
              <p className="font-sans text-xs sm:text-sm text-[#D4D0C6] font-light leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Ring Size Selector if Ring */}
              {product.category === 'rings' && (
                <div className="mb-6">
                  <label className="block text-[11px] font-sans uppercase tracking-[0.16em] text-[#D6B878] mb-2">
                    Select Size
                  </label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full bg-[#07111F] border border-[#203B5C] px-3 py-2.5 text-xs text-[#F5F0E6] focus:outline-hidden focus:border-[#D6B878] cursor-pointer"
                  >
                    {RING_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-sans uppercase tracking-[0.16em] text-[#B8B3A8]">
                  Quantity
                </span>
                <div className="inline-flex items-center border border-[#203B5C] bg-[#07111F]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 text-[#F5F0E6] hover:text-[#D6B878] transition-colors cursor-pointer"
                    aria-label="Decrease"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-3.5 font-sans text-xs font-medium tabular-nums text-[#F5F0E6]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 text-[#F5F0E6] hover:text-[#D6B878] transition-colors cursor-pointer"
                    aria-label="Increase"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Primary Add to Bag Button with Gold Shine */}
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2 cursor-pointer gold-btn-shine text-[#07111F] mb-3"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#07111F]" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#07111F]" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              {/* Direct WhatsApp Order CTA */}
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 border border-[#D6B878]/40 hover:border-[#D6B878] text-xs font-sans uppercase tracking-[0.18em] text-[#D6B878] hover:text-[#E8CD96] transition-colors flex items-center justify-center gap-2 cursor-pointer mb-8"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Inquire via WhatsApp</span>
              </button>

              {/* Accordions */}
              <div className="border-t border-[#203B5C]/60 divide-y divide-[#203B5C]/60">
                {/* Details */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleSection('details')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#F5F0E6] font-medium text-left cursor-pointer"
                  >
                    <span>Details &amp; Specifications</span>
                    <span className="text-[#D6B878] text-sm">
                      {openSection === 'details' ? '−' : '+'}
                    </span>
                  </button>
                  {openSection === 'details' && (
                    <ul className="mt-2.5 space-y-1.5 text-xs text-[#D4D0C6] font-light pl-4 list-disc marker:text-[#D6B878]">
                      {product.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Material */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleSection('material')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#F5F0E6] font-medium text-left cursor-pointer"
                  >
                    <span>Material &amp; Craft</span>
                    <span className="text-[#D6B878] text-sm">
                      {openSection === 'material' ? '−' : '+'}
                    </span>
                  </button>
                  {openSection === 'material' && (
                    <div className="mt-2.5 text-xs text-[#D4D0C6] font-light leading-relaxed">
                      <p className="font-medium text-[#F5F0E6] mb-1">{product.material}</p>
                      <p>
                        Handcrafted using ethically reclaimed metals and regional Ethiopian highland stones at our Addis Ababa atelier.
                      </p>
                    </div>
                  )}
                </div>

                {/* Care */}
                <div className="py-3">
                  <button
                    type="button"
                    onClick={() => toggleSection('care')}
                    className="w-full flex items-center justify-between text-xs font-sans text-[#F5F0E6] font-medium text-left cursor-pointer"
                  >
                    <span>Artisan Care</span>
                    <span className="text-[#D6B878] text-sm">
                      {openSection === 'care' ? '−' : '+'}
                    </span>
                  </button>
                  {openSection === 'care' && (
                    <ul className="mt-2.5 space-y-1.5 text-xs text-[#D4D0C6] font-light pl-4 list-disc marker:text-[#D6B878]">
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
