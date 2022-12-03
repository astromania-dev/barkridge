import {useEffect, useState} from 'react'
import {
  HomeIcon,
  MoonIcon,
  SunIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {name: 'About', href: 'https://irving.dev', icon: UserIcon, external: true},
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

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex w-20 flex-col">
        <div
          className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-white dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800">
          <div className="flex-1">
            <div className="flex items-center justify-center bg-zinc-100 bg-opacity-50 dark:bg-zinc-800 py-4">
              <svg className="h-8 w-auto fill-black dark:fill-white" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                <path d="M121.463 3.6972C121.398 3.11382 120.389 1.68871 120.389 1.68871C118.11 -1.3532 114.261 1.68871 114.261 1.68871L64.1968 52.9594C64.1968 52.9594 15.9637 3.24716 13.2456 0.855308C10.2102 -1.41154 6.98762 1.37201 6.64583 2.92214C6.30404 4.47226 6.67024 20.6569 6.67024 20.6569C6.67024 20.6569 6.60514 66.9438 6.67024 69.0773C6.73534 71.2108 9.45339 73.8027 9.45339 73.8027C9.45339 73.8027 60.844 126.557 61.8531 127.399C62.8622 128.24 65.4582 128.049 65.8976 127.724C66.337 127.399 67.9239 125.782 67.9239 125.782C67.9239 125.782 119.437 73.0276 120.202 72.1192C120.958 71.2108 121.495 69.5273 121.495 69.5273L121.471 67.6522C121.471 67.6522 121.536 4.28057 121.471 3.6972H121.463ZM36.6908 80.1115C36.113 80.4032 34.5017 80.6615 32.63 78.653C30.7665 76.6445 19.4467 65.2853 19.4223 64.8936C19.3897 64.5019 19.4223 31.9077 19.4223 31.9077C19.4223 31.9077 19.4874 29.5742 20.4314 29.1908C21.3835 28.7992 21.888 28.2824 23.8411 30.1659C25.8024 32.0411 49.1906 56.0596 49.1906 56.0596L53.2676 59.9766C53.2676 59.9766 54.8138 61.5934 53.2676 63.2102C51.7214 64.827 37.2686 79.8115 36.6908 80.1032V80.1115ZM108.483 64.702C108.353 65.027 66.1662 108.589 66.1662 108.589C66.1662 108.589 64.1154 110.631 62.024 108.589C59.9407 106.547 46.6027 92.9208 46.1877 92.2791C45.7808 91.6291 45.2356 90.3373 46.1877 89.1372C47.1398 87.9371 103.836 30.1659 103.836 30.1659C103.836 30.1659 105.952 28.0324 107.157 28.7408C108.361 29.4492 108.581 30.1659 108.581 31.591C108.581 33.0161 108.613 64.3769 108.483 64.702V64.702Z"/>
              </svg>
            </div>

            <nav aria-label="Sidebar" className="flex flex-col items-center space-y-3 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-lg p-4 black dark:white hover:bg-zinc-200 hover:dark:bg-zinc-800"
                  target={item.external ? '_blank' : ''}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true"/>
                  <span className="sr-only">{item.name}</span>
                </Link>
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
