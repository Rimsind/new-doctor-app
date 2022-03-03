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
const Form6 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form6 = (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
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
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("touch_awareness")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <h3>Touch Localization</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("touch_localization")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Touch Pressure Threshold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("touch_pressure_threshold")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Two point discrimination</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("two_point_discrimination")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
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
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("sharp")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Dull</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("dull")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
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
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("vibration")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Joint Position</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("joint_position")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Joint Motion</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("joint_motion")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Stereognosis</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("stereognosis")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
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
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("hot")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <h3>Cold</h3>
                        </div>
                        <div className="col-md-6">
                          <div className="row">
                            {optionList.map((items, index) => (
                              <div className="col-md-6" key={index}>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value={items}
                                    {...register("cold")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="inlineRadio1"
                                  >
                                    {items}
                                  </label>
                                </div>
                              </div>
                            ))}
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
          <Pagination2 name6="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form6;
