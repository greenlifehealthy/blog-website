/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, n as renderComponent } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection, A as ARTICLE_PER_PAGE, $ as $$MainLayout, b as $$Image, f as formDate, H as HOMEPAGE_ARTICLE_LIMIT } from './404_O_MtFCEQ.mjs';
import { $ as $$ArticleCard } from './__HU-nRFwG.mjs';
import { a as about } from './about_qoOL-wfw.mjs';
import { $ as $$Health } from './health_uqP7h0P2.mjs';
import { $ as $$Fitness } from './fitness_fjQiJs1b.mjs';

const $$Astro$6 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { currentPg, totalPg, disablePrevious, disableNext } = Astro2.props;
  return renderTemplate`<!-- Pagination -->${maybeRenderHead()}<div class="flex justify-between mt-10"> <a${addAttribute("/articles?page=" + (currentPg - 1), "href")}${addAttribute(disablePrevious ? "inline-block bg-gray-100 px-3 py-2 hover:text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>
Previous
</a> <a${addAttribute("/articles?page=" + (currentPg + 1), "href")}${addAttribute(disableNext ? "inline-block bg-gray-100 px-3 py-2 hover:text-gray-400 rounded-lg pointer-events-none" : "inline-block bg-indigo-100 px-3 py-2 hover:bg-indigo-600 hover:text-white rounded-lg", "class")}>
Next
</a> </div>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/Pagination.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const totalPage = Math.ceil(allBlogArticles.length / ARTICLE_PER_PAGE);
  const articlesForPage = allBlogArticles.slice((currentPage - 1) * ARTICLE_PER_PAGE, currentPage * ARTICLE_PER_PAGE);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Articles on Health & Wellness" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl pb-3">All Articles</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> <!-- Article Card --> ${articlesForPage.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPg": currentPage, "totalPg": totalPage, "disablePrevious": currentPage === 1, "disableNext": currentPage === totalPage })} ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/index.astro", void 0);

const $$file$1 = "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/index.astro";
const $$url$1 = "/articles";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$SearchForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SearchForm;
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="flex items-center" action="/articles/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="text" id="query" name="query" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Search articles..." required> </div> <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-normal bg-indigo-700 rounded-lg border border-indigo-700 hover:bg-indigo-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-indigo-300"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/SearchForm.astro", void 0);

const $$Astro$3 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-4xl font-sans font-bold mb-5">About GreenLife</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result, "Image", $$Image, { "src": about, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">Who We Are</h2> <p class="text-gray-700 leading-relaxed mb-6">
We are fitness and health enthusiasts that want to provide advice and
      knowledge to inspire others to lead healthy lives.
</p><p class="text-gray-700 leading-relaxed mb-6">
By promoting unparalleled community involvement and providing access to high-quality, reasonably priced knowledge that has the capacity to change lives and promote greater health and well-being, we are changing the field of health and fitness advice.
</p>  </div> </div>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/About.astro", void 0);

const $$Astro$2 = createAstro();
const $$Recent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Recent;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4">${formDate(article.data.pubDate)}</p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2"> ${tag} </span>`)} </div> </div> </div> </a> </div>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/Recent.astro", void 0);

const $$Astro$1 = createAstro();
const $$Gym = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gym;
  Astro2.params;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const healthTagArticles = allBlogArticles.filter(
    (article) => article.data.tags.includes("Gym")
  );
  console.log(healthTagArticles);
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-2xl pb-3">Gym & Gym routines</h1> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${healthTagArticles.map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div>`;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/Gym.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allBlogArticles = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const mostRecentArticles = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-3xl font-header font-semibold mt-4 mb-8 leading-tight xl:text-5xl">
Your Journey to a Healthier life starts today!
</h1> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} </div> ${renderComponent($$result2, "Recent", $$Recent, { "article": mostRecentArticles })} </div>  <h2 class="font-sans text-4xl">New releases</h2> <div class="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3"> <!-- Article Card --> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> <div class="flex flex-col-reverse p-6 "> ${renderComponent($$result2, "Health", $$Health, {})} ${renderComponent($$result2, "Fitness", $$Fitness, {})} ${renderComponent($$result2, "Gym", $$Gym, {})} </div> ${renderComponent($$result2, "About", $$About, {})} ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SearchForm as $, index as a, index$1 as i };
