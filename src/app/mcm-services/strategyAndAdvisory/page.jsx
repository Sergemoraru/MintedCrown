/* eslint-disable react/no-unescaped-entities */
'use client'
import peopleWorking1 from '@/images/diverse-people-working-office.jpg'

import Image from 'next/image'
import { Footermin } from '@/components/Footermin'
import { Headermin }  from '@/components/Headermin'

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
      <div className='-mt-24 -mb-12'>
        <Headermin />
      </div>
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5 lg:pt-20">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-teal-600">
                Strategy &amp; Advisory
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Navigating the Marketing Maze
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-teal-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={peopleWorking1}
            alt="workflow"
            width={912}
            height={564}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-600 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Charting Your Unique Path to{' '}
                <span className="text-teal-500">Success</span>
              </h2>
              <p className="mt-6">
                In the ever-evolving world of marketing, finding your way can
                feel like a magical adventure. That's where Minted Crown
                Marketing steps in as your trusty guide. Our seasoned marketing
                wizards don't just follow trends; they set them.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                <span className="text-teal-500">Unearthing</span> Opportunities
                and Challenges
              </h2>
              <p className="mt-6">
                We kickstart the journey by delving deep into the labyrinth of
                your industry, uncovering opportunities and challenges that may
                be hidden from plain sight. Armed with insights, we craft a
                custom marketing roadmap, a treasure map if you will, charting a
                course to your brand's prosperity.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Shining the <span className="text-teal-500">Spotlight</span> on
                Uniqueness
              </h2>
              <p className="mt-6">
                What truly sets us apart is our knack for unearthing your unique
                selling points and advising on the perfect positioning to
                captivate your audience. We sprinkle a dash of quirkiness into
                every strategy, ensuring your brand stands out like a sparkling
                gem in a sea of stones.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Steering Through Marketing's{' '}
                <span className="text-teal-500">Ever-Changing</span> Terrain
              </h2>
              <p className="mt-6">
                But the adventure doesn't stop there. With our ongoing support,
                we monitor your marketing performance, analyzing every twist and
                turn to optimize your path to success. We adjust the sails when
                needed, making sure you stay on course and reach your
                destination in style. Join us on this marketing odyssey, and
                together, we'll conquer the maze, unlocking your brand's full
                potential. The crown of success awaits – let's seize it!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footermin />
    </div>
  )
}
