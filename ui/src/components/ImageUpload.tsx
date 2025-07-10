"use client";

import React, { useState, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAppStore } from "@/store/appStore";

const ImageUpload = () => {
  const { setImage, isLoading } = useAppStore();
  const { t } = useLanguage();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/")) {
          setImage(file);
        }
      }
    },
    [setImage]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    },
    [setImage]
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          dragActive
            ? "border-accent bg-accent/10 scale-105"
            : "border-gray-600 hover:border-gray-500"
        } ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isLoading}
        />

        <div className="space-y-4">
          <div className="text-6xl">{isLoading ? "🤖" : "📸"}</div>

          <div>
            <p className="text-lg font-medium text-primary mb-2">
              {isLoading ? t("analyzing") : t("dragAndDrop")}
            </p>

            {!isLoading && (
              <>
                <p className="text-secondary mb-4">{t("or")}</p>
                <button
                  type="button"
                  className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  {t("selectImage")}
                </button>
              </>
            )}
          </div>

          {!isLoading && (
            <div className="text-sm text-secondary space-y-1">
              <p>{t("supportedFormats")}</p>
              <p>{t("maxSize")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
