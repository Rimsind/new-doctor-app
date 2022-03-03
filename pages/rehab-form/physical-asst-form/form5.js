import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Form5 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form5 = (data, event) => {
    event.preventDefault();
    const payload = {
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
    };
    console.log(payload);
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
                      Cranial And Peripheral Nerve Assessment Includes Reflex
                      And Sensory Assessment
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
                        {optionList.map((items, index) => (
                          <div className="col-md-6" key={index}>
                            <div className="row">
                              <div className="col-md-4">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  value={items}
                                  {...register("olfactory")}
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
                      <h3>Optic</h3>
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
                                  {...register("optic")}
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
                      <h3>Occulomotor</h3>
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
                                  {...register("occulomotor")}
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
                      <h3>Trochlear</h3>
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
                                  {...register("trochlear")}
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
                      <h3>Trigeminal</h3>
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
                                  {...register("trigeminal")}
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
                      <h3>Abducens</h3>
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
                                  {...register("abducens")}
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
                      <h3>Facial Nerve</h3>
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
                                  {...register("facial_nerve")}
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
                      <h3>Vestibulocohlear </h3>
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
                                  {...register("vestibulocohlear")}
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
                      <h3>Glossophoryngeal</h3>
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
                                  {...register("glossophoryngeal")}
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
                      <h3>Vagus</h3>
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
                                  {...register("vagus")}
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
                      <h3>Accessory</h3>
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
                                  {...register("accessory")}
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
                      <h3>Hypoglossal</h3>
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
                                  {...register("hypoglossal")}
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
                    <div className="col-md-3">
                      <h3>Peripheral Nerve Examination</h3>
                    </div>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Describe your problems here"
                        {...register("peripheral_nerve_nxamination")}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <IdentifiedProblem />
                <ShortTermGoal />
                <LongTermGoal />
                <TreatmentPlan />
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
