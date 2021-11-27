import Link from "next/link";

const Pagination = (props) => {
  return (
    <>
      <div className="gen-form-btn">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <ul className="pagination mb-0 list-unstyled">
              <li className={props.name1}>
                <Link href="/physical-asst-form/form1">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">1</a>
                </Link>
              </li>
              <li className={props.name2}>
                <Link href="/physical-asst-form/form2">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">2</a>
                </Link>
              </li>
              <li className={props.name3}>
                <Link href="/physical-asst-form/form3">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">3</a>
                </Link>
              </li>
              <li className={props.name4}>
                <Link href="/physical-asst-form/form4">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">4</a>
                </Link>
              </li>
              <li className={props.name5}>
                <Link href="/physical-asst-form/form5">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">5</a>
                </Link>
              </li>
              <li className={props.name6}>
                <Link href="/physical-asst-form/form6">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">6</a>
                </Link>
              </li>
              <li className={props.name7}>
                <Link href="/physical-asst-form/form7">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">7</a>
                </Link>
              </li>
              <li className={props.name8}>
                <Link href="/physical-asst-form/form8">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">8</a>
                </Link>
              </li>
              <li className={props.name9}>
                <Link href="/physical-asst-form/form9">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">9</a>
                </Link>
              </li>
              <li className={props.name10}>
                <Link href="/physical-asst-form/form10">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">10</a>
                </Link>
              </li>
              <li className={props.name11}>
                <Link href="/physical-asst-form/form11">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">11</a>
                </Link>
              </li>
              <li className={props.name12}>
                <Link href="/physical-asst-form/form12">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">12</a>
                </Link>
              </li>
              <li className={props.name13}>
                <Link href="/physical-asst-form/form13">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">13</a>
                </Link>
              </li>
              <li className={props.name14}>
                <Link href="/physical-asst-form/form14">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">14</a>
                </Link>
              </li>
              <li className={props.name15}>
                <Link href="/physical-asst-form/form15">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">15</a>
                </Link>
              </li>
              <li className={props.name16}>
                <Link href="/physical-asst-form/form16">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">16</a>
                </Link>
              </li>
              <li className={props.name17}>
                <Link href="/physical-asst-form/form17">
                  <a className="pe-3 ps-3 pt-2 pb-2 border">17</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
