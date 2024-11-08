"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";
import { useUser } from "@/lib/zustand/useUser";

const Navbar = () => {
  // const [user, setUser] = useState(null);
  const { user, setUser } = useUser();
  // const session = auth();
  useEffect(() => {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const userObject = JSON.parse(userJSON);
      setUser(userObject);
    }
  }, []);

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {user ? (
            <>
              {/* <Link href="/startup/create">
                <span>Create</span>
              </Link> */}
              <button
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser({});
                  redirect("/sign-in");
                }}
              >
                <span>Sign out</span>
              </button>
              <Link href={`/user/${user?.id}`}>
                <span>{user?.name}</span>
              </Link>
            </>
          ) : (
            <Button
              onClick={async () => {
                await redirect("/sign-in");
              }}
            >
              <span>Login</span>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
