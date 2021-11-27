import FormCloseBtn from "../../components/FormCloseBtn";
import Link from "next/link";
const familyhistory = () => {
  return (
    <>
      <div className="general-information-form relative p-6 flex-auto">
        <div className="max-w-6xl mx-auto md:py-10">
          <div className="space-y-5 border-2 p-10 rounded">
            <div className="space-y-2 pb-5">
              <div className="gen-form-upper row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="text-center pb-6">
                    <h3 className="general-information-form-title font-bold">
                      Family Medical History
                    </h3>
                  </div>
                </div>
                <FormCloseBtn />
              </div>
              {/* <div className="gen-form">
                <div className="row justify-centent-between align-items-center">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="" className="form-label">
                          Relation
                        </label>
                      </div>
                      <div className="col-md-8">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">Mother</option>
                          <option value="2">Father</option>
                          <option value="3">Wife</option>
                          <option value="3">Child</option>
                          <option value="3">Grand Father</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if leaving)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-8">
                        <label htmlFor="" className="form-label">
                          Age (if death)
                        </label>
                      </div>
                      <div className="col-md-4">
                        <input
                          type="number"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-7">
                        <label htmlFor="" className="form-label">
                          Cause of death
                        </label>
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          id=""
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="mt-2">
                  Which disease they hade? (Check all that apply)
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
                        <p>Anemia</p>
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
                        <p>Cancer</p>
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
                        <p>Diabetes</p>
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
                        <p>Epilepsy</p>
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
                        <p>Glaucoma</p>
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
                        <p>Heart Disease</p>
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
                        <p>High Blood Pressure</p>
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
                        <p>Hay Fever</p>
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
                        <p>Hives</p>
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
                        <p>Kidney disease</p>
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
                        <p>Mental illness</p>
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
                        <p>Rheumatoid arthritis</p>
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
                        <p>Tuberculosis</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gen-form-add-btn pb-5">
                  <a href="#" className="btn btn-primary">
                    Add
                  </a>
                </div>
              </div> */}
              <div
                className="rfa-gen-form-data-table"
                style={{
                  background: "white",
                  padding: "10px",
                  borderRadius: "3px",
                  marginTop: "10px",
                }}
              >
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Sl.</th>
                      <th scope="col">Relation</th>
                      <th scope="col">Age (if living)</th>
                      <th scope="col">Age (if death)</th>
                      <th scope="col">Cause of death</th>
                      <th scope="col">Anemia</th>
                      <th scope="col">Cancer</th>
                      <th scope="col">Diabetes</th>
                      <th scope="col">Epilepsy</th>
                      <th scope="col">Glaucoma</th>
                      <th scope="col">Hearth Disease</th>
                      <th scope="col">High Blood Pressure</th>
                      <th scope="col">Hay Fever</th>
                      <th scope="col">Hives</th>
                      <th scope="col">Kidney disease</th>
                      <th scope="col">Mental illness</th>
                      <th scope="col">Rheumatoid arthritis</th>
                      <th scope="col">Tuberculosis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Myself</td>
                      <td>24</td>
                      <td>-</td>
                      <td>-</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Myself</td>
                      <td>24</td>
                      <td>-</td>
                      <td>-</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mother</td>
                      <td>24</td>
                      <td>-</td>
                      <td>-</td>
                      <td>No</td>
                      <td>No</td>
                      <td>yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>Father</td>
                      <td>24</td>
                      <td>-</td>
                      <td>-</td>
                      <td>No</td>
                      <td>No</td>
                      <td>yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                      <td>yes</td>
                      <td>No</td>
                      <td>No</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
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
                <li>
                  <Link href="/form/functional-status">
                    <a className="pe-3 ps-3 pt-2 pb-2 border">5</a>
                  </Link>
                </li>
                <li className="active">
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

export default familyhistory;
