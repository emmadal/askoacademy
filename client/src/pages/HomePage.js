import { memo } from "react";
import Presentation from "../components/Presentation";
import About from "../components/About";
import BrowseCourse from "../components/BrowseCourse";
import BecomeInstructor from "../components/BecomeInstructor";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Presentation />
      <About />
      <BrowseCourse />
      <BecomeInstructor />
    </Layout>
  );
};

export default memo(Home);
