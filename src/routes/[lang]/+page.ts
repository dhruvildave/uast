import { goto } from "$app/navigation";
import type { PageLoad } from "./$types";

export const load: PageLoad = (({
  params
}: {
  params: { lang: string };
}): {
  title: string;
  nav: string;
} => {
  switch (params.lang) {
    case "sa":
      return {
        title: "यूनिकोडवेदि संस्कृतलिप्यन्तरकर्तृ - UAST",
        nav: "UAST - संस्कृतलिप्यन्तराय सर्वक्षमैकोपकरणम्"
      };

    case "hi":
      return {
        title: "यूनिकोड जागरूक संस्कृत लिप्यंतरण - UAST",
        nav: "UAST - संस्कृत लिप्यंतरण के लिए ऑल-इन-वन टूल"
      };

    case "gu":
      return {
        title: "યુનિકોડ અવેર સંસ્કૃત લિવ્યંતરણ - UAST",
        nav: "UAST - સંસ્કૃત લિવ્યંતરણ માટે ઓલ-ઇન-વન ટૂલ"
      };

    case "en":
      return {
        title: "Unicode Aware Sanskrit Transliteration - UAST",
        nav: "UAST - All-in-one tool for Sanskrit Transliteration"
      };

    case "es":
      return {
        title: "Transliteración Sánscrita consciente de Unicode - UAST",
        nav: "UAST - Herramienta todo en uno para transliteración sánscrita"
      };

    case "fr":
      return {
        title: "Translittération sanskrite compatible Unicode - UAST",
        nav: "UAST - Outil tout-en-un pour la translittération sanskrite"
      };

    case "ko":
      return {
        title: "유니코드 인식 산스크리트 음역 - UAST",
        nav: "UAST - 산스크리트 음역을 위한 올인원 도구"
      };

    case "ja":
      return {
        title: "Unicode 対応のサンスクリット音訳 - UAST",
        nav: "UAST - サンスクリット音訳のためのオールインワン ツール"
      };

    default:
      goto("/en", {
        replaceState: true,
        keepFocus: true,
        noScroll: true
      });
      return {
        title: "",
        nav: ""
      };
  }
}) satisfies PageLoad;
