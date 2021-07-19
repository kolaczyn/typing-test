type RankingData = { wpm: number; when: string; username: string };
export const rankingData: RankingData[] = [
  {
    wpm: 120,
    when: '1h',
    username: 'Satania',
  },
  {
    wpm: 89,
    when: '3h',
    username: 'Gabriel',
  },
  {
    wpm: 70,
    when: '5h',
    username: 'Vigne',
  },
  {
    wpm: 68,
    when: '5d',
    username: 'Raphi',
  },
  {
    wpm: 59,
    when: '2d',
    username: 'Megumin',
  },
  {
    wpm: 55,
    when: '4d',
    username: 'Aqua',
  },
  {
    wpm: 50,
    when: '1h',
    username: 'Darkness',
  },
  {
    wpm: 30,
    when: '30m',
    username: 'Emilia',
  },
  {
    wpm: 23,
    when: '10h',
    username: 'Rem',
  },
  {
    wpm: 10,
    when: '9h',
    username: 'Ram',
  },
];

export const rankingDataLabels = ['Username', 'WPM', 'When'];
