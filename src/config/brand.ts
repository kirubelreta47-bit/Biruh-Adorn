export const BRAND_CONFIG = {
  name: 'Biruh Adorn',
  tagline: 'Empowering Jewelry',
  origin: 'Handcrafted in Addis Ababa, Ethiopia',
  phone: '+251 91 123 4567',
  whatsappNumber: '251911234567', // International format without + or spaces
  instagramHandle: 'biruh_adorn',
  instagramUrl: 'https://instagram.com/biruh_adorn',
  email: 'concierge@biruhadorn.com',
  currency: 'ETB',
  currencySymbol: 'ETB',
  shippingInfo: 'Complimentary delivery within Addis Ababa · Nationwide & Global Delivery Available',
};

export const generateWhatsAppOrderUrl = (
  items: { name: string; quantity: number; price: number }[],
  total: number,
  notes?: string
): string => {
  let message = `Hello Biruh Adorn,\n\nI would like to order:\n\n`;

  items.forEach((item) => {
    message += `• ${item.name} × ${item.quantity} — ETB ${(
      item.price * item.quantity
    ).toLocaleString()}\n`;
  });

  message += `\nTotal: ETB ${total.toLocaleString()}`;

  if (notes && notes.trim()) {
    message += `\n\nNotes / Ring size / Customizations: ${notes.trim()}`;
  }

  message += `\n\nPlease let me know the payment and delivery details.`;

  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};

export const generateWhatsAppCustomOrderUrl = (inquiry?: string): string => {
  const message = `Hello Biruh Adorn,\n\nI am interested in commissioning a custom handcrafted piece (Make It Yours).\n\n${
    inquiry
      ? `My idea / concept: ${inquiry}\n\n`
      : `I have a specific design / gemstone idea in mind.\n\n`
  }Please let me know how we can start the consultation process.`;

  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};

export const generateWhatsAppDirectProductUrl = (
  productName: string,
  price: number,
  quantity: number = 1
): string => {
  const message = `Hello Biruh Adorn,\n\nI would like to order:\n• ${productName} × ${quantity} — ETB ${(
    price * quantity
  ).toLocaleString()}\n\nTotal: ETB ${(
    price * quantity
  ).toLocaleString()}\n\nPlease let me know the availability and next steps.`;

  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};
