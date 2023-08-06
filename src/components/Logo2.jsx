/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logoImage from '../images/logos/mintedlogo2.png'
import Image from 'next/image'

const MintedLogo = () => (
  <Image src={logoImage} alt="Minted Logo" />
)

export default MintedLogo
