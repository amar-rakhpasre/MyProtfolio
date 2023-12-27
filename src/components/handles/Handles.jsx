import React from 'react'
import './Handles.css'
import { AiFillAmazonCircle, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/amar-rakhpasre-72b80928a/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>     
      <a href="https://x.com/King_yammaa?t=nKVDPMkiQURyilAKXkrtsQ&s=09" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/amar-rakhpasre" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' /></a>


    </section>
  )
}

export default Handles
