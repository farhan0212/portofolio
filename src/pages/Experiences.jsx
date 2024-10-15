import Experience from "./Experience.json";

import Navbar from "../components/Navbar";

function Experiences() {
  return (
    <>
      <Navbar />
      {Experience.map((exp, index) => {
        return (
          <div key={index}>
            <div className="flex justify-between font-semibold text-xl mb-4">
              <div className="">
                {exp.Company} <br />
                {exp.Position}
              </div>
              {exp.Duration}
            </div>
            {exp.Responsibilities.map((job, index) => {
              return (
                <li key={index} className="tracking-wider mb-4">
                  {job}
                </li>
              );
            })}
            <hr className="my-4" />
          </div>
        );
      })}
    </>
  );
}

export default Experiences;
