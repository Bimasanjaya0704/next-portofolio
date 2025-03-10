import { Metadata } from "next";
import WorkPage from "./WorkPage";

export const metadata: Metadata = {
  title: "Bima Sanjaya | Work",
  description:
    "Hi! my name is Bima Sanjaya - Explore the various projects and achievements I've worked on as a Software Engineer. This page showcases a range of my work, including software development projects, innovative solutions, and key contributions to the tech industry.",
};
const Work = () => {
  return <WorkPage />;
};

export default Work;
