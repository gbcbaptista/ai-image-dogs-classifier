"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const technologies = [
    { name: "TensorFlow", icon: "🧠" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Next.js", icon: "⚛️" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <div className="pt-12 lg:pt-20 px-4 sm:px-6 lg:px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            {t("aboutDescription")}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-card rounded-lg border border-gray-700 hover:border-accent transition-colors"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-primary font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
