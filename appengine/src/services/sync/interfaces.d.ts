import { AxiosInstance } from 'axios';
import { StakingNetworkInfoService } from './staking-network-info';
import { ValidatorsInfoService } from './validators-info';

export interface IServices {
  networkInfoService?: StakingNetworkInfoService;
  validatorsInfoService?: ValidatorsInfoService;
}

export interface IBaseServiceParams {
  BLOCKCHAIN_SERVER: string;
  apiClient: AxiosInstance;
  globalHistory: string;
  historyCollection: string;
  updateDocument: () => any;
  getGlobalDataWithLimit: () => any;
  getCollectionDataWithLimit: () => any;
  services: IServices;
}
