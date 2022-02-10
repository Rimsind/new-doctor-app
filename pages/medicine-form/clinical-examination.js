import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";

const ClinicalExamination = () => {
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
                      Clinical Examination
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>

              <div className="section-content pb-3">
                <div className="section-item mt-lg-5">
                  <ul
                    role="tablist"
                    className="nav nav-tabs card-header-tabs pt-3 ps-2 bg-info"
                  >
                    {/* <li className="nav-item">
                      <a
                        href="#tab-1"
                        data-bs-toggle="tab"
                        className="nav-link active text-dark fs-6 fw-bold"
                      >
                        Vital Sign
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        href="#tab-2"
                        data-bs-toggle="tab"
                        className="nav-link active text-dark fs-6 fw-bold"
                      >
                        Skin
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-3"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Head, Eyes, Ears, Nose, Throat (HEENT)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-4"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Neck
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-5"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Lymph Nodes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-6"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Respiratory, Thorax & Lungs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-7"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Cardiovascular
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-8"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Gastrointestinal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-9"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Breasts
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-10"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Abdominal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-11"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Genitourinary
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-12"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Rectal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-13"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Peripheral Vascular
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-14"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Neurological
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-15"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Hematological
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-16"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Endocrinal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-17"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Psychological & Psychiatric Illness
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    {/* <div
                      role="tabpanel"
                      id="tab-1"
                      className="tab-pane fade show active py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Vital Sign</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <label className="mb-2">Height (CM)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="CM"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">Weight (KG)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="KG"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">BMI</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nan"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">BP (Right Arm)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="BP (Right Arm)"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">BP (Left Arm)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="BP (Left Arm)"
                              />
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <label className="mb-2">Heart Rate</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Heart Rate"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">O2 Saturation</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="O2 Saturation"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">Respiratory Rate</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Respiratory Rate"
                              />
                            </div>
                            <div className="items">
                              <label className="mb-2">Temperature (Oral)</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Temperature (Oral)"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div
                      role="tabpanel"
                      id="tab-2"
                      className="tab-pane fade show active py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Skin</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No rashes or other changes</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No cyanosis</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No clubbing finger</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No bruises</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-3"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold mb-3">
                            Head, Eyes, Ears, Nose, Throat (HEENT)
                          </p>
                          <ul
                            role="tablist"
                            className="nav nav-tabs card-header-tabs pt-3 ps-2 bg-info"
                          >
                            <li className="nav-item">
                              <a
                                href="#tab-21"
                                data-bs-toggle="tab"
                                className="nav-link active text-dark fs-6 fw-bold"
                              >
                                Head
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-22"
                                data-bs-toggle="tab"
                                className="nav-link text-dark fs-6 fw-bold"
                              >
                                Eyes
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-23"
                                data-bs-toggle="tab"
                                className="nav-link text-dark fs-6 fw-bold"
                              >
                                Ears
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-24"
                                data-bs-toggle="tab"
                                className="nav-link text-dark fs-6 fw-bold"
                              >
                                Nose
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="#tab-25"
                                data-bs-toggle="tab"
                                className="nav-link text-dark fs-6 fw-bold"
                              >
                                Throat (HEENT)
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              id="tab-21"
                              className="tab-pane fade show active py-4"
                              style={{
                                background: "#0dcaf030",
                                paddingLeft: "20px",
                                marginLeft: "-9px",
                                marginRight: "-8px",
                                paddingRight: "20px",
                              }}
                            >
                              <p className="fs-5 fw-bold">Head</p>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                              </div>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Others</label>
                                </div>
                                <div className="items">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="items">
                                  <button className="btn btn-primary">
                                    Add Items
                                  </button>
                                </div>
                              </div>
                              <div className="section-content-table p-2 bg-light">
                                <table className="table table-borderless table-striped">
                                  <thead className="table-primary">
                                    <tr>
                                      <th className="text-center" colSpan="2">
                                        Title
                                      </th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">
                                          <i className="far fa-window-close text-danger"></i>
                                        </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-22"
                              className="tab-pane fade py-4"
                              style={{
                                background: "#0dcaf030",
                                paddingLeft: "20px",
                                marginLeft: "-9px",
                                marginRight: "-8px",
                                paddingRight: "20px",
                              }}
                            >
                              <p className="fs-5 fw-bold">Eyes</p>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                              </div>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Others</label>
                                </div>
                                <div className="items">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="items">
                                  <button className="btn btn-primary">
                                    Add Items
                                  </button>
                                </div>
                              </div>
                              <div className="section-content-table p-2 bg-light">
                                <table className="table table-borderless table-striped">
                                  <thead className="table-primary">
                                    <tr>
                                      <th className="text-center" colSpan="2">
                                        Title
                                      </th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">
                                          <i className="far fa-window-close text-danger"></i>
                                        </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-23"
                              className="tab-pane fade py-4"
                              style={{
                                background: "#0dcaf030",
                                paddingLeft: "20px",
                                marginLeft: "-9px",
                                marginRight: "-8px",
                                paddingRight: "20px",
                              }}
                            >
                              <p className="fs-5 fw-bold">Ears</p>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                              </div>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Others</label>
                                </div>
                                <div className="items">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="items">
                                  <button className="btn btn-primary">
                                    Add Items
                                  </button>
                                </div>
                              </div>
                              <div className="section-content-table p-2 bg-light">
                                <table className="table table-borderless table-striped">
                                  <thead className="table-primary">
                                    <tr>
                                      <th className="text-center" colSpan="2">
                                        Title
                                      </th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">
                                          <i className="far fa-window-close text-danger"></i>
                                        </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-24"
                              className="tab-pane fade py-4"
                              style={{
                                background: "#0dcaf030",
                                paddingLeft: "20px",
                                marginLeft: "-9px",
                                marginRight: "-8px",
                                paddingRight: "20px",
                              }}
                            >
                              <p className="fs-5 fw-bold">Nose</p>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                              </div>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Others</label>
                                </div>
                                <div className="items">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="items">
                                  <button className="btn btn-primary">
                                    Add Items
                                  </button>
                                </div>
                              </div>
                              <div className="section-content-table p-2 bg-light">
                                <table className="table table-borderless table-striped">
                                  <thead className="table-primary">
                                    <tr>
                                      <th className="text-center" colSpan="2">
                                        Title
                                      </th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">
                                          <i className="far fa-window-close text-danger"></i>
                                        </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            <div
                              role="tabpanel"
                              id="tab-25"
                              className="tab-pane fade py-4"
                              style={{
                                background: "#0dcaf030",
                                paddingLeft: "20px",
                                marginLeft: "-9px",
                                marginRight: "-8px",
                                paddingRight: "20px",
                              }}
                            >
                              <p className="fs-5 fw-bold">Throat (HEENT)</p>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Checked Checkbox</label>
                                </div>
                              </div>
                              <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                                <div className="items">
                                  <input
                                    type="checkbox"
                                    className="form-check-inline"
                                  />
                                  <label>Others</label>
                                </div>
                                <div className="items">
                                  <input type="text" className="form-control" />
                                </div>
                                <div className="items">
                                  <button className="btn btn-primary">
                                    Add Items
                                  </button>
                                </div>
                              </div>
                              <div className="section-content-table p-2 bg-light">
                                <table className="table table-borderless table-striped">
                                  <thead className="table-primary">
                                    <tr>
                                      <th className="text-center" colSpan="2">
                                        Title
                                      </th>
                                      <th>Description</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <a href="#">
                                          <i className="far fa-window-close text-danger"></i>
                                        </a>
                                      </td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-4"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Neck</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No lumps</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Goiter</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Pain</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No swollen glands</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-5"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Lymph Nodes</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Small (less than 1 cm)</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Nontender</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Ns bilato axillary or epitrochlear nodes
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Soft and nontender</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Soft</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                And mobile tonsillar and posterior cervical
                                nodeerally
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Several small inguinal nodes bilateral
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-6"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">
                            Respiratory, Thorax & Lungs
                          </p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No cough</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Shortness of breath.</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Thorax symmetric with good excursion
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Breath sounds vesicular with no added sounds
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Wheezing</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Last chest x-ray, 1986, St. Mary&apos;s
                                Hospital; unremarkable
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Lungs resonant</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Diaphragms descend 4 cm bilaterally</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-7"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Cardiovascular</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No Known heart disease or high blood pressure
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No dyspnea</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Chest pain palpitation</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Jugular venous pressure 1 cm above the sternal
                                angle
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Carotid upstrokes brisks</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Apical impulse discrete and tapping</label>
                            </div>

                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                A II/VI medium-pitched midsystolic murmur at the
                                2nd right interspace
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Has never had an electrocardiogram (ECG)
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                With head of examining table raised to 30 degree
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Without bruits.</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Barely palpable in the 5th left interspace
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Good S1, S2; no S3 or S4</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Does not radiate to the neck</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Last blood pressure taken in 1998</label>
                            </div>

                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-8"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Gastrointestinal</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Appetite good</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Vomiting</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Bowel movement about once dial</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No diarrhea or bleeding</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Jaundice</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No nausea</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Indigestion</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Though sometimes has hard stools for 2 to 3 days
                                when especially tense
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No pain</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Gallbladder or liver problems</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-9"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Breasts</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No lumps</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Discharge</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Pain</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Does self-breast exam sporadically</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-10"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Abdominal</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Obese</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Right lower quadrant</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No tenderness or masses Liver span 7 cm in right
                                midclavicular line
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Palpable 1 cm below right costal margin (RCM)
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No costovertebral angle tenderness (CVAT)
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Well-healed scar</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Bowel sounds active</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Edge smooth</label>
                            </div>
                          </div>

                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Spleen and kidneys not felts</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No hernia</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-11"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Genitourinary</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>And poor relaxation</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Mild cystocele at introitus on straining
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Cervix pink</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>And without dischandarge</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Midline</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Not enlarged</label>
                            </div>

                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Pap smear taken</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No cervical or adnexal tendernesExternal
                                genitalia without lesions
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Vaginal mucosa pink</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Parous</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Uterus anterior</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Smooth</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Adnexa not palpated due to obesity as
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Rectovaginal wall intact</label>
                            </div>

                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-12"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Rectal</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Rectal vault without masses</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Negative for occult blood</label>
                            </div>

                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Stool Brown</label>
                            </div>
                          </div>

                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-13"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Peripheral Vascular</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Trace edema at both ankels</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No stasis pigmentation or ulcer</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Moderate varicosities of saphenous veins both
                                lower extremities
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Pulses (2+= brisks, or nornal)</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-14"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Neurological</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Mental status</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Thoughts coherent</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Place</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Cranial Nerves</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Motor</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Strength 5/5 throughout(see p.574 grading
                                system)
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Rapid alternating movements (RAMs)</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Gait</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Pinprick</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Position sense</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>And stereognosis intact</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Reflexes</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Depending upon personal preference</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>As shown below and at right</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>See p</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Tense but alrt and cooperative</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Oriented to person</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>And time</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>II-XII intact</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Good muscle bulk and tone</label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Cerebellar</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Point-to-point movemstableents intact
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Fluid Sensory</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Light touch</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Vibration</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Romberg negativeg</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                Two methods of recording may be used
                              </label>
                            </div>
                          </div>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                A tabular from or a stick picture diagram
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>2+= brisk or normal</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>587 for grading system</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-15"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Hematological</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No easy bleeding</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No anemia</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-16"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">Endocrinal</p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No known thyroid problem or temperature
                                intolerance
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>No symptoms or history of diabetes</label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Sweating average</label>
                            </div>
                          </div>

                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-17"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <div className="section-content pb-3 border-bottom">
                        <div className="section-item mt-3">
                          <p className="fs-6 fw-bold">
                            Psychological & Psychiatric Illness
                          </p>
                          <div className="inner-item d-flex align-items-center justify-content-between mb-3">
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>
                                No history of depression or treatment for
                                psychiatric disorders
                              </label>
                            </div>
                            <div className="items">
                              <input
                                type="checkbox"
                                className="form-check-inline"
                              />
                              <label>Others</label>
                            </div>
                            <div className="items">
                              <input type="text" className="form-control" />
                            </div>
                            <div className="items">
                              <button className="btn btn-primary">
                                Add Items
                              </button>
                            </div>
                          </div>
                          <div className="section-content-table">
                            <table className="table table-borderless table-striped">
                              <thead className="table-primary">
                                <tr>
                                  <th className="text-center" colSpan="2">
                                    Title
                                  </th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">
                                      <i className="far fa-window-close text-danger"></i>
                                    </a>
                                  </td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClinicalExamination;
