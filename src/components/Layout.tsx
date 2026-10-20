import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    { name: "Home", href: "/#hero" },
    { name: "Products", href: "/#products" },
    { name: "Premium Blanks", href: "/#premium-blanks" },
    { name: "Value Apparel", href: "/#value-apparel" },
    { name: "Made for Resellers", href: "/#resellers" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Shipping Returns", href: "/shipping-returns" },

  ];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
          logo="DRIFTDEN WHOLESALE"
          ctaButton={{
            text: "REQUEST A QUOTE / 联系我们",
            href: "#contact",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="DRIFTDEN WHOLESALE"
      columns={[
        {
          title: "COMPANY",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "PRODUCTS",
          items: [
            {
              label: "T-Shirts",
              href: "#products",
            },
            {
              label: "Hoodies",
              href: "#products",
            },
            {
              label: "Pants",
              href: "#products",
            },
            {
              label: "Hats",
              href: "#products",
            },
          ],
        },
        {
          title: "LEGAL",
          items: [
            {
              label: "Shipping & Returns",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 DRIFTDEN INC. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
