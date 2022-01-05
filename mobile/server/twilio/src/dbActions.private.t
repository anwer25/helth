import { initializeApp } from 'firebase/app';
import {getMessaging, getToken} from "firebase/messaging";
import { getAnalytics } from "firebase/analytics";

class dbActions {
    public messaging: any;
    private readonly firebaseConfig: object
    private readonly app:any;
    constructor() {
        this.firebaseConfig = {
            apiKey: "AIzaSyCh1bZAC95qYSW2u6H0ZjRV9qBltGs608M",
            authDomain: "helthapp-e8dcf.firebaseapp.com",
            databaseURL: "https://helthapp-e8dcf-default-rtdb.firebaseio.com",
            projectId: "helthapp-e8dcf",
            storageBucket: "helthapp-e8dcf.appspot.com",
            messagingSenderId: "430124001949",
            appId: "1:430124001949:web:8e17853e85d09f42180274",
            measurementId: "G-XQKS4ZDXJD"
        };
        // Initialize Firebase
        this.app = initializeApp(this.firebaseConfig);

    }
    /*
    public async setData(): Promise<void>{
        const db = this.init.firestore()
        const collection = db.collection('users')
        const doc = await collection.set({
            test:"test",
            test2: "test2"
        }).then((writeResult: Object)=>{
            console.log(writeResult)
        }).catch((error: Error)=>{
            console.log(error)
        })
    }*/

    public async cloudMessaging(): Promise<void>{
        const messaging = getMessaging()
        const token = await getToken(messaging, {vapidKey:"BELo9HfeChCjBYOmuZ5OBL5kSdos6hbEwuFVkonv3kkaHa0H-penDc8cNpNmyzb5kRDue1CdetO4Se1s3qww6SE"}).then(currentToken=>{
            if(currentToken){
                console.log(currentToken)
            }else{
                console.log('No registration token available. Request permission to generate one.')
            }
        }).catch((e)=>{console.error(e)})
    }

}


export default dbActions

/*const db  = fs.firestore()
const usersDb =  db.collection('patient')
const data = usersDb.doc()

const setData = async ()=>{
    await data.set({
        test: "test",
        test2: "test3"
    }).then((writeResult)=>{
        console.log(writeResult)
    }).catch((error)=>{
        console.error(error)
    })
}

export default setData
 */
