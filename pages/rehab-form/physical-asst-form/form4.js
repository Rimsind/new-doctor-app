import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import router, { useRouter } from "next/router";
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
  const { arousal_assesment } = appointment?.rehab;

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
    router.push(
      `/rehab-form/physical-asst-form/form5?appointmentId=${appointmentId}`
    );
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("attention")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.attention === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("attention")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.attention === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("focussed")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.focussed === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("focussed")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.focussed === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("sustained")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.sustained === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("sustained")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.sustained === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("selective")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.selective === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("selective")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.selective === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("alternating")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.alternating === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("alternating")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.alternating === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("orientation")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.orientation === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("orientation")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.orientation === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("ability_to_recognise")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.ability_to_recognise ===
                                    "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("ability_to_recognise")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.ability_to_recognise ===
                                    "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.consciousness === "coma"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Coma</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("consciousness")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.consciousness === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("consciousness")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.consciousness === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("motivation_to_participate")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.motivation_to_participate ===
                                    "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("motivation_to_participate")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.motivation_to_participate ===
                                    "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("communication")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.communication === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("communication")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.communication === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("preparation")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.preparation === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("preparation")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.preparation === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("production")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.production === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("production")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.production === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("judgement")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.judgement === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("judgement")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.judgement === "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
                        </div>
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
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("mini_mental_test")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.mini_mental_test ===
                                    "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impared"
                                {...register("mini_mental_test")}
                                defaultChecked={
                                  !!arousal_assesment &&
                                  arousal_assesment.mini_mental_test ===
                                    "Impared"
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Impared</p>
                            </div>
                          </div>
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
                        defaultValue={
                          !!arousal_assesment &&
                          !!arousal_assesment.identified_problems
                            ? arousal_assesment.identified_problems
                            : ""
                        }
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
                        defaultValue={
                          !!arousal_assesment &&
                          !!arousal_assesment.short_term_goals
                            ? arousal_assesment.short_term_goals
                            : ""
                        }
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
                        defaultValue={
                          !!arousal_assesment &&
                          !!arousal_assesment.long_term_goals
                            ? arousal_assesment.long_term_goals
                            : ""
                        }
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
                        defaultValue={
                          !!arousal_assesment &&
                          !!arousal_assesment.treatment_plan
                            ? arousal_assesment.treatment_plan
                            : ""
                        }
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
