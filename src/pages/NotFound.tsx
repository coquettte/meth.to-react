"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export default function NotFound() {
    const [progress, setProgress] = React.useState(0)
    const [showMessage, setShowMessage] = React.useState(false)

    React.useEffect(() => {
        const timer1 = setTimeout(() => setProgress(60), 1000)
        const timer2 = setTimeout(() => setProgress(90), 2000)
        const timer3 = setTimeout(() => setShowMessage(true), 3000)

        return () => {
            clearTimeout(timer1)
            clearTimeout(timer2)
            clearTimeout(timer3)
        }
    }, [])

    return (
        <div className="w-full max-w-md mx-auto mt-10 space-y-4">
            <Progress value={progress} className="w-full" />
            {showMessage && (
                <div className="text-center text-2xl font-bold">
                    404 Not Found
                </div>
            )}
        </div>
    )
}

