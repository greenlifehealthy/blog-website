/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection, $ as $$MainLayout } from './404_O_MtFCEQ.mjs';
import { $ as $$ArticleCard } from './__HU-nRFwG.mjs';
import { $ as $$SearchForm } from './index_hJ20bWGM.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Result" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-grey-100 p-2 mb-5 hover:bg-indigo-500 hover:text-white">All articles</a> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <h1 class="text-2xl pb-3 mt-6">Results for <strong>${query}</strong></h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/search.astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/search.astro";
const $$url = "/articles/search";

export { $$Search as default, $$file as file, $$url as url };
