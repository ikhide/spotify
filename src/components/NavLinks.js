import { Link } from "react-router-dom";
const NavLink = ({ icon, text }) => {
  return (
    <div className="flex justify-center w-full items-center px-2">
      <div className="hover:bg-indigo-500 rounded-2xl w-full p-4">
        <Link
          className="flex justify-between text-center"
          to={text !== "Discover" ? `/${text}` : "/"}
        >
          {icon}
          <span className="text-gray-200 lg:flex md:flex hidden">{text}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavLink;
