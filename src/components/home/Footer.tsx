"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import images from "../../../public/images";

const Footer = () => {
  return (
    <footer className="bg-black text-text-400 w-full flex flex-col justify-center">
      <motion.div className=" w-[90%] mx-auto py-12 xl:py-20">
        <div className="flex max-xl:flex-col items-start gap-8 xs:gap-12 sm:gap-16 xl:gap-12 2xl:gap-20">
          <div className="relative w-full xl:w-[40%] flex items-start gap-1 2xs:gap-2.5 2xl:gap-4 xl:mt-4">
            <Image
              src={images.singleLogo}
              alt="Nattpay Logo"
              className="mb-4 w-16 sm:w-20 2xl:w-24"
            />
            <p className="text-sm 2xs:text-base leading-5 2xs:leading-6 xs:leading-7">
              Nattpay is more than just a financial service provider; we are a
              community dedicated to improving financial well-being. Join
              thousands of satisfied users who trust Nattpay for their financial
              needs. Download the Natypay app today and experience the future of
              finance in Nigeria.
            </p>
            <div
              className="absolute -top-40 left-[25rem] -inset-32 opacity-60 dark:opacity-40"
              style={{
                background: `
                radial-gradient(
                  circle at center,
                  rgba(212, 177, 57, 0.4) 0%,
                  rgba(212, 177, 57, 0.2) 40%,
                  rgba(212, 177, 57, 0.1) 60%,
                  rgba(212, 177, 57, 0) 80%
                )
              `,
                filter: "blur(60px)",
                transform: "scale(1.1)",
              }}
            />
          </div>

          <div className="z-10 w-full xl:w-[60%] max-sm:gap-y-8 max-md:gap-y-10 grid grid-cols-2 md:grid-cols-3 justify-between text-sm 2xs:text-base">
            <div className="flex flex-col">
              <h3 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3">
                Company
              </h3>
              <div className="flex flex-col gap-1.5 xs:gap-2 ">
                <Link
                  href="/about"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  About Us
                </Link>
                <Link
                  href="/team"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Join Our Team
                </Link>
                <Link
                  href="/blog"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3">
                Resources
              </h3>
              <div className="flex flex-col gap-1.5 xs:gap-2 ">
                <Link
                  href="/terms"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Terms of Use{" "}
                </Link>
                <Link
                  href="/privacy"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Privacy Policy{" "}
                </Link>
                <Link
                  href="/documentation"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Documentation{" "}
                </Link>
                <Link
                  href="/security"
                  className="transition-all duration-300 cursor-pointer hover:pl-2"
                >
                  Security{" "}
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3">
                Info
              </h3>
              <div className="flex flex-col gap-1.5 xs:gap-2 ">
                <a className="">
                  Head office: C3 & C4 Suite second floor Ejiobi plaza new
                  market road Main market onitsha Anambra state
                </a>

                <a>+2348131416906</a>
                <a>nattpay349@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="sm:border-t border-border-100  w-full flex justify-center">
        <div className="w-[90%] flex flex-col md:flex-row justify-between items-center py-6 sm:py-5">
          <p className="text-sm xs:text-base ">
            © 2025 Nattpay All rights reserved
          </p>
          <div className="flex space-x-2.5 sm:space-x-4 mt-2.5 xs:mt-4 md:mt-0">
            <a href="#" className=" hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className=" hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </a>
            <a href="#" className=" hover:text-white">
              <span className="sr-only">Pinterest</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className=" hover:text-white">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;