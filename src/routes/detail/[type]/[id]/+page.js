import videos from "$lib/content/videos.json";
import events from "$lib/content/events.json";

export async function load({ params }) {
    const type = params.type;
    const id = params.id;

    switch (type) {
        case "videos":
            return videos[id];
        // TODO resolve
        /* case "events":{
            return reels[id];
            break;
        } */
    }
};