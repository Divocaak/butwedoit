import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, v as validate_component } from './index-20fc9971.js';

const css$2 = {
  code: "a.svelte-1yl6iir{color:var(--white);--c:var(--yellow);text-decoration:none;background:linear-gradient(90deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200% 100%,\n			linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) 100% no-repeat;-webkit-background-clip:text, padding-box;background-clip:text, padding-box;transition:0.5s}a.svelte-1yl6iir:hover{color:var(--black);--_p:100%}.black-on-white.svelte-1yl6iir{color:var(--black);--c:var(--black);text-decoration:none;background:linear-gradient(90deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200% 100%,\n			linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) 100% no-repeat;-webkit-background-clip:text, padding-box;background-clip:text, padding-box;transition:0.5s}.black-on-white.svelte-1yl6iir:hover{color:var(--yellow);--_p:100%}",
  map: null
};
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { classes = null } = $$props;
  let { blackOnWhite = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.blackOnWhite === void 0 && $$bindings.blackOnWhite && blackOnWhite !== void 0)
    $$bindings.blackOnWhite(blackOnWhite);
  $$result.css.add(css$2);
  return `
<a${add_attribute("href", href, 0)} class="${[
    escape(null_to_empty(classes), true) + " svelte-1yl6iir",
    blackOnWhite ? "black-on-white" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</a>`;
});
const css$1 = {
  code: "#overlay-navbar.svelte-b26e4a{height:10%}#logo.svelte-b26e4a{background-size:contain;background-position:center;background-repeat:no-repeat;background-image:url('/logo.png');position:relative;height:7rem;width:7rem}.inverted.svelte-b26e4a{filter:invert(1);transition:0.5s}.inverted.svelte-b26e4a:hover{filter:invert(0)}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blackOnWhite = false } = $$props;
  if ($$props.blackOnWhite === void 0 && $$bindings.blackOnWhite && blackOnWhite !== void 0)
    $$bindings.blackOnWhite(blackOnWhite);
  $$result.css.add(css$1);
  return `<div id="${"overlay-navbar"}" class="${"d-flex flex-row align-items-center svelte-b26e4a"}"><a href="${"/"}"><div id="${"logo"}" class="${["svelte-b26e4a", blackOnWhite ? "inverted" : ""].join(" ").trim()}"></div></a>
	<div class="${"container-fluid"}"></div>
	${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      href: "/videos",
      classes: "px-1 px-md-3",
      blackOnWhite
    },
    {},
    {
      default: () => {
        return `VIDEOS`;
      }
    }
  )}
	${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      href: "/events",
      classes: "px-1 px-md-3",
      blackOnWhite
    },
    {},
    {
      default: () => {
        return `EVENTS`;
      }
    }
  )}
	${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      href: "/contact",
      classes: "px-1 px-md-3",
      blackOnWhite
    },
    {},
    {
      default: () => {
        return `CONTACT`;
      }
    }
  )}
</div>`;
});
const css = {
  code: ".header-wrapper.svelte-9ogtf5.svelte-9ogtf5{min-height:100vh}.header-wrapper.svelte-9ogtf5 video.svelte-9ogtf5,img.svelte-9ogtf5.svelte-9ogtf5{object-fit:cover;position:fixed;height:100%;width:100%}.header-wrapper.svelte-9ogtf5 .header-overlay.svelte-9ogtf5{z-index:2;width:100%;height:100%;color:var(--white);background-color:rgba(0, 0, 0, 0.5)}.header-wrapper.svelte-9ogtf5 .overlay-content.svelte-9ogtf5{height:90%}.background.svelte-9ogtf5.svelte-9ogtf5{background-color:var(--yellow) !important;color:var(--black) !important}.indexBackground.svelte-9ogtf5.svelte-9ogtf5{opacity:0.5}.fixed.svelte-9ogtf5.svelte-9ogtf5{background-color:var(--yellow);position:fixed;top:0}",
  map: null
};
const HeaderWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { imagePath = null } = $$props;
  let { hideMedia = false } = $$props;
  let { blackOnWhite = false } = $$props;
  let { indexBackground = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.imagePath === void 0 && $$bindings.imagePath && imagePath !== void 0)
    $$bindings.imagePath(imagePath);
  if ($$props.hideMedia === void 0 && $$bindings.hideMedia && hideMedia !== void 0)
    $$bindings.hideMedia(hideMedia);
  if ($$props.blackOnWhite === void 0 && $$bindings.blackOnWhite && blackOnWhite !== void 0)
    $$bindings.blackOnWhite(blackOnWhite);
  if ($$props.indexBackground === void 0 && $$bindings.indexBackground && indexBackground !== void 0)
    $$bindings.indexBackground(indexBackground);
  $$result.css.add(css);
  return `<div class="${["header-wrapper svelte-9ogtf5", !hideMedia ? "fixed" : ""].join(" ").trim()}">${!hideMedia ? `${imagePath == null ? `<video autoplay muted loop class="${"svelte-9ogtf5"}"><source src="${"/reel.mp4"}" type="${"video/mp4"}"></video>` : `<img${add_attribute("src", imagePath, 0)} alt="${"thumbnail"}" class="${["img-fluid svelte-9ogtf5", indexBackground ? "indexBackground" : ""].join(" ").trim()}">`}` : ``}
	<div class="${[
    "header-overlay p-4 svelte-9ogtf5",
    (hideMedia ? "background" : "") + " " + (!blackOnWhite ? "white-on-black" : "") + " " + (blackOnWhite ? "black-on-white" : "") + " " + (!hideMedia ? "fixed" : "")
  ].join(" ").trim()}">${validate_component(Navbar, "Navbar").$$render($$result, { blackOnWhite }, {}, {})}
		${!hideMedia ? `<div class="${"overlay-content d-flex align-items-center svelte-9ogtf5"}"><div class="${"text-center w-100"}"><h1 class="${"display-1 text-uppercase unbounded"}">${escape(title)}</h1>
					${slots.default ? slots.default({}) : ``}</div></div>` : `${slots.default ? slots.default({}) : ``}`}</div>
</div>`;
});

export { HeaderWrapper as H, LinkButton as L };
//# sourceMappingURL=HeaderWrapper-2a5efe78.js.map
