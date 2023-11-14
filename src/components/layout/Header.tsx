"use client"

import React from "react";
import { Navbar, Image, NavbarBrand, NavbarContent, NavbarItem, Badge, Link, Input, Popover, PopoverTrigger, PopoverContent, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Logo from "../logos/Logo";
import { BsFillHeartFill, BsCart3, BsSearch } from "react-icons/bs"
import { MegaMenu } from "./MegaMenu";
import AccountMenu from "./AccountMenu";
import { ThemeSwitch } from "..";
import { useAuth } from "@/contexts/authContext";
import MiniCart from "./MiniCart";


export const Header = () => {
  const { user } = useAuth();
    const authenticated =  user ? true : false;
  return (
    <>
      {/* top nav */}
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Logo />

          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<BsSearch />}
            type="search"
          />
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <AccountMenu authStatus={authenticated} />
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Badge content="5" color="primary">
                <BsFillHeartFill size={25} />
              </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <Card className="max-w-[400px]">
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <p className="text-md">Wishlist</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>Make beautiful websites regardless of your design experience.</p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    isExternal
                    showAnchorIcon
                    href="https://github.com/nextui-org/nextui"
                  >
                    Visit Wishlist
                  </Link>
                </CardFooter>
              </Card>
            </PopoverContent>
          </Popover>
          <Popover placement="bottom-end">
            <PopoverTrigger>
              <Badge content="6" color="primary">
                <BsCart3 size={25} />
              </Badge>
            </PopoverTrigger>
            <PopoverContent>
              <MiniCart />
            </PopoverContent>
          </Popover>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <ThemeSwitch />
        </NavbarContent>
      </Navbar>
      {/* bottom nav */}
      <Navbar isBordered>
        <MegaMenu />
      </Navbar>

    </>
  )
}