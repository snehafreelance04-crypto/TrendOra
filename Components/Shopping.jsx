"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Shopping_items from "./Shopping_items";

const Shopping = () => {
  const router = useRouter();

  useEffect(() => {
    const isLogged = sessionStorage.getItem("loginStatus");

    if (isLogged !== "true") {
      router.replace("/login");     // Prevent access
    }
  }, []);

  const isLogged = typeof window !== "undefined" 
    ? sessionStorage.getItem("loginStatus")
    : null;

  if (isLogged !== "true") return null; // Prevent UI flash

  return (
    <div>
      <Shopping_items />
    </div>
  );
};

export default Shopping;
