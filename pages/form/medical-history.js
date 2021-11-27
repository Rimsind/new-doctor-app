import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
const medicalhistory = () => {
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Past Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn />
              </div>
              <div>
                <div className="gen-form">
                  <h3 className="font-bold">
                    Past medical history - Please check if anyone in your family
                    has or had any or the following:
                  </h3>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">No past medical history</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Diabetes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Genetic Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Pacemaker</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">AIDS</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Emphysema</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Kidney Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Parkinson’s Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Asthma</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Epilepsy/Seizures</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Liver Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Prostate Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Arthritis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Glaucoma</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Low Blood Pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Skin Disorder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Blood Disorder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Heart Attack</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Lung Disorder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Stroke</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Broken Bones</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Heart Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Lyme’s Disease</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Thyroid Disorder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Circulation Problems</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Hepatitis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Macular Degeneration</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Ulcers (Stomach)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Cancer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Head Injury</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Multiple Sclerosis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Repeated Infections</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Cystic Fibrosis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">High Blood Pressure</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Osteoporosis</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Depression</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">High Cholesterol</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </div>
                        <div className="col-md-10">
                          <p className="space-x-4">Muscular Dystrophy</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
                <div className="gen-form">
                  <h3 className="font-bold">
                    Past medical history - For Women Only:
                  </h3>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">
                            Pelvic Inflammatory Disease
                          </p>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">Trouble with Period</p>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">Complicated Pregnancies</p>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">Pregnant</p>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">Endometriosis</p>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="row">
                            <div className="col-md-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                            </div>
                            <div className="col-md-6">
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-2">
                          <p>☆</p>
                        </div>
                        <div className="col-md-6">
                          <p className="space-x-4">Any Other</p>
                        </div>
                        <div className="col-md-4">
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
              <div className="gen-form">
                <h3 className="font-bold">
                  Surgical History – Please list any surgeries you had, and if
                  known include dates:
                </h3>
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">No surgeries to date</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">1.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">2.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">3.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row justify-content-between align-items-center">
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">4.</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="text"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row justify-content-between align-items-center">
                          <div className="col-md-2">
                            <p className="space-x-4">Date:</p>
                          </div>
                          <div className="col-md-10">
                            <input
                              type="date"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Past medical history - Please check if anyone in your family
                  has or had any or the following:
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">No Symptoms in Past Year</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Difficulty Walking</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Joint Pain or Swelling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Tremors</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Bowel Problems</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Dizziness/Blackouts</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Loss of Appetite</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Urinary Problems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Chest Pain</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Excessive Sweating</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Loss of Balance</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Vision Problems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Cough (Persistent)</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Fatigue</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Nausea/vomiting</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Weakness in arm/legs</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Decreased co-ordination</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Headaches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Numbness in arms/legs</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Weight gain (Unexplained)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Difficulty Sleeping</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Hearing Problems</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Pain at Night</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Weight loss (Unexplained)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Difficulty Swallowing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Heart Palpitations</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Shortness of Breath</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Diagnostic Test/Measures - within the past year, have you had
                  any of the following (Check all that apply):
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">No Diagnostic Testing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Bronchoscopy</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">EMG/Nerve Conduction</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Stool Test</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Angiogram</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">CT scan</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Mammogram</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Stress Test</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Arthroscopy</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Ultrasound</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">MRI</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Urine Test</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Biopsy</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Echocardiogram</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Pap smear</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">X - Ray</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Blood Test</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">EEG</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Pulmonary function Test</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                      </div>
                      <div className="col-md-10">
                        <p className="space-x-4">Bone Scan</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">EKG</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Spinal Tap</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <h3 className="font-bold">
                  Medications & Allergies – please check or list all medications
                  or allergies:
                </h3>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Non - Prescription</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">No Medications</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Decongestant</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Motrin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Advil/Alleve</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Excedrin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Vitamins/Minerals</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Antihistamines</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Herbal Supplements</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Tylenol</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Asprin</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Ibuprophen/Naproxen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Prescription:</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">Medications:</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Allergies</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="row">
                          <div className="col-md-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-10">
                            <p className="space-x-4">
                              Known allergies to date:
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  </div>
                </div>
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
                  <Link href="/form/general-information">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/social-history">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/employment-status">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">3</a>
                  </Link>
                </li>
                <li className="active">
                  <Link href="/form/medical-history">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/functional-status">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">5</a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/family-history">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">6</a>
                  </Link>
                </li>

                <li>
                  <a href="#" className="pe-3 ps-3 pt-2 pb-2 border">
                    Next
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default medicalhistory;
