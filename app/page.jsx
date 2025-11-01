"use client";

import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const contact = {
    whatsapp: "+265880593391",
    email: "goldenhourproduction265@gmail.com",
    instagram: "https://www.instagram.com/goldenhour_production_265/",
    tiktok: "https://www.tiktok.com/@goldenhour_mw",
    facebook:
      "https://web.facebook.com/people/Golden-Hour-Production/61571490627186/",
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      {" "}
      <div className=" text-white rounded-xl shadow-xl w-full max-w-md p-8 flex flex-col items-center gap-6 ">
        {/* Logo */}{" "}
        <Image
          src="/Logo2.png"
          alt="Brand Logo"
          width={100}
          height={100}
          className=""
        />
        {/* Brand Name */}
        <h1 className="text-3xl font-bold text-yellow-400">
          GoldenHour Production
        </h1>
        {/* Tagline */}
        <p className="text-center text-gray-300">
          Photography | Videography | Graphic Design | Software Solutions |
          Content Creation
        </p>
        {/* Contact Buttons */}
        <div className="flex flex-col gap-3 w-full mt-4">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition-colors py-3 rounded-md font-semibold"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center justify-center gap-2 bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-colors py-3 rounded-md font-semibold"
          >
            <FaEnvelope /> Email Us
          </a>
        </div>
        <div>
          <p className=" text-center font-black text-gray-400 ">Follow Us</p>
          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href={contact.instagram}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href={contact.tiktok}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-4xl"
            >
              <FaTiktok />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              className="text-yellow-400 hover:text-yellow-500 text-4xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">
          © 2025 GoldenHour Production. All rights reserved.
        </p>
      </div>
    </div>
  );
}
