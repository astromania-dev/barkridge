import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {SquaresPlusIcon} from '@heroicons/react/24/outline'
import Link from 'next/link'

declare type Item = {
  name: string
  description: string
  href: string
  icon: any
  current?: boolean
}

const initialItems: Item[] = [
  {
    name: 'UUID Generator',
    description: 'Tool to generate the Universally Unique Identifier string, supported v1 and v4.',
    href: '/features/uuid-generator',
    icon: SquaresPlusIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SubNavbar = () => {
  const router = useRouter()

  const [items, setItems] = useState<Item[]>(initialItems)

  useEffect(() => {
    for (let item of items) {
      item.current = router.asPath.startsWith(item.href)
    }

    setItems([...items])
  }, [router.asPath])

  return (
    <nav
      className="hidden w-96 flex-shrink-0 border-r border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 xl:flex xl:flex-col"
    >
      <div
        className="flex h-16 flex-shrink-0 items-center border-b border-zinc-100 dark:border-zinc-800 px-6"
      >
        <p className="text-lg font-medium dark:text-white">
          Applications
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-zinc-100 dark:bg-zinc-800 bg-opacity-50'
                : 'hover:bg-zinc-100 hover:dark:bg-zinc-800 hover:bg-opacity-50',
              'flex p-6 border-b border-zinc-100 dark:border-zinc-800'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon className="-mt-0.5 h-6 w-6 flex-shrink-0 text-zinc-900 dark:text-white" aria-hidden="true"/>

            <div className="ml-3">
              <p className="font-medium text-zinc-900 dark:text-white">{item.name}</p>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  )
}
