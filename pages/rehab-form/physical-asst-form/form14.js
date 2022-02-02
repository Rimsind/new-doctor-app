import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const Form14 = () => {
  const { appointmentId } = useRouter().query;
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
              <div>
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
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
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
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
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
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>ALIGNMENT AND FITTING OF ORTHOSIS</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>movement analysis with and without device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Patinet ability and care of the device</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="row">
                        <div className="col-md-1">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-6">
                          <p>Level of safety of the devices</p>
                        </div>
                        <div className="col-md-5">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Text box"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <IdentifiedProblem />
                <ShortTermGoal />
                <LongTermGoal />
                <TreatmentPlan />
              </div>
            </div>
          </div>
          <Pagination2 name14="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default Form14;
