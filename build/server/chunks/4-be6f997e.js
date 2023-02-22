import { v as videos } from './videos-eb417968.js';
import { e as events } from './events-8c24212a.js';

async function load({ params }) {
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
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-b48dab4e.js')).default;
const file = '_app/immutable/entry/detail-_type_-_id_-page.svelte.316d8daa.mjs';
const universal_id = "src/routes/detail/[type]/[id]/+page.js";
const imports = ["_app/immutable/entry/detail-_type_-_id_-page.svelte.316d8daa.mjs","_app/immutable/chunks/index.1e18a303.mjs","_app/immutable/chunks/HeaderWrapper.dbd84697.mjs","_app/immutable/chunks/Footer.8f8c59d4.mjs","_app/immutable/entry/detail-_type_-_id_-page.js.35953a7e.mjs","_app/immutable/chunks/videos.afcc7e41.mjs","_app/immutable/chunks/events.80bd0170.mjs","_app/immutable/chunks/_page.0eef5ff8.mjs"];
const stylesheets = ["_app/immutable/assets/_page.4f41a766.css","_app/immutable/assets/HeaderWrapper.8652fe75.css","_app/immutable/assets/Footer.cd6963fa.css"];
const fonts = [];

export { component, file, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-be6f997e.js.map
