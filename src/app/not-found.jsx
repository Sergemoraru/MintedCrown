/* eslint-disable react/no-unescaped-entities */
"use client"
import Link from 'next/link'
import { Button } from '@/components/Button'
import Logo from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Oopsie-daisy! 
        Looks like the page you're searching for went on a wild quest through the digital kingdom and got lost in the enchanted forest of bits and bytes. 
        Fear not, though; our team of tech-savvy wizards is already on the case to guide you back to the marketing magic you seek! 
        In the meantime, why not enjoy a cup of virtual tea while we unravel this delightful mystery? 🧙‍♂️🌳✨
      </p>
      <Button href="/" className="mt-10">
        Go back home
      </Button>
    </SlimLayout>
  )
}
