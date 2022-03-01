import Link from "next/link";
import Image from "next/image";
import {
  Medicine,
  Rehab,
  Reurology,
  SubjectiveInformation,
} from "../components/assesments/index";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl } from "../config/api";
import axios from "axios";
import { useAuth } from "../context";
import Ortho from "../components/assesments/Ortho";

const Diagnosis = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();

  const { data } = useSWR(
    `${apiUrl}/appointments/${appointmentId}`,
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

  const { data: doctor } = useSWR(
    `${apiUrl}/doctors/${auth.user?.profileId}`,
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
        <div className="col-xl-8 col-lg-6">
          <h5 className="mb-0">Appointment Id #{data?.id}</h5>
        </div>

        <div className="col-xl-4 col-lg-6 mt-4 mt-lg-0">
          <div className="justify-content-md-end">
            <form>
              <div className="row justify-content-between align-items-center">
                <div className="col-sm-12 col-md-6 mt-6 mt-sm-0">
                  <div className="d-grid">
                    <Link href="/diagnosis">
                      <a className="btn btn-primary">Previous</a>
                    </Link>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 mt-4 mt-sm-0">
                  <div className="d-grid">
                    <Link href="/diagnosis">
                      <a className="btn btn-primary">Next</a>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="card bg-white rounded shadow overflow-hidden mt-4 border-0">
        <div style={{ padding: "20px" }}>
          <div className="p-5 bg-primary bg-gradient"></div>
          <div className="diagnosis-img-profile avatar-profile position-relative ps-3 text-center">
            <Image
              height="200"
              width="200"
              src={data?.patient?.image?.url || "/images/client/01.jpg"}
              className="diagnosis-img avatar-large mt-sm-0 rounded-circle"
              alt=""
            />
          </div>
          <div className="patient-details-info mt-3">
            <table
              className="table table-striped"
              style={{ marginBottom: "50px" }}
            >
              <tbody>
                <tr>
                  <td>Patient Name</td>
                  <td>
                    {data?.patient?.first_name} {data?.patient?.last_name}
                  </td>
                </tr>
                <tr>
                  <td>Patient ID</td>
                  <td>{data?.patient?.id}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{data?.patient?.age}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{data?.patient?.email}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{data?.patient?.phone}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{data?.patient?.gender}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="patient-user-panel mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="patient-user-panel-btn mt-3">
                  <Link href={`/report?appointmentId=${data?.id}`}>
                    <a className="btn-custom btn btn-primary">
                      Print Clinical Report
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="patient-user-panel-btn mt-3">
                  <Link href={`/prescription?appointmentId=${data?.id}`}>
                    <a className="btn-custom btn btn-danger">
                      Print E-Prescription
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <SubjectiveInformation data={data} />

          <Rehab data={data} />
          <Medicine data={data} />

          {/* {doctor?.specialty?.name === "Rehabilitation" ? (
            <>
              <Ortho data={data} />
            </>
          ) : (
            <></>
          )} */}
          {/* {doctor?.specialty?.name === "Medicine" ? (
            <>
              <Ortho data={data} />
            </>
          ) : (
            <></>
          )} */}
          {doctor?.specialty?.name === "Neurologist" ? (
            <>
              <Reurology data={data} />
            </>
          ) : (
            <></>
          )}
          {doctor?.specialty?.name === "Orthopedic" ? (
            <>
              <Ortho data={data} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Diagnosis;

// Diagnosis.getLayout = (Diagnosis) => <Layout3>{Diagnosis}</Layout3>;
