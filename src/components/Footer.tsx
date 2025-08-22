"use client";

import { Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 font-roboto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            {/* Brand Logo */}
            <div className="flex-shrink-0">
              <div className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto">
                {/* <Image
                  src="/assets/images/Mandaeanlogo.png"
                  alt="Mandean Logo"
                  width={190}
                  height={190}
                  className="h-full w-auto object-contain"
                  priority={false}
                  unoptimized={true}
                /> */}
                <h1 className="text-white text-4xl font-bold italic">
                  Mandaean
                </h1>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-roboto font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              at congue risus. Sed commodo dignissim urna eget molestie.
              Suspendisse sed lectus ex.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:border-[#0088FF] hover:text-[#0088FF] transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:border-[#0088FF] hover:text-[#0088FF] transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:border-[#0088FF] hover:text-[#0088FF] transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-roboto text-gray-200">
              Shop
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Gaming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Computer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Laptop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Handphone
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-roboto text-gray-200">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Service Device
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Training
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#0088FF] transition-colors duration-200 font-roboto font-light text-sm"
                >
                  Bussines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-6 font-roboto text-gray-200">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300 font-roboto font-light text-sm">
                +6231273723463
              </p>
              <p className="text-gray-300 font-roboto font-light text-sm">
                admin@qomarket.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-roboto font-light">
            © Fazza.com All rights reserved | developed by{" "}
            <a
              href="https://xcrino.com"
              target="_blank"
              className="text-[#0088FF]"
            >
              Xcrino
            </a>
          </p>
          <a
            href="#"
            className="text-gray-400 hover:text-[#0088FF] transition-colors duration-200 text-sm font-roboto font-light mt-4 md:mt-0"
          >
            Term & Condition
          </a>
        </div>
      </div>
    </footer>
  );
}
