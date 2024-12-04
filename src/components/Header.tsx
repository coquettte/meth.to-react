import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { Navbar } from "./Navbar"



export function ModernHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mb-4">
            <div className="mx-auto container flex h-14 items-center">
                <div className="mx-auto hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">meth.su</span>
                    </a>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/1">Methamphetamine</a>
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/2">C4</a>
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/3">Semtex</a>
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/4">Flashbang</a>
                        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/5">Napalm</a>
                    </nav>
                    <div className="ml-5">
                        <Navbar />
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col space-y-4 mt-4">
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/1">Methamphetamine</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/2">C4</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/3">Semtex</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/4">Flashbang</a>
                            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="/recipe/5">Napalm</a>
                        </nav>
                    </SheetContent>
                </Sheet>
                <ThemeToggle />
            </div>
        </header>
    )
}

