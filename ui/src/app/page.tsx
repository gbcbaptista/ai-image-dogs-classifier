"use client";
import ImageUpload from "@/components/ImageUpload";
import ResultDisplay from "@/components/ResultDisplay";
import SupportedBreeds from "@/components/SupportedBreeds";
import Tips from "@/components/Tips";
import { useAppStore } from "@/store/appStore";

export default function Home() {
  const { result } = useAppStore();

  return (
    <div className="h-full bg-bg">
      <section className="pt-12 lg:pt-20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!result ? <ImageUpload /> : <ResultDisplay />}
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SupportedBreeds />
      </div>
      <section className="pt-12 lg:pt-20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tips />
        </div>
      </section>
    </div>
  );
}
