import { getFirestoreClient } from './Firebase';

export const all = async () => {
    const db = getFirestoreClient();
    return await db.collection('restaurants').get();
}

export const vote = async (id, data) => {
    const db = getFirestoreClient();
    return await db.collection('restaurants').doc(id).update(data);

}

export const unique = async (id) => {
    const db = getFirestoreClient();
    return await db.collection('restaurants').doc(id).get();
}
