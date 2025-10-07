// app/(main)/(pages)/settings/page.tsx
import React from 'react'
import { currentUser } from '@clerk/nextjs'

type Props = {}

const Settings = async (props: Props) => {
  const authUser = await currentUser()
  if (!authUser) return null

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold">Settings</h1>
    </div>
  )
}

export default Settings
