"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInternetExplorer,
} from "react-icons/fa";

export default function Home() {
  const contact = {
    whatsapp: "+265880593391",
    email: "goldenhourproduction265@gmail.com",
    website: "https://goldenhour265.com",
    production: {
      instagram: "https://www.instagram.com/goldenhour_production_265/",
      tiktok: "https://www.tiktok.com/@goldenhour_mw",
      facebook:
        "https://web.facebook.com/people/Golden-Hour-Production/61571490627186/",
    },
    tech: {
      instagram:
        "https://www.instagram.com/goldenhour_tech?igsh=bXN0b2g5bHRweTBj",
      facebook: "https://www.facebook.com/profile.php?id=61587549592603",
      linkedin: "https://www.linkedin.com/company/goldenhour-tech",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[50vh] w-full flex items-center justify-center text-center px-6">
        <Image
          src="/hero.jpeg"
          alt="GoldenHour Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Image src="/Logo2.png" alt="Brand Logo" width={100} height={100} />
          <h1 className="text-4xl font-bold text-yellow-400">
            GoldenHour Production
          </h1>
          <p className="text-gray-300 max-w-xl text-center">
            Photography | Videography | Graphic Design | Software Solutions |
            Content Creation
          </p>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="flex flex-col items-center gap-6 px-6 py-12 max-w-md mx-auto">
        {/* Contact Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <a
            href={contact.website}
            target="_blank"
            className="flex items-center justify-center gap-3 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 py-3 rounded-lg font-medium"
          >
            <FaInternetExplorer className="text-lg" />
            Our Website
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 py-3 rounded-lg font-medium"
          >
            <FaWhatsapp className="text-lg text-green-400" />
            Chat on WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 py-3 rounded-lg font-medium"
          >
            <FaEnvelope className="text-lg text-yellow-400" />
            Email Us
          </a>
        </div>

        {/* SOCIAL LINKS SECTION */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 w-full justify-items-center">
          {/* GoldenHour Production Card */}
          <div className="bg-gray-900/50 w-full backdrop-blur-md border border-yellow-500 rounded-xl p-8 flex flex-col items-center shadow-lg ">
            <h2 className="text-sm font-bold  mb-4 text-center">
              Follow GoldenHour Production
            </h2>
            <div className="flex gap-6">
              <a
                href={contact.production.instagram}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href={contact.production.tiktok}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaTiktok />
              </a>
              <a
                href={contact.production.facebook}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* GoldenHour Tech Card */}
          <div className="bg-gray-900/50 backdrop-blur-md w-full border border-yellow-500 rounded-xl p-8 flex flex-col items-center shadow-lg ">
            <h2 className="text-sm font-bold mb-4 text-center">
              Follow GoldenHour Tech
            </h2>
            <div className="flex gap-6">
              <a
                href={contact.tech.instagram}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href={contact.tech.facebook}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href={contact.tech.linkedin}
                target="_blank"
                className="text-yellow-400 hover:text-yellow-500 text-4xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center mt-8">
          © 2025 GoldenHour Production. All rights reserved.
        </p>
      </div>
    </div>
  );
}
