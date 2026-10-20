import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "VIEW PRODUCTS",
      description: "Browse our T-shirts, hoodies, pants and hats."
    },
    {
      step: "02",
      title: "CONTACT US",
      description: "Tell us what products and quantities you're interested in."
    },
    {
      step: "03",
      title: "GET PRODUCT INFORMATION",
      description: "We provide current availability, styles, sizes, colors and wholesale pricing."
    },
    {
      step: "04",
      title: "CONFIRM YOUR ORDER",
      description: "Confirm the applicable products, quantities and delivery or shipping details."
    }
  ];

  return (
    <div id="how-it-works" data-webild-section="how-it-works" className="py-20 bg-background-accent/40 border-t border-border/40">
      <div className="w-content-width mx-auto px-4 md:px-8">
        <ScrollReveal variant="slide-up" className="text-center max-w-3xl mx-auto mb-16">
          <Tag text="HOW IT WORKS" className="mb-4" />
          <TextAnimation
            tag="h2"
            text="SIMPLE WHOLESALE ORDERING"
            variant="fade-blur"
            gradientText={false}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((item, idx) => (
            <ScrollReveal key={idx} variant="slide-up" delay={idx * 0.1}>
              <div className="card p-6 rounded-2xl bg-card border border-border/50 h-full flex flex-col justify-between relative">
                <div>
                  <span className="text-4xl font-extrabold text-foreground/20 mb-4 block font-mono">{item.step}</span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-accent leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="slide-up" className="text-center pt-4">
          <Button
            text="REQUEST A QUOTE / 联系 festival..."
            variant="primary"
            href="#contact"
            className="primary-button"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}