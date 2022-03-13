import Link from "next/link";

const Pagination = (props) => {
  return (
    <>
      <div className="gen-form-btn">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="table-responsive">
              <ul className="pagination mb-0 list-unstyled">
                <li className={props.class1}>
                  <Link
                    href={`/form/chief-complains?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">1</a>
                  </Link>
                </li>
                <li className={props.class2}>
                  <Link
                    href={`/form/general-information?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">2</a>
                  </Link>
                </li>
                <li className={props.class3}>
                  <Link href={`/form/social-history?appointmentId=${props.id}`}>
                    <a className="pe-3 ps-3 pt-2 pb-2 border">3</a>
                  </Link>
                </li>
                <li className={props.class4}>
                  <Link
                    href={`/form/employment-status?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">4</a>
                  </Link>
                </li>
                <li className={props.class5}>
                  <Link
                    href={`/form/medical-history?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">5</a>
                  </Link>
                </li>
                <li className={props.class6}>
                  <Link
                    href={`/form/functional-status?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">6</a>
                  </Link>
                </li>
                <li className={props.class7}>
                  <Link href={`/form/family-history?appointmentId=${props.id}`}>
                    <a className="pe-3 ps-3 pt-2 pb-2 border">7</a>
                  </Link>
                </li>
                <li className={props.class8}>
                  <Link
                    href={`/form/past-medical-records?appointmentId=${props.id}`}
                  >
                    <a className="pe-3 ps-3 pt-2 pb-2 border">8</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
