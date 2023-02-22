const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/events/aboutEurope/1.jpg","images/events/aboutEurope/2.jpg","images/events/aboutEurope/3.jpg","images/events/aboutEurope/4.jpg","images/events/aboutEurope/5.jpg","images/events/aboutEurope/6.jpg","images/events/aboutEurope/7.jpg","images/events/aboutEurope/8.jpg","images/events/aboutEurope/9.jpg","images/events/berlin/1.jpg","images/events/berlin/10.jpg","images/events/berlin/11.jpg","images/events/berlin/12.jpg","images/events/berlin/13.jpg","images/events/berlin/2.jpg","images/events/berlin/3.jpg","images/events/berlin/4.jpg","images/events/berlin/5.jpg","images/events/berlin/6.jpg","images/events/berlin/7.jpg","images/events/berlin/8.jpg","images/events/berlin/9.jpg","images/events/comManagement/1.jpg","images/events/comManagement/10.jpg","images/events/comManagement/11.jpg","images/events/comManagement/12.jpg","images/events/comManagement/13.jpg","images/events/comManagement/14.jpg","images/events/comManagement/15.jpg","images/events/comManagement/16.jpg","images/events/comManagement/17.jpg","images/events/comManagement/18.jpg","images/events/comManagement/19.jpg","images/events/comManagement/2.jpg","images/events/comManagement/20.jpg","images/events/comManagement/21.jpg","images/events/comManagement/3.jpg","images/events/comManagement/4.jpg","images/events/comManagement/5.jpg","images/events/comManagement/6.jpg","images/events/comManagement/7.jpg","images/events/comManagement/8.jpg","images/events/comManagement/9.jpg","images/events/czechCrunch/1.jpg","images/events/czechCrunch/2.jpg","images/events/czechCrunch/3.jpg","images/events/czechCrunch/4.jpg","images/events/czechCrunch/5.jpg","images/events/czechCrunch/6.jpg","images/events/czechCrunch/7.jpg","images/events/czechCrunch/8.jpg","images/events/hackathon/1.jpg","images/events/hackathon/10.jpg","images/events/hackathon/2.jpg","images/events/hackathon/3.jpg","images/events/hackathon/4.jpg","images/events/hackathon/5.jpg","images/events/hackathon/6.jpg","images/events/hackathon/7.jpg","images/events/hackathon/8.jpg","images/events/hackathon/9.jpg","images/events/majales/1.jpg","images/events/majales/10.jpg","images/events/majales/11.jpg","images/events/majales/12.jpg","images/events/majales/13.jpg","images/events/majales/14.jpg","images/events/majales/15.jpg","images/events/majales/16.jpg","images/events/majales/17.jpg","images/events/majales/18.jpg","images/events/majales/19.jpg","images/events/majales/2.jpg","images/events/majales/20.jpg","images/events/majales/21.jpg","images/events/majales/22.jpg","images/events/majales/23.jpg","images/events/majales/24.jpg","images/events/majales/25.jpg","images/events/majales/26.jpg","images/events/majales/27.jpg","images/events/majales/28.jpg","images/events/majales/29.jpg","images/events/majales/3.jpg","images/events/majales/4.jpg","images/events/majales/5.jpg","images/events/majales/6.jpg","images/events/majales/7.jpg","images/events/majales/8.jpg","images/events/majales/9.jpg","images/events/makerfaire/1.jpg","images/events/makerfaire/10.jpg","images/events/makerfaire/11.jpg","images/events/makerfaire/12.jpg","images/events/makerfaire/13.jpg","images/events/makerfaire/14.jpg","images/events/makerfaire/15.jpg","images/events/makerfaire/16.jpg","images/events/makerfaire/2.jpg","images/events/makerfaire/3.jpg","images/events/makerfaire/4.jpg","images/events/makerfaire/5.jpg","images/events/makerfaire/6.jpg","images/events/makerfaire/7.jpg","images/events/makerfaire/8.jpg","images/events/makerfaire/9.jpg","images/events/nekonference/1.jpg","images/events/nekonference/10.jpg","images/events/nekonference/11.jpg","images/events/nekonference/12.jpg","images/events/nekonference/13.jpg","images/events/nekonference/14.jpg","images/events/nekonference/15.jpg","images/events/nekonference/16.jpg","images/events/nekonference/2.jpg","images/events/nekonference/3.jpg","images/events/nekonference/4.jpg","images/events/nekonference/5.jpg","images/events/nekonference/6.jpg","images/events/nekonference/7.jpg","images/events/nekonference/8.jpg","images/events/nekonference/9.jpg","images/events/tedx/1.jpg","images/events/tedx/10.jpg","images/events/tedx/11.jpg","images/events/tedx/12.jpg","images/events/tedx/2.jpg","images/events/tedx/3.jpg","images/events/tedx/4.jpg","images/events/tedx/5.jpg","images/events/tedx/6.jpg","images/events/tedx/7.jpg","images/events/tedx/8.jpg","images/events/tedx/9.jpg","images/thumbnails/events/aboutEurope.jpg","images/thumbnails/events/berlin.jpg","images/thumbnails/events/comManagement.jpg","images/thumbnails/events/czechCrunch.jpeg","images/thumbnails/events/hackathon.jpg","images/thumbnails/events/majales.jpg","images/thumbnails/events/makerfaire.png","images/thumbnails/events/nekonference.jpg","images/thumbnails/events/tedx.jpeg","images/thumbnails/events/x.jpg","images/thumbnails/reels/adidas1.png","images/thumbnails/reels/adidas2.png","images/thumbnails/reels/baileys.png","images/thumbnails/reels/florist.png","images/thumbnails/reels/redbull.png","images/thumbnails/reels/samsung.png","images/thumbnails/vids/autosalon.png","images/thumbnails/vids/bakalar.png","images/thumbnails/vids/berlinConference.jpg","images/thumbnails/vids/cervenyKriz.png","images/thumbnails/vids/food.jpg","images/thumbnails/vids/hbo.png","images/thumbnails/vids/holkyZMarketingu.png","images/thumbnails/vids/hospic.png","images/thumbnails/vids/loreal.jpg","images/thumbnails/vids/plesSobje.png","images/thumbnails/vids/tea.png","images/thumbnails/vids/ultravagant.png","images/thumbnails/vids/wolt.png","images/vids/hbo/0.jpg","images/vids/hbo/1.jpg","images/vids/hbo/10.png","images/vids/hbo/11.png","images/vids/hbo/12.png","images/vids/hbo/13.png","images/vids/hbo/2.jpg","images/vids/hbo/3.jpg","images/vids/hbo/4.jpg","images/vids/hbo/5.jpg","images/vids/hbo/6.jpg","images/vids/hbo/7.png","images/vids/hbo/8.png","images/vids/hbo/9.png","images/vids/loreal/0.jpg","images/vids/loreal/1.jpg","images/vids/loreal/2.jpg","images/vids/loreal/3.jpg","images/vids/loreal/4.jpg","images/vids/loreal/5.jpg","images/vids/loreal/6.jpg","logo.png","logos/placeholder.png","reel.mp4","shapes/bg.png","shapes/btn_a.png","shapes/btn_b.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".mp4":"video/mp4"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9179c713.mjs","imports":["_app/immutable/entry/start.9179c713.mjs","_app/immutable/chunks/index.1e18a303.mjs","_app/immutable/chunks/singletons.b6d8ee1f.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.2d06dc3a.mjs","imports":["_app/immutable/entry/app.2d06dc3a.mjs","_app/immutable/chunks/index.1e18a303.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-5914990e.js'),
			() => import('./chunks/1-4627a3ab.js'),
			() => import('./chunks/2-df58f9bc.js'),
			() => import('./chunks/3-298e0fd3.js'),
			() => import('./chunks/4-be6f997e.js'),
			() => import('./chunks/5-594ebaca.js'),
			() => import('./chunks/6-5154a989.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/detail/[type]/[id]",
				pattern: /^\/detail\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/videos",
				pattern: /^\/videos\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
