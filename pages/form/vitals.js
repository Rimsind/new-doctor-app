import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";
import { useState } from "react";
const Vitals = () => {
  const { appointmentId } = useRouter().query;

  const [catagory, setCatagory] = useState();
  const [test, setTest] = useState();
  const [data, setData] = useState([]);

  const addData = () => {
    setData([
      ...data,
      {
        catagory: catagory,
        test: test,
      },
    ]);
  };
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  let meter = height / 100;
  let result = weight / (meter * meter);
  let BMI = result.toFixed(1);

  return (
    <>
      <form>
        <div className="general-information-form relative p-6 flex-auto">
          <div className="max-w-6xl mx-auto md:py-10">
            <div className="space-y-5 border-2 p-10 rounded">
              <div className="space-y-2 pb-5">
                <div className="gen-form-upper row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <div className="text-center pb-6">
                      <h3 className="general-information-form-title font-bold">
                        Vital Signs & Statistics
                      </h3>
                    </div>
                  </div>
                  <FormCloseBtn id={appointmentId} />
                </div>
                <div className="gen-form">
                  <h3>Vital Signs</h3>
                  <div className="row justify-content-between align-items-end mt-3">
                    <div className="col-md-2">
                      <label>Height (cm)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cm"
                            onChange={(e) => setHeight(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>Weight (Kg)</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="kg"
                            onChange={(e) => setWeight(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <label>BMI</label>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            value={BMI}
                            contentEditable="false"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <label>BP (Right Arm)</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3">
                      <label>BP (Left Arm)</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Heart Rate</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>O2 Saturation</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Respiratory Rate</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Temperature (Oral)</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Haemoglobin</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>White blood cell count</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Platelet count</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-3 mt-4">
                      <label>Glocose Level</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gen-form-btn mt-3">
            <div className="save-btn text-center">
              <button
                className="btn btn-success"
                //   onClick={submitPrescription}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Vitals;
