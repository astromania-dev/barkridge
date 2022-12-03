import {useEffect, useState} from 'react'
import {
  BookmarkSquareIcon,
  FireIcon,
  HomeIcon,
  InboxIcon,
  MoonIcon,
  SunIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const navigation = [
  {name: 'Home', href: '#', icon: HomeIcon},
  {name: 'Trending', href: '#', icon: FireIcon},
  {name: 'Bookmarks', href: '#', icon: BookmarkSquareIcon},
  {name: 'Messages', href: '#', icon: InboxIcon},
  {name: 'Profile', href: '#', icon: UserIcon},
]

export const Navbar = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      triggerDarkMode()
    }

    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const onSwitchMode = () => {
    isDark ? triggerLightMode() : triggerDarkMode()
    setIsDark(!isDark)
  }

  const logoSrc = isDark ? 'https://tailwindui.com/img/logos/mark.svg?color=white' : 'https://tailwindui.com/img/logos/mark.svg?color=black'

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div
          className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-white dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800">
          <div className="flex-1">
            <div className="flex items-center justify-center bg-zinc-100 bg-opacity-50 dark:bg-zinc-800 py-4">
              <img className="h-8 w-auto" src={logoSrc} alt="Your Company"/>
            </div>

            <nav aria-label="Sidebar" className="flex flex-col items-center space-y-3 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-lg p-4 black dark:white hover:bg-zinc-200 hover:dark:bg-zinc-800"
                >
                  <item.icon className="h-6 w-6" aria-hidden="true"/>
                  <span className="sr-only">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex justify-center flex-shrink-0 pb-5">
            <button
              onClick={onSwitchMode}
              className="flex items-center rounded-lg p-4 black dark:white hover:bg-zinc-200 hover:dark:bg-zinc-800"
            >
              {isDark ? <MoonIcon className="h-6 w-6"/> : <SunIcon className="h-6 w-6"/>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const triggerDarkMode = () => {
  document.documentElement.classList.add('dark')
}

const triggerLightMode = () => {
  document.documentElement.classList.remove('dark')
}
