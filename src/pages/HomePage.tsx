// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import AboutSection from './HomePage/sections/About';
import ProductsSection from './HomePage/sections/Products';
import MetricsSection from './HomePage/sections/Metrics';
import TestimonialsSection from './HomePage/sections/Testimonials';
import SocialProofSection from './HomePage/sections/SocialProof';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';


import PremiumBlanksSection from './HomePage/sections/PremiumBlanks';
import ValueApparelSection from './HomePage/sections/ValueApparel';
import ResellersSection from './HomePage/sections/Resellers';
import HowItWorksSection from './HomePage/sections/HowItWorks';
import ShippingSection from './HomePage/sections/Shipping';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HeroSection />

  <AboutSection />

  <ProductsSection />
      <PremiumBlanksSection />
      <ValueApparelSection />
      <ResellersSection />
      <HowItWorksSection />

  <MetricsSection />

  <TestimonialsSection />

  <SocialProofSection />

  <FaqSection />

      <ShippingSection />
  <ContactSection />
    </>
  );
}
