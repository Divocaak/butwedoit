import videos from "$lib/content/videos.json";
import events from "$lib/content/events.json";

export async function load({ params }) {
    const type = params.type;
    const id = params.id;

    switch (type) {
        case "videos":
            return videos[id];
        case "events": {
            let ids = id.split("x");
            return events[ids[0]].projects[ids[1]];
        }
    }
};