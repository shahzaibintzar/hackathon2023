import React from 'react'
import './globals.css'
import Link from 'next/link'

function page() {
  return (
    <div>
    <div className="home" id="Home">
        <div className="home1 d-flex align-items-center">
            <div className="container mt-5 pt-5">
                <div className="home2 row ">
                    <div className="col-lg-12 mt-5 text-light">
                        <h1 className="fw-500">We Care for Your Health Every Moment</h1>
                        <p className="mt-3 mb-5">If you are looking at blank cassettes on the web, you may be very confused
                            at the difference
                            in price You may see some
                            for as low as each.</p>
                        <Link className="main_btn mr-10 text-decoration-none border-info rounded-1 pt-3 pb-3  ps-4 pe-4"
                            href="">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default page