"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAppStore } from "@/store/appStore";

const ResultDisplay = () => {
  const { result, imageUrl, reset } = useAppStore();
  const { t } = useLanguage();
  if (!result || !imageUrl) {
    return null;
  }

  const getBreedEmoji = (breed: string) => {
    const emojiMap: { [key: string]: string } = {
      beagle: "🐕",
      chihuahua: "🐕‍🦺",
      german_shepherd: "🐕‍🦺",
      golden_retriever: "🦮",
      pug: "🐕",
      siberian_husky: "🐺",
    };
    return emojiMap[breed] || "🐕";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-6">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {t("results")}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <img
                src={imageUrl}
                alt="Uploaded dog"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {getBreedEmoji(result.breed)}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-secondary font-medium">
                      {t("breed")}:
                    </span>
                    <span className="text-primary font-bold">
                      {t(`breeds.${result.breed}`)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-bg rounded-lg">
                    <span className="text-secondary font-medium">
                      {t("confidence")}:
                    </span>
                    <span className="text-accent font-bold">
                      {result.confidence}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-secondary text-sm mb-4">
                  {t(`breedDescriptions.${result.breed}`)}
                </p>
                <button
                  onClick={reset}
                  className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  {t("tryAnother")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
