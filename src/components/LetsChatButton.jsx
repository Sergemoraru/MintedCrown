import React from 'react'
import { Button } from '@/components/Button'


export default function LetsChatButton() {
    return (
        <Button href="/contact" color="blue">
              <span>
                Lets <span className="hidden lg:inline">Chat!</span>
              </span>
            </Button>          
    )
}