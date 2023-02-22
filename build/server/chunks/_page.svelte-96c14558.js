import { c as create_ssr_component, v as validate_component, h as each, e as escape, d as add_attribute } from './index-20fc9971.js';
import { H as HeaderWrapper, L as LinkButton } from './HeaderWrapper-2a5efe78.js';
import { C as ContentWrapper, F as Footer } from './Footer-3b127061.js';
import { v as videos } from './videos-eb417968.js';
import 'jquery';
import 'slick-carousel';

const css$3 = {
  code: ".card-background.svelte-1ohxj8w.svelte-1ohxj8w{background-size:cover;background-position:center;background-repeat:no-repeat;cursor:pointer;pointer-events:auto;color:var(--black)}.card-background-small.svelte-1ohxj8w.svelte-1ohxj8w{height:46vh}.card-background.svelte-1ohxj8w .card-content-holder.svelte-1ohxj8w,.card-content-holder-small.svelte-1ohxj8w.svelte-1ohxj8w{pointer-events:none;position:relative;height:50vh}.card-background.svelte-1ohxj8w .card-content-holder.svelte-1ohxj8w{transition:all 0.5s;opacity:0;background-color:var(--yellow)}.card-background.svelte-1ohxj8w:hover .card-content-holder.svelte-1ohxj8w{opacity:0.9}.card-background-effect.svelte-1ohxj8w.svelte-1ohxj8w{transition:all 0.5s;filter:saturate(0.7)}.card-background-effect.svelte-1ohxj8w.svelte-1ohxj8w:hover{transform:scale(1.1);filter:saturate(1)}.card-background-effect-wrapper.svelte-1ohxj8w.svelte-1ohxj8w{max-width:100%;max-height:100%;overflow:hidden}span.svelte-1ohxj8w.svelte-1ohxj8w{background-color:var(--yellow)}",
  map: null
};
const VideoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { last, label, shortDesc, thumbnail } = $$props;
  let { onClick = () => {
  } } = $$props;
  if ($$props.last === void 0 && $$bindings.last && last !== void 0)
    $$bindings.last(last);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.shortDesc === void 0 && $$bindings.shortDesc && shortDesc !== void 0)
    $$bindings.shortDesc(shortDesc);
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$3);
  return `<div class="${escape(last, true) + " col-12 p-0 videoCard svelte-1ohxj8w"}" tabindex="${"0"}" role="${"button"}"><div class="${"card-background d-none d-md-flex svelte-1ohxj8w"}" style="${"background-image: url('/images/thumbnails/" + escape(thumbnail, true) + "');"}"><div class="${"card-content-holder d-flex align-items-center w-100 svelte-1ohxj8w"}"><div class="${"text-center w-100"}"><h2 class="${"unbounded"}">${escape(label)}</h2>
				<p class="${"lead roboto"}">${escape(shortDesc)}</p></div></div></div>
	<div class="${"card-background card-background-small d-block d-md-none svelte-1ohxj8w"}" style="${"background-image: url('/images/thumbnails/" + escape(thumbnail, true) + "');"}"><div class="${"card-content-holder-small pt-2 px-3 svelte-1ohxj8w"}"><h2><span class="${"p-2 lh-base unbounded svelte-1ohxj8w"}">${escape(label)}</span></h2>
			<p class="${"lead roboto"}"><span class="${"p-2 lh-base svelte-1ohxj8w"}">${escape(shortDesc)}</span></p></div></div>
</div>`;
});
const css$2 = {
  code: ".reel-card.svelte-kgzr91 .card-background .card-content-holder.svelte-kgzr91,.card-content-holder-small.svelte-kgzr91.svelte-kgzr91{pointer-events:none;position:relative;height:80vh}.card-background.svelte-kgzr91.svelte-kgzr91{background-size:cover;background-position:center;background-repeat:no-repeat;cursor:pointer;pointer-events:auto;color:var(--black)}.card-background.svelte-kgzr91 .card-content-holder.svelte-kgzr91,.card-content-holder-small.svelte-kgzr91.svelte-kgzr91{pointer-events:none;position:relative;height:50vh}.card-background.svelte-kgzr91 .card-content-holder.svelte-kgzr91{background-color:var(--yellow);transition:all 0.5s;opacity:0}.card-background.svelte-kgzr91:hover .card-content-holder.svelte-kgzr91{opacity:0.9}span.svelte-kgzr91.svelte-kgzr91{background-color:var(--yellow)}.slick-slide{transform:scaleY(0.95);transition:0.5s}.slick-current{transform:scaleY(1)}",
  map: null
};
const ReelCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumbnail, label, shortDesc, onClick } = $$props;
  if ($$props.thumbnail === void 0 && $$bindings.thumbnail && thumbnail !== void 0)
    $$bindings.thumbnail(thumbnail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.shortDesc === void 0 && $$bindings.shortDesc && shortDesc !== void 0)
    $$bindings.shortDesc(shortDesc);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  $$result.css.add(css$2);
  return `<div class="${"reel-card svelte-kgzr91"}" tabindex="${"0"}" role="${"button"}"><div class="${"card-background svelte-kgzr91"}" style="${"background-image: url('/images/thumbnails/" + escape(thumbnail, true) + "');"}"><div class="${"card-content-holder d-none d-md-flex align-items-center svelte-kgzr91"}"><div class="${"text-center w-100 mx-2"}"><h2 class="${"unbounded"}">${escape(label)}</h2>
				<p class="${"lead roboto"}">${escape(shortDesc)}</p></div></div>
		<div class="${"card-content-holder-small d-block d-md-none pt-2 ps-1 svelte-kgzr91"}"><h2 class="${"unbounded"}"><span class="${"p-2 svelte-kgzr91"}">${escape(label)}</span></h2>
			${shortDesc != null ? `<p class="${"lead roboto"}"><span class="${"p-2 svelte-kgzr91"}">${escape(shortDesc)}</span></p>` : ``}</div></div>
</div>`;
});
const css$1 = {
  code: ".modal.svelte-jw33ou{display:block}.modal-video-wrapper.svelte-jw33ou{background-color:transparent;border:none;color:var(--white)}.modal-backdrop.svelte-jw33ou{opacity:0.6 !important}.btn-bigger.svelte-jw33ou{font-size:2rem}",
  map: null
};
const VideoModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { showBackdrop = true } = $$props;
  let { onClosed } = $$props;
  let { label, desc, src = null } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.showBackdrop === void 0 && $$bindings.showBackdrop && showBackdrop !== void 0)
    $$bindings.showBackdrop(showBackdrop);
  if ($$props.onClosed === void 0 && $$bindings.onClosed && onClosed !== void 0)
    $$bindings.onClosed(onClosed);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$1);
  return `${open ? `<div class="${"modal svelte-jw33ou"}" id="${"videoPlayer"}" tabindex="${"-1"}" aria-labelledby="${"videoPlayerLabel"}"${add_attribute("aria-hidden", false, 0)}><div class="${"modal-dialog modal-dialog-centered modal-lg"}"><div class="${"modal-content modal-video-wrapper text-center svelte-jw33ou"}"><h2 class="${"display-1 unbounded"}">${label != null ? `${escape(label)}` : ``}
					<button data-bs-dismiss="${"modal"}" class="${"btn text-light btn-bigger svelte-jw33ou"}"><i class="${"bi bi-x-circle ps-2"}"></i></button></h2>
				<div class="${"ratio ratio-16x9"}">${src != null ? `<iframe id="${"playerIframe"}"${add_attribute("src", src, 0)} allowfullscreen allow="${"autoplay"}" title="${"video player"}"></iframe>` : ``}</div>
				${desc != null ? `<p class="${"lead pt-3 roboto"}">${escape(desc)}</p>` : ``}</div></div></div>
	${showBackdrop ? `<div class="${"modal-backdrop show svelte-jw33ou"}"></div>` : ``}` : ``}`;
});
const reels = [
  {
    label: "ADIDAS",
    shortDesc: "NMD V3 - create new paths 1/3",
    thumbnail: "reels/adidas1.png",
    youtube: "rY012xTgagY"
  },
  {
    label: "REDBULL X ALEX CHOUPENITCH",
    shortDesc: "Coins",
    thumbnail: "reels/redbull.png",
    youtube: "5o9W0fysGnU"
  },
  {
    label: "MILION VŮNÍ",
    shortDesc: "Floristka",
    thumbnail: "reels/florist.png",
    youtube: "pGLrBsriLfg"
  },
  {
    label: "SAMSUNG X LUKÁŠ ZACHARA",
    shortDesc: "",
    thumbnail: "reels/samsung.png",
    youtube: ""
  },
  {
    label: "BAILEYS X ALEX SEDLÁČKOVÁ",
    shortDesc: "",
    thumbnail: "reels/baileys.png",
    youtube: "LqIl6ivxW70"
  },
  {
    label: "ADIDAS",
    shortDesc: "NMD V3 - create new paths 2/3",
    thumbnail: "reels/adidas2.png",
    youtube: "zGMhGgyXDqU"
  }
];
const css = {
  code: ".slick-dots{position:absolute;top:-30px;left:50%;transform:translate(-50%, -50%);display:flex}.slick-dots button{display:block;width:5em;height:0.5em;border:none;background-color:#171717;transition:0.4s}li.slick-active button{background-color:var(--yellow)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showPopup = false;
  let label = null;
  let desc = null;
  let ytKey = null;
  function onShowPopup(newLabel, newDesc, newYtKey = null, id) {
    if (newYtKey != null) {
      showPopup = true;
      label = newLabel;
      desc = newDesc;
      ytKey = newYtKey;
    } else {
      window.location.href = "/detail/videos/" + id;
    }
  }
  const onClosePopup = () => {
    showPopup = false;
    label = null;
    desc = null;
    ytKey = null;
  };
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-8big57_START --><link rel="${"stylesheet"}" type="${"text/css"}" href="${"//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"}"><script src="${"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"}"><\/script>${$$result.title = `<title>VIDEOS</title>`, ""}<!-- HEAD_svelte-8big57_END -->`, ""}

${validate_component(HeaderWrapper, "HeaderWrapper").$$render($$result, { title: "videos" }, {}, {
    default: () => {
      return `<p class="${"lead unbounded"}">Check out ${validate_component(LinkButton, "LinkButton").$$render($$result, { href: "#reels" }, {}, {
        default: () => {
          return `Reels`;
        }
      })} too
	</p>`;
    }
  })}
${validate_component(ContentWrapper, "ContentWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"row"}">${each(videos, (video, i) => {
        return `${validate_component(VideoCard, "Card").$$render(
          $$result,
          {
            last: !(++i === videos.length && i % 2 != 0) ? "col-md-6 " : "",
            label: video.label,
            shortDesc: video.shortDesc,
            thumbnail: video.thumbnail,
            onClick: () => onShowPopup(video.label, video.shortDesc, video.youtube, i - 1)
          },
          {},
          {}
        )}`;
      })}</div>`;
    }
  })}
${validate_component(ContentWrapper, "ContentWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div id="${"reels"}" class="${"text-center py-5"}"><h1 class="${"unbounded display-1"}">REELS</h1>
		<p class="${"lead unbounded"}">9:16 / IG REELS / YOUTUBE SHORTS</p></div>
	<div id="${"reelCarousel"}">${each(reels, (reel) => {
        return `${validate_component(ReelCard, "ReelCard").$$render(
          $$result,
          {
            thumbnail: reel.thumbnail,
            label: reel.label,
            shortDesc: reel.shortDesc,
            onClick: () => onShowPopup(reel.label, reel.shortDesc, reel.youtube)
          },
          {},
          {}
        )}`;
      })}</div>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(VideoModal, "VideoModal").$$render(
    $$result,
    {
      open: showPopup,
      onClosed: () => onClosePopup(),
      label,
      desc,
      src: "https://www.youtube.com/embed/" + ytKey + "?autoplay=1&mute=1&showinfo=0&controls=1&html5=1"
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-96c14558.js.map
