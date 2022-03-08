import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
const Form12 = () => {
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
  // const { pain_assessment } = appointment?.rehab;
  const { register, handleSubmit } = useForm();
  const submit_form12 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        pain_assessment: {
          related_signs: data.related_signs.toString(),
          onset_of_pain: data.onset_of_pain,
          releiving_pain_medication: data.releiving_pain_medication,
          vascular: data.vascular.toString(),
          releiving_factor_of_pain: data.releiving_factor_of_pain.toString(),
          aggravating_factor_of_pain: data.aggravating_factor_of_pain,
          emotional: data.emotional.toString(),
          severity_of_pain_scale: data.severity_of_pain_scale,
          joint_irritability: data.joint_irritability,
          progress_of_pain: data.progress_of_pain,
          worse_problem: data.worse_problem,
          pattern_of_joint_involvement:
            data.pattern_of_joint_involvement.toString(),
          severity_of_pain_value: data.severity_of_pain_value,
          neurogenic: data.neurogenic.toString(),
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          duration_of_pain: data.duration_of_pain,
          location_of_pain: data.location_of_pain,
          identified_problems: data.identified_problems,
          type_of_pain: data.type_of_pain,
          musculoskeletal: data.musculoskeletal.toString(),
          frequency_of_pain: data.frequency_of_pain,
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
                      Pain Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form12)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>ONSET OF PAIN</h3>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Gradual"
                            {...register("onset_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Gradual</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Sudden"
                            {...register("onset_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sudden</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>LOCATION OF PAIN</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Box"
                        {...register("location_of_pain")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Vascular</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Throbbing"
                                {...register("vascular")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Throbbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pounding"
                                {...register("vascular")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pounding</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pulsing"
                                {...register("vascular")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulsing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Beating"
                                {...register("vascular")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Beating</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Neurogenic</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Stabbing"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stabbing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Crushing"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Crushing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pinching"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pinching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Hot"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hot</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Searing"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Searing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Itchy"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Itchy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Stinging"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Stinging</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pulling"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pulling</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Jumping"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Jumping</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Shooting"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Shooting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pricking"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pricking</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Gnawing"
                                {...register("neurogenic")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Gnawing</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Musculoskeletal</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Aching"
                                {...register("musculoskeletal")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Aching</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Sore"
                                {...register("musculoskeletal")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Sore</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Heavy"
                                {...register("musculoskeletal")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heavy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Hurting"
                                {...register("musculoskeletal")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Hurting</p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Dull"
                                {...register("musculoskeletal")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dull</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4">Description of Pain:</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Emotional</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Tiring"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Tiring</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Miserable"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Miserable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Vicious"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Vicious</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Agonizing"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Agonizing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Nauseating"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Nauseating</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Frightful"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Frightful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Piercing"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Piercing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Dreadful"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Dreadful</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Punishing"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Punishing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Torturing"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Torturing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Killing"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Killing</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Unbearable"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Unbearable</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Annoying"
                                {...register("emotional")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Annoying</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>TYPE OF PAIN</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="RADIATING"
                                {...register("type_of_pain")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">RADIATING</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="LOCALIZED"
                                {...register("type_of_pain")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">LOCALIZED</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="DIFFUSE"
                                {...register("type_of_pain")}
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">DIFFUSE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>SEVERITY OF PAIN</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="VISUAL ANALOG SCALE"
                            {...register("severity_of_pain_value")}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">VISUAL ANALOG SCALE</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="FACIAL EXPRESSION"
                            {...register("severity_of_pain_value")}
                          />
                        </div>
                        <div className="col-md-2">
                          <p className="space-x-4">FACIAL EXPRESSION</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        {...register("severity_of_pain_scale")}
                      >
                        <option selected>Open this select menu</option>
                        <option value="0 : No pain">0 : No pain</option>
                        <option value="1-3 : Mild pain">1-3 : Mild pain</option>
                        <option value="4-6 : Severe pain">
                          4-6 : Severe pain
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Frequency of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Day Time"
                            {...register("frequency_of_pain")}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">Day Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Night Time"
                            {...register("frequency_of_pain")}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">Night Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="All Time"
                            {...register("frequency_of_pain")}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">All Time</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="During Activity"
                            {...register("frequency_of_pain")}
                          />
                        </div>
                        <div className="col-md-8">
                          <p className="space-x-4">During Activity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Duration of pain (in hrs)</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="number"
                        placeholder="Enter the Value in hours"
                        min="0"
                        max="24"
                        {...register("duration_of_pain")}
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Aggravating factor of pain</h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("aggravating_factor_of_pain")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Releiving factor of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Liquor"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Liquor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Sleep/rest"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sleep/rest</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Stumilants (e.g caffine )"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Stumilants (e.g caffine )</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Eating"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Eating</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Heat"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Heat</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Cold"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Cold</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Weather changes"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Weather changes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Massage"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Massage</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Pressure"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="No movement"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">No movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Movement"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Movement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Sitting"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Sitting</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Lying down"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Lying down</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Distraction (e.g. television)"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">
                            Distraction (e.g. television)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Urination / Defecation"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Urination / Defecation</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Mild exercise"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild exercise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Loude Noise"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Loude Noise</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Standing"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Standing</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Medication"
                            {...register("releiving_factor_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Medication</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>
                        Relieving of pain with medication (include type of
                        medication,dosage and hours of releive)
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("releiving_pain_medication")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Pattern of joint involvement</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="One joint"
                            {...register("pattern_of_joint_involvement")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">One joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Multiple joint"
                            {...register("pattern_of_joint_involvement")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Multiple joint</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Assymetrical"
                            {...register("pattern_of_joint_involvement")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Assymetrical</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Symmetrical"
                            {...register("pattern_of_joint_involvement")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Symmetrical</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Joint irritability</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Mild"
                            {...register("joint_irritability")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="moderate"
                            {...register("joint_irritability")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Seveir"
                            {...register("joint_irritability")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Progress of pain</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Intermittently present"
                            {...register("progress_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Intermittently present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Constantly present"
                            {...register("progress_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Constantly present</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Present in recurrent attacks"
                            {...register("progress_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">
                            Present in recurrent attacks
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Progressively worse"
                            {...register("progress_of_pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Progressively worse</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>Worse problem (loss of function)</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Mild"
                            {...register("worse_problem")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Mild</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="moderate"
                            {...register("worse_problem")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">moderate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Seveir"
                            {...register("worse_problem")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Seveir</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Related signs and symprtoms</h3>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Stiffness"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Stiffness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Swelling"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4"> Swelling</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Crepitus"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Crepitus</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Locking"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Locking</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Instability"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Instability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Weakness"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Weakness</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Muscle spasm"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Muscle spasm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Neurological symptoms"
                            {...register("related_signs")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Neurological symptoms</p>
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
          <Pagination2 name12="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form12;
