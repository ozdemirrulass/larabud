import Link from "next/link";
import LoginForm from "./loginForm";
import { GithubIcon, GitlabIcon } from "lucide-react";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { Icons } from "@/components/layout/icons";
import { BACKEND_URL } from "@/lib/constants";

export default function Page() {
    return (
        <>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to create your account
                    </p>
                </div>
                <LoginForm />
                <a href={`${BACKEND_URL}/auth/github/login`} className={buttonVariants({ variant: "outline" })} >
                    <Icons.gitHub className="mr-2 h-4 w-4" /> Sign in with GitLab
                </a>
                <a className={buttonVariants({ variant: "outline" })} >
                    <GitlabIcon height={20} width={20} className="mr-2 h-4 w-4" /> Sign in with GitLab
                </a>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link
                        href="/terms"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/privacy"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </div>
        </>
    )
}
