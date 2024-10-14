import { PATHS } from "@modules/paths";
import { ClientHomePage } from "./client/home/home.page";

export const MAIN_ROUTES: any[] = [
  {path: PATHS.home, element: <ClientHomePage/>},
  {path: PATHS.login, element: <div>Login</div>},
  {path: PATHS.signup, element: <div>Signup</div>},
];
// <------------------------------------ NOTE: Do not format code ------------------------------------?
