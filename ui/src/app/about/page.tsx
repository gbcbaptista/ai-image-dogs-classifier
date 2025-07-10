import About from "@/components/About";
import SupportedBreeds from "@/components/SupportedBreeds";

export default function Home() {
  return (
    <div>
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <About />
        </div>
      </section>
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SupportedBreeds />
        </div>
      </section>
    </div>
  );
}
