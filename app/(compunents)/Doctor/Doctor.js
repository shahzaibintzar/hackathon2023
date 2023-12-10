import Image from "next/image"
export default function Doctor() {
  return (
    <div>
    <section class="myself pad_bottom pt-5 pb-5" id="Doctor">
        <div class="container  bg-light">
            <div class="row">
                <div class="col-lg-6 pr-0">
                    <div class="about_img">
                        <Image class="img-fluid w-100 h-100" src="/images/xabout-me.jpg.pagespeed.ic.xzSAvjrmiC.webp" width={519} height={607}
                            alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 pl-0 ps-5 pe-5 ">
                    <div class="about">
                        <div class="about1 text-left  ">
                            <h1 class="pt-2">About Myself</h1>
                            <p class="pt-2 pb-1 text-secondary">
                                nappropriate behavior is often laughed off as “boys will be boys,” women face higher
                                conduct standards especially in the
                                workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
                                reproach.
                            </p>
                        </div>
                        <div class="activity text-center">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 ms-2 me-2 mt-2 mb-2 border shadow">
                                    <div class="activity_box">
                                        <div class=" pt-1 pb-1 text-info">
                                            <i class="fa-solid fa-database display-5"></i>
                                        </div>
                                        <h3>$<span class="counter"></span>2.5</h3>
                                        <p>Total Donation</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5  ms-2 me-2 mt-2 mb-2 border shadow">
                                    <div class="activity_box">
                                        <div class=" pt-1 pb-1 text-info">
                                            <i class="bi bi-bookmarks display-5"></i>
                                        </div>
                                        <h3>$<span class="counter"></span>1465</h3>
                                        <p>Total Project</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5 border ms-2 me-2 mt-2 mb-2 shadow">
                                    <div class="activity_box">
                                        <div class=" pt-1 pb-1 text-info">
                                            <i class="bi bi-people display-5"></i>
                                        </div>
                                        <h3>$<span class="counter"></span>3965</h3>
                                        <p>Total Volunteers</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5  ms-2 me-2 mt-2 mb-2 shadow">
                                    <div class="activity_box">
                                        <div class=" pt-1 pb-1 text-info">
                                            <i class="bi bi-people display-5 pt-1 pb-1"></i>
                                        </div>
                                        <h3>$<span class="counter"></span>3965</h3>
                                        <p>Total Volunteers</p>
                                    </div>
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
