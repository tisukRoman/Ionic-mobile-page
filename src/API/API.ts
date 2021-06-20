import db from '../firebase'


export const fetchSavedDate = async () => { // gets data from firebase
    const arr: Array<any> = []; 
    const response = db.collection('consultInfo'); // gets our collection
    const data = await response.get(); // gets data from collection
    data.docs.forEach(item => { // sets documents into 'arr'
        arr.push(item.data());
    });
    return arr[0]; // returns neccessary data 
}


