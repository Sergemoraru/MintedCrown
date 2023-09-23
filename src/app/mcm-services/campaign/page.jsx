/* eslint-disable react/no-unescaped-entities */
'use client'
import marketingCampaign from '@/images/business-marketing1.jpg'

import Image from 'next/image'
import { Footermin } from '@/components/Footermin'
import { Headermin } from '@/components/Headermin'

export default function Campaign() {
  return (
    <div className="relative isolate overflow-auto bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-auto">
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
        <Headermin />
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5 lg:pt-20">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Campaign
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                The Craftsmanship Behind the Magic
              </h1>
            </div>
          </div>
        </div>
        <div className="p-12 overflow-y-auto lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-full max-w-none rounded-xl bg-teal-900 shadow-xl ring-1 ring-gray-400/10"
            src={marketingCampaign}
            alt="workflow"
            width={912}
            height={564}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-600 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Transforming Ideas into{' '}
                <span className="text-teal-500">Captivating</span> Campaigns
              </h2>
              <p className="mt-6">
                Welcome to the enchanting world of Majestic Campaign Crafting,
                where Minted Crown Marketing creates marketing campaigns that
                are nothing short of magical.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                From Quirky Concepts to Regal{' '}
                <span className="text-teal-500">Success</span>
              </h2>
              <p className="mt-6">
                Our campaign crafting process begins with unearthing your
                brand's essence and identifying your target audience. With this
                foundation, we conjure up quirky, captivating concepts that are
                tailored to resonate with your unique identity.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Turning Campaigns into{' '}
                <span className="text-teal-500">Timeless</span> Tales
              </h2>
              <p className="mt-6">
                Our sorcery doesn't stop there. We're experts in optimizing
                posting times and content performance. We actively listen to
                your audience, responding proactively to feedback. By
                collaborating with influencers and brand ambassadors, we create
                a dynamic environment where your brand engages with your
                audience in real-time, building strong, lasting connections.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Weaving Your Brand's Narrative into{' '}
                <span className="text-teal-500">Hearts</span>
              </h2>
              <p className="mt-6">
                But what truly sets us apart is our ability to weave your
                brand's narrative into the hearts of your audience. Each
                campaign becomes a timeless tale, captivating and engaging your
                audience in ways that leave a lasting mark. Join us on this
                journey of enchantment, and let your brand's story unfold in the
                most magical way possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footermin />
    </div>
  )
}
