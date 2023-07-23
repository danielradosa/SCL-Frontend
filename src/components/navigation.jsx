import { Link } from "react-router-dom";
import { ReactComponent as Discover } from "./icons/discover.svg";
import { ReactComponent as Feed } from "./icons/feed.svg";
import { ReactComponent as Profile } from "./icons/profile.svg";
import { ReactComponent as Settings } from "./icons/settings.svg";
import { ReactComponent as Bookmarks } from "./icons/bookmarks.svg";

const Navigation = () => {
  const user = JSON.parse(
    localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser")
  );

  const profilePicture = user.profilePicture;
  const userHandle = user.handle;
  const userName = user.username;

  return (
    <div className="navigation fixed">
      <div className="w-72 bg-white p-6 m-6 border-2 border-black">
        <img
          src={profilePicture}
          alt="user_picture"
          className="w-28 m-0 mb-2"
        />
        <div>
          <h1 className="text-black">{userName}</h1>
          <h2 className="text-blue-600">{userHandle}</h2>
        </div>
      </div>

      <div className="w-72 bg-white p-6 mt-6 border-2 border-black relative grid">
        <Link to="/dashboard" className="links ml-0 mt-0">
          <Feed className="ico" />
          News feed
        </Link>
        <Link to="/profile" className="links ml-0 mt-2">
          <Profile className="ico" />
          My Profile
        </Link>
        <Link to="/discover" className="links ml-0 mt-2">
          <Discover className="ico" /> Discover
        </Link>
      </div>

      <div className="w-72 bg-white p-6 mt-6 border-2 border-black relative grid">
        <Link
          to="/bookmarks"
          className="links ml-0 mt-0"
        >
          <Bookmarks className="ico" /> Bookmarks
        </Link>
        <Link to="/settings" className="links ml-0 mt-2">
          <Settings className="ico" />
          Account settings
        </Link>
      </div>
    </div>
  );
};

export { Navigation };
