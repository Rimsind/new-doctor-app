import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
const Form13 = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data: appointment } = useSWR(
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
  const { register, handleSubmit } = useForm();
  const submit_form13 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        environmental_barrier_assessmnet: {
          personal_care_provider: data.personal_care_provider,
          social_norms: data.social_norms,
          societal_attitudes: data.societal_attitudes,
          health_professionals: data.health_professionals,
          facilitators_assessmnet: data.facilitators_assessmnet,
          personal_assistants: data.personal_assistants,
          friends: data.friends,
          environmental_barriers: data.environmental_barriers,
          family_members: data.family_members,
          home_work_barrier: data.home_work_barrier.toString(),
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          long_term_goals: data.long_term_goals,
          treatment_plans: data.treatment_plans,
        },
      },
    };
    const res = await axios.put(
      `${apiUrl}/appointments/${appointmentId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    const result = res.data;
    alert("Form Submitted Succesfully");
    router.push(
      `/rehab-form/physical-asst-form/form14?appointmentId=${appointmentId}`
    );
    return result;
  };
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      ENVIRONMENTAL BARRIER ASSESSMNET
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form13)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <h3>ENVIRONMENTAL BARRIERS</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="default example"
                        {...register("environmental_barriers")}
                      >
                        <option selected>Open this select menu</option>
                        <option value="0 No barrier">0 No barrier</option>
                        <option value="1 Mild barriers">1 Mild barriers</option>
                        <option value="2 Moderate barriers">
                          2 Moderate barriers
                        </option>
                        <option value="3 Severe barriers">
                          3 Severe barriers
                        </option>
                        <option value="4 Complete barriers">
                          4 Complete barriers
                        </option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <h3>FACILITATORS ASSESSMNET</h3>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="default example"
                        {...register("facilitators_assessmnet")}
                      >
                        <option selected>Open this select menu</option>
                        <option value="0 No facilitator">
                          0 No facilitator
                        </option>
                        <option value="+1 Mild facilitator">
                          +1 Mild facilitator
                        </option>
                        <option value="+2 Moderate facilitator">
                          +2 Moderate facilitator
                        </option>
                        <option value="+3 Severe facilitator">
                          +3 Severe facilitator
                        </option>
                        <option value="+4 Complete facilitator">
                          +4 Complete facilitator
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of immediate family members</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("family_members")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of friends</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("friends")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>
                        Individual attitudes of personal care providers and
                      </h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("personal_care_provider")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>personal assistants</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("personal_assistants")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>Individual attitudes of health professionals</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("health_professionals")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>Societal attitudes</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("societal_attitudes")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                      <h3>Social norms, practices and ideologies</h3>
                    </div>
                    <div className="col-md-7">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("social_norms")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-centent-between align-items-center">
                    <div className="col-md-3">
                      <h3>Identified Problems</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pb-5">
                  <div className="gen-form-upper row">
                    <div className="col-md-12">
                      <div className="text-center pb-6">
                        <h3 className="general-information-form-title font-bold">
                          HOME AND WORK BARRIER ASSESSMNET
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="gen-form">
                      <div className="row justify-content-between align-items-start">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NONE"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">NONE</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="STAIRS WITH HANDRAILS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">STAIRS WITH HANDRAILS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="STAIRS WITHOUT HANDRAILS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                STAIRS WITHOUT HANDRAILS
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NO GRAB BARS IN BATHROOM"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                NO GRAB BARS IN BATHROOM
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=" NARROW DOORWAYS OR ACCESS POINTS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                NARROW DOORWAYS OR ACCESS POINTS
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="INADEQUATE LIGHTING"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">INADEQUATE LIGHTING</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="CROWDED/CLUTTERED ENVIRONMENT"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                CROWDED/CLUTTERED ENVIRONMENT
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="POOR FLOORING"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">POOR FLOORING</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="LACK OF RAMPS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">LACK OF RAMPS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="UNSAFE STRUCTURAL ENVIRONMENT"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                UNSAFE STRUCTURAL ENVIRONMENT
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NO ELECTRICITY"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">NO ELECTRICITY</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NO RUNNING WATER"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">NO RUNNING WATER</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="CONTAMINATES WATER"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">CONTAMINATES WATER</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NO TOILETING FACILITY"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">NO TOILETING FACILITY</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="INADEQUATE SEWAGE DISPOSAL"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                INADEQUATE SEWAGE DISPOSAL
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="INADEQUATE/IMPROPER FOOD STORAGE"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                INADEQUATE/IMPROPER FOOD STORAGE
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="INADEQUATE/NO FOOD REFRIGRATION"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                INADEQUATE/NO FOOD REFRIGRATION
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NO COOKING FACILITY"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">NO COOKING FACILITY</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="INSECTS/RODENTS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">INSECTS/RODENTS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="NARROW OR OBSTRUCTED DOORWAYS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                NARROW OR OBSTRUCTED DOORWAYS
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="STAIRS LEADING FROM INSIDE HOUSE TO OUTSIDE"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                STAIRS LEADING FROM INSIDE HOUSE TO OUTSIDE
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="STAIRS INSIDE HOUSE WHICH MUST BE USED"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                STAIRS INSIDE HOUSE WHICH MUST BE USED
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="STAIRS INSIDE HOUSE WHICH ARE USED OPTIONALLY"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                STAIRS INSIDE HOUSE WHICH ARE USED OPTIONALLY
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="CLUTTERED SOILED LIVING AREA"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">
                                CLUTTERED SOILED LIVING AREA
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="OTHERS"
                                {...register("home_work_barrier")}
                              />
                            </div>
                            <div className="col-md-10">
                              <p className="space-x-4">OTHERS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="gen-form">
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-3">
                          <h3>Identified Problems</h3>
                        </div>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Describe your problems here"
                            {...register("identified_problems")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="gen-form">
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-3">
                          <h3>Short Term Goals </h3>
                        </div>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            placeholder="Describe your problems here"
                            {...register("short_term_goals")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="gen-form">
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-3">
                          <h3>Long Term Goals </h3>
                        </div>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            placeholder="Describe your problems here"
                            {...register("long_term_goals")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="gen-form">
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-3">
                          <h3>Treatment Plan </h3>
                        </div>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Describe your problems here"
                            {...register("treatment_plans")}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="submit-btn mt-2 text-center">
                      <button className="btn btn-primary" type="submit">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <Pagination2 name13="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form13;
