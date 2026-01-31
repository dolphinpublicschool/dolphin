import type { Metadata } from "next";
import Hero from "@/components/hero";
// import Features from "@/components/features";
import CurriculumSection from "@/components/curriculum-section";
import WhyDolphinSection from "@/components/why-dolphin-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTA from "@/components/cta";

export const metadata: Metadata = {
  title: "Dolphin Public School - Excellence in Education",
  description:
    "Dolphin Public School offers quality education from Nursery to Class 8 with experienced faculty, modern facilities, and holistic student development.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* <Features /> */}
      <CurriculumSection />
      <WhyDolphinSection />
      <TestimonialsSection />
      <CTA />
    </main>
  );
}
