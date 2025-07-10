// src/components/HowItWorks.tsx
"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t("step1Title"),
      description: t("step1Description"),
      icon: "📸",
    },
    {
      number: 2,
      title: t("step2Title"),
      description: t("step2Description"),
      icon: "🤖",
    },
    {
      number: 3,
      title: t("step3Title"),
      description: t("step3Description"),
      icon: "🎯",
    },
  ];

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t("howItWorksTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
              variants={stepVariants}
            >
              <div className="relative">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-700 -translate-x-1/2" />
                )}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
