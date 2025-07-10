"use client";

import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-gray-700 py-8 w-full mt-8 lg:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
