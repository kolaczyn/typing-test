import { RankingData, Stats } from '../../customTypes';
import { format } from 'timeago.js';

const firebaseDataToTableData = (stats: Stats[]): RankingData[] => {
  return stats.map(stat => ({
    wpm: stat.netWpm,
    when: format(new Date(stat.createdAt)),
    username: stat.userMail,
    id: stat.id,
  }));
};
export default firebaseDataToTableData;
