import type { Metadata } from "next";
import SelectionMenu from "@/components/EventsPage/SelectionMenu/SelectionMenu";

export const metadata: Metadata = {
  title: "Events & Tracks",
  description:
    "OwlHacks 2026 event schedule and challenge tracks. September 26–27, 2026 at Temple University.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Tracks | OwlHacks 2026",
    description:
      "See the OwlHacks 2026 schedule and tracks for Temple University's student-run hackathon.",
    url: "https://owlhacks.com/events",
  },
};

export default function EventsPage() {
  return (
    <div>
      <SelectionMenu />
    </div>
  );
}
