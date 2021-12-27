import Pagination2 from "../../../components/Pagination2";
import FormCloseBtn from "../../../components/FormCloseBtn";
import {
  IdentifiedProblem,
  LongTermGoal,
  ShortTermGoal,
  TreatmentPlan,
} from "../../../components/AssestmentForm/index";
import { useRouter } from "next/router";
const form11 = () => {
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
                      Manual Muscle Strength And Range Of Motion Assessment
                    </h3>
                  </div>
                </div>
                <FormCloseBtn id={appointmentId} />
              </div>
              <div>
                <div className="gen-form-table mt-4">
                  <table className="table table-bordered border-dark">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>WNL Value</th>
                      <th>WFL Value</th>

                      <th>Range Of Motion Score</th>
                      <th>Strength</th>
                    </tr>

                    <tr>
                      <td rowSpan="6" style={{ width: "70px" }}>
                        HIP
                      </td>

                      <td>
                        <p>Flexion / Flexors</p>
                      </td>
                      <td>0-120</td>
                      <td>0-120</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Extension / Extensors</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Abduction / Abductors</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Adduction / Adductors</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>External Rotation / External Rotators</p>
                      </td>
                      <td>0-45</td>
                      <td>0-45</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>Internal Rotation / Internal Rotators</p>
                      </td>
                      <td>0-30</td>
                      <td>0-30</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td rowSpan="3" style={{ width: "70px" }}>
                        KNEE
                      </td>

                      <td>
                        <p>Flexion</p>
                      </td>
                      <td>0-145</td>
                      <td>0-145</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>Extension </p>
                      </td>
                      <td>145-0</td>
                      <td>145-0</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>STRAIGHT LEG RAISE</p>
                      </td>
                      <td>0-90</td>
                      <td>0-90</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td rowSpan="4" style={{ width: "70px" }}>
                        ANKLE
                      </td>

                      <td>
                        <p>DORSIFLEXION/FLEXORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>PLANTERFLEXION/FLEXORS</p>
                      </td>
                      <td>0-50</td>
                      <td>0-50</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>INVERSION/INVERTORS</p>
                      </td>
                      <td>0-15</td>
                      <td>0-15</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>EVERSION/EVERTORS</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="6" style={{ width: "70px" }}>
                        CERVICAL
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>40-70</td>
                      <td>40-70</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>60-80</td>
                      <td>60-80</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>40-50</td>
                      <td>40-50</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>70-90</td>
                      <td>70-90</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="7" style={{ width: "70px" }}>
                        THORACIC
                      </td>

                      <td>
                        <p> FLEXION / FLEXORS</p>
                      </td>
                      <td>20-30</td>
                      <td>20-30</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>EXTENSION / EXTENSORS</p>
                      </td>
                      <td>25-35</td>
                      <td>25-35</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>20-25</td>
                      <td>20-25</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>5-10</td>
                      <td>5-10</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>KYPOSIS POSTURE</p>
                      </td>
                      <td>30-40</td>
                      <td>30-40</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td rowSpan="11" style={{ width: "70px" }}>
                        LUMBAR
                      </td>

                      <td>
                        <p> SACRAL INCLINATION ANGLE</p>
                      </td>
                      <td>15-30</td>
                      <td>15-30</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>STANDING LORDOSIS</p>
                      </td>
                      <td>25-40</td>
                      <td>25-40</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <p>STANDING HIP FLEXION</p>
                      </td>
                      <td>45-65</td>
                      <td>45-65</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>FLEXION (AMA method)</p>
                      </td>
                      <td>40-75</td>
                      <td>40-75</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>EXTENSION (AMA method)</p>
                      </td>
                      <td>20-35</td>
                      <td>20-35</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>FLEXION (curve angle method)</p>
                      </td>
                      <td>0-20</td>
                      <td>0-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>EXTENSION (curve angle method)</p>
                      </td>
                      <td>60-75</td>
                      <td>60-75</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (LEFT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>SIDE FLEXION / SIDE FLEXORS (RIGHT)</p>
                      </td>
                      <td>15-35</td>
                      <td>15-35</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (LEFT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>ROTATION / ROTATORS (RIGHT)</p>
                      </td>
                      <td>10-20</td>
                      <td>10-20</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Text Box"
                        />
                      </td>
                      <td>
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                        >
                          <option selected>Select</option>
                          <option value="1">0</option>
                          <option value="2">1</option>
                          <option value="3">1+</option>
                          <option value="3">2-</option>
                          <option value="3">2</option>
                          <option value="3">2+</option>
                          <option value="3">3-</option>
                          <option value="3">3</option>
                          <option value="3">3+</option>
                          <option value="3">4-</option>
                          <option value="3">4</option>
                          <option value="3">4+</option>
                          <option value="3">5</option>
                        </select>
                      </td>
                    </tr>
                  </table>
                </div>

                <IdentifiedProblem />
                <ShortTermGoal />
                <LongTermGoal />
                <TreatmentPlan />
              </div>
            </div>
          </div>
          <Pagination2 name11="active" id={appointmentId} />
        </div>
      </div>
    </>
  );
};

export default form11;
