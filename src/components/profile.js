const Profile = ({ src, text }) => {
  return (
    <div className="flex justify-center my-10 text-gray-200">
      <div>
        <div className="flex justify-center">
          <div className="">
            <img
              src={src}
              alt=""
              className="lg:h-24 lg:w-24 md:h-24 md:w-24 w-10 h-10 rounded-full"
            />
          </div>
        </div>

        <span className="lg:flex md:flex hidden text-gray-200">{text}</span>
      </div>
    </div>
  );
};

export default Profile;
