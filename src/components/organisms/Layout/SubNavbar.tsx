import {
  BanknotesIcon,
  BellIcon,
  CogIcon,
  KeyIcon,
  MagnifyingGlassCircleIcon,
  PhotoIcon,
  SquaresPlusIcon
} from '@heroicons/react/24/outline'

const subNavigation = [
  {
    name: 'Account',
    description: 'Ullamcorper id at suspendisse nec id volutpat vestibulum enim. Interdum blandit.',
    href: '#',
    icon: CogIcon,
    current: true,
  },
  {
    name: 'Notifications',
    description: 'Enim, nullam mi vel et libero urna lectus enim. Et sed in maecenas tellus.',
    href: '#',
    icon: BellIcon,
    current: false,
  },
  {
    name: 'Security',
    description: 'Semper accumsan massa vel volutpat massa. Non turpis ut nulla aliquet turpis.',
    href: '#',
    icon: KeyIcon,
    current: false,
  },
  {
    name: 'Appearance',
    description: 'Magna nulla id sed ornare ipsum eget. Massa eget porttitor suscipit consequat.',
    href: '#',
    icon: PhotoIcon,
    current: false,
  },
  {
    name: 'Billing',
    description: 'Orci aliquam arcu egestas turpis cursus. Lectus faucibus netus dui auctor mauris.',
    href: '#',
    icon: BanknotesIcon,
    current: false,
  },
  {
    name: 'Integrations',
    description: 'Nisi, elit volutpat odio urna quis arcu faucibus dui. Mauris adipiscing pellentesque.',
    href: '#',
    icon: SquaresPlusIcon,
    current: false,
  },
  {
    name: 'Additional Resources',
    description: 'Quis viverra netus donec ut auctor fringilla facilisis. Nunc sit donec cursus sit quis et.',
    href: '#',
    icon: MagnifyingGlassCircleIcon,
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SubNavbar = () => {
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
        {subNavigation.map((item) => (
          <a
            key={item.name}
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
          </a>
        ))}
      </div>
    </nav>
  )
}
