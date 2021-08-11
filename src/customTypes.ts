export type Stats = {
  keystrokes: number;
  accuracy: number;
  grossWpm: number;
  netWpm: number;
  id: string;
  userMail: string;
  createdAt: number;
  userId: string;
};

export type RankingData = {
  wpm: number;
  when: string;
  username: string;
  id: string;
};
