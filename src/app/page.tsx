// app/page.tsx
'use client'

import { Progress } from '@/components/ui/progress'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const { user, isLoaded } = useUser()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && user) {
      router.push('/dashboard')
    } else {
      setLoading(false) 
    }
  }, [isLoaded, user, router])

  return (
    <div className="flex justify-center items-center h-screen text-xl">
      Loading...{/* You can keep the content here if needed, or just redirect */}
    </div>
  )
}
