import userImage1 from "../../../assets/UserImages/user1.jpg"
import userImage5 from "../../../assets/UserImages/user5.jpg"
import userImage6 from "../../../assets/UserImages/user6.jpg"

const UserCategory = () => {
  return (
    <section className="py-6 text-gray-800">
      <div className="flex flex-col items-center justify-center">
        <p className="p-2 text-sm font-medium text-center uppercase">
          User category
        </p>
        <h1 className="text-3xl font-bold text-center sm:text-3xl mb-5">
          People who manages their tasks
        </h1>
        <div className="flex flex-row flex-wrap-reverse justify-center sm:p-16 mt-8 bg-gray-100">
          {/* first person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage1}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim Hridoy</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* second person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage5}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim</p>
              <p>Frontend Developer</p>
            </div>
          </div>

          {/* first person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage1}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim Hridoy</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* first person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage1}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim Hridoy</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* first person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage5}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim Hridoy</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

          {/* first person */}
          <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-400 text-gray-100">
            <img
              className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
              src={userImage6}
            />
            <div className="flex-1 my-4">
              <p className="text-xl font-semibold">Fazlul Karim Hridoy</p>
              <p>Full Stack Developer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UserCategory;
