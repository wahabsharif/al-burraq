import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo/al-burraq-logo-landscape-dark.png";
import Offcanvas from "./Offcanvas";
import { useState } from "react";
import NavMenu from "../subcomponents/navbar/NavMenu";
import NavIcons from "../subcomponents/navbar/NavIcons";
import SearchForm from "./SearchForm";

const Navbar = () => {
  // State For Canvas ---------------->
  const [canvasHidden, setCanvasHidden] = useState<boolean>(true);
  // State For Canvas ---------------->

  // State Search Visibility ---------------->
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);
  // State Search Visibility ---------------->

  return (
    <div className="sticky top-0 shadow-lg" style={{ zIndex: 21 }}>
      <SearchForm
        setIsSearchVisible={setIsSearchVisible}
        isSearchVisible={isSearchVisible}
      />

      <div className="grid items-center grid-cols-12 py-8 bg-darkBg">
        <div className="col-span-12 text-center md:col-span-4 lg:col-span-4 sm:col-span-6">
          <Link href="/">
            <Image
              src={Logo}
              alt="Loading..."
              className="mx-auto"
              priority={true}
              width={150}
              height={0}
            />
          </Link>
        </div>
        <div className="hidden text-center md:col-span-4 lg:col-span-4 md:block lg:block">
          <NavMenu />
        </div>
        <div className="flex justify-center col-span-12 gap-4 mt-8 text-center md:mt-0 sm:mt-0 lg:mt-0 md:col-span-4 lg:col-span-4 sm:col-span-6">
          <NavIcons
            canvasHidden={canvasHidden}
            setIsSearchVisible={setIsSearchVisible}
            isSearchVisible={isSearchVisible}
            setCanvasHidden={setCanvasHidden}
          />
        </div>
        <Offcanvas
          canvasHidden={canvasHidden}
          setCanvasHidden={setCanvasHidden}
        />
      </div>
    </div>
  );
};

export default Navbar;
