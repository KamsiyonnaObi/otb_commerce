import React from 'react';
import Link from 'next/Link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"> {heroBanner.smallText} </p>
        <h3>{heroBanner.midText}</h3>
        <img src={urlFor(heroBanner.image)} alt="hoodie" className="hero-banner-image" />

        <div>
          <Link href='https://open.spotify.com/show/27kPCALOe5itYMM00INHCj?si=41399190fb2741ea'>
            <a target="_blank"><button type="button"> {heroBanner.buttonText}</button></a>
          </Link> 

          <div className="desc">
            <h5> DESCRIPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default HeroBanner