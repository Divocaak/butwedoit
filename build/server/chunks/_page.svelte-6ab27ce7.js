import { c as create_ssr_component, v as validate_component } from './index-20fc9971.js';
import { H as HeaderWrapper } from './HeaderWrapper-2a5efe78.js';

const css = {
  code: ".btn-wrapper.svelte-1okyva5.svelte-1okyva5{position:relative;overflow:hidden;text-align:left}.btn-wrapper.svelte-1okyva5 img.svelte-1okyva5{transition:0.5s}.btn-wrapper.svelte-1okyva5:hover img.svelte-1okyva5{filter:blur(5px) brightness(0.5);transform:scaleY(1.1)}.btn-wrapper.svelte-1okyva5>div.svelte-1okyva5{cursor:pointer;position:absolute;bottom:0;width:93.8%;height:100%}.note-holder.svelte-1okyva5.svelte-1okyva5{position:absolute;width:40%;bottom:1em}.rights-text.svelte-1okyva5.svelte-1okyva5{font-size:0.7em;position:absolute;bottom:1rem;left:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1rfs2v1_START -->${$$result.title = `<title>BUTWEDOIT</title>`, ""}<!-- HEAD_svelte-1rfs2v1_END -->`, ""}

${validate_component(HeaderWrapper, "HeaderWrapper").$$render(
    $$result,
    {
      imagePath: "/shapes/bg.png",
      indexBackground: true
    },
    {},
    {
      default: () => {
        return `<div class="${"container"}"><div class="${"row gx-md-5"}"><div class="${"col-12 col-md-6 btn-wrapper svelte-1okyva5"}"><img src="${"/shapes/btn_a.png"}" alt="${"background"}" class="${"img-fluid svelte-1okyva5"}">
				<div class="${"unbounded pt-5 svelte-1okyva5"}"><h1 class="${"display-1 text-center"}">EVENT</h1>
					<h1 class="${"display-1 text-end me-5"}">—TY</h1>
					<div class="${"note-holder roboto d-none d-md-block svelte-1okyva5"}" style="${"right: 0em;"}"><p>Jsme specialisté na hybridní<br>
							eventy popřípadě přesuneme<br>
							Vaši akci kompletně do onlinu.
						</p></div></div></div>
			<div class="${"col-12 col-md-6 btn-wrapper pt-5 pt-md-0 svelte-1okyva5"}"><img src="${"/shapes/btn_b.png"}" alt="${"background"}" class="${"img-fluid svelte-1okyva5"}">
				<div class="${"unbounded pt-5 svelte-1okyva5"}"><h1 class="${"display-1 pt-5 pt-md-0 ps-5"}">VI—</h1>
					<h1 class="${"display-1"}" style="${"position:relative; left:20%;"}">DEA</h1>
					<div class="${"note-holder roboto d-none d-md-block svelte-1okyva5"}" style="${"left: 2em;"}"><p>Tvorba videa na míru, natáčíme<br>
							produktová, průmyslová videa<br>
							a taky propagační videa.
						</p></div></div></div></div></div>
	
	<p class="${"roboto fw-light rights-text svelte-1okyva5"}">© butwedoit. All rights reserved.</p>`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6ab27ce7.js.map
