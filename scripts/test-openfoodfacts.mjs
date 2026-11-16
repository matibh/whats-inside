const barcode = process.env.OFF_BARCODE || "3017620422003";
const fields = [
  "code",
  "product_name",
  "brands",
  "ingredients_text",
  "ingredients_text_en",
  "ingredients",
  "ingredients_tags",
  "ingredients_hierarchy",
  "ingredients_n",
  "known_ingredients_n",
  "unknown_ingredients_n",
  "ingredients_analysis_tags",
  "allergens",
  "allergens_tags",
  "traces",
  "traces_tags",
  "image_front_url",
  "image_url",
  "countries_tags",
  "lang",
  "completeness",
  "last_modified_t"
].join(",");

const url = `https://world.openfoodfacts.org/api/v3/product/${encodeURIComponent(barcode)}.json?fields=${fields}`;

console.log(`Open Food Facts API v3 full ingredient inspection — barcode ${barcode}`);
console.log(`GET ${url}`);

const response = await fetch(url, {
  headers: {
    "User-Agent": "WhatsInside/0.1 (https://github.com/matibh/whats-inside)"
  }
});

if (!response.ok) {
  throw new Error(`Open Food Facts returned HTTP ${response.status}`);
}

const payload = await response.json();

if (payload.status !== "success" || !payload.product) {
  console.error(JSON.stringify(payload, null, 2));
  throw new Error("Product not found in Open Food Facts");
}

const p = payload.product;

function countAllIngredients(items = []) {
  return items.reduce((total, item) => {
    const children = Array.isArray(item.ingredients) ? item.ingredients : [];
    return total + 1 + countAllIngredients(children);
  }, 0);
}

const result = {
  code: p.code ?? barcode,
  product_name: p.product_name ?? null,
  brands: p.brands ?? null,
  countries_tags: p.countries_tags ?? [],
  lang: p.lang ?? null,
  ingredients_text: p.ingredients_text ?? null,
  ingredients_text_en: p.ingredients_text_en ?? null,
  ingredients_count_top_level: Array.isArray(p.ingredients) ? p.ingredients.length : 0,
  ingredients_count_including_nested: countAllIngredients(p.ingredients),
  ingredients: Array.isArray(p.ingredients) ? p.ingredients : [],
  ingredients_tags: p.ingredients_tags ?? [],
  ingredients_hierarchy: p.ingredients_hierarchy ?? [],
  ingredients_n: p.ingredients_n ?? null,
  known_ingredients_n: p.known_ingredients_n ?? null,
  unknown_ingredients_n: p.unknown_ingredients_n ?? null,
  ingredients_analysis_tags: p.ingredients_analysis_tags ?? [],
  allergens: p.allergens ?? null,
  allergens_tags: p.allergens_tags ?? [],
  traces: p.traces ?? null,
  traces_tags: p.traces_tags ?? [],
  image_front_url: p.image_front_url ?? null,
  image_url: p.image_url ?? null,
  completeness: p.completeness ?? null,
  last_modified_t: p.last_modified_t ?? null
};

console.log("\nFULL API INGREDIENT RESPONSE");
console.log(JSON.stringify(result, null, 2));

if (!result.product_name) {
  throw new Error("API returned the barcode but no product_name");
}
if (!result.ingredients_text && result.ingredients_count_top_level === 0) {
  throw new Error("Product has no usable ingredient data");
}

console.log("\nPASS: API returned product and ingredient data.");
