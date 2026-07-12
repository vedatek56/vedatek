import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.terms.title}</title>
      <meta name="description" content={pageSeo.terms.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.terms.canonical}`} />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}
