import Link from "next/link"
import { cn } from "@repo/ui/lib/utils"
export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <nav
            className={cn("flex items-center space-x-2 lg:space-x-2", className)}
            {...props}
        >
            <Link
                href="/examples/dashboard"
                className="text-sm flex items-center gap-1 font-medium transition-colors hover:text-primary"
            >
                Docs
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm flex items-center gap-1 font-medium transition-colors hover:text-primary"
            >
                Feedback
            </Link>
            <Link
                href="/examples/dashboard"
                className="text-sm flex items-center gap-1 font-medium transition-colors hover:text-primary"
            >
                Support
            </Link>
        </nav>
    )
}