import Image from "next/image";
import Link from "next/link";
import Layout3 from "../components/Layout/Layout3";
const Appointment = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-8 col-lg-6">
          <h5 className="mb-0">Current Appointment</h5>
        </div>

        <div className="row">
          <div className="col-12 mt-4 pt-2">
            <div className="table-responsive shadow rounded">
              <table className="table table-center bg-white mb-0">
                <thead>
                  <tr>
                    <th className="border-bottom py-2">#</th>
                    <th
                      className="border-bottom py-2"
                      style={{ minWidth: "220px" }}
                    >
                      Name
                    </th>
                    <th className="border-bottom py-2">Age</th>
                    <th className="border-bottom py-2">Gender</th>

                    <th
                      className="border-bottom py-2"
                      style={{ minWidth: "150px" }}
                    >
                      Date
                    </th>
                    <th className="border-bottom py-2">Time</th>
                    <th className="border-bottom py-2">Payment Status</th>
                    <th className="border-bottom py-2">Appointment Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td className="py-3">
                      <Link href="/diagnosis">
                        <a className="text-primary">
                          <div className="d-flex align-items-center">
                            <Image
                              height="50"
                              width="50"
                              src="/images/client/01.jpg"
                              className="avatar avatar-md-sm rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">Howard Tanner</span>
                          </div>
                        </a>
                      </Link>
                    </td>
                    <td>25</td>
                    <td>Male</td>

                    <td>20th Dec 2020</td>
                    <td>11:00AM</td>

                    <td>
                      <span className="badge rounded-md bg-success">Paid </span>
                    </td>
                    <td>
                      <span className="badge rounded-md bg-warning">
                        Pending
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12 mt-4 pt-2">
            <ul className="pagination justify-content-end mb-0 list-unstyled">
              <li>
                <Link href="/diagnosis">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">Prev</a>
                </Link>
              </li>
              <li className="active">
                <Link href="/diagnosis">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">1</a>
                </Link>
              </li>
              <li>
                <Link href="/diagnosis">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">2</a>
                </Link>
              </li>
              <li>
                <a className="pe-3 ps-3 pt-2 pb-2 border">Next</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
