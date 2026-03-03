"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Shopping_items from "./Shopping_items";

export default function Shopping() {

  const router = useRouter();

  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const loginStatus = sessionStorage.getItem("loginStatus");

    if (loginStatus === "true") {

      setIsLogged(true);

    } else {

      router.replace("/login");

    }

    setLoading(false);

  }, []);


  if (loading) return null;

  if (!isLogged) return null;


  return <Shopping_items />;

}