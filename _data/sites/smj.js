module.exports = {
	name: "smj.im", // optional, falls back to object key
	description: "Sanmonji's site",
	// skip if localhost
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "ispeedify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://smj.im/",
		"https://smj.im/about/",
		"https://smj.im/blag/",
		"https://smj.im/about/",
		"https://smj.im/design/covers/",
		"https://smj.im/library/books/",
		"https://smj.im/blogroll/",
	]
};