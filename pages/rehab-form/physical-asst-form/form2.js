import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import { useForm } from "react-hook-form";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm";
import { useRouter } from "next/router";
const Form2 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form2 = (data, event) => {
    event.preventDefault();
    const payload = {
      abthropometric: {
        skin_fold: data.skin_fold,
        height: data.height,
        edema_grith: data.edema_grith,
        edema_scales: data.edema_scales,
        short_term_goals: data.short_term_goals,
        treatment_plan: data.treatment_plan,
        long_term_goals: data.long_term_goals,
        impedence: data.impedence,
        identified_problems: data.identified_problems,
        weight: data.weight,
        edema_palpation: data.edema_palpation,
        body_dimension_length: data.body_dimension_length,
        body_dimension_grith: data.body_dimension_grith,
        bmi: data.bmi,
        edema_volume: data.edema_volume,
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
                      Anthropometric Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form2)}>
                <div className="gen-form">
                  <h3>Body composition assessment includes</h3>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Body Mass Index</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row mt-3">
                        <div className="col-md-4">
                          <label>Height (cm)</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="cm"
                                {...register("height")}
                                // onChange={(e) => setHeight(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>Weight (Kg)</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="kg"
                                {...register("weight")}
                                // onChange={(e) => setWeight(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label>BMI</label>
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                // value={BMI}
                                contentEditable="false"
                                {...register("bmi")}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Impedence Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("impedence")}
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Skin Fold Thickness Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("skin_fold")}
                      />
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3>Body Dimension Includes</h3>

                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Girth Measurement </h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_grith")}
                      />
                    </div>
                  </div>
                  <div className="row align-items-center mb-3">
                    <div className="col-md-4">
                      <h3>Length Measurement</h3>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Text Area"
                        {...register("body_dimension_length")}
                      />
                    </div>
                  </div>
                </div>

                <div className="gen-form">
                  <div className="row align-items-start">
                    <div className="col-md-4">
                      <h3>Edema Measurement includes</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row mb-3">
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Girth</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_grith")}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Palpation</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_palpation")}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Scales</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_scales")}
                            />
                          </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                          <div className="check-item d-flex align-items-center ms-2">
                            <label className="ps-2">Volume</label>
                          </div>
                          <div className="checkitem">
                            <input
                              type="text"
                              className="form-control ms-2"
                              placeholder="Text Area"
                              {...register("edema_volume")}
                            />
                          </div>
                        </div>
                      </div>
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
        </div>
        <Pagination2 name2="active" id={appointmentId} />
      </div>
    </>
  );
};

export default Form2;
