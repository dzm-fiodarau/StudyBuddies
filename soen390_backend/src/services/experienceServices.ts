import firebase from "firebase";
//import { string } from "yup";
import "firebase/storage";
import { Experience, /*experience_schema*/ } from "../models/Experience";

const db = firebase.firestore();

export const findExperienceWithID = async (experienceID: string) => {
    try {
        var snapShot = await db.collection("experiences").doc(experienceID).get();
    } catch (error) {
        console.log(error);
        throw error;
    }
    return snapShot.data();
};
export const storeExperience = async (experience: Experience) => {
    try {
        var document = await db.collection("experiences").add({
            atPresent: experience.atPresent,
            startDate: experience.startDate,
            endDate: experience.endDate,
            company: experience.company,
            position: experience.position,
            type: experience.type,
            ownerID: experience.ownerID
        });
        await document.update({ experienceID: document.id });
        console.log("Experience successfully stored with id: " + document.id);
    } catch (error) {
        console.log(error);
        throw error;
    }
    return document.id;
};