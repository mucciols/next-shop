"use client";
import { fetchJson } from "@/app/api/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetchJson("/api/user", {
          method: "GET",
        });
        //console.log("sign in response in navbar:", response);
        setUser(response);
      } catch (error) {
        //console.error("navbar User not logged in", error);
        setUser(null);
      }
    };
    loadUser();
  }, []);

  const handleSignOut = async () => {
    try {
        const response = await fetchJson("/api/logout", {
          method: "GET",
        });

        console.log("log out in response in navbar:", response);
        setUser(null);
      } catch (error) {
        // console.error("User not logged in", error);
        setUser(null);
      }
  }

  return (
    <nav className="px-2 py-1 text-sm">
      <ul className="flex gap-2">
        <li className="text-lg font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li role="separator" className="flex-1"></li>
        {user ? (
          <>
            <li>{user.name}</li>
            <li>
              <button onClick={handleSignOut}>Sign Out</button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
