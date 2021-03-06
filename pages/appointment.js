import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { apiUrl } from "../config/api";
import axios from "axios";
import { useAuth } from "../context";

const Appointment = () => {
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/appointments?doctor=${auth.user?.profileId}`,
    async (url) => {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const result = res.data;
      return result;
    }
  );

  return (
    <>
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <h5 className="mb-0">Current Appointment</h5>
        </div>
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

                  <th className="border-bottom py-2">Gender</th>

                  <th
                    className="border-bottom py-2"
                    style={{ minWidth: "150px" }}
                  >
                    Date
                  </th>
                  <th className="border-bottom py-2">Clinic</th>

                  <th className="border-bottom py-2">Appointment Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr key={index}>
                    <th>{item.id}</th>
                    <td className="py-3">
                      <Link href={`/diagnosis?appointmentId=${item.id}`}>
                        <a className="text-primary">
                          <div className="d-flex align-items-center">
                            <Image
                              height="50"
                              width="50"
                              src={
                                item.patient?.image?.url ||
                                "/images/client/01.jpg"
                              }
                              className="avatar avatar-md-sm rounded-circle shadow"
                              alt=""
                            />
                            <span className="ms-2">
                              {item.patient?.first_name}{" "}
                              {item.patient?.last_name}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </td>

                    <td>{item.patient?.gender}</td>

                    <td>{item.date}</td>

                    <td>efef</td>
                    <td>
                      {!!item.appointment_status === false ? (
                        <span className="badge rounded-md bg-warning">
                          Pending
                        </span>
                      ) : (
                        <span className="badge rounded-md bg-success">
                          Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
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
    </>
  );
};

export default Appointment;
