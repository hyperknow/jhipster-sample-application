import { IJob } from 'app/shared/model//job.model';

export interface ITask {
  id?: number;
  title?: string;
  description?: string;
  jobs?: IJob[];
}

export const defaultValue: Readonly<ITask> = {};
