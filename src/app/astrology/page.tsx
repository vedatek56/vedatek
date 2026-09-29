import AstroReplyPage, { metadata as astroMetadata } from "@/app/astroreply/page";

export const metadata = {
  ...astroMetadata,
  title: "Astrology AI | AstroReply by VedaTek",
  alternates: {
    canonical: "https://vedatek.co.uk/astroreply",
  },
};

export default function AstrologyPage() {
  return <AstroReplyPage />;
}
