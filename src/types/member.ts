export interface Member {
  name: string;
  role: string;
  profile?: string;  // 프로필 이미지는 이모지 또는 이미지 URL
  status?: string;   // 팀 내 상태 (ex. "UI 작업 중")
}
