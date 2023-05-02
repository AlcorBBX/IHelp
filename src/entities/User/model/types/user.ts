export interface User {
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
}
export interface UserState {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string | null;
}
