/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <FooterSection 
                    title="Customer Service" 
                    links={[
                        { text: "Help Center", href: "/content/customerservice/info.aspx" },
                        { text: "Order Status", href: "/secure/view-status.aspx" },
                        { text: "Returns & Replacements", href: "/content/returns/info.aspx" },
                        { text: "International Shipping", href: "/content/canada-ad/info.aspx" },
                        { text: "Login", href: "/secure/login.aspx?bid=foot", rel: "nofollow" }
                    ]}
                />
                <FooterSection 
                    title="Shopping" 
                    links={[
                        { text: "On Sale Items", href: "/On-Sale-Products/0-0-0-0-12/list.aspx" },
                        { text: "Our Brands", href: "/line-card.aspx" },
                        { text: "Product Features", href: "/content/lighting-feature/info.aspx" },
                        { text: "Trade Customers", href: "/secure/login.aspx?from=trade", rel: "nofollow" },
                        { text: "View Your Cart", href: "/cart.aspx?bid=foot", rel: "nofollow" }
                    ]}
                />
                <FooterSection 
                    title="Company Info" 
                    links={[
                        { text: "About Us", href: "/content/about-us/info.aspx?bid=footer" },
                        { text: "Partners", href: "/content/links/info.aspx?bid=footer" },
                        { text: "Careers", href: "/content/careers/info.aspx" },
                        { text: "Privacy Policy", href: "/content/privacy/info.aspx" },
                        { text: "Terms of Use", href: "/content/termsofuse/info.aspx" },
                        { text: "Affiliate Program", href: "https://www.shareasale.com/shareasale.cfm?merchantID=19856&source=footer", target:"_blank", rel:"nofollow noopener noreferrer" },
                        { text: "Accessibility", href: "/content/faq/info.aspx?bid=footer" }
                    ]}
                />
            </div>
            <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
                © 2025 1STOPlighting.com. All Rights Reserved.
            </div>
        </footer>
    );
};

const FooterSection = ({ title, links }) => (
    <div>
        <h4 className="text-lg font-semibold mb-4">{title}</h4>
        <ul className="space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <a href={link.href} rel={link.rel || undefined} target={link.target || undefined} className="text-gray-400 hover:text-white">
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
