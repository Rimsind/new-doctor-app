import { useRouter } from "next/router";
import FormCloseBtn from "../../components/FormCloseBtn";
import {
  Skin,
  Head,
  Eyes,
  Ears,
  Nose,
  Throat,
  Neck,
  Neurological,
  Psychological,
  Endocrinal,
  Abdominal,
  Rectal,
  PeripheralVascular,
  Hematological,
  Gastrointestinal,
  Cardiovascular,
  LymphNodes,
  Genitourinary,
  Breasts,
  Respiratory,
} from "../../components/medicineForm";
import axios from "axios";
import { apiUrl } from "../../config/api";
import { useAuth } from "../../context";
import useSWR from "swr";

const ClinicalExamination = () => {
  const { appointmentId } = useRouter().query;
  const { auth } = useAuth();
  const { data: appointmentDetails } = useSWR(
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
                        href="#tab-21"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
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
                        Throat
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
                        href="#tab-51"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Genitourinary
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-52"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Rectal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-53"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Peripheral Vascular
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-54"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Neurological
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-55"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Hematological
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-56"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Endocrinal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#tab-57"
                        data-bs-toggle="tab"
                        className="nav-link text-dark fs-6 fw-bold"
                      >
                        Psychological & Psychiatric Illness
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
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
                      <Skin data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-21"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Head data={appointmentDetails?.medicine} />
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
                      <Eyes data={appointmentDetails?.medicine} />
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
                      <Ears data={appointmentDetails?.medicine} />
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
                      <Nose data={appointmentDetails?.medicine} />
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
                      <Throat data={appointmentDetails?.medicine} />
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
                      <Neck data={appointmentDetails?.medicine} />
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
                      <LymphNodes data={appointmentDetails?.medicine} />
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
                      <Respiratory data={appointmentDetails?.medicine} />
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
                      <Cardiovascular data={appointmentDetails?.medicine} />
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
                      <Gastrointestinal data={appointmentDetails?.medicine} />
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
                      <Breasts data={appointmentDetails?.medicine} />
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
                      <Abdominal data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-51"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Genitourinary data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-52"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Rectal data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-53"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <PeripheralVascular data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-54"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Neurological data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-55"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Hematological data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-56"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Endocrinal data={appointmentDetails?.medicine} />
                    </div>
                    <div
                      role="tabpanel"
                      id="tab-57"
                      className="tab-pane fade py-4"
                      style={{
                        background: "#0dcaf030",
                        paddingLeft: "20px",
                        marginLeft: "-9px",
                        marginRight: "-8px",
                        paddingRight: "20px",
                      }}
                    >
                      <Psychological data={appointmentDetails?.medicine} />
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
