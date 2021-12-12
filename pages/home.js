import { useAuth } from "../context";

const Home = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <h5 className="mb-0">Dashboard</h5>

      {/* <div className="row">
        <AppointmentCard />
        <AppointmentCard />
        <AppointmentCard />
      </div> */}
    </>
  );
};

export default Home;
