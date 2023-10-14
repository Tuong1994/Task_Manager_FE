import { Staff } from "./staff";
import { Tag } from "./tags";

export enum ETaskStatus {
  UNDO = 1,
  DOING = 2,
  FINISHED = 3,
}

export type Task = {
  id?: string;
  title: string;
  content: string;
  status: ETaskStatus;
  tags?: Tag[];
  assignBy?: Staff | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
