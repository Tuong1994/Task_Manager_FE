import commonEng from "./common";
import dashboardEng from "./dashboard";
import menuEng from "./menu";
import optionsEng from "./options";
import staffEng from "./staff";

const eng = {
  common: commonEng,
  options: optionsEng,
  menu: menuEng,
  dashboard: dashboardEng,
  staff: staffEng,
};

export type LangENG = typeof eng;

export default eng;
