

import { db } from './../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";


export const getPlayers = async () => {
    let players = [];
    const data = await getDocs(
        collection(db, 'players/')
    );

    //Agregar cada doc al array docs
    data.forEach((childSnapshot) => {
        var id = childSnapshot.id;
        var data = childSnapshot.data();
        players.push({
            id: id,
            name: data.name,
            description: data.description,
            image: data.image,
            tags: data.tags,
            source: data.source,
            visit: data.visit,
        });
    });
    return players;
};

export const getPodcasts = async () => {
    let podcasts = [];
    const data = await getDocs(
        collection(db, 'podcasts/')
    );

    //Agregar cada doc al array docs
    data.forEach((childSnapshot) => {
        var id = childSnapshot.id;
        var data = childSnapshot.data();
        podcasts.push({
            id: id,
            name: data.name,
            description: data.description,
            source: data.source,
        });
    });
    return podcasts;
};