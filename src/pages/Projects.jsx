import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";

const List = ({ children }) => {
  return (
    <span className="border-gray-500 border px-2 py-1 mr-2 rounded-full">
      {children}
    </span>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
};

function Projects() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center font-extrabold text-4xl tracking-wide my-8">
        Projects
      </div>
      <Card className="hover:scale-105 duration-150">
        <a
          href="https://get-quotes-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer">
          <img
            src="src/assets/Screenshot from 2024-10-25 19-27-13.png"
            className="object-center"
          />
          <CardHeader>
            <CardTitle>Get Api Portoflio</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <List>React</List>
            <List>Tailwind</List>
            <List>Vite</List>
            <List>Vercel</List>
          </CardContent>
        </a>
      </Card>
    </>
  );
}

export default Projects;
