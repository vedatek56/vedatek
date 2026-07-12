import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.contact.title}</title>
      <meta name="description" content={pageSeo.contact.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.contact.canonical}`} />
      <meta property="og:title" content={pageSeo.contact.title} />
      <meta property="og:description" content={pageSeo.contact.description} />
      <meta property="og:url" content={`${site.url}${pageSeo.contact.canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={site.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.contact.title} />
      <meta name="twitter:description" content={pageSeo.contact.description} />
      <meta name="twitter:image" content={site.ogImage} />
    </>
  );
}
