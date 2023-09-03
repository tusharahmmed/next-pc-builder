import {BiSolidUser} from "react-icons/bi";
import {useSession, signOut} from "next-auth/react";
import {ButtonPcBuilder} from "@/components/ui/button/Button";
import SearchBox from "@/components/ui/searchInput/SearchBox";
import Link from "next/link";
import styles from "@/styles/layout/header.module.css";

const Header = () => {
  const {data: session} = useSession();
  return (
    <header className="">
      <div className="spacing-x py-4 text-white bg-[#081621] flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <h1 className="text-2xl text-[#f58220]">
              PC <span className="text-[#0089d0]">Tech</span>
            </h1>
          </Link>
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
                {session ? (
                  <span className="cursor-pointer" onClick={() => signOut()}>
                    Log out
                  </span>
                ) : (
                  <>
                    <Link href={"/register"}>Register</Link> or{" "}
                    <Link href={"/login"}>Login</Link>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="ml-5">
            <Link href={"/pc-builder"}>
              {" "}
              <ButtonPcBuilder />
            </Link>
          </div>
        </div>
      </div>
      <div className={`spacing-x ${styles.navWraper}`}>
        <div className={styles.nav}>
          <Link href={"/category/processor"}>
            <p>Processor</p>
          </Link>
          <Link href={"/category/motherboard"}>
            <p>Motherboard</p>
          </Link>
          <Link href={"/category/ram"}>
            <p>Ram</p>
          </Link>
          <Link href={"/category/power"}>
            <p>Power</p>
          </Link>
          <Link href={"/category/storage"}>
            <p>Storage</p>
          </Link>
          <Link href={"/category/monitor"}>
            <p>Monitor</p>
          </Link>
          <Link href={"/category/others"}>
            <p>Others</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
