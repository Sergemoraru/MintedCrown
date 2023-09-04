'use client'
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/Button'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a scroll event listener to check whether the button should be visible
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    isVisible && (
      <Button
        className="back-to-top-button"
        onClick={scrollToTop}
        title="Back to Top"
        color='blue'
      >
        &#8593;
      </Button>
    )
  )
}

export default BackToTopButton
