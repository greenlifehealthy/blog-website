/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, n as renderComponent, h as addAttribute, F as Fragment } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import { c as captialize, g as getEntry, f as formDate, $ as $$MainLayout } from './404_O_MtFCEQ.mjs';
/* empty css                            */
/* empty css                           */

const $$Astro$1 = createAstro();
const $$Tags = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> <span class="card__content"> ${tags.map((tag, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index > 0 && ", "}<a${addAttribute("/articles/tag/" + tag, "href")}>#${captialize(tag)}</a> ` })}`)} </span> </div> `;
}, "C:/Users/DELL/Documents/CODES/blog/src/components/Tags.astro", void 0);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("slug needed");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/articles" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Back To Articles</a> <article> <h1 class="text-4xl font-bold mb-2">${entry.data.title}</h1> <h3 class="text-lg mb-2">Written by ${entry.data.author} on ${formDate(entry.data.pubDate)}</h3> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} <img${addAttribute("/images/" + entry.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-xl my-6"> ${renderComponent($$result2, "Content", Content, {})} </article> ` })} `;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/[...slug].astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Tags as $, ____slug_ as _ };
