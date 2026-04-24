"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useOrders } from "@/context/OrdersContext";

type OrderStatus = "delivered" | "processing" | "canceled";

interface OrderItem {
  brand: string;
  name: string;
  price: number;
  qty: number;
  total: number;
  image: string;
}

interface Order {
  number: string;
  status: OrderStatus;
  date: string;
  qty: number;
  total: number;
  items?: OrderItem[];
  billing?: { name: string; address: string; phone: string };
  shipping?: { name: string; address: string; phone: string };
  promo?: { code: string; discount: number };
  shipmentFee?: number;
  productsTotal?: number;
  orderOverDiscount?: number;
  notes?: string;
  paymentMethod?: "bank" | "bitcoin";
  paymentReference?: string;
}

const mockOrders: Order[] = [
  {
    number: "№15539622",
    status: "delivered",
    date: "01/23/2024",
    qty: 2,
    total: 152,
  },
  {
    number: "№15539622",
    status: "processing",
    date: "01/23/2024",
    qty: 2,
    total: 152,
    items: [
      {
        brand: "Astera Labs",
        name: "Dietary supplements for fat burning and energy supply",
        price: 44,
        qty: 2,
        total: 88,
        image: "/images/shop/products/fat-burn-yohimbine.png",
      },
      {
        brand: "Astera Labs",
        name: "Dietary supplements for fat burning and energy supply",
        price: 44,
        qty: 2,
        total: 88,
        image: "/images/shop/products/fat-burn-yohimbine.png",
      },
    ],
    billing: {
      name: "Test Test\nTest Name",
      address: "Test\nDenver, CO 80202",
      phone: "(099) 780-1655",
    },
    shipping: {
      name: "Test Test\nTest Name",
      address: "Test\nDenver, CO 80202",
      phone: "(099) 780-1655",
    },
    productsTotal: 220,
    orderOverDiscount: -11.5,
    promo: { code: "Dines2026", discount: -12.1 },
    shipmentFee: 28,
  },
  {
    number: "№15539622",
    status: "canceled",
    date: "01/23/2024",
    qty: 2,
    total: 152,
  },
];

const statusBadge: Record<OrderStatus, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
  delivered: {
    label: "Delivered",
    bg: "bg-[#E8F8EE]",
    text: "text-[#00B638]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M20 6L9 17L4 12" stroke="#00B638" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  processing: {
    label: "In processing",
    bg: "bg-[#FFF4E6]",
    text: "text-[#FF6701]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#FF6701" strokeWidth="2" />
        <path d="M12 7v5l3 3" stroke="#FF6701" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  canceled: {
    label: "Canceled",
    bg: "bg-[#FFEAEA]",
    text: "text-[#FB2F2F]",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="#FB2F2F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
};

export default function HistoryOrdersPage() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { orders: realOrders, hydrated } = useOrders();

  // Convert real orders from context to the local Order shape and prepend to mock list
  const orders: Order[] = useMemo(() => {
    if (!hydrated) return mockOrders;
    const formattedReal: Order[] = realOrders.map((o) => {
      const qty = o.items.reduce((sum, i) => sum + i.qty, 0);
      const formattedDate = new Date(o.date).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
      const statusMap: Record<typeof o.status, OrderStatus> = {
        Processing: "processing",
        Shipped: "processing",
        Delivered: "delivered",
        Cancelled: "canceled",
      };
      return {
        number: `№${o.id}`,
        status: statusMap[o.status],
        date: formattedDate,
        qty,
        total: o.total,
        productsTotal: o.subtotal,
        shipmentFee: o.shipping,
        items: o.items.map((i) => ({
          brand: i.brand,
          name: i.name,
          price: i.price,
          qty: i.qty,
          total: i.price * i.qty,
          image: i.image || "/images/shop/products/fat-burn-yohimbine.png",
        })),
        shipping: {
          name: `${o.shippingAddress.firstName} ${o.shippingAddress.lastName}`,
          address: `${o.shippingAddress.street}\n${o.shippingAddress.city}, ${o.shippingAddress.zip}\n${o.shippingAddress.country}`,
          phone: o.shippingAddress.phone || "—",
        },
        billing: {
          name: `${o.shippingAddress.firstName} ${o.shippingAddress.lastName}`,
          address: `${o.shippingAddress.street}\n${o.shippingAddress.city}, ${o.shippingAddress.zip}\n${o.shippingAddress.country}`,
          phone: o.shippingAddress.phone || "—",
        },
        notes: o.notes,
        paymentMethod: o.paymentMethod,
        paymentReference: `0-${o.id}`,
      };
    });
    // Real orders first, then mock orders for demo
    return [...formattedReal, ...mockOrders];
  }, [realOrders, hydrated]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[18px] font-semibold text-[#181818] leading-[26px]">History Orders</h2>
      <div className="bg-white border border-[#E7E7E7] rounded-[12px] overflow-hidden">
        {/* Header row — desktop only */}
        <div className="hidden tablet:grid grid-cols-[1.2fr_1.2fr_1fr_0.8fr_1fr_40px] items-center bg-[#F7F7F7] px-6 py-3 text-[12px] text-[#7E7E7E] leading-4">
          <span>Order Number:</span>
          <span>Status</span>
          <span>Order Date:</span>
          <span>Quantity</span>
          <span>Order Total:</span>
          <span />
        </div>

        {orders.map((order, i) => {
          const badge = statusBadge[order.status];
          const isOpen = expanded === i;
          const canExpand = !!order.items;
          return (
            <div key={i} className="border-t border-[#E7E7E7] first:border-t-0 tablet:first:border-t">
              {/* Desktop row */}
              <div className="hidden tablet:grid grid-cols-[1.2fr_1.2fr_1fr_0.8fr_1fr_40px] items-center px-6 py-4 text-[14px] text-[#181818]">
                <span className="font-semibold">{order.number}</span>
                <span>
                  <span className={`inline-flex items-center gap-1.5 ${badge.bg} ${badge.text} text-[12px] font-semibold px-3 py-1 rounded-[20px]`}>
                    {badge.icon}
                    {badge.label}
                  </span>
                </span>
                <span>{order.date}</span>
                <span>{order.qty}</span>
                <span className="font-semibold">{order.total.toFixed(2)} €</span>
                {canExpand ? (
                  <button
                    onClick={() => setExpanded(isOpen ? null : i)}
                    className="cursor-pointer w-8 h-8 rounded-full bg-[#F7F7F7] hover:bg-[#E7E7E7] flex items-center justify-center transition-colors"
                    aria-label={isOpen ? "Collapse" : "Expand"}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      {isOpen ? (
                        <path d="M5 12h14" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" />
                      ) : (
                        <path d="M12 5v14M5 12h14" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" />
                      )}
                    </svg>
                  </button>
                ) : (
                  <span />
                )}
              </div>

              {/* Mobile card row */}
              <div className="tablet:hidden px-4 py-4 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[14px] font-semibold text-[#181818]">{order.number}</span>
                  <span className={`inline-flex items-center gap-1.5 ${badge.bg} ${badge.text} text-[11px] font-semibold px-2 py-1 rounded-[20px] shrink-0`}>
                    {badge.icon}
                    {badge.label}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 text-[13px]">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-[#7E7E7E]">Date</span>
                    <span className="text-[#181818]">{order.date}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-[#7E7E7E]">Qty</span>
                    <span className="text-[#181818]">{order.qty}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[11px] text-[#7E7E7E]">Total</span>
                    <span className="text-[#181818] font-semibold">{order.total.toFixed(2)} €</span>
                  </div>
                  {canExpand ? (
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="cursor-pointer w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center shrink-0"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        {isOpen ? (
                          <path d="M5 12h14" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" />
                        ) : (
                          <path d="M12 5v14M5 12h14" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" />
                        )}
                      </svg>
                    </button>
                  ) : (
                    <span className="w-8 shrink-0" />
                  )}
                </div>
              </div>
              {isOpen && canExpand && (
                <div className="bg-[#FAFAFA] border-t border-[#E7E7E7] px-4 tablet:px-6 py-4 tablet:py-6 flex flex-col gap-4 tablet:gap-6">
                  {/* Items list */}
                  <div className="flex flex-col">
                    <div className="hidden tablet:grid grid-cols-[auto_1fr_100px_100px_120px] items-center gap-4 text-[12px] text-[#7E7E7E] pb-2 border-b border-[#E7E7E7]">
                      <span className="w-[60px]"></span>
                      <span></span>
                      <span>Price</span>
                      <span>Quantity</span>
                      <span>Total Price</span>
                    </div>
                    {order.items!.map((item, j) => (
                      <div key={j} className="tablet:grid tablet:grid-cols-[auto_1fr_100px_100px_120px] flex items-start gap-3 tablet:gap-4 py-3 tablet:py-4 border-b border-[#E7E7E7] last:border-b-0">
                        <div className="w-12 h-12 tablet:w-[60px] tablet:h-[60px] bg-white border border-[#E7E7E7] rounded-[8px] p-1 flex items-center justify-center shrink-0">
                          <Image src={item.image} alt={item.name} width={52} height={52} className="object-contain" />
                        </div>
                        <div className="flex-1 tablet:flex-initial flex flex-col gap-0.5 min-w-0">
                          <p className="text-[11px] tablet:text-[12px] text-[#7E7E7E] leading-4">{item.brand}</p>
                          <p className="text-[13px] tablet:text-[14px] font-semibold text-[#181818] leading-5">{item.name}</p>
                          <div className="flex tablet:hidden gap-3 text-[11px] text-[#7E7E7E] mt-1">
                            <span>Price: <span className="text-[#181818] font-semibold">{item.price}€</span></span>
                            <span>Qty: <span className="text-[#181818] font-semibold">{item.qty}</span></span>
                            <span>Total: <span className="text-[#181818] font-semibold">{item.total}€</span></span>
                          </div>
                        </div>
                        <span className="hidden tablet:block text-[14px] font-semibold text-[#181818]">{item.price}€</span>
                        <span className="hidden tablet:block text-[14px] font-semibold text-[#181818]">{item.qty}</span>
                        <span className="hidden tablet:block text-[14px] font-semibold text-[#181818]">{item.total}€</span>
                      </div>
                    ))}
                  </div>

                  {/* Billing + Shipping */}
                  <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6">
                    {[
                      { title: "Billing Address", data: order.billing! },
                      { title: "Shipping Address", data: order.shipping! },
                    ].map((a) => (
                      <div key={a.title} className="flex flex-col gap-2">
                        <p className="text-[14px] font-semibold text-[#181818] leading-5">{a.title}</p>
                        <div className="text-[14px] text-[#7E7E7E] leading-5 whitespace-pre-line">
                          {a.data.name}
                          {"\n"}
                          {a.data.address}
                          {"\n"}
                          {a.data.phone}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order information */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-semibold text-[#181818] leading-5 mb-1">Order information</p>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7E7E7E]">Products</span>
                      <span className="text-[#181818]">{order.productsTotal?.toFixed(2)} €</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7E7E7E]">Order over 200€</span>
                      <span className="text-[#FB2F2F]">{order.orderOverDiscount?.toFixed(2)} €</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7E7E7E] flex items-center gap-2">
                        Promocode
                        <span className="bg-[#FFF4E6] text-[#FF6701] px-2 py-[2px] rounded-[6px] text-[12px] font-semibold inline-flex items-center gap-1">
                          {order.promo?.code}
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6l12 12" stroke="#FF6701" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                        </span>
                      </span>
                      <span className="text-[#FB2F2F]">{order.promo?.discount.toFixed(2)} €</span>
                    </div>
                    <div className="flex items-center justify-between text-[14px]">
                      <span className="text-[#7E7E7E]">Shipment (Shipping outside EU)</span>
                      <span className="text-[#181818]">{order.shipmentFee?.toFixed(2)} €</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-[#E7E7E7] mt-2">
                      <span className="text-[16px] font-semibold text-[#181818]">Total</span>
                      <span className="text-[16px] font-semibold text-[#181818]">{order.total.toFixed(2)} €</span>
                    </div>
                  </div>

                  {/* Customer note */}
                  {order.notes && (
                    <div className="flex flex-col gap-1.5 bg-white border border-[#E7E7E7] rounded-[10px] p-4">
                      <p className="text-[12px] text-[#7E7E7E] leading-4">Order note</p>
                      <p className="text-[14px] text-[#181818] leading-5 whitespace-pre-line">{order.notes}</p>
                    </div>
                  )}

                  {/* Payment details */}
                  {order.paymentMethod && (
                    <div className="flex flex-col gap-3 bg-white border border-[#E7E7E7] rounded-[10px] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[14px] font-semibold text-[#181818] leading-5">Payment details</p>
                        <span className="text-[11px] text-[#7E7E7E] leading-4">
                          {order.paymentMethod === "bitcoin" ? "Bitcoin" : "Bank transfer"}
                        </span>
                      </div>
                      {order.paymentMethod === "bank" ? (
                        <div className="flex flex-col gap-2 text-[13px]">
                          {[
                            { label: "Beneficiary", value: "Dressmar LTD" },
                            { label: "IBAN", value: "MT27CFTE28004000000000005416247" },
                            { label: "BIC", value: "CFTEMTM1" },
                            { label: "Bank Name", value: "OpenPayd Financial Services Malta Limited" },
                            { label: "Country", value: "Malta" },
                            { label: "Payment Methods", value: "SEPA, SEPA Instant, Internal" },
                            { label: "Payment Reference", value: order.paymentReference ?? "—" },
                          ].map((r) => (
                            <div key={r.label} className="flex items-start justify-between gap-3 border-b border-[#F0F0F0] pb-2 last:border-b-0 last:pb-0">
                              <span className="text-[#7E7E7E] shrink-0">{r.label}</span>
                              <span className="text-[#181818] font-semibold text-right break-all">{r.value}</span>
                            </div>
                          ))}
                          <p className="text-[11px] text-[#7E7E7E] leading-4 mt-1">
                            Use ONLY this payment reference in the transfer note. Do not include website name, email, or product names.
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 text-[13px]">
                          <div className="flex items-start justify-between gap-3 border-b border-[#F0F0F0] pb-2">
                            <span className="text-[#7E7E7E]">Network</span>
                            <span className="text-[#181818] font-semibold">Bitcoin (BTC)</span>
                          </div>
                          <div className="flex items-start justify-between gap-3 border-b border-[#F0F0F0] pb-2">
                            <span className="text-[#7E7E7E] shrink-0">BTC Address</span>
                            <span className="text-[#181818] font-semibold font-mono break-all text-right">
                              3456pGjwv9cijehLts6KRhPaXmrAfRshNj
                            </span>
                          </div>
                          <div className="flex items-start justify-between gap-3">
                            <span className="text-[#7E7E7E]">Amount (EUR)</span>
                            <span className="text-[#181818] font-semibold">{order.total.toFixed(2)} €</span>
                          </div>
                          <p className="text-[11px] text-[#7E7E7E] leading-4 mt-1">
                            Send exactly the equivalent BTC amount to the address above. The transaction confirms automatically.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
