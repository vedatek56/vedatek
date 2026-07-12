import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.about.title}</title>
      <meta name="description" content={pageSeo.about.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.about.canonical}`} />
      <meta property="og:title" content={pageSeo.about.title} />
      <meta property="og:description" content={pageSeo.about.description} />
      <meta property="og:url" content={`${site.url}${pageSeo.about.canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={site.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.about.title} />
      <meta name="twitter:description" content={pageSeo.about.description} />
      <meta name="twitter:image" content={site.ogImage} />
    </>
  );
}
