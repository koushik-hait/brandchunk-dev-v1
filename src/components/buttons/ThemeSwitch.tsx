"use client";

import { useTheme } from "@/contexts/themeContext";
import React, { useEffect } from "react";
import {Switch} from "@nextui-org/react";
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs";

const ThemeSwitch = () => {
  

  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    // console.log(theme);
    document.querySelector("html")!.classList.remove("dark", "light");
    document.querySelector("html")!.classList.add(theme);
  }, [theme]);

  return (
    <>
    <Switch
      value={theme}
      size="lg"
      color="success"
      onChange={toggleTheme}
      startContent={<BsFillSunFill />}
      endContent={<BsFillMoonStarsFill />}
    >
    </Switch>
    </>
  );
};

export default ThemeSwitch;
