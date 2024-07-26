"use client";
import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWindowClose,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const logoImage = "/images/home/logo-white.png"; // Path as it should be accessible in the public directory

  return (
    <footer className="bg-neutral-900 py-5 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/pages/creation/?ref_type=comet_home"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/channel/UCftfkcIZ12QjtOarvNepG8g"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:smartgrader02@gmail.com"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.instagram.com/smart_grader/"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/smart-grader-a36536311/"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/smart_grader"
            className="text-white hover:text-sky-500 transition duration-300"
          >
            <FaWindowClose />
          </a>
        </div>
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm font-light font-spline leading-7">
            © Copyrights 2024 All Rights Reserved Smart Graders
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
