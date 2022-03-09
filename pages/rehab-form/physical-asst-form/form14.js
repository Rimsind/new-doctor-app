import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";

import router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import axios from "axios";
import { useAuth } from "../../../context/index";
import { apiUrl } from "../../../config/api";
const Form14 = () => {
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
  const submit_form14 = async (data, event) => {
    event.preventDefault();
    const payload = {
      rehab: {
        ...appointment.rehab,
        orthotic_assessment: {
          type_of_device: data.type_of_device,
          alignment_fitting: data.alignment_fitting,
          patinet_ability: data.patinet_ability,
          level_of_safety: data.level_of_safety,
          movement_analysis: data.movement_analysis,
          functional_effect: data.functional_effect,
        },
        prosthetic_assessment: {
          type_of_device: data.type_of_device,
          alignment_fitting: data.alignment_fitting,
          patinet_ability: data.patinet_ability,
          level_of_safety: data.level_of_safety,
          movement_analysis: data.movement_analysis,
          functional_effect: data.functional_effect,
        },
        adaptive_equipment_assessment: {
          type_of_device: data.type_of_device,
          alignment_fitting: data.alignment_fitting,
          patinet_ability: data.patinet_ability,
          level_of_safety: data.level_of_safety,
          movement_analysis: data.movement_analysis,
          functional_effect: data.functional_effect,
        },
        wheel_chair_assessment: {
          A: data.A,
          B: data.B,
          C: data.C,
          E: data.E,
          F: data.F,
          G: data.G,
          H: data.H,
          I: data.I,
          J: data.J,
          K: data.K,
          L: data.L,
          M: data.M,
          D1: data.D1,
          N: data.N,
          D2: data.D2,
          O: data.O,
          short_term_goals: data.short_term_goals,
          treatment_plan: data.treatment_plan,
          long_term_goals: data.long_term_goals,
          identified_problems: data.identified_problems,
          type: data.type,
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
      `/rehab-form/physical-asst-form/form15?appointmentId=${appointmentId}`
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
                      ORTHOTIC AND PROSTHETIC ASSESSMENT
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <form onSubmit={handleSubmit(submit_form14)}>
                <div className="gen-form">
                  <h3>ORTHOTIC ASSESSMENT</h3>

                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3>TYPE OF DEVICE:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("type_of_device")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("alignment_fitting")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("movement_analysis")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("patinet_ability")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("functional_effect")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("level_of_safety")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-upper row">
                  <div className="col-md-12">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        PROSTHETIC ASSESSMENT
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3>TYPE OF PROSTHESIS:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("type_of_device")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("alignment_fitting")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("movement_analysis")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("patinet_ability")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("functional_effect")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("level_of_safety")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-upper row">
                  <div className="col-md-12">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        ADAPTIVE EQUIPMENT ASSESSMENT
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">*</div>
                        <div className="col-md-6">
                          <h3>TYPE OF DEVICE:</h3>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("type_of_device")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("alignment_fitting")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("movement_analysis")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("patinet_ability")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>
                            Functional effect and benefits of use of the device
                          </p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("Functional_effect")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("level_of_safety")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-6"></div>
                        <div className="col-md-5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form-upper row">
                  <div className="col-md-12">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        WHEEL CHAIR ASSESSMENT
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-start">
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="Manual"
                            {...register("type")}
                          />
                        </div>
                        <div className="col-md-11">
                          <p>Manual</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="MOTORIZED"
                            {...register("type")}
                          />
                        </div>
                        <div className="col-md-11">
                          <p>MOTORIZED</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            value="None"
                            {...register("type")}
                          />
                        </div>
                        <div className="col-md-11">
                          <p>None</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>A: Shoulder Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("A")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>B: Chest Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("B")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>C: Chect Depth (Front-Back)</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("C")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D1: Hip Width</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("D1")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>D2: Degree of Hip Flexion</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("D2")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>E: Between Knees</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("E")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>F: Top to Head</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("F")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>G: Occiput</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("G")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>H: Top To Shoulder</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("H")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>I: Acromium Process(Tip to Shoulder)</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("I")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>J: Infeior Angie of Scapula</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("J")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>K: Elbow</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("K")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>L: Liac Crest</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("L")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>M: Sacrum to Popliteal Fossa</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("M")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-2">
                      <div className="row">
                        <div className="col-md-8">
                          <p>N: Knee to Heel</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("N")}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div className="col-md-8">
                          <p>O: Foot Length</p>
                        </div>
                        <div className="col-md-4">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                            {...register("O")}
                          />
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
          <Pagination2 name14="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form14;
