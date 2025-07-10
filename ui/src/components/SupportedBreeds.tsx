"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SupportedBreeds = () => {
  const { t } = useLanguage();

  const breeds = [
    { key: "beagle", emoji: "🐕", color: "bg-blue-500" },
    { key: "chihuahua", emoji: "🐕‍🦺", color: "bg-green-500" },
    { key: "german_shepherd", emoji: "🐕‍🦺", color: "bg-purple-500" },
    { key: "golden_retriever", emoji: "🦮", color: "bg-yellow-500" },
    { key: "pug", emoji: "🐕", color: "bg-red-500" },
    { key: "siberian_husky", emoji: "🐺", color: "bg-indigo-500" },
  ];

  return (
    <section className="pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("supportedBreedsTitle")}
          </h2>
          <p className="text-lg text-secondary">
            {t("supportedBreedsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breeds.map((breed) => (
            <div
              key={breed.key}
              className="bg-card rounded-xl p-6 border border-gray-700 hover:border-accent transition-colors group"
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 ${breed.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">{breed.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {t(`breeds.${breed.key}`)}
                </h3>
                <p className="text-secondary text-sm">
                  {t(`breedDescriptions.${breed.key}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedBreeds;
