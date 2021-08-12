import { Stats } from '../customTypes';
import app from '../firebase';

const fetchUserLatestScore = async (): Promise<Stats[]> => {
  const userId = app.auth().currentUser?.uid;
  if (userId === undefined) {
    return [];
  }
  const scoresRef = app.firestore().collection('userScore');
  const out = await scoresRef
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .limit(10)
    .get();
  const data = out.docs.map(doc => ({ ...doc.data(), id: doc.id } as Stats));
  return data;
};
export default fetchUserLatestScore;
