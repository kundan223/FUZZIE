'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { menuOptions } from '@/lib/constant'
import { 
  Home, 
  Workflow, 
  Settings, 
  Zap, 
  CreditCard, 
  FileText, 
  FileX 
} from 'lucide-react'

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()
  
  const iconMap = {
    'Dashboard': Home,
    'Workflows': Workflow,
    'Settings': Settings,
    'Connections': Zap,
    'Billing': CreditCard,
    'Templates': FileText,
    'Logs': FileX,
  }

  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2">
      <Link className="flex font-bold flex-row" href="/">
        fuzzie.
      </Link>
      <TooltipProvider>
        {menuOptions.map((option) => {
          const Icon = iconMap[option.name as keyof typeof iconMap]
          const isActive = pathName === option.href
          
          return (
            <Tooltip key={option.name}>
              <TooltipTrigger asChild>
                <Link
                  href={option.href}
                  className={`p-2 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-white text-black' 
                      : 'hover:bg-white/10 text-white'
                  }`}
                >
                  <Icon size={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{option.name}</p>
              </TooltipContent>
            </Tooltip>
          )
        })}
      </TooltipProvider>
    </nav>
  )
}

export default MenuOptions