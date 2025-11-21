"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Shopping_items from "./Shopping_items";

const Shopping = () => {
  const router = useRouter();

  // Check login BEFORE rendering UI = instant redirect
  if (typeof window !== "undefined") {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      router.replace("/login"); // ⚡ instant redirect
      return null; // prevent component from rendering
    }
  }

  return (
    <div>
      <Shopping_items />
    </div>
  );
};

export default Shopping;
