import Image from "next/image";
import { useForm } from "react-hook-form";
const ProfilePicture = ({ doctor }) => {
  console.log(doctor, "doctor details");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 border-bottom profile-body ">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4">
              <Image
                height="220"
                width="220"
                src={doctor.image.url}
                className="avatar  rounded-pill shadow mx-auto d-block profile-pic"
                alt=""
              />
            </div>

            <div
              className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0"
              {...register("uploadFile")}
            >
              <h5 className="">Upload your picture</h5>
              <input
                type="file"
                className="form-control"
                placeholder="Upload your Image"
                name="uploadFile"
                required=""
              />
            </div>

            <div className="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
              <input
                type="submit"
                id="submit"
                name="send"
                className="btn btn-primary"
                value="Save changes"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ProfilePicture;
