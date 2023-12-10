import Link from "next/link"
import Image from "next/image"
export default function page() {
  return (
    <div>
    <section class="category section_gap" id="Department">
        <div class="container">
            <div class="row justify-content-center section-title-wrap text-center pt-5 pb-5">
                <div class="c1 col-lg-12 pt-5 pb-5">
                    <h1 class="pb-3 fw-normal">Procedure Category</h1>
                    <p class="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="post1 col-lg-4 mt-3 mb-3">
                    <div class="post">
                        <Image src="/images/xp1.jpg.pagespeed.ic.H2iNAI0AS3.webp" width={579} height={505} alt="Procedure"
                            class="img img-fluid  w-100"/>
                        <div class="c2">
                            <div class="c3">
                                <div class="text-light">
                                    <hr/>
                                </div>
                                <Link href="#" class="text-decoration-none">
                                    <h5>Emergency Treatment</h5>
                                </Link>
                                <div class="text-light">
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="post1 col-lg-4 mt-3 mb-3">
                    <div class="post">
                        <Image src="/images/xp2.jpg.pagespeed.ic.NTVDNHoEHM.webp" width={579} height={505} alt="Procedure"
                            class="img img-fluid  w-100"/>
                        <div class="c2">
                            <div class="c3">
                                <div class="text-light">
                                    <hr/>
                                </div>
                                <a href="#" class="text-decoration-none">
                                    <h5>Emergency Treatment</h5>
                                </a>
                                <div class="text-light">
                                    <hr/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="post1 col-lg-4 mt-3 mb-3">
                    <div class="post">
                        <Image src="/images/xp3.jpg.pagespeed.ic.QlSGq7ZihA.webp" width={579} height={505} alt="Procedure" class=" img img-fluid"/>
                        <div class="c2">
                            <div class="c3">
                                <div class="text-light">
                                    <hr/>
                                </div>
                                <a href="#" class="text-decoration-none">
                                    <h5>Emergency Treatment</h5>
                                </a>
                                <div class="text-light">
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
