import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { routerConfig } from "./config/routerConfig";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {routerConfig.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={
              <item.layout>
                <item.component></item.component>
              </item.layout>
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
