import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
    <p>2023 OTB Podcast All rights reserved</p>
    <p className="icons">
      <Link href='https://www.instagram.com/_otb_podcast/'>  
        <a target="_blank"><AiFillInstagram /></a>
      </Link>

      <Link href='https://www.youtube.com/channel/UCQNhudVAA3ucjeLmTJfLfLg'>  
        <a target="_blank"><AiOutlineYoutube /></a>
      </Link>
    </p>
    </div>
  )
}

export default Footer