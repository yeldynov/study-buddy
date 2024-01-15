import {
  About,
  Courses,
  FAQ,
  Hero,
  How,
  Testimonials,
  Tutors,
  WhyUs,
} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Hero />
      <About />
      <WhyUs />
      <Courses />
      <How />
      <Tutors />
      <FAQ />
      <Testimonials />
    </main>
  );
}
