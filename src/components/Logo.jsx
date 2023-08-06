/* eslint-disable @next/next/no-img-element */
import React from 'react'
import logoImage from '../images/logos/crownlogo.png'
import Image from 'next/image'

const Logo = () => (
    <Image src={logoImage} alt="Crown Logo" width={250} height={200} />
)

export default Logo
