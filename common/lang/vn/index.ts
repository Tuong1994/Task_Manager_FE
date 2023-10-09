import commonVn from "./common";
import dashboardVn from "./dashboard";
import menuVn from "./menu";
import optionsVn from "./options";
import staffVn from "./staff";

const vn = {
  common: commonVn,
  options: optionsVn,
  menu: menuVn,
  dashboard: dashboardVn,
  staff: staffVn,
};

export type LangVN = typeof vn;

export default vn;
