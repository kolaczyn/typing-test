import { Stats } from '../../customTypes';
import app from '../../firebase';

const fetchRankingData = async (): Promise<Stats[]> => {
  const userScoreRef = app.firestore().collection('userScore');
  const result = userScoreRef.orderBy('netWpm', 'desc').limit(10);
  const out = (await result.get()).docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  })) as Stats[];
  return out;
};
export default fetchRankingData;
