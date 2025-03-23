import Script from "next/script"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prince Ajuzie",
    url: "https://www.princeajuzie.me",
    image: "https://www.princeajuzie.me/profile-image.jpg",
    sameAs: [
      "https://github.com/princeajuzie",
      "https://linkedin.com/in/princeajuzie",
      "https://twitter.com/princeajuzie",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Tech minds",
    },
    description:
      "Software engineer specializing in building exceptional digital experiences with a focus on performance and scalability.",
    knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "SAAS Development"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.princeajuzie.me",
    },
    offers: {
      "@type": "Offer",
      name: "Software Development Services",
      description: "Full-stack development, UI/UX design, and performance optimization services",
    },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Contact",
      target: "https://www.princeajuzie.me/#contact",
    },
  }

  // Portfolio website structured data
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prince Ajuzie Portfolio",
    url: "https://www.princeajuzie.me",
    description: "Portfolio website of Prince Ajuzie, Software Engineer and SAAS Builder",
    author: {
      "@type": "Person",
      name: "Prince Ajuzie",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.princeajuzie.me/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <Script
        id="person-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
    </>
  )
}

