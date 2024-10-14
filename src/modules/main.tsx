import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation, 
  useNavigate,
} from "react-router-dom";
import { MAIN_ROUTES } from "./routes";

export function Main() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Routes>
        {MAIN_ROUTES?.map((route, idx) => {
          const Guard: any = route.guard || React.Fragment;
          const Layout: any = route.layout || React.Fragment;
          const fallbackLayout = route.fallback;
          if (route.fallBackPath || fallbackLayout) {
            return (
              <Route
                element={fallbackLayout}
                key={`routes-${idx}-${route.fallBackPath}`}
                path={route.fallBackPath}
              >
                <Route
                  element={
                    <Guard>
                      <Layout>{route.element}</Layout>
                    </Guard>
                  }
                  key={`routes-${idx}`}
                  path={route.path}
                />
              </Route>
            );
          }

          return (
            <Route
              element={
                <Guard>
                  <Layout>{route.element}</Layout>
                </Guard>
              }
              key={`routes-${idx}`}
              path={route.path}
            />
          );
        })}

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}
