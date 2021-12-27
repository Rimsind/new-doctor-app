import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";

const HistoryOfPresentIllness = () => {
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
                        checked
                      />{" "}
                      Mr. /{" "}
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />{" "}
                      Mrs.
                    </div>
                    <div className="col-md-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Amit Mahapatra"
                      />
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-3">is a</div>
                        <div className="col-md-7">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="23"
                          />
                        </div>
                        <div className="col-md-2">Y.o</div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Male</option>
                        <option value="1">Female</option>
                        <option value="2">Other</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-6">Pleasant</div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="gentleman"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-2">with</div>
                        <div className="col-md-10">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="no acute distress"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-6">came to the</div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="clinic"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row align-items-center">
                        <div className="col-md-7">with a problem of</div>
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="back pain"
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
                            placeholder="pain medication"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row align-items-center">
                        <div className="col-md-6">resulting in</div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="no relief"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="row align-items-center">
                        <div className="col-md-3">Patient stated</div>
                        <div className="col-md-9">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="while driving motor bike got hit from the back and fell from the bike"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="row align-items-center">
                        <div className="col-md-6">Patient was done</div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MRI, X-ray, and etc"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          Patient current medication
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Brufen 600 mg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          Other relevant factors are
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="present / not present"
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
                  Mr. Amit Mahapatra is a 23 y.o Male pleasant gentleman with no
                  acute distress came to the clinic with a problem of back pain.
                  Patient currently treated with pain medication resulting in no
                  relief. Patient stated while driving motor bike got hit from
                  the back and fell from the bike. Patient was done MRI, X-ray,
                  and etc. Patient current medication includes Brufen 600 mg.
                  Other relevant factors are present/ not present.
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
              <div className="gen-form-upper row">
                <div className="col-md-12">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Current Functional Status
                    </h3>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Difficulty with locomotion / movement such as:</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bed Mobility , On ramps"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Difficulty with self-care activities such as:</h6>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bathing"
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row align-items-center">
                  <div className="col-md-4">
                    <h6>Difficulty with home management such as:</h6>
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
                    <h6>
                      Difficulty with community and work activities such as:
                    </h6>
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
              <div classNameName="gen-form-upper row">
                <div classNameName="col-md-12">
                  <div classNameName="text-center pb-6">
                    <h3 classNameName="general-information-form-title font-bold">
                      Prior Functional Status(Your status prior to the date of
                      onset/Injury):
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="gen-form-para gen-form"
                style={{ marginTop: "10px" }}
              >
                <p>here the data will be viewed.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gen-form-btn">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <ul className="pagination mb-0 list-unstyled">
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    Prev
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    4
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    5
                  </a>
                </li>
                <li className="active">
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    6
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    7
                  </a>
                </li>
                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    Next{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <a href="#" className="btn btn-success">
                {" "}
                Save Changes{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryOfPresentIllness;
