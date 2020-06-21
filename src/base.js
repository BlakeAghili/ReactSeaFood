import Rebase from 're-base'
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQEfvtFf0MbHdFrF1DtPWtrq34i_kTb-g",
    authDomain: "food-of-the-day-9d57e.firebaseapp.com",
    databaseURL: "https://food-of-the-day-9d57e.firebaseio.com"
    });

const base = Rebase.createClass(firebaseApp.database());

// a named export
export {firebaseApp};

// default export
export default base;
