/**
 * SEO Utility Module for EvenEi
 *
 * Centralized JSON-LD schema generators, meta tag helpers, and brand constants
 * for maximum search visibility, entity recognition, and AI search dominance.
 *
 * Architecture:
 * - Global @graph knowledge graph in root.tsx (Organization + WebSite + Person + Product)
 * - Page-level schemas (FAQ, Breadcrumb, Article) in each route
 * - Unified meta tag generation with OG + Twitter + canonical
 */

// ─── Brand Constants ─────────────────────────────────────────────────────────

export const SEO = {
    siteName: "EvenEi",
    legalName: "EvenEi Private Limited",
    siteUrl: "https://www.evenei.com",
    logo: "https://www.evenei.com/logo_final_direct.png",
    ogImage: "https://www.evenei.com/logo_final_direct.png",
    description:
        "EvenEi is a technology company building Everyday Intelligence — intelligent systems that integrate naturally into daily life through privacy-first, human-centered AI.",
    locale: "en_US",
    foundingDate: "2025",
    founder: {
        name: "Amogh V K",
        jobTitle: "Founder & CEO",
        url: "https://www.evenei.com/founders/amogh-v-k",
        image: "https://www.evenei.com/founders/amogh.jpeg",
        bio: "Systems engineer building integrated intelligent systems across full-stack software, machine learning, and embedded hardware.",
        linkedin: "https://www.linkedin.com/in/vk-amogh/",
        github: "https://github.com/VK-Amogh",
        education: "Manipal Institute of Technology, Bengaluru",
    },
    social: {
        linkedin: "https://www.linkedin.com/company/evenei/",
    },
    product: {
        name: "EvenEi Specular",
        alternateName: "SpecEI",
        url: "https://www.evenei.com/specular",
        description:
            "The world's first memory-based smart glasses — designed to capture, understand, and recall real life automatically. Specular acts as your external memory layer, turning everyday experiences into searchable context.",
        category: "Smart Glasses",
    },
} as const;

// ─── @graph Knowledge Graph (Global Entity Graph) ────────────────────────────

/**
 * Generates the complete entity knowledge graph for injection in root.tsx <head>.
 * Uses @graph to establish relationships between all entities:
 *   Organization ←→ Founder (Person)
 *   Organization → hasProduct → Specular (Product)
 *   Website → publisher → Organization
 */
export function generateEntityKnowledgeGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            // ── Organization Entity ──
            {
                "@type": "Organization",
                "@id": `${SEO.siteUrl}/#organization`,
                name: SEO.legalName,
                alternateName: [SEO.siteName, "Evenei", "EVENEI"],
                url: SEO.siteUrl,
                logo: {
                    "@type": "ImageObject",
                    "@id": `${SEO.siteUrl}/#logo`,
                    url: SEO.logo,
                    contentUrl: SEO.logo,
                    caption: "EvenEi Logo",
                },
                image: { "@id": `${SEO.siteUrl}/#logo` },
                description: SEO.description,
                foundingDate: SEO.foundingDate,
                founder: { "@id": `${SEO.siteUrl}/#founder` },
                sameAs: [
                    SEO.social.linkedin,
                    SEO.founder.linkedin,
                    SEO.founder.github,
                ],
                contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "General Inquiry",
                    url: `${SEO.siteUrl}/contact`,
                },
                knowsAbout: [
                    "Artificial Intelligence",
                    "Smart Glasses",
                    "Everyday Intelligence",
                    "Privacy-First AI",
                    "Human-Centered Design",
                    "Wearable Technology",
                    "Memory Augmentation",
                    "Computer Vision",
                ],
                makesOffer: [
                    {
                        "@type": "Offer",
                        itemOffered: { "@id": `${SEO.siteUrl}/#product-specular` },
                    },
                ],
            },

            // ── Person Entity (Founder) ──
            {
                "@type": "Person",
                "@id": `${SEO.siteUrl}/#founder`,
                name: SEO.founder.name,
                alternateName: ["Amogh VK", "Amogh V. K."],
                jobTitle: SEO.founder.jobTitle,
                description:
                    "Amogh V K is an engineer, systems architect, and technology entrepreneur known for building intelligent systems that integrate hardware, software, and artificial intelligence. He is the founder of Evenei Private Limited, a technology company focused on developing advanced platforms that combine full-stack software, embedded hardware, and AI-driven systems. Amogh V K specializes in designing integrated intelligent systems, working across full-stack software development, machine learning, embedded systems, computer vision, and electronic hardware design including PCB development. His work focuses on building technologies where software intelligence and physical hardware operate together as a unified system. He is currently pursuing a Bachelor of Technology (B.Tech) in Electronics and Communication Engineering at the Manipal Institute of Technology Bengaluru, where he studies electronic systems, communications, and modern computing technologies. He entered the program through an AICTE scholarship. As the founder of Evenei Private Limited, Amogh focuses on building technology platforms that combine AI, software infrastructure, and hardware integration. His work explores how intelligent systems can be designed to solve real-world problems through scalable, practical engineering. One of his major ongoing projects is Specular, a technology platform being developed to integrate intelligent software systems with modern computing infrastructure. Specular focuses on combining software intelligence, data systems, and scalable architecture to support advanced technology platforms and applications. Amogh V K is also involved in aerospace technology initiatives and is part of a team developing a Cube Satellite under the United Nations Office for Outer Space Affairs and Japan Aerospace Exploration Agency KiboCUBE program. In this project, he contributes to the Attitude Determination and Control System (ADCS) for a 1U CubeSat. His broader engineering philosophy centers on systems thinking — designing technologies where hardware, software, and artificial intelligence work together as integrated systems rather than isolated components. His goal is to develop practical intelligent technologies that are scalable, reliable, and ethically designed. Through his work at Evenei Private Limited and his independent engineering projects, Amogh V K focuses on building the next generation of intelligent systems that combine computation, electronics, and artificial intelligence into real-world technology platforms.",
                image: SEO.founder.image,
                url: SEO.founder.url,
                worksFor: { "@id": `${SEO.siteUrl}/#organization` },
                founderOf: { "@id": `${SEO.siteUrl}/#organization` },
                memberOf: { "@id": `${SEO.siteUrl}/#organization` },
                alumniOf: {
                    "@type": "EducationalOrganization",
                    name: SEO.founder.education,
                },
                hasCredential: {
                    "@type": "EducationalOccupationalCredential",
                    credentialCategory: "Bachelor of Technology (B.Tech)",
                    educationalLevel: "Undergraduate",
                    about: "Electronics and Communication Engineering",
                },
                sameAs: [SEO.founder.linkedin, SEO.founder.github],
                knowsAbout: [
                    "Artificial Intelligence",
                    "Embedded Systems",
                    "Full-Stack Software Development",
                    "Machine Learning",
                    "Computer Vision",
                    "Hardware-Software Integration",
                    "Smart Glasses",
                    "System Architecture",
                    "Electronic Hardware Design",
                    "PCB Development",
                    "Aerospace Engineering",
                    "CubeSat ADCS",
                    "Privacy Engineering",
                    "React",
                    "Node.js",
                    "Flutter",
                    "Firebase",
                    "Embedded Firmware",
                ],
            },

            // ── WebSite Entity ──
            {
                "@type": "WebSite",
                "@id": `${SEO.siteUrl}/#website`,
                name: SEO.siteName,
                alternateName: "EvenEi.com",
                url: SEO.siteUrl,
                description: SEO.description,
                publisher: { "@id": `${SEO.siteUrl}/#organization` },
                inLanguage: "en-US",
                potentialAction: {
                    "@type": "SearchAction",
                    target: {
                        "@type": "EntryPoint",
                        urlTemplate: `${SEO.siteUrl}/search?q={search_term_string}`,
                    },
                    "query-input": "required name=search_term_string",
                },
            },

            // ── Product Entity (Specular) ──
            {
                "@type": ["Product", "SoftwareApplication"],
                "@id": `${SEO.siteUrl}/#product-specular`,
                name: SEO.product.name,
                alternateName: [SEO.product.alternateName, "Project Specular", "Specular Smart Glasses"],
                description: SEO.product.description,
                url: SEO.product.url,
                image: SEO.ogImage,
                category: SEO.product.category,
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Android, iOS",
                brand: { "@id": `${SEO.siteUrl}/#organization` },
                manufacturer: { "@id": `${SEO.siteUrl}/#organization` },
                creator: { "@id": `${SEO.siteUrl}/#organization` },
                offers: [
                    {
                        "@type": "Offer",
                        name: "SpecEI (Gen-1)",
                        price: "120",
                        priceCurrency: "USD",
                        availability: "https://schema.org/PreOrder",
                        seller: { "@id": `${SEO.siteUrl}/#organization` },
                    },
                    {
                        "@type": "Offer",
                        name: "SpecEI Pro (Gen-1)",
                        price: "180",
                        priceCurrency: "USD",
                        availability: "https://schema.org/PreOrder",
                        seller: { "@id": `${SEO.siteUrl}/#organization` },
                    },
                    {
                        "@type": "Offer",
                        name: "SpecEI Max (Gen-1)",
                        price: "240",
                        priceCurrency: "USD",
                        availability: "https://schema.org/PreOrder",
                        seller: { "@id": `${SEO.siteUrl}/#organization` },
                    },
                ],
            },
        ],
    };
}

// ─── Legacy Schema Generators (for page-level use) ───────────────────────────

export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${SEO.siteUrl}/#organization`,
        name: SEO.legalName,
        alternateName: SEO.siteName,
        url: SEO.siteUrl,
        logo: { "@type": "ImageObject", url: SEO.logo },
        description: SEO.description,
        foundingDate: SEO.foundingDate,
        founder: {
            "@type": "Person",
            "@id": `${SEO.siteUrl}/#founder`,
            name: SEO.founder.name,
            url: SEO.founder.url,
        },
        sameAs: [SEO.social.linkedin, SEO.founder.linkedin, SEO.founder.github],
    };
}

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SEO.siteUrl}/#website`,
        name: SEO.siteName,
        url: SEO.siteUrl,
        description: SEO.description,
        publisher: { "@id": `${SEO.siteUrl}/#organization` },
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${SEO.siteUrl}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
        },
    };
}

export function generatePersonSchema(person?: {
    name: string;
    jobTitle: string;
    bio: string;
    image: string;
    url: string;
    linkedin: string;
    github: string;
}) {
    const p = person ?? {
        name: SEO.founder.name,
        jobTitle: SEO.founder.jobTitle,
        bio: SEO.founder.bio,
        image: SEO.founder.image,
        url: SEO.founder.url,
        linkedin: SEO.founder.linkedin,
        github: SEO.founder.github,
    };

    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${SEO.siteUrl}/#founder`,
        name: p.name,
        jobTitle: p.jobTitle,
        description: p.bio,
        image: p.image,
        url: p.url,
        worksFor: {
            "@type": "Organization",
            "@id": `${SEO.siteUrl}/#organization`,
            name: SEO.legalName,
        },
        founderOf: {
            "@type": "Organization",
            "@id": `${SEO.siteUrl}/#organization`,
            name: SEO.legalName,
            url: SEO.siteUrl,
        },
        alumniOf: {
            "@type": "EducationalOrganization",
            name: SEO.founder.education,
        },
        sameAs: [p.linkedin, p.github],
        knowsAbout: [
            "Artificial Intelligence",
            "Embedded Systems",
            "Full-Stack Development",
            "Hardware-Software Integration",
            "Smart Glasses",
            "System Architecture",
        ],
    };
}

export function generateProductSchema(product?: {
    name: string;
    description: string;
    image?: string;
    url: string;
    brand?: string;
    offers?: Array<{ name: string; price: string; priceCurrency: string }>;
}) {
    const p = product ?? {
        name: SEO.product.name,
        description: SEO.product.description,
        url: SEO.product.url,
        brand: SEO.legalName,
        offers: [
            { name: "SpecEI (Gen-1)", price: "120", priceCurrency: "USD" },
            { name: "SpecEI Pro (Gen-1)", price: "180", priceCurrency: "USD" },
            { name: "SpecEI Max (Gen-1)", price: "240", priceCurrency: "USD" },
        ],
    };

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${SEO.siteUrl}/#product-specular`,
        name: p.name,
        description: p.description,
        image: p.image ?? SEO.ogImage,
        url: p.url,
        brand: { "@type": "Organization", name: p.brand ?? SEO.legalName },
        manufacturer: { "@id": `${SEO.siteUrl}/#organization` },
        category: SEO.product.category,
        ...(p.offers && {
            offers: p.offers.map((offer) => ({
                "@type": "Offer",
                name: offer.name,
                price: offer.price,
                priceCurrency: offer.priceCurrency,
                availability: "https://schema.org/PreOrder",
                seller: { "@id": `${SEO.siteUrl}/#organization` },
            })),
        }),
    };
}

export function generateSoftwareApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SpecEI Companion App",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Android, iOS",
        description:
            "The mobile companion app for SpecEI smart glasses — serves as the control and intelligence hub for device pairing, AI processing, memory search, and privacy controls.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author: { "@id": `${SEO.siteUrl}/#organization` },
    };
}

export function generateFAQSchema(
    faqs: Array<{ question: string; answer: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

export function generateBreadcrumbSchema(
    items: Array<{ name: string; url: string }>
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateArticleSchema(article: {
    headline: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        url: article.url,
        image: article.image ?? SEO.ogImage,
        datePublished: article.datePublished,
        dateModified: article.dateModified ?? article.datePublished,
        author: { "@id": `${SEO.siteUrl}/#organization` },
        publisher: {
            "@type": "Organization",
            "@id": `${SEO.siteUrl}/#organization`,
            name: SEO.legalName,
            logo: { "@type": "ImageObject", url: SEO.logo },
        },
    };
}

// ─── Meta Tag Helpers ────────────────────────────────────────────────────────

/**
 * Generates meta tags for a page: title, description, OG, Twitter, canonical.
 * Use in each route's `meta()` export.
 */
export function generatePageMeta(page: {
    title: string;
    description: string;
    path: string;
    ogType?: string;
    image?: string;
    noindex?: boolean;
    datePublished?: string;
    dateModified?: string;
}) {
    const canonicalUrl = `${SEO.siteUrl}${page.path}`;
    const image = page.image ?? SEO.ogImage;

    const tags: Array<Record<string, string>> = [
        { title: page.title },
        { name: "description", content: page.description },

        // Canonical
        { tagName: "link", rel: "canonical", href: canonicalUrl },

        // Open Graph
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:url", content: canonicalUrl },
        { property: "og:site_name", content: SEO.siteName },
        { property: "og:type", content: page.ogType ?? "website" },
        { property: "og:image", content: image },
        { property: "og:locale", content: SEO.locale },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: page.title },
        { name: "twitter:description", content: page.description },
        { name: "twitter:image", content: image },
    ];

    // Content freshness signals
    if (page.datePublished) {
        tags.push({ name: "article:published_time", content: page.datePublished });
    }
    if (page.dateModified) {
        tags.push({ name: "article:modified_time", content: page.dateModified });
    }

    if (page.noindex) {
        tags.push({ name: "robots", content: "noindex, nofollow" });
    }

    return tags;
}

// ─── JsonLd Component ────────────────────────────────────────────────────────

/**
 * Renders a JSON-LD <script> tag for structured data.
 * Works both in <head> (root.tsx) and in component body.
 */
export function JsonLd({ data }: { data: object | object[] }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// ─── Master FAQ Data ─────────────────────────────────────────────────────────

/**
 * Centralized FAQ data for AI search extraction.
 * Used on /faq page and selectively on other pages.
 */
export const MASTER_FAQS = [
    {
        question: "What is EvenEi?",
        answer:
            "EvenEi (officially EvenEi Private Limited) is a technology company focused on designing intelligent systems that integrate naturally into everyday life. EvenEi builds Everyday Intelligence (EI) — AI systems embedded into workflows, environments, and experiences rather than existing as isolated tools.",
    },
    {
        question: "Who founded EvenEi?",
        answer:
            "EvenEi was founded by Amogh V K, an engineer and system thinker focused on building intelligent systems that combine hardware, software, and AI with real-world usability and ethical design. Amogh V K is the Founder and CEO of EvenEi Private Limited.",
    },
    {
        question: "What does EvenEi Private Limited do?",
        answer:
            "EvenEi Private Limited designs and builds AI-powered intelligent systems for everyday use. Their flagship project, Specular, is the world's first memory-based smart glasses system. EvenEi focuses on privacy-first, human-centered AI that adapts to users rather than requiring users to adapt to technology.",
    },
    {
        question: "What is EvenEi Specular?",
        answer:
            "EvenEi Specular (also called SpecEI or Project Specular) is the world's first memory-based smart glasses — designed to capture, understand, and recall real life automatically. It acts as your external memory layer, turning everyday experiences into searchable context. Models start at USD $120.",
    },
    {
        question: "How much does EvenEi Specular cost?",
        answer:
            "EvenEi Specular comes in three configurations: SpecEI Gen-1 (Essential) at approximately USD $120, SpecEI Pro Gen-1 (Balanced) at approximately USD $180, and SpecEI Max Gen-1 (Advanced) at approximately USD $240.",
    },
    {
        question: "What makes Specular different from other smart glasses?",
        answer:
            "Specular uses a software-first intelligence model. Instead of packing expensive hardware into the glasses, Specular distributes intelligence across lightweight glasses hardware, efficient embedded firmware, a powerful companion mobile application, and AI-driven software intelligence. This makes it lighter, more affordable, and upgradeable over time.",
    },
    {
        question: "Is EvenEi Specular available for purchase?",
        answer:
            "EvenEi Specular is currently a research and development project. The team is refining hardware prototypes and expanding AI capabilities. Visit evenei.com for the latest updates on availability.",
    },
    {
        question: "How does Specular protect user privacy?",
        answer:
            "EvenEi Specular treats privacy as an engineering requirement. It features user-controlled data flow, explicit permissions for every action, local on-device processing for sensitive data, and transparent indicators of system behavior at all times.",
    },
    {
        question: "Where is EvenEi located?",
        answer:
            "EvenEi Private Limited is a technology company registered and headquartered in India.",
    },
    {
        question: "What is Everyday Intelligence?",
        answer:
            "Everyday Intelligence (EI) is EvenEi's core design philosophy. It means building AI that is embedded, contextual, and human-centered — systems that support people without demanding attention or disrupting natural workflows. Rather than building isolated AI tools, EvenEi designs intelligence that fits naturally into daily life.",
    },
] as const;
