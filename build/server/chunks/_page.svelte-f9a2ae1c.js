import { c as create_ssr_component, v as validate_component, h as each, e as escape } from './index-20fc9971.js';
import { H as HeaderWrapper } from './HeaderWrapper-2a5efe78.js';
import { C as ContentWrapper, F as Footer } from './Footer-3b127061.js';
import { e as events } from './events-8c24212a.js';

const EventCategory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label, descMain, desc } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.descMain === void 0 && $$bindings.descMain && descMain !== void 0)
    $$bindings.descMain(descMain);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  return `<div class="${"py-5 mt-5"}"><h2 class="${"text-center display-4 text-uppercase unbounded"}">${escape(label)}</h2>
	<div class="${"row m-md-5 mt-5"}"><div class="${"col-12 col-md-6"}"><p class="${"lead px-5 unbounded"}">${escape(descMain)}</p></div>
		<div class="${"col-12 col-md-6"}"><p class="${"lead px-5 roboto"}">${escape(desc)}</p></div></div></div>`;
});
const css$2 = {
  code: ".thumbnail.svelte-a5zckb{background-size:cover;background-position:center;background-repeat:no-repeat}",
  map: null
};
const ImageCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { filename } = $$props;
  if ($$props.filename === void 0 && $$bindings.filename && filename !== void 0)
    $$bindings.filename(filename);
  $$result.css.add(css$2);
  return `<div class="${"col-12 col-md-6 thumbnail p-0 m-0 svelte-a5zckb"}" style="${"background-image: url('/images/thumbnails/" + escape(filename, true) + "');"}"></div>`;
});
const css$1 = {
  code: "a.svelte-1st8m6i{font-family:'Unbounded', cursive;text-decoration:none;color:var(--black);border-radius:0.5em;padding:0.5em 1rem 0.5em 1em;border:2px solid var(--yellow);transition:all ease-in-out 0.25s}a.svelte-1st8m6i:hover{color:var(--white);background-color:var(--yellow);padding:0.7em 1.2em 0.7em 1.2em}",
  map: null
};
const EventMoreButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventType, id } = $$props;
  if ($$props.eventType === void 0 && $$bindings.eventType && eventType !== void 0)
    $$bindings.eventType(eventType);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<a href="${"/detail/events/" + escape(eventType, true) + "x" + escape(id, true)}" class="${"svelte-1st8m6i"}">MORE
	<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"32"}" height="${"16"}" fill="${"currentColor"}" class="${"bi bi-arrow-right ms-2"}" viewBox="${"0 4 16 8"}"><path fill-rule="${"evenodd"}" d="${"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}"></path></svg>
</a>`;
});
const css = {
  code: ".projectHolder.svelte-5qhzjm{position:relative;width:100vw;height:50vh;background-color:var(--white);color:var(--black)}.thumbnail.svelte-5qhzjm{position:relative;height:33vh;width:100%;background-size:cover;background-position:center;background-repeat:no-repeat}",
  map: null
};
const Event = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { odd, thumbnail, label, desc, eventType, id } = $$props;
  if ($$props.odd === void 0 && $$bindings.odd && odd !== void 0)
    $$bindings.odd(odd);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.eventType === void 0 && $$bindings.eventType && eventType !== void 0)
    $$bindings.eventType(eventType);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `<div class="${"row projectHolder p-0 m-0 d-none d-md-flex my-5 svelte-5qhzjm"}">${odd ? `${validate_component(ImageCard, "ImageCard").$$render($$result, { filename: thumbnail }, {}, {})}` : ``}

	<div class="${"col-12 col-md-6 d-flex align-items-center"}"><div class="${"w-100 px-3 px-md-5"}"><h2 class="${"unbounded"}">${escape(label)}</h2>
			<p class="${"lead roboto"}">${escape(desc)}</p>
			${validate_component(EventMoreButton, "EventMoreButton").$$render($$result, { eventType, id }, {}, {})}</div></div>

	${!odd ? `${validate_component(ImageCard, "ImageCard").$$render($$result, { filename: thumbnail }, {}, {})}` : ``}</div>

<div class="${"d-block d-md-none mb-5"}"><div class="${"thumbnail svelte-5qhzjm"}" style="${"background-image: url('/images/thumbnails/" + escape(thumbnail, true) + "');"}"></div>
	<div class="${"pt-2 px-3"}"><h2 class="${"unbounded"}">${escape(label)}</h2>
		<p class="${"lead roboto"}">${escape(desc)}</p>
		${validate_component(EventMoreButton, "EventMoreButton").$$render($$result, { eventType, id }, {}, {})}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-94c7y1_START -->${$$result.title = `<title>EVENTS</title>`, ""}<!-- HEAD_svelte-94c7y1_END -->`, ""}

${validate_component(HeaderWrapper, "HeaderWrapper").$$render($$result, { title: "events" }, {}, {
    default: () => {
      return `<p class="${"lead unbounded"}">Lorem ipsum
	</p>`;
    }
  })}
${validate_component(ContentWrapper, "ContentWrapper").$$render($$result, { blackOnWhite: true }, {}, {
    default: () => {
      return `${each(events, (category, ci) => {
        return `${validate_component(EventCategory, "EventCategory").$$render(
          $$result,
          {
            label: category.label,
            descMain: category.descMain,
            desc: category.desc
          },
          {},
          {}
        )}
		${each(category.projects, (event, i) => {
          return `${validate_component(Event, "Event").$$render(
            $$result,
            {
              odd: i % 2 > 0,
              thumbnail: event.thumbnail,
              label: event.label,
              desc: event.shortDesc,
              eventType: ci,
              id: i
            },
            {},
            {}
          )}`;
        })}`;
      })}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f9a2ae1c.js.map
