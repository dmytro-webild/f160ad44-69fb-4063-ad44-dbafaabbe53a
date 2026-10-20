import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Truck, MapPin } from 'lucide-react';

export default function ShippingSection(): React.JSX.Element {
  return (
    <div id="shipping" data-webild-section="shipping" className="py-20 bg-background border-t border-border/40">
      <div className="w-content-width mx-auto px-4 md:px-8">
        <ScrollReveal variant="slide-up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Tag text="LOS ANGELES DELIVERY" className="mb-4" />
            <TextAnimation
              tag="h2"
              text="SHIPPING & LOCAL DELIVERY"
              variant="fade-blur"
              gradientText={false}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            />
            <p className="text-base md:text-lg text-accent leading-relaxed mb-6">
              Shipping options depend on the products, quantities and destination. Local delivery may be available for qualifying wholesale orders within the Los Angeles area.
            </p>
            <p className="text-sm md:text-base text-accent leading-relaxed mb-8">
              Contact us for current availability and delivery information.
            </p>

            <div className="flex justify-center pt-2">
              <Button
                text="REQUEST A QUOTE / 联系我们"
                variant="primary"
                href="#contact"
                className="primary-button"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-blur" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            <div className="card p-8 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary-cta text-primary-cta-text flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Nationwide Shipping</h3>
              <p className="text-sm text-accent leading-relaxed">
                We ship nationwide. Rates and transit times are calculated based on order weight, dimensions, and wholesale destination.
              </p>
            </div>

            <div className="card p-8 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-primary-cta text-primary-cta-text flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Greater Los Angeles Delivery</h3>
              <p className="text-sm text-accent leading-relaxed">
                Local dispatch or pickup options may be arranged for qualifying volume wholesale orders within the Los Angeles area.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}