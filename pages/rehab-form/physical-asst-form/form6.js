import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";

const Form6 = () => {
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
  const submit_form6 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        reflex_sensory_assessment: {
          cold: data.cold,
          sharp: data.sharp,
          joint_motion: data.joint_motion,
          hot: data.hot,
          stereognosis: data.stereognosis,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          two_point_discrimination: data.two_point_discrimination,
          dull: data.dull,
          touch_pressure_threshold: data.touch_pressure_threshold,
          vibration: data.vibration,
          touch_awareness: data.touch_awareness,
          identified_problems: data.identified_problems,
          touch_localization: data.touch_localization,
          reflex_examination: data.reflex_examination,
          joint_position: data.joint_position,
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
      `/rehab-form/physical-asst-form/form7?appointmentId=${appointmentId}`
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
                      Reflex And Sensory Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form6)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <h3>
                        Deep Tendon Reflex And Supercial Reflex Examination
                      </h3>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("reflex_examination")}
                        defaultValue={
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .reflex_examination
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .reflex_examination
                            : ""
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <p className="fs-5 fw-bpld mt-4 mb-4">
                    Samatosensory Assessment:
                  </p>
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3>Discriminative Touch</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Touch Awareness</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_awareness")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_awareness === "Normal"
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
                                    {...register("touch_awareness")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_awareness === "Impared"
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

                      <div className="row">
                        <div className="col-md-6">
                          <h3>Touch Localization</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_localization")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_localization === "Normal"
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
                                    {...register("touch_localization")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_localization === "Impared"
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Touch Pressure Threshold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("touch_pressure_threshold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_pressure_threshold === "Normal"
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
                                    {...register("touch_pressure_threshold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .touch_pressure_threshold === "Impared"
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Two point discrimination</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("two_point_discrimination")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .two_point_discrimination === "Normal"
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
                                    {...register("two_point_discrimination")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .two_point_discrimination === "Impared"
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
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3>Plain</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Sharp</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("sharp")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.sharp ===
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
                                    {...register("sharp")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.sharp ===
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Dull</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("dull")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.dull ===
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
                                    {...register("dull")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.dull ===
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
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3>Proprioception</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Vibration</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("vibration")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .vibration === "Normal"
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
                                    {...register("vibration")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .vibration === "Impared"
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Joint Position</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("joint_position")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_position === "Normal"
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
                                    {...register("joint_position")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_position === "Impared"
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Joint Motion</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("joint_motion")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_motion === "Normal"
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
                                    {...register("joint_motion")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .joint_motion === "Impared"
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Stereognosis</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("stereognosis")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .stereognosis === "Normal"
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
                                    {...register("stereognosis")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment
                                        .stereognosis === "Impared"
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
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h3>Temperature</h3>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Hot</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("hot")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.hot ===
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
                                    {...register("hot")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.hot ===
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
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Cold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="row">
                                <div className="col-md-4">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    value="Normal"
                                    {...register("cold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.cold ===
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
                                    {...register("cold")}
                                    defaultChecked={
                                      !!appointment?.rehab
                                        ?.reflex_sensory_assessment &&
                                      appointment?.rehab
                                        ?.reflex_sensory_assessment.cold ===
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
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .identified_problems
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .identified_problems
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
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .short_term_goals
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .short_term_goals
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
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .long_term_goals
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .long_term_goals
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
                          !!appointment?.rehab?.reflex_sensory_assessment &&
                          !!appointment?.rehab?.reflex_sensory_assessment
                            .treatment_plan
                            ? appointment?.rehab?.reflex_sensory_assessment
                                .treatment_plan
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
          <Pagination2 name6="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form6;
