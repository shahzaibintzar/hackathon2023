'use client'
export default function page() {
  return (
  

    <section className="appointment pt-4 pb-4">
    <div className="container"/>
        <div className="row justify-content-between align-items-center appointment-wrap">
            <div className="col-lg-5 col-md-6 appointment1">
                <h1 className="ps-4">
                    Servicing Hours
                </h1>
                <p className="ps-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                </p>
                <ul className="time-list">
                    <li className="d-flex justify-content-between">
                        <span>Monday-Friday</span>
                        <span>08.00 am - 10.00 pm</span>
                    </li>
                    <div className="text-secondary">
                        <hr/>
                    </div>
                    <li className="d-flex justify-content-between">
                        <span>Saturday</span>
                        <span>08.00 am - 10.00 pm</span>
                    </li>
                    <div className="text-secondary">
                        <hr/>
                    </div>
                    <li className="d-flex justify-content-between">
                        <span>Sunday</span>
                        <span>08.00 am - 10.00 pm</span>
                    </li>
                    <div className="text-secondary">
                        <hr/>
                    </div>
                </ul>
            </div>
            </div>
        
            <div className="a1 col-lg-6 col-md-6 bg-white shadow"/>
                <div className="appointment2 pt-3 pb-5"/>
                    <form className="form-wrap" action="#">
                        <h3 className="pb-20 text-center pb-2">Book an Appointment</h3>
                        <input type="text" className="form-control mt-2 mb-2" name="name" placeholder="Patient Name"/>
                        <input type="text" className="form-control mt-2 mb-2" name="phone" placeholder="Phone "/>
                        <input type="email" className="form-control mt-2 mb-2" name="email" placeholder="Email Address"/>
                        <input id="datepicker1" name="dop" className="dates form-control mt-2 mb-2"
                            placeholder="Date of Birth" type="text"/>
                            <select class="form-select form-select-sm mt-2 mb-2" aria-label=".form-select-sm example">
                            <option selected class="text-info">Disease Type</option>
                            <option value="1">Type One</option>
                            <option value="2">Type Two</option>
                            <option value="3">Type Three</option>
                            <option value="3">Type Four</option>
                        </select>
                        <input id="datepicker2" class="dates form-control mt-2 mb-2" placeholder="appointment Date"
                            type="text"/>
                        <textarea name="messege" class="w-100 mt-2 mb-2" rows="6" placeholder="Messege"></textarea>
                        <div class="confirm text-center confirm_btn_box">
                            <button class="main_btn text-uppercase mt-2 mb-2 pt-2 pb-2 ps-3 pe-3">Confirm
                                Booking</button>
                        </div>
                            </form>
                            </section>
                            
  )
}
