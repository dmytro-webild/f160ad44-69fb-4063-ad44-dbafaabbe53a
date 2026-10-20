import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import PolicyContent from "@/components/sections/legal/PolicyContent";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ShippingReturnsPage() {
  const policySections = [
    {
      heading: "1. Shipping & Order Processing",
      content: [
        {
          type: "paragraph" as const,
          text: "Orders are processed within 1 to 2 business days (excluding weekends and holidays). You will receive a shipping confirmation email containing tracking information as soon as your package leaves our fulfillment center.",
        },
        {
          type: "bullet" as const,
          items: [
            "Standard Shipping (3-5 business days): Standard delivery rates apply.",
            "Express Shipping (1-2 business days): Expedited handling and transit.",
            "International Shipping (7-14 business days): Customs duties and taxes may apply upon arrival.",
          ],
        },
      ],
    },
    {
      heading: "2. Return & Exchange Policy",
      content: [
        {
          type: "paragraph" as const,
          text: "We want you to be completely satisfied with your purchase. If you need to return an item, we accept eligible returns within 30 days of the original delivery date.",
        },
        {
          type: "bullet" as const,
          items: [
            "Items must be unused, unwashed, and in original packaging with all tags attached.",
            "Return shipping costs are covered by the customer unless the item arrived damaged or defective.",
            "Refunds will be processed back to the original method of payment within 5 to 7 business days of receipt.",
          ],
        },
      ],
    },
    {
      heading: "3. Damaged or Missing Shipments",
      content: [
        {
          type: "paragraph" as const,
          text: "In the event that your package arrives damaged or contains incorrect items, please contact our support team immediately with photos of the issue. We will arrange a replacement or full refund promptly.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="Enterprise"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Support", href: "/contact" }}
      />

      <main>
        <HeroBillboard
          tag="Customer Care"
          title="Shipping & Returns Policy"
          description="Everything you need to know about delivery times, order tracking, and hassle-free returns."
          primaryButton={{ text: "Start a Return", href: "/contact" }}
          secondaryButton={{ text: "Contact Support", href: "/contact" }}
          textAnimation="slide-up"
        />

        <PolicyContent
          title="Fulfillment Guidelines & Details"
          subtitle="Clear, transparent policies designed to deliver a dependable customer experience."
          sections={policySections}
        />

        <ContactCta
          tag="Need Support?"
          text="Have specific questions regarding international orders, custom requests, or delivery status?"
          primaryButton={{ text: "Get in Touch", href: "/contact" }}
          secondaryButton={{ text: "Read FAQ", href: "/faq" }}
          textAnimation="fade"
        />
      </main>

      <FooterSimple
        brand="Enterprise Inc."
        columns={[
          {
            title: "Navigation",
            items: routes.map((r) => ({ label: r.label, href: r.path })),
          },
          {
            title: "Support & Legal",
            items: [
              { label: "Shipping & Returns", href: "/shipping-returns" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "WeChat: Support_Official", href: "#" },
            ],
          },
        ]}
        copyright="© 2025 Enterprise Inc. All rights reserved."
        links={[
          { label: "Shipping & Returns", href: "/shipping-returns" },
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms & Conditions", href: "/terms" },
        ]}
      />
    </div>
  );
}