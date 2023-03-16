import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';


const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, 
saleTime, smallText, midText, desc, product, buttonText, image} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div>
          <p>{smallText}</p>
          <h1>{midText}</h1>
          <p> <br/></p>
          <p>{desc}</p>
          <Link href='https://open.spotify.com/show/27kPCALOe5itYMM00INHCj?si=41399190fb2741ea'>
            <a target="_blank"><button type="button">{buttonText}</button></a>
          </Link>
        </div>
        <img 
          src={urlFor(image)}
          className="footer-banner-image"
        />
      </div>
    </div>
  )
}

export default FooterBanner