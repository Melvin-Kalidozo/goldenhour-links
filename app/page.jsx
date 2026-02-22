"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaInternetExplorer,
} from "react-icons/fa";

export default function Home() {
  const contact = {
    whatsapp: "+265880593391",
    email: "goldenhourproduction265@gmail.com",
    instagram: "https://www.instagram.com/goldenhour_production_265/",
    tiktok: "https://www.tiktok.com/@goldenhour_mw",
    facebook:
      "https://web.facebook.com/people/Golden-Hour-Production/61571490627186/",
    website: "https://goldenhour265.com",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[50vh] w-full flex items-center justify-center text-center px-6">
        {/* Background Image */}
        <Image
          src="/hero.jpeg"
          alt="GoldenHour Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content On Top */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Image src="/Logo2.png" alt="Brand Logo" width={100} height={100} />

          <h1 className="text-4xl font-bold text-yellow-400">
            GoldenHour Production
          </h1>

          <p className="text-gray-300 max-w-xl">
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
            className="flex items-center justify-center gap-3 
               border border-yellow-500 text-yellow-400
               hover:bg-yellow-500 hover:text-black
               transition-all duration-300
               py-3 rounded-lg font-medium"
          >
            <FaInternetExplorer className="text-lg" />
            Our Website
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            className="flex items-center justify-center gap-3 
               bg-white/5 backdrop-blur-sm
               border border-white/10
               hover:bg-white/10
               transition-all duration-300
               py-3 rounded-lg font-medium"
          >
            <FaWhatsapp className="text-lg text-green-400" />
            Chat on WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center gap-3 
               bg-white/5 backdrop-blur-sm
               border border-white/10
               hover:bg-white/10
               transition-all duration-300
               py-3 rounded-lg font-medium"
          >
            <FaEnvelope className="text-lg text-yellow-400" />
            Email Us
          </a>
        </div>

        {/* Social Links */}
        <div>
          <p className="text-center font-black text-gray-400">Follow Us</p>

          <div className="flex gap-6 mt-6 justify-center">
            <a
              href={contact.instagram}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href={contact.tiktok}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-3xl"
            >
              <FaTiktok />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-3xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        <p className="text-gray-500 text-sm text-center">
          © 2025 GoldenHour Production. All rights reserved.
        </p>
      </div>
    </div>
  );
}
