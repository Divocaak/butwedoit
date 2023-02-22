import { c as create_ssr_component, v as validate_component } from './index-20fc9971.js';
import { H as HeaderWrapper, L as LinkButton } from './HeaderWrapper-2a5efe78.js';

const css = {
  code: ".spacer.svelte-1dpfdxa{position:relative;height:25vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12dvyqw_START -->${$$result.title = `<title>CONTACT</title>`, ""}<!-- HEAD_svelte-12dvyqw_END -->`, ""}

${validate_component(HeaderWrapper, "HeaderWrapper").$$render($$result, { hideMedia: true, blackOnWhite: true }, {}, {
    default: () => {
      return `<div class="${"m-5 p-5 montserrat"}"><div class="${"row"}"><div class="${"col-12 col-md-6"}"><h1>Petr Vančata</h1>
				<p>Lorem ipsum</p>
				${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          href: "tel:+420721343006",
          classes: "me-5",
          blackOnWhite: true
        },
        {},
        {
          default: () => {
            return `<i class="${"bi bi-telephone-fill pe-2"}"></i>+420 721 343 006
				`;
          }
        }
      )}
				${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          href: "mailto:petr@butwedoit.cz",
          blackOnWhite: true
        },
        {},
        {
          default: () => {
            return `<i class="${"bi bi-envelope pe-2"}"></i>petr@butwedoit.cz
				`;
          }
        }
      )}</div>
			<div class="${"col-12 col-md-6 pt-5 pt-md-0"}"><h1>Jindřich Soukal</h1>
				<p>Lorem ipsum</p>
				${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          href: "tel:+420608267367",
          classes: "me-5",
          blackOnWhite: true
        },
        {},
        {
          default: () => {
            return `<i class="${"bi bi-telephone-fill pe-2"}"></i>+420 608 267 367
				`;
          }
        }
      )}
				${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          href: "mailto:jindrich@butwedoit.cz",
          blackOnWhite: true
        },
        {},
        {
          default: () => {
            return `<i class="${"bi bi-envelope pe-2"}"></i>jindrich@butwedoit.cz
				`;
          }
        }
      )}</div></div>
		<div class="${"spacer d-none d-md-block svelte-1dpfdxa"}"></div>
		<div class="${"row pt-5 pt-md-0"}"><div class="${"col-12 col-md-3"}"><h3>Adresa sídla</h3></div>
			<div class="${"col-12 col-md-3"}"><p>Jana Štursy 2408/37</p>
				<p>37010, České Budějovice</p></div>
			<div class="${"col-12 col-md-3"}"><p>but we do it s.r.o.</p>
				<p>IČO 14025132</p></div>
			<div class="${"col-3 d-none d-md-block"}"></div></div>
		
		<p class="${"roboto fw-light text-end pt-5 mt-5"}">© butwedoit. All rights reserved.</p></div>`;
    }
  })}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3d9960ed.js.map
