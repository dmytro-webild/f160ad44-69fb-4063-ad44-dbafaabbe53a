import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Check } from 'lucide-react';

export default function ValueApparelSection() {
  const points = [
    "Good quality",
    "Current styles",
    "Competitive wholesale pricing",
    "Reseller-friendly products",
    "Bulk purchasing options"
  ];

  return (
    <div id="value-apparel" data-webild-section="value-apparel" className="py-20 bg-background-accent/50 border-t border-border/40">
      <div className="w-content-width mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="fade-blur" className="order-2 lg:order-1">
            <div className="card p-8 rounded-2xl bg-card border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Combining Quality & Value:</h3>
              <div className="space-y-4">
                {points.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cta text-primary-cta-text flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slide-up" className="order-1 lg:order-2">
            <Tag text="VALUE APPAREL" className="mb-4" />
            <TextAnimation
              tag="h2"
              text="QUALITY PRODUCTS. COMPETITIVE PRICING."
              variant="fade-blur"
              gradientText={false}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            />
            <p className="text-base md:text-lg text-accent leading-relaxed mb-6">
              DRIFTDEN WHOLESALE also offers quality, value-focused T-shirts, hoodies, pants and hats at competitive wholesale prices.
            </p>
            <p className="text-sm md:text-base text-accent leading-relaxed mb-8">
              These products are well suited for retailers, resellers and high-volume sellers looking for quality merchandise at attractive wholesale pricing.
            </p>

            <div>
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