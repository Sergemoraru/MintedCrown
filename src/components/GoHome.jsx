import React from 'react'
import { Button } from '@/components/Button'

export default function LetsChatButton() {
  return (
    <Button href="/" color="blue">
      <span>
        Go <span className="hidden lg:inline">Home</span>
      </span>
    </Button>
  )
}
