import { c as create_ssr_component } from './index-20fc9971.js';
import 'bootstrap/dist/js/bootstrap.min.js';

const css = {
  code: ":root{--black:black;--white:white;--yellow:#f9d204}html{scroll-behavior:smooth}body{background-color:var(--black);color:var(--white)}.montserrat{font-family:'Montserrat', sans-serif}.roboto{font-family:'Roboto', sans-serif}.unbounded{font-family:'Unbounded', cursive}.black-on-white{color:var(--black);background-color:var(--white)}.white-on-black{color:var(--white);background-color:var(--black)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-c2yt4n_START --><link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin><link href="${"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500&family=Unbounded:wght@400;500;700;800&display=swap"}" rel="${"stylesheet"}"><!-- HEAD_svelte-c2yt4n_END -->`, ""}

${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6d30b7bc.js.map
