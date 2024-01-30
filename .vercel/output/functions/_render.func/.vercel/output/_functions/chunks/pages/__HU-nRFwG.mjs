/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formDate, a as getCollection, c as captialize, $ as $$MainLayout } from './404_O_MtFCEQ.mjs';
import { $ as $$Tags } from './__uTaxATOO.mjs';
/* empty css                            */

const $$Astro$1 = createAstro();
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="main-card max-w-md mx-auto mt-10"> <div class="bg-white rounded-lg overflow-hidden "> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-80 rounded h-48 object-cover hover:opacity-75 transition duration-300 ease-in-out"> </a> <div class="w-80 p-6"> <h2 class="text-2xl text-normal font-semibold mb-2"> <a${addAttribute("/articles/" + article.slug, "href")}> ${article.data.title} </a> </h2> <p class="text-gray-600 text-sm mb-4">${formDate(article.data.pubDate)}</p> ${renderComponent($$result, "Tags", $$Tags, { "tags": article.data.tags })} </div> </div> </div> `;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/ArticleCard.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { tag } = Astro2.params;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const tagArticles = allBlogArticles.filter((article) => article.data.tags.includes(tag));
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles on Health & Wellness" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <h1 class="text-2xl pb-3">#${tag && captialize(tag)}</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${tagArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/tag/[...tag].astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/tag/[...tag].astro";
const $$url = "/articles/tag/[...tag]";

const ____tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ArticleCard as $, ____tag_ as _ };
