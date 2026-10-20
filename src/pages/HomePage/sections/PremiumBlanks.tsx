import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { Check } from 'lucide-react';

export default function PremiumBlanksSection() {
  const highlights = [
    "Heavyweight fabrics",
    "Oversized fits",
    "Modern streetwear fits",
    "Premium materials",
    "Soft hand feel",
    "Quality construction",
    "Durable garments",
    "Printing-ready apparel",
    "Embroidery-ready apparel",
    "Private-label applications"
  ];

  return (
    <div id="premium-blanks" data-webild-section="premium-blanks" className="py-20 bg-background border-t border-border/40">
      <div className="w-content-width mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variant="slide-up">
            <Tag text="PREMIUM BLANKS" className="mb-4" />
            <TextAnimation
              tag="h2"
              text="Premium Quality. Ready for Your Brand."
              variant="fade-blur"
              gradientText={false}
              className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
            />
            <p className="text-base md:text-lg text-accent leading-relaxed mb-6">
              DRIFTDEN WHOLESALE offers high-quality blank T-shirts, hoodies, pants and hats for businesses seeking premium materials, modern fits and quality construction.
            </p>
            <p className="text-sm md:text-base text-accent leading-relaxed mb-8">
              Our blanks are suitable for clothing brands, retailers, printers, embroiderers and resellers looking for elevated blank apparel.
            </p>

            <div className="pt-2">
              <Button
                text="REQUEST A QUOTE / 联系我们"
                variant="primary"
                href="#contact"
                className="primary-button"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-blur" delay={0.2}>
            <div className="card p-8 rounded-2xl bg-card border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Premium Selection Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-cta text-primary-cta-text flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm md:text-base font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}