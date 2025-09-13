import { Sidebar } from 'lucide-react'
import React from 'react'
iporty sidebar from '@/components/sidebar'

type Props = { children: React.ReactNode }

const Layout = ( props: Props
 ) => {
  return (
    <div className=' flex overflow-hidden h-screen'>
        <Sidebar  />
        <div className='w-full'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout