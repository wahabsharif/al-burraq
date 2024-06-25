import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { fetchSellerProperties, logoutUser } from "../../../functions";
import styles from "../../../styles/Navbar.module.css";

const UserPopover = () => {
  // ?State For Popover ---------->
  const [popover, setPopover] = useState<
    boolean | MouseEventHandler<HTMLAnchorElement>
  >(false);
  // !State For Popover ---------->

  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [totalProperties, setTotalProperties] = useState<number>(0);

  /**
   * Handle When Someone Clicks Logout (Only For Logged In User)
   */
  const handleLogout = () => {
    logoutUser();
    setPopover(false);
    router.push("/");
    setUser(null);
    setTotalProperties(0);
  };
  /**
   * Fetch Seller Properties To Show Number Of Properties In Orange Circle
   */
  const getSellerProperties = async () => {
    const totalProperties = await fetchSellerProperties();
    setTotalProperties(totalProperties.length);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      if (localStorage.getItem("re-user")) {
        setUser(localStorage.getItem("re-user"));
        getSellerProperties();
      }
    }
    //eslint-disable-next-line
  }, [user]);

  return (
    <ul>
      <li className="relative">
        <div
          className="transition-all ease-in-out rounded-full shadow-2xl text-lightGold hover:bg-slate-800 hover:text-white hover:cursor-pointer shadow-slate-800"
          style={{ padding: ".75rem 1.1rem" }}
          onClick={() => setPopover(!popover)}
        >
          <span className={`absolute ${styles.cartCountSpan}`}>
            {totalProperties}
          </span>
          <i className="fa-regular fa-user"></i>
        </div>
        <div
          className={`absolute ${
            popover
              ? "opacity-100 -right-14 top-16 sm:top-14 sm:-right-0 visible"
              : "opacity-0 -right-14 top-24 sm:-right-0 invisible"
          } transition-all duration-300 bg-slate-800 rounded-lg ease-in-out px-6 shadow-2xl py-3 right-0`}
        >
          {user ? (
            <>
              <Link
                href={"/dashboard?route=myProperties"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2 "
              >
                Properties
              </Link>
              <Link
                href={"/dashboard?route=package"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2 "
              >
                Package
              </Link>
              <Link
                href={"/dashboard?route=reviews"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2 "
              >
                Reviews
              </Link>
              <Link
                href={"/dashboard?route=settings"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2 "
              >
                Settings
              </Link>
              <div
                onClick={handleLogout}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 cursor-pointer text-lightGold hover:text-darkGold hover:border-darkGold2 "
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link
                href={"/login"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2"
              >
                Login
              </Link>
              <Link
                href={"/register"}
                onClick={() => setPopover(!popover)}
                className="block px-8 pb-2 my-6 text-sm font-semibold transition-all duration-300 border-b-2 text-lightGold hover:text-darkGold hover:border-darkGold2"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </li>
    </ul>
  );
};

export default UserPopover;
