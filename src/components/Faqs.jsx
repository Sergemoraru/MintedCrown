import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.png'

const faqs = [
  [
    {
      question: 'How can Minted Crown Marketing help my business shine like royalty?',
      answer:
        "With our enchanting marketing strategies and creative brilliance, we'll make your brand the crown jewel of its industry!",
    },
    {
      question: 'Is Minted Crown Marketing just another run-of-the-mill marketing agency?',
      answer: "Oh, not at all! We're the eccentric geniuses of marketing, adding a sprinkle of quirkiness to every campaign we touch.",
    },
    {
      question: 'Are you skilled in social media sorcery?',
      answer:
        "Absolutely! We're social media wizards, conjuring up engaging content that'll make your followers bow in awe.",
    },
  ],
  [
    {
      question: 'Can you handle marketing campaigns for niche businesses?',
      answer:
        'Of course! No challenge is too niche for us; we love diving into unique markets and making them our kingdom.',
    },
    {
      question:
        'How do you ensure our brand stands out from the competition?',
      answer:
        "We've got a secret potion of creativity and strategy that ensures your brand will sparkle brighter than the rest!",
    },
    {
      question:
        "What if we need a marketing campaign that's out-of-this-world creative?",
      answer:
        'Fear not! We thrive on creating intergalactic campaigns that boldly go where no marketing has gone before.',
    },
  ],
  [
    {
      question: 'Will you handle everything, even the tiniest details?',
      answer:
        "Absolutely, but we'll admit, we might leave a hint of delightful chaos to keep things interesting.",
    },
    {
      question: "Can you guarantee our business's success?",
      answer: "While we can't see the future, we promise to pour our heart and soul into every campaign, giving you the best shot at triumph!",
    },
    {
      question: 'Is there a "Minted Crown" dress code for your team?',
      answer:
        'Not exactly, but we do encourage the occasional tiara or wizard hat to keep our creative energies flowing!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt="background image"
        width={3500}
        height={3000}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our amazing support team
            and someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
