// Note: Call to action section
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-400 sm:text-4xl">
            Get in touch today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-teal-600">
            Ready to Ascend to Marketing Greatness? Step into the Realm of Minted Crown! 🚀👑✨
          </p>
          <Button href="/contact" color="blue" className="mt-10">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  )
}
