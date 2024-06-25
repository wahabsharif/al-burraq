import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../../assets/img/logo/al-burraq-logo-landscape-dark.svg";
import { NavbarMenu } from "../../menus";

interface PropTypes {
  canvasHidden: boolean;
  setCanvasHidden: any;
}

const Offcanvas = ({ canvasHidden, setCanvasHidden }: PropTypes) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-darkBg  bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96 ${
          canvasHidden ? `translate-x-full` : `translate-x-0`
        }`}
        tabIndex={-1}
        style={{ zIndex: 12 }}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="flex items-center justify-between p-4 offcanvas-header">
          <h5
            className="mb-0 font-semibold leading-normal offcanvas-title"
            id="offcanvasRightLabel"
          >
            <Image alt="Loading..." src={Logo} width={150} />
          </h5>

          <i
            className="text-2xl fa-solid fa-xmark"
            onClick={() => setCanvasHidden(!canvasHidden)}
          ></i>
        </div>
        <div className="flex-grow p-4 overflow-y-auto offcanvas-body">
          <div className="flex flex-col nav-items gap-7">
            {NavbarMenu.map((menu) => {
              return (
                <Link
                  className={`text-2xl text-lightGold border-b-4 py-3.5 ${
                    router.pathname === menu.path
                      ? "border-darkGold2"
                      : "border-gray"
                  }`}
                  key={menu.name}
                  href={menu.path}
                  onClick={() => setCanvasHidden(!canvasHidden)}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offcanvas;
