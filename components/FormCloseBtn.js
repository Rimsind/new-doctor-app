import Link from "next/link";

const FormCloseBtn = (props) => {
  return (
    <>
      <div className="col-md-2">
        <div className="gen-form-close-btn">
          <Link href={`/diagnosis?appointmentId=${props.id}`}>
            <a className="btn btn-icon btn-danger m-1"> X</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FormCloseBtn;
