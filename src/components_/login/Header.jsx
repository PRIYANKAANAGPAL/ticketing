import React from 'react'

function Header() {
  return (
    <>
     <header className="header">
        <h1 className="website-name">ResolvNow</h1>
        <button className="sign-in-button" onClick={handleSignInClick}>
          Sign In
        </button>
        
      </header></>
  )
}

export default Header