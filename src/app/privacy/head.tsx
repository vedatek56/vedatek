import { pageSeo, site } from "@/data/seo";

export default function Head() {
  return (
    <>
      <title>{pageSeo.privacy.title}</title>
      <meta name="description" content={pageSeo.privacy.description} />
      <link rel="canonical" href={`${site.url}${pageSeo.privacy.canonical}`} />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}
