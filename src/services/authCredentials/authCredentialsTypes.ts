import { AuthCredentials } from '@domain';

export interface AuthCredentialsService {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<unknown>;
  removeCredentials: () => Promise<unknown>;
  isLoading: boolean;
}
