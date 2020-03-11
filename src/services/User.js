import { getFirestoreClient } from './Firebase';

export const getUsers = async () => {
    const db = getFirestoreClient();
    return await db.collection('users').get();
}

export const getUser = async (username) => {
    const db = getFirestoreClient();
    return await db.collection('users').where('email', "==", username).get();
}

export const updatePassword = async (id, data) => {
    const db = getFirestoreClient();
    return await db.collection('users').doc(id).update(data);
}

export const voteValidation = async (id, data) => {
    const db = getFirestoreClient();
    return await db.collection('users').doc(id).update(data);
}

