import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to={'/statistics'}>
                                Statistics
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/applied'}>
                                Applied Jobs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="semibold" to={'/blogs'}>
                                Blogs
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to={'/'} className="active btn font-extrabold text-left p-0 bg-transparent hover:bg-transparent text-black border-none normal-case text-xl">
                    <span className='text-black'>JobFinder</span>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={'/statistics'}>
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/applied'}>
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="semibold" to={'/blogs'}>
                            Blogs
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/all-jobs'} className='btn gradient-btn'>
                    Start Applying
                </Link>
            </div>
        </div>
    )
}

export default Header