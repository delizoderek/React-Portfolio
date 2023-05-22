import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import CanvasBackground from "./Components/elements/CanvasBackground";
import Root from "./Routes/Root"
import ResumeViewer from "./Routes/ResumeViewer"
import "normalize.css";
import "./styles/app.global.scss";
// import "./styles/App.css";

export const WindowContext = React.createContext();

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
		},
		{
			path: "resume",
			element: <ResumeViewer />,
		},
	]);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  }, []);

  return (
    <WindowContext.Provider value={windowDimensions}>
        <CanvasBackground />
				<RouterProvider router={router}/>
    </WindowContext.Provider>
  );
}

export default App;
