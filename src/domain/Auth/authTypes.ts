import { User, UserAPI } from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'bearer'
    token: string; // 'MQ.TvZUUcZb8lHvqvzi8QDZfduSVFK8zwXf0sKtH2AR-F3Ha65lpuJFGp0qTNtr';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}
