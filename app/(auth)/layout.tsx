
import Image from "next/image";
import Link from "next/link";
import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="m-1 bg-neutral-100 min-h-screen">
      <div className="flex-row flex">
        <Image
          src={"/onboarding-img.png"}
          alt="bgimg"
          width={500}
          height={500}
          className=" h-screen w-auto"
        ></Image>
        <div className="flex flex-col justify-center items-center pt-4 md:pt-14 bg-white flex-1">
          <Link href={"/"}>
            <Image src="/logo.png" height={100} width={100} alt="logo" />
          </Link>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
