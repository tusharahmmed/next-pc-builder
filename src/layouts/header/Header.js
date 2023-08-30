import {BiSolidUser} from "react-icons/bi";
import React from "react";
import {ButtonPcBuilder} from "@/components/ui/button/Button";
import SearchBox from "@/components/ui/searchInput/SearchBox";
import Link from "next/link";
import styles from "@/styles/layout/header.module.css";

const Header = () => {
  return (
    <header className="">
      <div className="spacing-x py-4 text-white bg-[#081621] flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-[#f58220]">
            PC <span className="text-[#0089d0]">Tech</span>
          </h1>
        </div>
        <div className="w-[40%] hidden md:block lg:w-[50%]">
          <SearchBox />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div>
              <BiSolidUser color="#ef4a23" size={22} />
            </div>
            <div className="ml-3">
              <p>Account</p>
              <p className="text-[12px] text-gray-300">
                <Link href={"/register"}>Register</Link> or{" "}
                <Link href={"/login"}>Login</Link>
              </p>
            </div>
          </div>
          <div className="ml-5">
            <ButtonPcBuilder />
          </div>
        </div>
      </div>
      <div className={`spacing-x ${styles.navWraper}`}>
        <div className={styles.nav}>
          <p>Processor</p>
          <p>Motherboard</p>
          <p>Ram</p>
          <p>Power</p>
          <p>Storage</p>
          <p>Monitor</p>
          <p>Others</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
