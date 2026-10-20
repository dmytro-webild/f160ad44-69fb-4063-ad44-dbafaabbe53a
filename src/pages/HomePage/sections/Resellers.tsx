import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TextAnimation from '@/components/ui/TextAnimation';
import Button from '@/components/ui/Button';
import Tag from '@/components/ui/Tag';
import { ShoppingBag, Video, Store, Globe } from 'lucide-react';

export default function ResellersSection() {
  const channels = [
    { title: "Retail Stores & Boutiques", icon: Store, description: "Physical storefronts looking for high-margin, in-demand clothing styles." },
    { title: "Online Marketplaces", icon: Globe, description: "E-commerce stores and digital marketplaces requiring steady stock." },
    { title: "Live-Stream Shopping", icon: Video, description: "Active live sellers on platforms such as TikTok Shop and Whatnot." },
    { title: "Reseller Networks", icon: ShoppingBag, description: "Independent clothing resellers and volume distributors." }
  ];

  return (
    <div id="resellers" data-webild-section="resellers" className="py-20 bg-background border-t border-border/40">
      <div className="w-content-width mx-auto px-4 md:px-8">
        <ScrollReveal variant="slide-up" className="text-center max-w-3xl mx-auto mb-12">
          <Tag text="FOR ONLINE & LIVE SELLERS" className="mb-4" />
          <TextAnimation
            tag="h2"
            text="MADE FOR RESELLERS"
            variant="fade-blur"
            gradientText={false}
            className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          />
          <p className="text-base md:text-lg text-accent leading-relaxed">
            Our wholesale apparel is suitable for businesses selling through retail stores, boutiques, online marketplaces and live-stream shopping channels. We work with online and live-stream sellers, including businesses selling through platforms such as TikTok Shop and Whatnot.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <ScrollReveal key={idx} variant="fade-blur" delay={idx * 0.1}>
                <div className="card p-6 rounded-2xl bg-card border border-border/50 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-cta text-primary-cta-text flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{ch.title}</h3>
                    <p className="text-sm text-accent leading-relaxed">{ch.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="slide-up" className="text-center">
          <Button
            text="REQUEST A QUOTE / 联系我们"
            variant="primary"
            href="#contact"
            className="primary-button"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}