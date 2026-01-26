import { User, UserAPI } from '../User';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string; // 'bearer'
    token: string; // 'MQ.TvZUUcZb8lHvqvzi8QDZfduSVFK8zwXf0sKtH2AR-F3Ha65lpuJFGp0qTNtr';
    refreshToken: string;
    expires_at: string; // '2023-10-01T09:12:59.043+00:00';
  };
  user: UserAPI;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface ForgotPasswordParam {
  email: string;
}
