<style>
	main {
		display: flex;
		flex-direction: column;

		width: 100vw;
		height: calc(100vh - 3rem);
	}

	main article,
	main aside {
		flex: 1;

		display: flex;
		flex-direction: column;
	}

	main article {
		background-color: var(--light-primary-light);
	}

	main aside {
		background-color: var(--light-primary-medium);
	}

	main article select,
	main aside select {
		height: 3rem; /* 48px */
		width: 40%;
		min-width: max-content;

		appearance: none;
		outline: none;

		border: none;

		cursor: pointer;
		text-decoration-line: underline;

		text-align: center;

		padding: 0.125rem; /* 2px */
		margin: auto;
	}

	main article textarea,
	main aside textarea {
		height: 100%;
		width: 100%;
		resize: none;

		border: none;

		user-select: auto;

		padding: 0.25rem; /* 4px */
	}

	textarea,
	select {
		color: var(--light-text-color);

		font-size: 1rem; /* 16px */
		line-height: 1.5rem; /* 24px */

		animation: fade 300ms ease-in-out;
	}

	textarea.input,
	select.from-select {
		background-color: var(--light-primary-light);
		padding: 0.5rem; /* 8px */
	}

	textarea.output,
	select.to-select {
		background-color: var(--light-primary-medium);
		padding: 0.5rem; /* 8px */
	}

	textarea,
	select,
	option {
		font-family: var(--font-family-mono), "Noto Sans Devanagari", "Noto Sans Gujarati",
			"Noto Sans Oriya", "Noto Sans Kannada", "Noto Sans Telugu", "Noto Sans Malayalam",
			"Noto Sans Grantha", sans-serif;
	}

	@media (prefers-color-scheme: dark) {
		textarea,
		select {
			color: var(--dark-text-color);
		}

		main article {
			background-color: var(--dark-primary-dark);
		}

		main aside {
			background-color: var(--dark-primary-medium);
		}

		textarea.input,
		select.from-select {
			background-color: var(--dark-primary-dark);
		}

		textarea.output,
		select.to-select {
			background-color: var(--dark-primary-medium);
		}
	}

	@media (min-width: 1024px) {
		main {
			flex-direction: row;
		}

		textarea,
		select {
			font-size: 1.5rem; /* 24px */
			line-height: 2rem; /* 32px */
		}
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	main article textarea:focus,
	main aside textarea:focus {
		outline: none;
	}
</style>

<script lang="ts">
	import * as utils from "../be/utils";

	const placeholders = {
		uast: "ts-m/a/d-yog/i/ bhv/a/r-jun",
		iast: "tasmādyogī bhavārjuna",
		gu: "તસ્માદ્યોગી ભવાર્જુન",
		or: "ତସ‍୍ମାଦ‍୍ୟୋଗୀ ଭୱାର‍୍ଜୁନ",
		devanagari: "तस्माद्योगी भवार्जुन",
		slp: "tasmAdyogI BavArjuna",
		kn: "ತಸ್ಮಾದ್ಯೊಗೀ ಭವಾರ್ಜುನ",
		te: "తస్మాద్యొగీ భవార్జున",
		ta: "𑌤𑌸𑍍𑌮𑌾𑌦𑍍𑌯𑍋𑌗𑍀 𑌭𑌵𑌾𑌰𑍍𑌜𑍁𑌨",
		ml: "തസ്മാദ്യൊഗീ ഭവാര്ജുന",
		raw: "tasm/a/dyog/i/ bhav/a/rjuna"
	} as const;

	const to_opts = [
		["devanagari", "देवनागरी"],
		["uast", "UAST"],
		["iast", "IAST"],
		["gu", "ગુજરાતી"],
		["or", "ଓଡ଼ିଆ"],
		["kn", "ಕನ್ನಡ"],
		["te", "తెలుగు"],
		["ml", "മലയാളം"],
		["ta", "𑌗𑍍𑌰𑌨𑍍𑌥"]
	] as const;

	const from_opts = [
		["uast", "UAST"],
		["iast", "IAST"],
		["devanagari", "देवनागरी"],
		["gu", "ગુજરાતી"],
		["or", "ଓଡ଼ିଆ"],
		["kn", "ಕನ್ನಡ"],
		["te", "తెలుగు"],
		["ml", "മലയാളം"],
		["ta", "𑌗𑍍𑌰𑌨𑍍𑌥"],
		["raw", "Raw"],
		["slp", "SLP1"]
	] as const;

	let input: string = "";
	let from: string;
	let to: string;

	$: output = input
		.split("\n")
		.map(i => {
			return i
				.split(" ")
				.map(j => {
					for (const f of utils.convertor[from]?.[to] ?? []) {
						j = f(j);
					}
					return j;
				})
				.join(" ");
		})
		.join("\n");

	$: ph_from =
		(from === "slp"
			? placeholders["slp"]
			: from === "iast"
			? placeholders["iast"]
			: from === "raw"
			? placeholders["raw"]
			: from === "devanagari"
			? placeholders["devanagari"]
			: from === "gu"
			? placeholders["gu"]
			: from === "or"
			? placeholders["or"]
			: from === "kn"
			? placeholders["kn"]
			: from === "te"
			? placeholders["te"]
			: from === "ml"
			? placeholders["ml"]
			: from === "ta"
			? placeholders["ta"]
			: placeholders["uast"]) +
		"\n\n\n" +
		(from === "devanagari"
			? "भारतवर्षे अनेर्या अनिरुद्धेन च प्रणयात् एव निर्मित।"
			: "Made with 🫶🏼 in Bhāratavarṣa by Aneri Dalwadi and Dhruvil Dave");

	$: ph_to =
		to === "devanagari"
			? placeholders["devanagari"]
			: to === "iast"
			? placeholders["iast"]
			: to === "gu"
			? placeholders["gu"]
			: to === "or"
			? placeholders["or"]
			: to === "kn"
			? placeholders["kn"]
			: to === "te"
			? placeholders["te"]
			: to === "ml"
			? placeholders["ml"]
			: to === "ta"
			? placeholders["ta"]
			: placeholders["uast"];
</script>

<main>
	<article>
		<textarea
			autocomplete="off"
			spellcheck="false"
			name="input"
			class="input"
			placeholder="{ph_from}"
			bind:value="{input}"></textarea>

		<select class="from-select" bind:value="{from}">
			{#each from_opts as i}
				<option value="{i[0]}">{i[1]}</option>
			{/each}
		</select>
	</article>

	<aside>
		<textarea
			autocomplete="off"
			spellcheck="false"
			disabled
			name="output"
			class="output"
			placeholder="{ph_to}"
			value="{output}"></textarea>

		<select class="to-select" bind:value="{to}">
			{#each to_opts as i}
				<option value="{i[0]}">{i[1]}</option>
			{/each}
		</select>
	</aside>
</main>
