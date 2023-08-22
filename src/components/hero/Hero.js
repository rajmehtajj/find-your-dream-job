import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='pt-10'>
            <div className='lg:flex block'>
                <div className='lg:w-2/3 w-full my-auto'>
                    <h1 className='lg:text-5xl text-4xl font-bold'>Let's Find your <br /> <span className='text-gradient font-bold'>dream job</span></h1>
                    <p className='text-xl mt-8 mb-8'>
                    We serve as a valuable tool or platform specifically created to assist job seekers in finding suitable employment opportunities. 
                    Our tool encompasses a range of resources such as job boards, networking events, and career fairs, all aimed at facilitating the job search process.
                    </p>

                    <Link to={'/all-jobs'} className='btn gradient-btn'>
                        Get Started
                    </Link>
                </div>
                <div className='lg:w-1/3 ml-auto text-right w-full'>
                    <img className='block ml-auto' src='https://img.freepik.com/free-photo/business-man-owner-company-office_1303-15851.jpg?w=1380&t=st=1689655639~exp=1689656239~hmac=13bbe16f187625ec7e10f42e464d6ffbbec4b79198056147f252847a25351f62' alt='hero' />
                </div>
            </div>
        </div>
    )
}

export default Hero