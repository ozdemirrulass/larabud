import { getSession } from '@/lib/session'
import { Button, buttonVariants } from '@repo/ui/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { UserNav } from './user-nav'
import { ModeToggle } from '@repo/ui/components/ui/mode-toggle'

const AuthNav = async () => {
    const session = await getSession()
    return (
        !session || !session.user
            ? (<>
                <ModeToggle hasSession={false} />
                <Link href="/login" className={buttonVariants({ variant: "outline", size: "sm" })}>Login</Link>
                <Button variant={"outline"} size={"sm"} >Register</Button>
            </>)
            : (<UserNav session={session} />)
    )
}

export default AuthNav