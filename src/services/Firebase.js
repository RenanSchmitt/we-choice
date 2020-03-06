import firebase from 'firebase/app';
// Required for side-effects: https://firebase.google.com/docs/firestore/quickstart?authuser=0#set_up_your_development_environment
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';
import config from '../config';

firebase.initializeApp(config.firebase)

export const getClient = () => firebase;

export const getFirestoreClient = () => firebase.firestore();
export const getFunctionsClient = () => firebase.functions();
