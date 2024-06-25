import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo/al-burraq-logo-dark.svg";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkBg p-auto">
      <div className="w-full max-w-screen-xl mx-auto lg:py-8">
        <div className="p-5 rounded-lg bg-slate-800 md:flex md:justify-between">
          <div className="mb-6 sm:gap-6 sm:grid-cols-3 md:mb-0">
            <Image src={Logo} alt="Al-Burraq logo" width={150} />
          </div>
          <div className="sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-lightGold2 dark:text-white">
                Important Links
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/"
                    className="hover:underline hover:text-darkGold"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/about"
                    className="hover:underline hover:text-darkGold"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/career"
                    className="hover:underline hover:text-darkGold"
                  >
                    Career
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/privacy-policy"
                    className="hover:underline hover:text-darkGold"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline hover:text-darkGold"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-lightGold2 dark:text-white">
                OUR SERVICES
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/"
                    className="hover:underline hover:text-darkGold"
                  >
                    Buy A Property
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/about"
                    className="hover:underline hover:text-darkGold"
                  >
                    Rent A Property
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-lightGold2 dark:text-white">
                Contact Us
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <i className="mr-3 text-4xl text-lightGold fa fa-location-dot"></i>
                  <span>
                    Al-Burraq Group, Dubai
                    <br />
                  </span>
                </li>
                <li className="mb-4">
                  <i className="mr-3 text-4xl text-lightGold fa fa-phone"></i>
                  <Link href={"tel:000000000"} className="hover:text-darkGold">
                    00-000-0000
                  </Link>
                </li>
                <li className="mb-4">
                  <i className="mr-3 text-4xl text-lightGold fa-regular fa-envelope"></i>
                  <Link
                    href={"mail:info@alburraqgroup.com"}
                    className="hover:text-darkGold"
                  >
                    info@alburraqgroup.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear}
            <a href="#" className="hover:underline hover:text-darkGold">
              <span className="ml-2 text-darkGold">Al-Burraq</span>
            </a>
            . All Rights Reserved.
          </div>
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Designed and Developed with Passion by
            <a
              href="https://beacontechh.com/"
              className="hover:underline hover:text-darkGold"
            >
              <span className="ml-2 text-darkGold">Beacon Techh</span>
            </a>
          </div>
          <div className="flex gap-5 mt-4 sm:justify-center sm:mt-0">
            <Link href={"#"}>
              <i className="text-3xl text-lightGold hover:text-darkGold fa-brands fa-facebook"></i>
            </Link>
            <Link href={"#"}>
              <i className="text-3xl text-lightGold hover:text-darkGold fa-brands fa-instagram"></i>{" "}
            </Link>
            <Link href={"#"}>
              <i className="text-3xl text-lightGold hover:text-darkGold fa-brands fa-square-youtube"></i>{" "}
            </Link>
            <Link href={"#"}>
              <i className="text-3xl text-lightGold hover:text-darkGold fa-brands fa-linkedin"></i>{" "}
            </Link>
            <Link href={"#"}>
              <i className="text-3xl text-lightGold hover:text-darkGold fa-brands fa-tiktok"></i>{" "}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
