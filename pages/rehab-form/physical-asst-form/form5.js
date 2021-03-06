import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
const Form5 = () => {
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
  const submit_form5 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        cranial_peripheral_assesment: {
          trochlear: data.trochlear,
          peripheral_nerve_nxamination: data.peripheral_nerve_nxamination,
          hypoglossal: data.hypoglossal,
          occulomotor: data.occulomotor,
          olfactory: data.olfactory,
          optic: data.optic,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          accessory: data.accessory,
          trigeminal: data.trigeminal,
          facial_nerve: data.facial_nerve,
          vestibulocohlear: data.vestibulocohlear,
          identified_problems: data.identified_problems,
          abducens: data.abducens,
          vagus: data.vagus,
          glossophoryngeal: data.glossophoryngeal,
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
      `/rehab-form/physical-asst-form/form6?appointmentId=${appointmentId}`
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
                      Cranial And Peripheral Nerve Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form5)}>
                <div className="gen-form">
                  <p className="fs-5 fw-bold mt-4 mb-4">
                    Cranial Nerve Examination:
                  </p>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-9">
                      <h3>Olfactory</h3>
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
                                {...register("olfactory")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.olfactory ===
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
                                {...register("olfactory")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.olfactory ===
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
                      <h3>Optic</h3>
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
                                {...register("optic")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.optic ===
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
                                {...register("optic")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.optic ===
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
                      <h3>Occulomotor</h3>
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
                                {...register("occulomotor")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .occulomotor === "Normal"
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
                                {...register("occulomotor")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .occulomotor === "Impared"
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
                      <h3>Trochlear</h3>
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
                                {...register("trochlear")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.trochlear ===
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
                                {...register("trochlear")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.trochlear ===
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
                      <h3>Trigeminal</h3>
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
                                {...register("trigeminal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .trigeminal === "Normal"
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
                                {...register("trigeminal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .trigeminal === "Impared"
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
                      <h3>Abducens</h3>
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
                                {...register("abducens")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.abducens ===
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
                                {...register("abducens")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.abducens ===
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
                      <h3>Facial Nerve</h3>
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
                                {...register("facial_nerve")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .facial_nerve === "Normal"
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
                                {...register("facial_nerve")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .facial_nerve === "Impared"
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
                      <h3>Vestibulocohlear </h3>
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
                                {...register("vestibulocohlear")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .vestibulocohlear === "Normal"
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
                                {...register("vestibulocohlear")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .vestibulocohlear === "Impared"
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
                      <h3>Glossophoryngeal</h3>
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
                                {...register("glossophoryngeal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .glossophoryngeal === "Normal"
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
                                {...register("glossophoryngeal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .glossophoryngeal === "Impared"
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
                      <h3>Vagus</h3>
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
                                {...register("vagus")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.vagus ===
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
                                {...register("vagus")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.vagus ===
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
                      <h3>Accessory</h3>
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
                                {...register("accessory")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.accessory ===
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
                                {...register("accessory")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment.accessory ===
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
                      <h3>Hypoglossal</h3>
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
                                {...register("hypoglossal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .hypoglossal === "Normal"
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
                                {...register("hypoglossal")}
                                defaultChecked={
                                  !!appointment?.rehab
                                    ?.cranial_peripheral_assesment &&
                                  appointment?.rehab
                                    ?.cranial_peripheral_assesment
                                    .hypoglossal === "Impared"
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
                    <div className="col-md-3">
                      <h3>Peripheral Nerve Examination</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("peripheral_nerve_nxamination")}
                        defaultValue={
                          !!appointment?.rehab?.cranial_peripheral_assesment &&
                          !!appointment?.rehab?.cranial_peripheral_assesment
                            .peripheral_nerve_nxamination
                            ? appointment?.rehab?.cranial_peripheral_assesment
                                .peripheral_nerve_nxamination
                            : ""
                        }
                      ></textarea>
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
                          !!appointment?.rehab?.cranial_peripheral_assesment &&
                          !!appointment?.rehab?.cranial_peripheral_assesment
                            .identified_problems
                            ? appointment?.rehab?.cranial_peripheral_assesment
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
                          !!appointment?.rehab?.cranial_peripheral_assesment &&
                          !!appointment?.rehab?.cranial_peripheral_assesment
                            .short_term_goals
                            ? appointment?.rehab?.cranial_peripheral_assesment
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
                          !!appointment?.rehab?.cranial_peripheral_assesment &&
                          !!appointment?.rehab?.cranial_peripheral_assesment
                            .long_term_goals
                            ? appointment?.rehab?.cranial_peripheral_assesment
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
                          !!appointment?.rehab?.cranial_peripheral_assesment &&
                          !!appointment?.rehab?.cranial_peripheral_assesment
                            .treatment_plan
                            ? appointment?.rehab?.cranial_peripheral_assesment
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
          <Pagination2 name5="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form5;
