import { useRouter } from "next/router";
import { useState } from "react";
import FormCloseBtn from "../../components/FormCloseBtn";

const HistoryOfPresentIllness = () => {
  const { appointmentId } = useRouter().query;

  const [slautation, setSalutation] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [pleasant, setPleasant] = useState();
  const [cameWith, setCameWith] = useState();
  const [cameTo, setCameTo] = useState();
  const [problem, setProblem] = useState();
  const [treatedWith, setTreatedWith] = useState();
  const [resulting, setResulting] = useState();
  const [stated, setStated] = useState();
  const [hasDone, setHasDone] = useState();
  const [medication, setMedication] = useState();
  const [other, setOther] = useState();
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
                      History of Present Illness
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div className="gen-form">
                <div className="history-of-present-illness-content">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Mr"
                        onChange={(e) => setSalutation(e.target.value)}
                      />
                      Mr. /
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Mrs"
                        onChange={(e) => setSalutation(e.target.value)}
                      />
                      Mrs.
                    </div>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-3">is a</div>
                        <div className="col-md-7">
                          <input
                            type="number"
                            className="form-control"
                            onChange={(e) => setAge(e.target.value)}
                          />
                        </div>
                        <div className="col-md-2">Y.o</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option selected>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-4">
                      <div className="row align-items-center">
                        <div className="col-md-3">Pleasant</div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setPleasant(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center">
                        <div className="col-md-2">with</div>
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCameWith(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center">
                        <div className="col-md-4">came to the</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setCameTo(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-4">with a problem of</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setProblem(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          Patient currently treated with
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setTreatedWith(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-3">resulting in</div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setResulting(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-3">Patient stated</div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setStated(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-4">Patient was done</div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setHasDone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          Patient current medication
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setMedication(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center mt-2">
                    <div className="col-md-12">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          Other relevant factors are
                        </div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setOther(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gen-form-para gen-form"
                style={{ marginTop: "10px" }}
              >
                <h3>Preview:</h3>

                <p>
                  <strong>{slautation}</strong>. <strong>{name}</strong> is a
                  <strong> {age}</strong> y.o <strong>{gender}</strong> pleasant
                  <strong>{pleasant}</strong> with
                  <strong> {cameWith}</strong> came to the
                  <strong> {cameTo} </strong>
                  with a problem of
                  <strong> {problem}</strong>. Patient currently treated with
                  <strong> {treatedWith} </strong> resulting in
                  <strong> {resulting} </strong>. Patient stated
                  <strong> {stated}</strong>. Patient was done
                  <strong> {hasDone}</strong>. Patient current medication
                  includes <strong>{medication}</strong>. Other relevant factors
                  are <strong> {other}</strong>.
                </p>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Other relevant factors (if present):</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Allergies</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Vaccination</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-btn">
          <div className="row">
            <div className="col-md-4"></div>

            <div className="col-md-4">
              <a href="#" className="btn btn-success">
                Save Changes
              </a>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;
