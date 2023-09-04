/* eslint-disable react/no-unescaped-entities */
'use client'
import socialMedia from '@/images/friends-using-smartphones-together-outdoors.jpg'

import Image from 'next/image'
import { Footer2 } from '@/components/footer2'
import { Header2 } from '@/components/header2'

export default function StrategyAndAdvisory() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-emerald-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-teal-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="-mb-12 -mt-24">
        <Header2 />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5 lg:pt-20">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Social Media
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                The Art of Social Media Sorcery
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-teal-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={socialMedia}
            alt="workflow"
            width={912}
            height={564}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-600 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Crafting <span className="text-teal-500">Enchanting</span>
                <br />
                Social Media Experiences
              </h2>
              <p className="mt-6">
                Welcome to the realm of social media sorcery, where Minted Crown
                Marketing conjures captivating content and strategies to make
                your brand a reigning star on the digital stage.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Creating Spells for Social Media{' '}
                <span className="text-teal-500">Success</span>
              </h2>
              <p className="mt-6">
                Our magical approach involves crafting shareable, engaging
                content that sparks conversations and leaves a lasting
                impression. We tailor strategies to fit each unique platform,
                leveraging trends and viral content to amplify your brand's
                presence.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Building a{' '}
                <span className="text-teal-500">Loyal Community</span>,
                <br />
                One Interaction at a Time
              </h2>
              <p className="mt-6">
                But our sorcery doesn't stop there. We're experts in optimizing
                posting times and content performance. We actively listen to
                your audience, responding proactively to feedback. By
                collaborating with influencers and brand ambassadors, we create
                a dynamic environment where your brand engages with your
                audience in real-time, building strong, lasting connections.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  )
}
