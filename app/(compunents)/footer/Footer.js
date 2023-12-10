import Link from "next/link"

export default function Footer() {
  return (
 <>
 <footer className="footer  pt-3 pb-3 bg-dark" id="Contact">
        <div className="container pt-5 pb-5 mt-5 mb-3">
            <div className="row">
                <div className="col-lg-2  col-md-6">
                    <div className="footer1">
                        <h6 className="ms-4 text-light">Top Products</h6>
                        <ul className="footer-nav ">
                            <li className=" pt-2 pb-1">
                                <Link href="#" className="text-decoration-none text-secondary">Managed Website</Link>
                            </li>
                            <li  className=" pt-1 pb-1">
                                <Link href="#"  className="text-decoration-none text-secondary">Manage Reputation</Link>
                            </li>
                            <li  className=" pt-1 pb-1">
                                <Link href="#"  className="text-decoration-none text-secondary">Power Tools</Link>
                            </li>
                            <li  className=" pt-1 pb-1">
                                <Link href="#"  className="text-decoration-none text-secondary">Marketing Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4  col-md-6 ">
                    <div className="footer1 mail-chimp">
                        <h6 className="mb-20 text-light">Contact Us</h6>
                        <p className=" pt-2 pb-1 text-secondary">
                            56/8, Santa bullevard, Rocky beach, San fransisco, Los angeles, USA
                        </p>
                        <h3 className="text-light">012-6532-568-9746</h3>
                        <h3 className="text-light">012-6532-568-97468</h3>
                    </div>
                </div>
                <div className="col-lg-6  col-md-12">
                    <div className="footer1 newsletter">
                        <h6 className="text-light">Newsletter</h6>
                        <p className="text-secondary  pt-2 pb-1">You can trust us. we only send promo offers, not a single spam.</p>
                        <div id="mc_embed_signup">
                            <form>
                                <div className="form-group row">
                                    <div className="col-lg-7 col-md-6 col-sm-12 mt-3 mb-2">
                                        <input name="EMAIL" placeholder="Your Email Address" className="nw1 border-0 pt-2 pb-2 ps-3 pe-5 rounded-pill" type="email"/>
                                    </div>
                                    <div className="col-lg-5 col-md-12 mt-3 mb-2">
                                        <button className="nw-btn main_btn circle pt-2 pb-2 ps-4 pe-5 rounded-pill">get started
                                            <i className="bi bi-arrow-right-short"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer-bottom d-flex justify-content-between pt-5 mt-5 text-center">
                <p className="col-lg-8 col-sm-12 footer-text m-0 text-light">
                    Copyright ©
                    2022 All rights reserved | This template
                    is made with <i className="bi bi-heart text-info"></i> by <Link href="#" className="text-decoration-none text-info">Colorlib</Link>

                </p>
                <div className="col-lg-4 col-sm-12 footer-social">
                    <Link href="#">
                        <i className="fa-brands fa-facebook-f  border-dark pt-2 pb-2 ps-3 pe-3 ms-2 me-2"></i>
                    </Link>
                    <Link href="#">
                        <i className="fa-brands fa-twitter  border-dark pt-2 pb-2 ps-3 pe-3 ms-2 me-2"></i>
                    </Link>
                    <Link href="#">
                        <i className="fa-brands fa-dribbble  border-dark pt-2 pb-2 ps-3 pe-3 ms-2 me-2"></i>
                    </Link>
                    <Link href="#">
                        <i className="fa-brands fa-behance  border-dark pt-2 pb-2 ps-3 pe-3 ms-2 me-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
 </>
    )
}
