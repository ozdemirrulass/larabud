import React from 'react'
import { Icons } from './icons'
import { UserNav } from './user-nav'

const TopBar = () => {
    return (
        <div className="border-b">
            <div className="flex h-14 items-center px-4">
                <div className="relative mx-1 flex items-center text-lg font-medium">
                    <Icons.logo />
                    Larabud
                </div>
                <Icons.separator className="h-4 w-4" />
                <div className="ml-auto flex items-center space-x-4">
                    <UserNav />
                </div>
            </div>
        </div>
    )
}

export default TopBar