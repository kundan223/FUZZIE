'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const MenuOptions = (props: Props) => {
    const pathName = usePathname()
  return (
     <nav className=" dark:bg-black h-screen overflow-scroll  justify-between flex items-center flex-col  gap-10 py-6 px-2">

        <Link className = 'flex font-bold flex-row '
        href = '/'>
            fuzzie.
        </Link>

    </nav>
  )
}

export default MenuOptions