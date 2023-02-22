import { c as create_ssr_component, v as validate_component, e as escape, h as each, d as add_attribute } from './index-20fc9971.js';
import { H as HeaderWrapper } from './HeaderWrapper-2a5efe78.js';
import { C as ContentWrapper, F as Footer } from './Footer-3b127061.js';

const css = {
  code: ".gal-cont.svelte-f7w5bk.svelte-f7w5bk{display:flex;flex-wrap:wrap;padding:0 4px}.gal-col.svelte-f7w5bk.svelte-f7w5bk{flex:33%;max-width:33%;padding:0 4px}.gal-col.svelte-f7w5bk img.svelte-f7w5bk{margin-top:8px;vertical-align:middle;width:100%}@media screen and (max-width: 800px){.gal-col.svelte-f7w5bk.svelte-f7w5bk{flex:100%;max-width:100%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let imgs = Array.from(Array(3), () => new Array());
  let currIndex = 0;
  data.gallery.forEach((element) => {
    imgs[currIndex].push(element);
    currIndex = currIndex == 2 ? 0 : currIndex + 1;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${validate_component(HeaderWrapper, "HeaderWrapper").$$render(
    $$result,
    {
      title: data.label,
      imagePath: "/images/thumbnails/" + data.thumbnail
    },
    {},
    {}
  )}
${validate_component(ContentWrapper, "ContentWrapper").$$render($$result, { blackOnWhite: true }, {}, {
    default: () => {
      return `<div class="${"text-center"}"><p class="${"lead roboto my-5 pt-5"}">${escape(data.detailLongDesc)}</p></div>
	<div class="${"gal-cont px-md-5 mx-md-5 svelte-f7w5bk"}">
		${each(imgs, (galCol) => {
        return `<div class="${"gal-col svelte-f7w5bk"}">${each(galCol, (img) => {
          return `<img src="${"/images/" + escape(img, true)}"${add_attribute("alt", img, 0)} class="${"svelte-f7w5bk"}">`;
        })}
			</div>`;
      })}</div>
	
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b48dab4e.js.map
