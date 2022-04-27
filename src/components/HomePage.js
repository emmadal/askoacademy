import { memo } from "react";
import Presentation from "./Presentation";
import About from "./About";
import BrowseCourse from "./BrowseCourse";
import BecomeInstructor from "./BecomeInstructor";
import Layout from "./Layout";

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
