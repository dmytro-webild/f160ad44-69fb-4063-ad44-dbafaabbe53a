import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Truck, MapPin } from 'lucide-react';

export default function ShippingSection(): React.JSX.Element {
  return (
    <div id="shipping" data-webild-section="shipping" className="py-20 bg-background border-t border-border/40">
  <div className="w-content-width mx-auto px-4 md:px-8 max-w-4xl">
    <ScrollReveal variant="slide-up">
      <div className="text-center mb-12">
        <Tag text="DRIFTDEN INC." className="mb-4" />
        <TextAnimation
          tag="h2"
          text="Shipping & Returns Policy"
          variant="fade-blur"
          gradientText={false}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
        />
        <p className="text-sm md:text-base text-foreground/70">
          Comprehensive shipping terms, return eligibility, custom orders, and refund guidelines for wholesale purchases.
        </p>
      </div>
    </ScrollReveal>

    <div className="space-y-8">
      {/* Shipping */}
      <ScrollReveal variant="slide-up" delay={0.1}>
        <div className="card p-6 md:p-8 rounded-2xl bg-card border border-foreground/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Shipping
          </h3>
          <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              DRIFTDEN INC. ships wholesale orders to customers within the United States. Shipping methods, costs, and estimated delivery times may vary depending on the products ordered, order quantity, destination, and carrier availability.
            </p>
            <p>
              Shipping costs and estimated delivery information will be provided before an order is finalized.
            </p>
            <p>
              Once an order has shipped, tracking information will be provided when available. Delivery dates are estimates and may be affected by carrier delays or circumstances outside our control.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Returns & Exchanges */}
      <ScrollReveal variant="slide-up" delay={0.15}>
        <div className="card p-6 md:p-8 rounded-2xl bg-card border border-foreground/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Returns & Exchanges
          </h3>
          <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              Return requests must be made within 14 days of delivery.
            </p>
            <p>
              To be eligible for a return, merchandise must be unused, unworn, unwashed, and in its original condition and packaging.
            </p>
            <p>
              Customers must contact DRIFTDEN INC. before returning merchandise. Returns sent without prior authorization may not be accepted.
            </p>
            <p>
              Unless merchandise arrived damaged, defective, or incorrect, customers are responsible for return shipping costs.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Custom & Personalized Items */}
      <ScrollReveal variant="slide-up" delay={0.2}>
        <div className="card p-6 md:p-8 rounded-2xl bg-card border border-foreground/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Custom & Personalized Items — Final Sale
          </h3>
          <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              All custom, personalized, made-to-order, or specially produced items are final sale and are not eligible for returns, exchanges, or refunds.
            </p>
            <p>
              If a custom or personalized item arrives damaged, defective, or does not match the confirmed order specifications, please contact us so we can review the issue.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Damaged, Defective, or Incorrect Items */}
      <ScrollReveal variant="slide-up" delay={0.25}>
        <div className="card p-6 md:p-8 rounded-2xl bg-card border border-foreground/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Damaged, Defective, or Incorrect Items
          </h3>
          <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              If you receive damaged, defective, or incorrect merchandise, please contact DRIFTDEN INC. promptly after delivery. Please provide your order information and photographs showing the issue when applicable.
            </p>
            <p>
              We will review the request and provide an appropriate resolution when applicable.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Refunds */}
      <ScrollReveal variant="slide-up" delay={0.3}>
        <div className="card p-6 md:p-8 rounded-2xl bg-card border border-foreground/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
            Refunds
          </h3>
          <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
            <p>
              Once an approved return has been received and inspected, we will notify you regarding the status of the refund.
            </p>
            <p>
              Approved refunds will be issued according to the original payment arrangement.
            </p>
            <p>
              Original shipping charges may be non-refundable unless the return resulted from an error by DRIFTDEN INC.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA Button */}
      <ScrollReveal variant="slide-up" delay={0.35}>
        <div className="flex justify-center pt-4">
          <Button
            text="REQUEST A QUOTE / 联系我们"
            variant="primary"
            href="#contact"
            className="primary-button"
          />
        </div>
      </ScrollReveal>
    </div>
  </div>
</div>
  );
}