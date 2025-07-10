import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div>
      <section id="about" className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
      </section>
    </div>
  );
}
