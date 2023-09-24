/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logoImage from '../images/logos/mintedlogo2.png'
import Image from 'next/image'

const MintedLogo = () => (
  <Image src={logoImage} alt="Minted Logo" height={2500} width={2500}/>
)

export default MintedLogo
