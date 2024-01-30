import { a as getCollection } from './404_O_MtFCEQ.mjs';

const GET = async ({ url }) => {
  const query = url.searchParams.get("query");
  if (query === null) {
    return new Response(JSON.stringify({
      error: "Query param is missing"
    }), {
      status: 400,
      // bad req
      headers: {
        "Content-type": "application/json"
      }
    });
  }
  const allBlogArticles = await getCollection("blog");
  const searchResults = allBlogArticles.filter((article) => {
    const titleMatch = article.data.title.toLowerCase().includes(query.toLowerCase());
    const bodyMatch = article.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = article.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || bodyMatch || slugMatch;
  });
  return new Response(JSON.stringify(searchResults), {
    status: 200,
    // bad req
    headers: {
      "Content-type": "application/json"
    }
  });
};

export { GET };
