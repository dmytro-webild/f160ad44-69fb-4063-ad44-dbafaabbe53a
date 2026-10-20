import AboutMediaOverlay from '@/components/sections/about/AboutMediaOverlay';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsFeatureCards from '@/components/sections/metrics/MetricsFeatureCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, Box, MapPin, Tag } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="WHOLESALE CLOTHING"
      title="WHOLESALE CLOTHING & PREMIUM BLANKS"
      description="Quality T-shirts, hoodies, pants and hats at competitive wholesale pricing. DRIFTDEN WHOLESALE supplies apparel to retailers, resellers, boutiques, online sellers and live-stream sellers."
      primaryButton={{
        text: "VIEW PRODUCTS",
        href: "#products",
      }}
      secondaryButton={{
        text: "REQUEST A QUOTE",
        href: "#contact",
      }}
      items={[
        {
          text: "Boutique-ready Apparel",
          icon: Box,
        },
        {
          text: "Premium & Value Blanks",
          icon: Award,
        },
        {
          text: "Competitive Wholesale Rates",
          icon: Tag,
        },
        {
          text: "Los Angeles Based",
          icon: MapPin,
        },
      ]}
      imageSrc="https://images.pexels.com/photos/11671275/pexels-photo-11671275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutMediaOverlay
      tag="OUR BUSINESS"
      title="YOUR APPAREL PARTNER"
      description="DRIFTDEN INC. provides professional wholesale apparel solutions in the Los Angeles area. From premium blanks to everyday essentials, we help retailers, boutiques, and resellers find quality merchandise at competitive price points."
      imageSrc="https://images.pexels.com/photos/8400599/pexels-photo-8400599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="CATALOG"
      title="OUR PRODUCTS"
      description="Contact us for current styles, colors, sizes, and availability."
      items={[
        {
          title: "T-SHIRTS",
          description: "Premium and value-focused T-shirts, including heavyweight and oversized fits. Perfect for customization.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "HOODIES",
          description: "Modern fit hoodies in various fabric weights. Ideal for retail, printing, and embroidery.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/6303682/pexels-photo-6303682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "PANTS",
          description: "Quality casual and streetwear-inspired pants available for your boutique or resale business.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/8857821/pexels-photo-8857821.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "HATS",
          description: "Wholesale hats perfect for branding, embroidery, and private-label customization.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/9321622/pexels-photo-9321622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "CUSTOM SOLUTIONS",
          description: "Inquire about our private-label and customization services.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/9558233/pexels-photo-9558233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "BULK PRICING",
          description: "Competitive tiered wholesale pricing for large volume orders.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/10978553/pexels-photo-10978553.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "QUICK INQUIRY",
          description: "Contact us now for the latest availability updates.",
          href: "#contact",
          imageSrc: "https://images.pexels.com/photos/39457559/pexels-photo-39457559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsFeatureCards
      tag="WHOLESALE SERVICE"
      title="WHY DRIFTDEN?"
      description="We simplify your wholesale procurement process."
      metrics={[
        {
          value: "100%",
          title: "Quality Assured",
          features: [
            "Rigorous inspection",
            "Premium fabric blends",
          ],
        },
        {
          value: "24/7",
          title: "Support Ready",
          features: [
            "Quick email response",
            "Direct account support",
          ],
        },
        {
          value: "LA",
          title: "Distribution",
          features: [
            "Rapid local shipping",
            "Easy freight access",
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="PARTNERSHIPS"
      title="RETAILER TRUST"
      description="See why boutiques and resellers trust us."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Boutique Owner",
          quote: "The quality of blanks is exceptional. My customers love them.",
          imageSrc: "https://images.pexels.com/photos/7289710/pexels-photo-7289710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "David Chen",
          role: "Online Reseller",
          quote: "Reliable wholesale partner with the best streetwear styles.",
          imageSrc: "https://images.pexels.com/photos/3888214/pexels-photo-3888214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Elena Rodriguez",
          role: "Fashion Buyer",
          quote: "Excellent pricing structure and fast turnaround on orders.",
          imageSrc: "https://images.pexels.com/photos/10509869/pexels-photo-10509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Marcus Johnson",
          role: "Creative Director",
          quote: "Great communication for all our private-label projects.",
          imageSrc: "https://images.pexels.com/photos/37583498/pexels-photo-37583498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Chloe Bennett",
          role: "Live-stream Seller",
          quote: "Consistent stock levels and quality that sells every time.",
          imageSrc: "https://images.pexels.com/photos/8939792/pexels-photo-8939792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="social-proof" data-section="social-proof">
    <SectionErrorBoundary name="social-proof">
          <SocialProofMarquee
      tag="NETWORK"
      title="OUR WHOLESALE COMMUNITY"
      description="Serving diverse apparel businesses nationwide."
      names={[
        "Fashion Daily",
        "Urban Threads",
        "Street Style Inc.",
        "Metro Boutique",
        "Urban Collective",
        "Premium Resale",
        "The Apparel Hub",
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="HELP"
      title="WHOLESALE FAQS"
      description="Quick answers to common wholesale inquiries."
      items={[
        {
          question: "What is the minimum order quantity?",
          answer: "MOQs vary by product category. Please contact us with your specific requirements for details.",
        },
        {
          question: "Do you offer samples?",
          answer: "Yes, we can provide samples upon request for interested wholesale clients.",
        },
        {
          question: "What is your pricing structure?",
          answer: "We offer tiered pricing based on order volume. Contact us for our current wholesale price list.",
        },
        {
          question: "Where are you located?",
          answer: "We are based in the Los Angeles area and distribute nationwide.",
        },
        {
          question: "How can I inquire about availability?",
          answer: "Use our contact form or send us an email with your style, color, and size requirements.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="INQUIRE"
      text="CONTACT DRIFTDEN WHOLESALE TODAY FOR PRICING AND AVAILABILITY."
      primaryButton={{
        text: "CONTACT US",
        href: "mailto:wholesale@driftden.com",
      }}
      secondaryButton={{
        text: "EMAIL SUPPORT",
        href: "mailto:support@driftden.com",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
