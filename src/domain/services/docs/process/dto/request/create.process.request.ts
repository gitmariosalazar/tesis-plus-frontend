
export interface CreateProcessRequest {
  processNumber: string;
  value: number;
  category: string;
  description: string;
  timeExecution: string;
  processObject: string;
  emailManager: string;
  fullNameManager: string;
  phoneManager: string;
  statusProcess: number;
  isActive: boolean;
  idEntity: number;
  idStatus: number;
}