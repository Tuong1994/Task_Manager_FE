import authVn from "./auth";
import commonVn from "./common";
import dashboardVn from "./dashboard";
import menuVn from "./menu";
import optionsVn from "./options";
import staffVn from "./staff";
import taskVn from "./task";

const vn = {
  common: commonVn,
  options: optionsVn,
  menu: menuVn,
  dashboard: dashboardVn,
  staff: staffVn,
  task: taskVn,
  auth: authVn,
};

export type LangVN = typeof vn;

export default vn;
