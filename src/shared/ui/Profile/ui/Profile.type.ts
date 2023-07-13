export interface ProfileProps {
  nickname: string;

  avatar?: string;

  lvl: number;
  score: number;

  joinDate: string;

  loading?: boolean;
  className?: string;
}
