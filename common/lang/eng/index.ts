import authEng from "./auth";
import commonEng from "./common";
import dashboardEng from "./dashboard";
import menuEng from "./menu";
import optionsEng from "./options";
import staffEng from "./staff";
import taskEng from "./task";

const eng = {
  common: commonEng,
  options: optionsEng,
  menu: menuEng,
  dashboard: dashboardEng,
  staff: staffEng,
  task: taskEng,
  auth: authEng,
};

export type LangENG = typeof eng;

export default eng;
