import Link from "next/link";
import Image from "next/image";
// import Layout3 from "../components/Layout/Layout3";
import { useRouter } from "next/router";
import useSWR from "swr";
import { apiUrl } from "../config/api";
import axios from "axios";
import { useAuth } from "../context";

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
                  <td>Date of Birth</td>
                  <td>{data?.patient?.dob}</td>
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

          <div className="patient-subjective-info">
            <div className="mt-4 ms-3 pt-3">
              <h5 className="mt-3 mb-1" style={{ textAlign: "center" }}>
                PATIENT&apos;S SUBJECTIVE INFORMATION
              </h5>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/chief-complains?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      Cheif Complaints with Duration
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/general-information?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      General Information
                    </a>
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href={`/form/social-history?appointmentId=${data?.id}`}>
                    <a className="btn-custom btn btn-success">
                      Social History & Living Environment
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/employment-status?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      Employment Status
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/medical-history?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      Past Medical History
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/functional-status?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      Current Functional Status
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link href={`/form/family-history?appointmentId=${data?.id}`}>
                    <a className="btn-custom btn btn-success">
                      Family Medical History
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/form/past-medical-records?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-success">
                      Past Medical Records
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="patient-subjective-info">
            <div className="mt-4 ms-3 pt-3">
              <h5 className="mt-3 mb-1" style={{ textAlign: "center" }}>
                DOCTOR ASSESSMENT (REHAB)
              </h5>
            </div>

            <div className="row">
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/rehab-form/history-of-present-illness?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-info">
                      History Of Present Illness
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/rehab-form/physical-asst-form/form1?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-info">
                      Clinical Examintation
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/rehab-form/assesment?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-info">Assesment</a>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="patient-user-panel-btn mt-3">
                  <Link
                    href={`/rehab-form/e-prescription?appointmentId=${data?.id}`}
                  >
                    <a className="btn-custom btn btn-info">E-Prescription</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diagnosis;

// Diagnosis.getLayout = (Diagnosis) => <Layout3>{Diagnosis}</Layout3>;
