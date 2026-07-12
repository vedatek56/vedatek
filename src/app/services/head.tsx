import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.services.title}</title>
      <meta name="description" content={pageSeo.services.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.services.canonical}`} />
      <meta property="og:title" content={pageSeo.services.title} />
      <meta property="og:description" content={pageSeo.services.description} />
      <meta property="og:url" content={`${site.url}${pageSeo.services.canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={site.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.services.title} />
      <meta name="twitter:description" content={pageSeo.services.description} />
      <meta name="twitter:image" content={site.ogImage} />
    </>
  );
}
