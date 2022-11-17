export interface UserStateProps {
  users: UserProfile[];
  pageCount: number;
  currentPage: number;
  error: object | string | null;
}

export interface UserProfile {
  id: number;
  email: string;
}
