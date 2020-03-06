import { getFirestoreClient } from './Firebase';

export const all = async () => {
    const db = getFirestoreClient();
    return await db.collection('restaurants').orderBy('name', 'desc').get();
}
