'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'

const THEMES = [
  { id: 'light', icon: <SunIcon className="h-5 w-5" /> },
  { id: 'dark', icon: <MoonIcon className="h-5 w-5" /> },
  { id: 'system', icon: <MonitorIcon className="h-5 w-5" /> },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-2">
      {THEMES.map(({ id, icon }) => (
        <button
          key={id}
          onClick={() => setTheme(id)}
          className={`p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition ${
            theme === id ? 'bg-gray-200 dark:bg-gray-700' : ''
          }`}
          aria-label={`Switch to ${id} mode`}
        >
          {icon}
        </button>
      ))}
    </div>
  )
}