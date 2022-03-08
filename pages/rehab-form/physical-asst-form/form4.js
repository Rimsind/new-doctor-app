import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";

const Form4 = () => {
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
  const submit_form4 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        arousal_assesment: {
          mini_mental_test: data.mini_mental_test,
          sustained: data.sustained,
          motivation_to_participate: data.motivation_to_participate,
          ability_to_recognise: data.ability_to_recognise,
          consciousness: data.consciousness,
          orientation: data.orientation,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          judgement: data.judgement,
          communication: data.communication,
          preparation: data.preparation,
          alternating: data.alternating,
          identified_problems: data.identified_problems,
          production: data.production,
          focussed: data.focussed,
          selective: data.selective,
          attention: data.attention,
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
    return result;
  };

  const optionList = ["Normal", "Impaired"];
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
                      Arousal, Attention And Cognitive Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form4)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Attention</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("attention")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Focussed</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("focussed")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Sustained</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("sustained")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Selective</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("selective")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Alternating</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("alternating")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Orientation</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("orientation")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Ability To Recognise Time, Person, Place </h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("ability_to_recognise")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-7">
                      <h3>Consciousness</h3>
                    </div>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="coma"
                                {...register("consciousness")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Coma</p>
                            </div>
                          </div>
                        </div>
                        {optionList.map((items, index) => (
                          <div className="col-md-4" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("consciousness")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Motivation To Participate</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("motivation_to_participate")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Communication</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("communication")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <p className="fs-5 fw-bold mt-4 mb-4">Problem Solving:</p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Preparation</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("preparation")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Production</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("production")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Judgement</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("judgement")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <p className="fs-5 fw-bold mt-4 mb-4">Short Term Memory:</p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Mini Mental Test</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("mini_mental_test")}
                                />
                              </div>
                              <div className="col-md-8">
                                <p className="space-x-4">{items}</p>
                              </div>
                            </div>
                          </div>
                        ))}
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
                        {...register("treatment_plan")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="submit-btn mt-2 text-center">
                  <button className="btn btn-primary" type="submit">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Pagination2 name4="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form4;
