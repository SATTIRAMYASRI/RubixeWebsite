import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Registration from "./components/Registration";
import FollowUs from "./components/FollowUs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Registration />
      <FollowUs />
    </div>
  );
}
