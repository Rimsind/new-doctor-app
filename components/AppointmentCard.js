import Image from "next/image";
const AppointmentCard = () => {
  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6 mt-4">
        <div
          className="card border-0 shadow rounded"
          style={{ backgroundColor: "#eaeaea" }}
        >
          <div className="d-flex justify-content-between p-4 border-bottom">
            <h6 className="mb-0">
              <i className="uil uil-calender text-primary me-1 h5"></i>
              Latest Appointment
            </h6>
            <h6 className="text-muted mb-0">55 Patients</h6>
          </div>

          <ul className="list-unstyled mb-0 p-4">
            <li>
              <a href="#">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <Image
                      height="50"
                      width="50"
                      src="/images/client/01.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Calvin Carlo</h6>
                      <small className="text-muted">
                        Booking on 27th Nov, 2020
                      </small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="#">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <Image
                      height="50"
                      width="50"
                      src="/images/client/02.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Joya Khan</h6>
                      <small className="text-muted">
                        Booking on 27th Nov, 2020
                      </small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="#">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <Image
                      height="50"
                      width="50"
                      src="/images/client/03.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Amelia Muli</h6>
                      <small className="text-muted">
                        Booking on 27th Nov, 2020
                      </small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="#">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <Image
                      height="50"
                      width="50"
                      src="/images/client/04.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Nik Ronaldo</h6>
                      <small className="text-muted">
                        Booking on 27th Nov, 2020
                      </small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>

            <li className="mt-4">
              <a href="#">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-inline-flex">
                    <Image
                      height="50"
                      width="50"
                      src="/images/client/05.jpg"
                      className="avatar avatar-md-sm rounded-circle border shadow"
                      alt=""
                    />
                    <div className="ms-3">
                      <h6 className="text-dark mb-0 d-block">Crista Joseph</h6>
                      <small className="text-muted">
                        Booking on 27th Nov, 2020
                      </small>
                    </div>
                  </div>
                  <i className="uil uil-arrow-right h4 text-dark"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
