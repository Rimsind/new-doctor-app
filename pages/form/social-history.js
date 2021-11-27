import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
const socialhistory = () => {
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
                      Social History & Living Environment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn />
              </div>
              <div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>Where do you live?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
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
                              <p className="space-x-4">Private Home</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Ranted Home</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Extended Care</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Hospice</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Apartment</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Border</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Homeless</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>With whom do you live?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
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
                              <p className="space-x-4">Alone</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Relative(s)</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Friend(s)</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Child or Children</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Spouse</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Patient(s)</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Group Setting</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Partner</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Brother(s)</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Sister(s)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Does your home have?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
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
                            <p className="space-x-4">One Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Two Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Multi Level</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Stairs, No Ralling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Ramps</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Elevation</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Elevators</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Stairs, Ralling</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Uneven Terrain</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
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
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-5">
                                <p className="space-x-4">
                                  Any Obstacles (List):
                                </p>
                              </div>
                              <div className="col-md-7">
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
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>How Many Steps?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Outside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
                              className="form-control"
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-8">
                            <p className="space-x-4">
                              No. Steps Inside The Home:
                            </p>
                          </div>
                          <div className="col-md-4">
                            <input
                              type="number"
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
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-3">
                    <h3>Do You Use?</h3>
                  </div>
                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-md-3">
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
                            <p className="space-x-4">Forearm Crutches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Axillary Crutches</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Straight Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Walker</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Manual Wheelchair</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Quad Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Two Cane</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Rolling Walker</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Motor Wheelchair</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Glasses</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
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
                            <p className="space-x-4">Hearing Aid</p>
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
                            <div className="row justify-centent-between align-items-center">
                              <div className="col-md-4">
                                <p className="space-x-4">Others: </p>
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
                  </div>
                </div>
                <div className="child-gen-form mt-3 mb-3">
                  <h3>Cultural / Religious</h3>
                  <div className="row">
                    <div className="col-md-4">
                      <p className="space-x-4">
                        Any cultural or religious beliefs or wishes that might
                        affect care?
                      </p>
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
              <div className="child-gen-form-heading">
                <h5>Social / Health Habits</h5>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>Do You Smoke Tobacco?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
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
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Socialy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-md-3">
                      <h3>Do You Drink Alcohol?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
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
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Occasionaly</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Socialy</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Heavily</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gen-form">
                  <div className="row ">
                    <div className="col-md-3">
                      <h3>Excercise?</h3>
                    </div>
                    <div className="col-md-9">
                      <div className="row">
                        <div className="col-md-3">
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
                              <p className="space-x-4">No</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
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
                              <p className="space-x-4">Yes</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            If yes how many times per week?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            How many minutes per day?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="row justify-centent-between align-items-center">
                        <div className="col-md-6">
                          <p className="space-x-4">
                            (Beyond normal daily activities & Chores)?{" "}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Describe exercise or activity"
                          />
                        </div>
                      </div>
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
                <li className="active">
                  <Link href="/form/social-history">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/form/employment-status">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">3</a>
                  </Link>
                </li>
                <li>
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

export default socialhistory;
