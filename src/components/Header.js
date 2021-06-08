import { MoonIcon, SunIcon } from '../components/icons';
const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center w-full bg-red-300">
        <img src="vmusic.jpg" className="w-48 h-32" alt="" />
        <div className="text-white px-8 w-72">
          <h1 className="text-2xl">Your favorite tunes</h1>
          <div className="flex justify-end w-full">
            <span className="flex w-full">
              All
              <small className="mx-2">
                <SunIcon />
              </small>
              and
              <small className="mx-2">
                <MoonIcon />
              </small>
              all
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
