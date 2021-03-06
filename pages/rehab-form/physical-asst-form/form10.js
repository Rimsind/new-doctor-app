import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
import { useState } from "react";
const Form10 = () => {
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
  const [status, setStatus] = useState(false);

  const { register, handleSubmit } = useForm();
  const submit_form10 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        motor_function_assesment: {
          muscle_tone_ifImpared: data.muscle_tone_ifImpared,
          muscle_tone: data.muscle_tone,
          involuntory_movement: data.involuntory_movement.toString(),
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          coordination_test: data.coordination_test.toString(),
          identified_problems: data.identified_problems,
          modified_ashworth_scale: data.modified_ashworth_scale.toString(),
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
      `/rehab-form/physical-asst-form/form11?appointmentId=${appointmentId}`
    );
    return result;
  };

  const involuntoryList = [
    "Dystonia",
    "Termor",
    "Choreiform And Antheoid Movement",
  ];

  const makeArrfromString = (str) => {
    if (str) {
      const arr = str.split(",");
      const result = arr.map((item) => item.trim());
      return result;
    } else {
      str = "";
    }
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
                      Motor Function Assessment Includes Motor Control And Motor
                      Learning
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form10)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Muscle Tone</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Impaired"
                                onClick={(e) => setStatus(true)}
                                {...register("muscle_tone")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  appointment?.rehab?.motor_function_assesment
                                    .muscle_tone === "Impaired"
                                }
                              />
                            </div>

                            <div className="col-md-10">
                              <div className="row">
                                <div className="col-md-4">
                                  <p>Impaired</p>
                                </div>
                                {!!status === true ? (
                                  <div className="col-md-8">
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label=".form-select-sm example"
                                      {...register("muscle_tone_ifImpared")}
                                    >
                                      <option
                                        name="language"
                                        defaultValue={
                                          !!appointment?.rehab
                                            ?.motor_function_assesment &&
                                          appointment?.rehab
                                            ?.motor_function_assesment
                                            .muscle_tone_ifImpared
                                        }
                                      >
                                        {!!appointment?.rehab
                                          ?.motor_function_assesment &&
                                        appointment?.rehab
                                          ?.motor_function_assesment
                                          .muscle_tone_ifImpared
                                          ? appointment?.rehab
                                              ?.motor_function_assesment
                                              .muscle_tone_ifImpared
                                          : ""}
                                      </option>
                                      <option value="Hypertone">
                                        Hypertone
                                      </option>
                                      <option value="Hypotone">Hypotone</option>
                                      <option value="Rigidity">Rigidity</option>
                                    </select>
                                  </div>
                                ) : (
                                  <></>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="Normal"
                                {...register("muscle_tone")}
                                onClick={(e) => setStatus(false)}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  appointment?.rehab?.motor_function_assesment
                                    .muscle_tone === "Normal"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p>Normal</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col-md-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                value="N/A"
                                {...register("muscle_tone")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  appointment?.rehab?.motor_function_assesment
                                    .muscle_tone === "N/A"
                                }
                              />
                            </div>
                            <div className="col-md-10">
                              <p>N/A</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>
                        Abnormal muscle tone assessment by Modified Ashworth
                        Scale(MAS)
                      </h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="0= NO increasenin muscle tone"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes("0= NO increasenin muscle tone")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                0= NO increasenin muscle tone
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1=Slight increase in muscle tone ,manifested b a slight catch and release or by minima resistance at the end of the range of motio when the affected parts is moved in flexion an extension"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes(
                                    "1=Slight increase in muscle tone ,manifested b a slight catch and release or by minima resistance at the end of the range of motio when the affected parts is moved in flexion an extension"
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                1=Slight increase in muscle tone ,manifested by
                                a slight catch and release or by minimal
                                resistance at the end of the range of motion
                                when the affected parts is moved in flexion and
                                extension.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1+= Slight increase in muscle tone, manifested
                                by a catch followed by minimal resistance
                                throughout the remainder (less than half) of the
                                range of motion(ROM)"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes(
                                    "1+= Slight increase in muscle tone, manifested by a catch followed by minimal resistance throughout the remainder (less than half) of the range of motion(ROM)"
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                1+= Slight increase in muscle tone, manifested
                                by a catch followed by minimal resistance
                                throughout the remainder (less than half) of the
                                range of motion(ROM).
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="2=More marked increase in muscle tone through
                                most of range of motion but affected parts
                                easily moved"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes(
                                    "2=More marked increase in muscle tone through most of range of motion but affected parts easily moved"
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                2=More marked increase in muscle tone through
                                most of range of motion but affected parts
                                easily moved.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="3= Considerable increase in muscle tone ,passive
                                movement difficult"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes(
                                    "3= Considerable increase in muscle tone ,passive movement difficult"
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                3= Considerable increase in muscle tone ,passive
                                movement difficult
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="4= Affected parts rigid in flexion or extension"
                                {...register("modified_ashworth_scale")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .modified_ashworth_scale
                                  )?.includes(
                                    "4= Affected parts rigid in flexion or extension"
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                4= Affected parts rigid in flexion or extension.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Coordination Test</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Finger to nose"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Finger to nose")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Finger to nose</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Tapping hands"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Tapping hands")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Tapping hands</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Finger to therapist finger"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Finger to therapist finger")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                Finger to therapist finger
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Tapping foot"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Tapping foot")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Tapping foot</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Pronation Supination"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Pronation Supination")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Pronation Supination</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Alternate heel to knee"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Alternate heel to knee")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">
                                Alternate heel to knee
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Rebound Test"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Rebound Test")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Rebound Test</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Heel to Toe"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Heel to Toe")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heel to Toe</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="row">
                            <div className="col-md-4">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="Heel to Shin"
                                {...register("coordination_test")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.motor_function_assesment &&
                                  makeArrfromString(
                                    appointment?.rehab?.motor_function_assesment
                                      .coordination_test
                                  )?.includes("Heel to Shin")
                                }
                              />
                            </div>
                            <div className="col-md-8">
                              <p className="space-x-4">Heel to Shin</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <h3>Involuntory Movement Assessment</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {involuntoryList.map((items, index) => (
                          <div className="col-md-4" key={index}>
                            <div className="row">
                              <div className="col-md-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={items}
                                  {...register("involuntory_movement")}
                                  defaultChecked={
                                    !!appointment?.rehab
                                      ?.motor_function_assesment &&
                                    makeArrfromString(
                                      appointment?.rehab
                                        ?.motor_function_assesment
                                        .involuntory_movement
                                    )?.includes(items)
                                  }
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="">{items}</p>
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
                        defaultValue={
                          !!appointment?.rehab?.motor_function_assesment &&
                          !!appointment?.rehab?.motor_function_assesment
                            .identified_problems
                            ? appointment?.rehab?.motor_function_assesment
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
                          !!appointment?.rehab?.motor_function_assesment &&
                          !!appointment?.rehab?.motor_function_assesment
                            .short_term_goals
                            ? appointment?.rehab?.motor_function_assesment
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
                          !!appointment?.rehab?.motor_function_assesment &&
                          !!appointment?.rehab?.motor_function_assesment
                            .long_term_goals
                            ? appointment?.rehab?.motor_function_assesment
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
                          !!appointment?.rehab?.motor_function_assesment &&
                          !!appointment?.rehab?.motor_function_assesment
                            .treatment_plan
                            ? appointment?.rehab?.motor_function_assesment
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
          <Pagination2 name10="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form10;
