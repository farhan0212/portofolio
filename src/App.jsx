import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
