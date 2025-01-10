// Import the functions you need from the SDKs you need
import { error } from "console";
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFny-5zgo4c2Qr5baIBeiYXF60jx4adE",
  authDomain: "gitsby-1cc90.firebaseapp.com",
  projectId: "gitsby-1cc90",
  storageBucket: "gitsby-1cc90.firebasestorage.app",
  messagingSenderId: "774358379402",
  appId: "1:774358379402:web:f44cee2628c6848f3ff673",
  measurementId: "G-8LYSVF5K5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file: File, setProgress?: (progress : number) => void) {
    return new Promise((resolve, reject) => {
        try {
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on('state_changed', snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                if(setProgress) setProgress(progress)
                    switch(snapshot.state){
                        case 'paused':
                            console.log('upload is paused'); break;
                        case 'running':
                            console.log('upload is running'); break;
                    }
            }, error => {
                reject(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
                    resolve(downloadUrl as string)
                })
            })
        }
        catch(error){
            console.log(error)
            reject(error)
        }
    })
}