"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Tips = () => {
  const { t } = useLanguage();

  const tips = [
    { icon: "💡", text: t("tip1") },
    { icon: "🎯", text: t("tip2") },
    { icon: "🚫", text: t("tip3") },
    { icon: "📐", text: t("tip4") },
  ];

  return (
    <div className="pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("tipsTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-gray-700"
            >
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">{tip.icon}</span>
              </div>
              <p className="text-primary">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
