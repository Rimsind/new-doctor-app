import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
const Form7 = () => {
  const { appointmentId } = useRouter().query;
  const { register, handleSubmit } = useForm();
  const submit_form7 = (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        postural_assessment: {
          feet: data.feet.toString(),
          knee: data.knee.toString(),
          pelvis: data.pelvis.toString(),
          lower_back: data.lower_back.toString(),
          upper_back: data.upper_back.toString(),
          thorax: data.thorax.toString(),
          spine: data.spine.toString(),
          abdomen: data.abdomen.toString(),
          shoulder: data.shoulder.toString(),
          head: data.head.toString(),
          identified_problems: data.identified_problems,
          short_term_goals: data.short_term_goals,
          long_term_goals: data.long_term_goals,
          treatment_plan: data.treatment_plan,
        },
      },
    };
    console.log(payload);
  };
  const feetList = [
    "Hammer toes",
    "Hallux valgus",
    "Low ant arch",
    "Ant foot varus",
    "Pronated",
    "Supinated",
    "Flat Long arch",
    "Pigeon toes",
    "Medial Rotation",
    "Lat rotation",
    "Knock Knees",
  ];
  const kneeList = ["Hyperextension", "Flexion", "Bowlegs", "Tibial torsion"];
  const pelvisList = [
    "Leg in postural adduction",
    "Rotation",
    "Tilt",
    "Deviation",
  ];

  const lowBackList = ["Lordosis", "Flat Back", "Kyphosis", "Operation"];
  const upperBackList = [
    "Kyphosis",
    "Flat UP back",
    "Scaulae abducted",
    "Scalulae Elevated",
  ];
  const thoraxList = [
    "Depressed chest",
    "Elevated chest",
    "Rotation",
    "Deviation",
  ];
  const spineList = ["Total Curved", "Lumbar", "Thoracic", "Cervical"];
  const abdomenList = ["Protruding", "Scars"];
  const shoulderList = ["Low", "High", "Forward", "Med Rotated"];
  const headList = ["Forward", "Torticollis", "Tilt", "Rotation"];

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
                      Postural Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form7)}>
                <div className="gen-form">
                  <p className="fs-5 fw-bold mt-4 mb-4">Segmental Alignment:</p>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Feet</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {feetList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("feet")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Knee</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {kneeList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("knee")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Pelvis</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {pelvisList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("pelvis")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Lowback</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {lowBackList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("lower_back")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Upperback</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {upperBackList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("upper_back")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Thorax</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {thoraxList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("thorax")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Spine</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {spineList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("spine")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Abdomen</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {abdomenList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("abdomen")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Shoulder</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {shoulderList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("shoulder")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
                <div className="gen-form">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h3>Head</h3>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        {headList.map((items, index) => (
                          <div className="col-md-3">
                            <div
                              className="form-check form-check-inline"
                              key={index}
                            >
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value={items}
                                {...register("head")}
                              />
                              <label
                                className="form-check-label"
                                for="inlineRadio1"
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
          <Pagination2 name7="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form7;
