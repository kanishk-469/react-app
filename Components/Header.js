import Link from 'next/link';
import React from 'react'
// Link
const Header = (props) => {
  // console.log(props); clg
  return (
    <>
    <div className='header'>
      <div className="logo"> Logo </div>
    <div className="right-side">
      <Link href="/About" className='link-style'>About</Link>
      <Link href="/Services" className='link-style'>Services</Link>
      <Link href="/Contact" className='link-style'>Contact</Link>
      <Link href="/Login" className='link-style'>{props.login}</Link>
        
        </div>
    </div>
    
    </>
  )
}

export default Header