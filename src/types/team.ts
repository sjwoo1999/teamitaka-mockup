export type TeamStatus = "모집중" | "모집마감";

export interface Team {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: TeamStatus;
}
