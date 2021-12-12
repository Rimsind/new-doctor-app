import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const FunctionalStatus = () => {
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
                      Current Functional Status:
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Difficulty with self-care activities such as:</h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {data?.patient?.functionalStatus?.currentfunctionalStatus}
                    </p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Difficulty with self-care activities such as:</h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {data?.patient?.functionalStatus?.difficultyWithSelfcare}
                    </p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Difficulty with Walking / movement such as</h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>{data?.patient?.functionalStatus?.difficultyWithMove}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Difficulty with home management such as:</h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {
                        data?.patient?.functionalStatus
                          ?.difficultyWithHomeManagement
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>
                      Difficulty with community and work activities such as:
                    </h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {
                        data?.patient?.functionalStatus
                          ?.difficultyWithWorkActivities
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-12">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Prior Functional Status(Your Status Prior To The Date Of
                      Onset/Injury)
                    </h3>
                  </div>
                </div>
              </div>

              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-9">
                    <h3>
                      Prior to your current injury or condition, were you pain
                      free without any difficulty with locomotion/movement,self
                      care activities, home management, community and work
                      activities?
                    </h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.functionalStatus?.prior_difficulty}</p>
                  </div>
                </div>
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>If No, Please Explain:</h3>
                    <div className="row"></div>
                  </div>
                  <div className="col-md-9">
                    <p>
                      {
                        data?.patient?.functionalStatus
                          ?.prior_difficulty_explain
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class6="active" />
      </div>
    </>
  );
};

export default FunctionalStatus;
