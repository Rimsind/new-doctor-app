import Link from "next/link";
import FormCloseBtn from "../../components/FormCloseBtn";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const GeneralInformation = () => {
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
      <div className="general-information-form relative p-6 flex-auto container">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      General Information
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Race / Ethnicity:</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.generalInformation?.race}</p>
                  </div>
                  <div className="col-md-3">
                    <h3>Language:</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.generalInformation?.language}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>Highest Level Of Education</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.generalInformation?.education}</p>
                  </div>
                  <div className="col-md-3">
                    <h3>Hand Foot Dominance:</h3>
                  </div>
                  <div className="col-md-3">
                    <p>
                      {data?.patient?.generalInformation?.physical_dominance}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class2="active" />
      </div>
    </>
  );
};

export default GeneralInformation;
