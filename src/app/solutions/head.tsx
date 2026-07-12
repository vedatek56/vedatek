import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.solutions.title}</title>
      <meta name="description" content={pageSeo.solutions.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.solutions.canonical}`} />
      <meta property="og:title" content={pageSeo.solutions.title} />
      <meta property="og:description" content={pageSeo.solutions.description} />
      <meta property="og:url" content={`${site.url}${pageSeo.solutions.canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={site.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageSeo.solutions.title} />
      <meta name="twitter:description" content={pageSeo.solutions.description} />
      <meta name="twitter:image" content={site.ogImage} />
    </>
  );
}
