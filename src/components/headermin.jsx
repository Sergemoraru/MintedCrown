'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Logo from '@/components/Logo'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-10 w-10 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:hidden"
            static
          >
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <div className="relative grid gap-6 bg-teal-50 px-5 py-6 underline underline-offset-8 sm:gap-8 sm:p-8">
                <MobileNavLink href="/">
                  <span className="inline hover:text-teal-500">Home</span>
                </MobileNavLink>
                <MobileNavLink href="/contact">
                  <span className="inline hover:text-teal-500">Lets Chat!</span>
                </MobileNavLink>
                <MobileNavLink href="/mcm-services/socialMedia">
                  <span className="inline hover:text-teal-500">
                    Social Media
                  </span>
                </MobileNavLink>
                <MobileNavLink href="/mcm-services/campaign">
                  <span className="inline hover:text-teal-500">Campaign</span>
                </MobileNavLink>
                <MobileNavLink href="/mcm-services/strategyAndAdvisory">
                  <span className="inline hover:text-teal-500">
                    StrategyAndAdvisory
                  </span>
                </MobileNavLink>
              </div>
            </div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Headermin() {
  return (
    <header>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12 lg:gap-x-24">
            <Link
              href="/"
              aria-label="Home"
              className="relative right-28 top-7 flex "
            >
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button className="hidden sm:block" href="/" color="blue">
              <span className="inline">Home</span>
            </Button>
            <Button className="hidden sm:block" href="/contact" color="blue">
              <span className="inline ">Lets Chat!</span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
