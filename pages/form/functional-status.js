import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
const functionalstatus = () => {
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
                      Current Functional Status:
                    </h3>
                  </div>
                </div>
                <FormCloseBtn />
              </div>

              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <h3>Difficulty with locomotion / movement such as:</h3>
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
                            <p className="space-x-4">Bed Mobility</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="row">
                          <div className="col-md-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                          </div>
                          <div className="col-md-11">
                            <p className="space-x-4">
                              Transfers (such as bed to chair, from bed to
                              commode / toilet)
                            </p>
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
                            <p className="space-x-4">On ramps</p>
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
                            <p className="space-x-4">Gait (Walking)</p>
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
                            <p className="space-x-4">On level surfaces</p>
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
                            <p className="space-x-4">On stairs</p>
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
                            <p className="space-x-4">On uneven surfaces</p>
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
                    <h3>Difficulty with self-care activities such as:</h3>
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
                            <p className="space-x-4">Bathing</p>
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
                            <p className="space-x-4">Dressing</p>
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
                            <p className="space-x-4">Toileting</p>
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
                    <h3>Difficulty with home management such as:</h3>
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
                            <p className="space-x-4">Household Chores</p>
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
                            <p className="space-x-4">Shopping</p>
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
                            <p className="space-x-4">Driving/Transportation</p>
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
                            <p className="space-x-4">Care of Dependents</p>
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
                    <h3>
                      Difficulty with community and work activities such as:
                    </h3>
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
                            <p className="space-x-4">Work</p>
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
                            <p className="space-x-4">School</p>
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
                            <p className="space-x-4">Recreation</p>
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
                            <p className="space-x-4">Sport</p>
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
                            <p className="space-x-4">Play Activity</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gen-form-upper row">
                <div className="col-md-12">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Prior Functional Status(Your status prior to the date of
                      onset/Injury):
                    </h3>
                  </div>
                </div>
              </div>
              <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      rows="5"
                    ></textarea>
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
                <li>
                  <Link href="/form/medical-history">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">4</a>
                  </Link>
                </li>
                <li className="active">
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

export default functionalstatus;
