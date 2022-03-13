import Link from "next/link";

const SubjectiveInformation = (props) => {
  return (
    <>
      <div className="patient-subjective-info">
        <div className="mt-4 ms-3 pt-3">
          <h5 className="mt-3 mb-1 text-center">
            PATIENT&apos;S SUBJECTIVE INFORMATION
          </h5>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/chief-complains?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">
                  Cheif Complaints with Duration
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/general-information?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">
                  General Information
                </a>
              </Link>
            </div>
          </div>

          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/social-history?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">
                  Social History & Living Environment
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/employment-status?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">Employment Status</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/medical-history?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">Medical History</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/functional-status?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">Functional Status</a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/family-history?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">
                  Family Medical History
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link
                href={`/form/past-medical-records?appointmentId=${props.data?.id}`}
              >
                <a className="btn-custom btn btn-success">
                  Past Medical Records
                </a>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="patient-user-panel-btn mt-3">
              <Link href={`/form/vitals?appointmentId=${props.data?.id}`}>
                <a className="btn-custom btn btn-success">
                  Vital Signs & Statistic
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectiveInformation;
