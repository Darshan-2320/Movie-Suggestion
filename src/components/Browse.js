import Header from "./Header";
import Maincontainer from "./Maincontainer";
import Secondary from "./Secondary";
import usePopular from "../utils/Hooks/usePopular";
import useNowplaying from "../utils/Hooks/useNowplaying";
import useToprated from "../utils/Hooks/useToprated";
import useUpcoming from "../utils/Hooks/useUpcoming";

const Browse = () => {
  usePopular();
  useNowplaying();
  useToprated();
  useUpcoming();
  return (
    <div>
        <Header />
        <Maincontainer />
        <Secondary />
    </div>

  );
};

export default Browse;
