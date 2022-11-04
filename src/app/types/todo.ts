export type Todo = {
  id?: number;
  content?: string;
  completed?: boolean;
};

export type Mode = {
  modeName?: string;
  modeBackground?: string;
};

export type userInfo = {
  userName?: string;
  password?: string;
};
export const StatusFilter = ['all', 'incomplete', 'completed'];

export enum STATUS {
  COMPLETED = 'completed',
  INCOMPLETE = 'incomplete',
  ALL = 'all',
}
