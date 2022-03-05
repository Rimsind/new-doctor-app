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
const Form17 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form17 = (data, event) => {
    event.preventDefault();
    const payload = {
      wound_assessment: {
        slough: data.slough,
        size: data.size,
        depth: data.depth,
        color: data.color,
        recucing_relieving_devices: data.recucing_relieving_devices,
        undermining: data.undermining,
        epitheliazation_in_process: data.epitheliazation_in_process,
        describe_device: data.describe_device,
        dressing_tobe_used: data.dressing_tobe_used,
        barriers_to_progress: data.barriers_to_progress,
        short_term_goals: data.short_term_goals,
        treatment_plan: data.treatment_plan,
        long_term_goals: data.long_term_goals,
        describe_surrounding_tissue: data.describe_surrounding_tissue,
        signs_of_infection: data.signs_of_infection,
        location: data.location,
        type_of_ulcer: data.type_of_ulcer,
        pain: data.pain,
        amount: data.amount,
        identified_problems: data.identified_problems,
        odor: data.odor,
        positioning_concerns: data.positioning_concerns,
        thickness_of_ulcer: data.thickness_of_ulcer,
        tunnelling: data.tunnelling,
        granulation_tissue: data.granulation_tissue,
        stage: data.stage,
        necrotic_tissue: data.necrotic_tissue,
      },
    };
    console.log(payload);
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
                      WOUND ASSESSMENT
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form17)}>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Location:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("location")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Tyoe of Ulcer:</p>
                        </div>
                        <div className="col-md-6">
                          <select className="form-select" aria-label=" example">
                            {...register("type_of_ulcer")}
                            <option selected>Select</option>
                            <option value="Pressure ulcer">
                              Pressure ulcer
                            </option>
                            <option value="Stasis ulcer">Stasis ulcer</option>
                            <option value="Surgical wound">
                              Surgical wound
                            </option>
                            <option value="Wound due to trauma">
                              Wound due to trauma
                            </option>
                            <option value="Arterial ulcer">
                              Arterial ulcer
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Stage:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("stage")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Thickness of Non-Pressure Ulcer:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("thickness_of_ulcer")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Size:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("size")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Depth:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("depth")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Tunneling:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("tunnelling")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Undermining:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("undermining")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Necrotic Tissue (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("necrotic_tissue")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Slough (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("slough")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Granulation Tissue (%):</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("granulation_tissue")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Epitheliazation in Process?</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("epitheliazation_in_process")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4 text-center">Exudate</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Amount:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("amount")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Color:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("color")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-6">
                          <p>Odor:</p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Text Area"
                            {...register("odor")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4 text-center">PAIN</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="In Wound site?"
                            {...register("pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>In Wound site?</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="In Surrounding Tissue?"
                            {...register("pain")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>In Surrounding Tissue?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">Describe surrounding tissue:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("describe_surrounding_tissue")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4 text-center">Signs of infection</h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Erythema"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Erythema</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Induration"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Induration</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Cellulitis"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Cellulitis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Tenderness"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Tenderness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Uncharacteristic odor"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Uncharacteristic odor</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Increased Exudate"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Increased Exudate</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Edema"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Edema</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Increased Heart Rate"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Increased Heart Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Bpm"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Bpm</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="High blood pressure"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>High blood pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Other"
                            {...register("signs_of_infection")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Other</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="mt-4 mb-4 text-center">
                    Presence of Pressure Recucing / Relieving Devices
                  </h3>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Bed"
                            {...register("Recucing_relieving_devices")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Bed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Wheelchair"
                            {...register("Recucing_relieving_devices")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Wheelchair</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Other"
                            {...register("Recucing_relieving_devices")}
                          />
                        </div>
                        <div className="col-md-10">
                          <p>Other</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Describe device in place:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("describe_device")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Positioning Concerns:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("positioning_concerns")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Dressing to be used:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("dressing_tobe_used")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">Barriers to Progress:</div>
                    <div className="col-md-8">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Text Area"
                        {...register("barriers_to_progress")}
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
          <Pagination2 name17="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form17;
