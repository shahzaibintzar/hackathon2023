import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div>
    <section class="sticky-top">

        <nav class="navbar navbar-expand-lg bg-light ">
            <div class="container">
                <image src="/images/download.webp" width={118} hanging={30} alt="" class="img-fluid  "/>
                <button class="navbar-toggler bg-primary border-0 " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ps-5 ms-5" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                        <li class="nav-item">
                            <Link class=" active text-info nav-link ps-3 " aria-current="page" href="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ps-3" href="/Department">DEPARTMENT</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link ps-3" href="/Doctor">DOCTOR</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ps-3" href="/Contact"></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link ps-3" href="/Admin">ADMIN</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
    </div>
  )
}

export default Navbar