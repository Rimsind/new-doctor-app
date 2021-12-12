import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
import useSWR from "swr";
import { useAuth } from "../../context";
import { useRouter } from "next/router";
import { apiUrl } from "../../config/api";
import Pagination from "../../components/Pagination";
const SocialHistory = () => {
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
                      Social History & Living Environment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Where do you live?:</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.socialHistory?.live_where}</p>
                  </div>
                  <div className="col-md-3">
                    <h3>With whom do you live?:</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.socialHistory?.live_with}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>Does your home have?</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.socialHistory?.home_haves}</p>
                  </div>
                  <div className="col-md-3">
                    <h3>Do You Use?</h3>
                  </div>
                  <div className="col-md-3">
                    <p>{data?.patient?.socialHistory?.do_uses}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>How Many Steps?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              No. Steps Outside The Home:
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>{data?.patient?.socialHistory?.homeStepsOut}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              No. Steps Inside The Home:
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>{data?.patient?.socialHistory?.homeStepsIn}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h3>Cultural / Religious:</h3>
                    <div className="row"></div>

                    <p className="font-italic">
                      Any cultural or religious beliefs or wishes that might
                      affect care?
                    </p>
                  </div>
                  <div className="col-md-9">
                    <p>{data?.patient?.socialHistory?.culturalBelief}</p>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="col-md-3">
                    <h4>Social / Health Habits:</h4>
                  </div>
                  <div className="row"></div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              Do You Smoke Tobacco? :
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>{data?.patient?.socialHistory?.smokeTobacco}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              Do You Drink Alcohol? :
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>{data?.patient?.socialHistory?.drinkAlcohol}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-content-between align-items-start">
                  <div className="row"></div>
                  <div className="col-md-2">
                    <h3>Excercise?:</h3>
                    <div className="col-md-2">
                      <p>{data?.patient?.socialHistory?.exercise}</p>
                    </div>
                  </div>
                  <div className="row"></div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              If yes how many times per week? :
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>
                              {data?.patient?.socialHistory?.exerciseNoInWeek}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row"></div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              How many minutes per day? :
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>
                              {
                                data?.patient?.socialHistory
                                  ?.exerciseDurationDailyInMin
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row"></div>
                  {/* <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="space-x-4">
                              (Beyond normal daily activities & Chores)? :
                            </h3>
                          </div>
                          <div className="col-md-3">
                            <p>fhdfhdfhdgh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Pagination id={appointmentId} class3="active" />
      </div>
    </>
  );
};

export default SocialHistory;
