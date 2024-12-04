"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Meth recipe",
        href: "/videos/meth.mp4",
        description:
            "Meth video recipe",
    },
    {
        title: "CIA grade blackpowder",
        href: "/videos/blackpowder.mp4",
        description:
            "Blackpowder video recipe with photos",
    },
    {
        title: "Leaked documents",
        href: "/videos/nato.mp4",
        description:
            "Allegedly leaked nato documents",
    },
    {
        title: "Kitchen nightmare",
        href: "/videos/gordon.mp4",
        description: "ifunny",
    },
    {
        title: "9/11 lore",
        href: "/videos/911.mp4",
        description:
            "Video documentary",
    },
    {
        title: "Bomb making video",
        href: "/videos/bomb.mp4",
        description:
            "How to make a bomb",
    },
]

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60">Links</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
                                        href="https://old.meth.su/"
                                    >
                                        <img className="h-full w-full rounded-md" src="/images/rt.png" />
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="https://cia.tf/" title="cia.tf">
                                File Uploader
                            </ListItem>
                            <ListItem href="https://xn--xuu.ws/" title="Linux">
                                VM in a browser
                            </ListItem>
                            <ListItem href="https://forum.meth.su/" title="Forum">
                                Meth Forum
                            </ListItem>
                            <ListItem href="https://discord.gg/e7tmuuk9At" title="Discord">
                                Discord Server
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="transition-colors hover:text-foreground/80 text-foreground/60">Videos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4 md:w-[200px] md:grid-cols-1 lg:w-[300px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
