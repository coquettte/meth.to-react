import { Globe } from 'lucide-react'
import { FaDiscord } from "react-icons/fa";

export function ModernFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 mx-auto">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        The owners of this site are not liable for any harm caused by the information on this website, which exists solely as an educational resource for researchers and scholars. Additionally, it is important to note that the recipes provided on this site are purely fictional and for entertainment purposes only.
                    </p>
                </div>
                <div className="flex gap-4">
                    <a href="https://coquettte.com" target="_blank" rel="noreferrer">
                        <Globe className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                    <a href="https://discord.gg/e7tmuuk9At" target="_blank" rel="noreferrer">
                        <FaDiscord className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

