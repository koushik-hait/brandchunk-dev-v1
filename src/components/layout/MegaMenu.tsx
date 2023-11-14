"use client";

import * as React from "react";
import { menu } from "@/config/menu";

import { cn, genSlug } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/router";

export function MegaMenu() {
  // const router = useRouter();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menu.map((m, i) => {
          return (
            <NavigationMenuItem key={`${genSlug(m.title)}-${i}`}>
              <NavigationMenuTrigger>{m.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                  {m.subMenu.map((component, indx) => (
                    <ListItem
                      key={`${genSlug(m.title)}-${genSlug(
                        component.title
                      )}-${i}-${indx}`}
                      title={component.title}
                      href={`/categories/${genSlug(m.title)}-${genSlug(
                        component.title
                      )}`}
                    >
                      <ul>
                      {component?.subMenu.map((sm, index) => {
                        return (
                          <li
                            key={`${genSlug(m.title)}-${genSlug(
                              component.title
                            )}-${genSlug(sm.title)}-${i}-${indx}-${index}`}
                          >
                            {/* <NavigationMenuLink asChild > */}
                              <Link 
                              href={`/categories/${genSlug(m.title)}-${genSlug(
                                component.title
                              )}-${genSlug(sm.title)}`}
                              >{sm.title}</Link>
                            {/* </NavigationMenuLink> */}
                          </li>
                        );
                      })}
                      </ul>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type TListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  TListItemProps
>(({ className, title, children, ...props }, ref) => {
  return (
    <li 
    className={cn(
      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
      className
    )}
    >
      {/* <NavigationMenuLink asChild> */}
        {/* <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        > */}
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        {/* </a> */}
      {/* </NavigationMenuLink> */}
    </li>
  );
});
ListItem.displayName = "ListItem";
