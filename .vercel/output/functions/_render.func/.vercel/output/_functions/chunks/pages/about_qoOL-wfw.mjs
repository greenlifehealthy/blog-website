/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../astro_bm6pIj0q.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Image, $ as $$MainLayout } from './404_O_MtFCEQ.mjs';

const about$1 = new Proxy({"src":"/_astro/desc.EdbSq2ce.avif","width":1280,"height":580,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/DELL/Documents/CODES/blog/src/images/desc.avif";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-sans font-bold mb-5">About GreenLife</h1> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="w-full md:w-1/2 mb-8 md:mb-0"> ${renderComponent($$result2, "Image", $$Image, { "src": about$1, "alt": "Tech People Team", "class": "w-full h-auto rounded-lg shadow-lg" })} </div> <div class="w-full md:w-1/2"> <h2 class="text-3xl font-extrabold text-gray-900 mb-4">Who We Are</h2> <p class="text-gray-700 leading-relaxed mb-6">
We are fitness and health enthusiasts that want to provide advice and
        knowledge to inspire others to lead healthy lives.
</p><p class="text-gray-700 leading-relaxed mb-6">
By promoting unparalleled community involvement and providing access
          to high-quality, reasonably priced knowledge that has the capacity to
          change lives and promote greater health and well-being, we are
          changing the field of health and fitness advice.
</p>  </div> </div> ` })}`;
}, "C:/Users/DELL/Documents/CODES/blog/src/pages/about.astro", void 0);

const $$file = "C:/Users/DELL/Documents/CODES/blog/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { about$1 as a, about as b };
