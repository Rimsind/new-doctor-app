import Image from "next/image";
import { useForm } from "react-hook-form";
const ProfilePicture = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form>
        <div className="p-4 border-bottom profile-body ">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4">
              <Image
                height="220"
                width="220"
                src="/images/doctors/doc.png"
                className="avatar  rounded-pill shadow mx-auto d-block profile-pic"
                alt=""
              />
            </div>

            <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
              <h5 className="">Upload your picture</h5>
              <input
                type="file"
                className="form-control"
                placeholder="Upload your Image"
                name="file"
                required=""
              />
            </div>

            <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
              <a href="#" className="btn btn-success">
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfilePicture;
