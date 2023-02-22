import { c as create_ssr_component, v as validate_component } from './index-20fc9971.js';
import { L as LinkButton } from './HeaderWrapper-2a5efe78.js';

const css$1 = {
  code: ".content-wrapper.svelte-u32qul{position:relative;top:100vh;min-height:100vh}",
  map: null
};
const ContentWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blackOnWhite = false } = $$props;
  if ($$props.blackOnWhite === void 0 && $$bindings.blackOnWhite && blackOnWhite !== void 0)
    $$bindings.blackOnWhite(blackOnWhite);
  $$result.css.add(css$1);
  return `<div class="${[
    "content-wrapper svelte-u32qul",
    (!blackOnWhite ? "white-on-black" : "") + " " + (blackOnWhite ? "black-on-white" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const css = {
  code: ".footer-wrapper.svelte-r94hje{position:relative;min-height:50vh;background-color:var(--yellow);color:var(--black)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"footer-wrapper mx-5 p-5 mt-5 black-on-white svelte-r94hje"}"><div class="${"row"}"><div class="${"col-12 col-md-4 montserrat"}">${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      href: "mailto:hello@butwedoit.cz",
      blackOnWhite: true
    },
    {},
    {
      default: () => {
        return `<b>hello@butwedoit.cz</b>`;
      }
    }
  )}<br>
			${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      href: "tel:+420682637637",
      blackOnWhite: true
    },
    {},
    {
      default: () => {
        return `<b>+420 682 637 637</b>`;
      }
    }
  )}
			<p class="${"py-5"}">Jana Štursy 2408/37<br>
				37010, České Budějovice
			</p>
			<p>IČO: 14025132</p></div>
		<div class="${"col-12 col-md-8"}"><div class="${"row"}"><div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div></div>
			<div class="${"row"}"><div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div>
				<div class="${"col"}"><img class="${"img-fluid"}" src="${"/logos/placeholder.png"}" alt="${"logo"}"></div></div>
			<p class="${"roboto text-end pt-5 mt-md-5"}">© butwedoit, All rights reserved.</p></div></div>
</div>`;
});

export { ContentWrapper as C, Footer as F };
//# sourceMappingURL=Footer-3b127061.js.map
