import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    // **PLANS**
    // destructure user as a prop to utilize and conditionally render navbar components

    return (
        <>
            <div className="navbar bg-base-100">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
        </>
    )
}
