import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Config = {
  apiKey: "AIzaSyD-pHOdueMMBvWQy1RX394QeOalE8PQTfo",
  authDomain: "askoacademy.firebaseapp.com",
  projectId: "askoacademy",
  storageBucket: "askoacademy.appspot.com",
  messagingSenderId: "565811525437",
  appId: "1:565811525437:web:4fd9eb589a9df1c2757754",
  measurementId: "G-G5P49Y3X8H",
};

// Initialize Firebase, storage and firestore
const app = initializeApp(Config);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage();
const storageRef = ref(storage);
const dataRef = collection(db, "institutions");

// Function to upload file in the storage of firebase and return the url of file
export const uploadFile = async (file) => {
  const imagesRef = ref(storageRef, `images/${file?.name}`);
  const r = await uploadBytes(imagesRef, file);
  if (r) {
    // Create a reference from a Google Cloud Storage URI
    const fileURL = await getDownloadURL(imagesRef);
    // return the file URL uploaded
    return fileURL;
  }
};

// Add a new institution
export const addNewInstitution = async (data) => {
  const itemCollection = doc(dataRef);
  await setDoc(doc(db, "institutions", itemCollection.id), {
    id: itemCollection.id,
    ...data,
  });
};

// Delete institution
export const deleteInstitution = async (docId) => {
  await deleteDoc(doc(db, "institutions", docId));
};

// Get all institutions
export const getInstitutions = async () => {
  let data = [];
  const req = await getDocs(dataRef);
  req.docs.map((i) => data.push(i.data()));
  return data;
};

// Update institution
export const updateInstitution = async (docId, data) => {
  const docRef = doc(db, "institutions", docId);
  await updateDoc(docRef, { ...data });
};
