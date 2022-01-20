import Link from "next/link";
const Rehab = (props) => {
  return (
    <>
      <div className="patient-subjective-info">
        <div className="mt-4 ms-3 pt-3">
          <h5 className="mt-3 mb-1" style={{ textAlign: "center" }}>
            DOCTOR ASSESSMENT (REHAB)
          </h5>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/history-of-present-illness?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-info">
                  History Of Present Illness
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/rehab-form/physical-asst-form/form1?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-info">Clinical Examintation</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link href={`/form/assesment?appointmentId=${props.data?.id}`}>
                <a className="btn-custom btn btn-info">Assesment</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/e-prescription?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-info">E-Prescription</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rehab;
