import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const EmploymentStatus = () => {
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
  // console.log(data?.patient?.employmentStatus);
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Employment Status
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Work Status</h3>
                  </div>
                  <div className="col-md-9">
                    <p>{data?.patient?.employmentStatus?.work_status}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Occupation : </h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>{data?.patient?.employmentStatus?.occupation}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-5">
                    <h3>Your Work Involves (Check all that apply)</h3>
                  </div>
                  <div className="col-md-7">
                    <p>{data?.patient?.employmentStatus?.work_involves}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class4="active" />
      </div>
    </>
  );
};

export default EmploymentStatus;
