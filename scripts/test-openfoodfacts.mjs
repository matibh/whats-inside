const barcode = process.env.OFF_BARCODE || "3017620422003";
const fields = [
  "code",
  "product_name",
  "brands",
  "ingredients_text",
  "ingredients",
  "image_front_url",
  "image_url",
  "countries_tags",
  "lang",
  "completeness",
  "last_modified_t"
].join(",");

const url = `https://world.openfoodfacts.org/api/v3/product/${encodeURIComponent(barcode)}.json?fields=${fields}`;

console.log(`Open Food Facts API v3 test — barcode ${barcode}`);
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

if (payload.status !== 1 || !payload.product) {
  console.error(JSON.stringify(payload, null, 2));
  throw new Error("Product not found in Open Food Facts");
}

const p = payload.product;
const result = {
  code: p.code ?? barcode,
  product_name: p.product_name ?? null,
  brands: p.brands ?? null,
  countries_tags: p.countries_tags ?? [],
  lang: p.lang ?? null,
  ingredients_text: p.ingredients_text ?? null,
  ingredients_count: Array.isArray(p.ingredients) ? p.ingredients.length : null,
  ingredients_preview: Array.isArray(p.ingredients)
    ? p.ingredients.slice(0, 12).map(x => ({
        text: x.text ?? null,
        id: x.id ?? null,
        percent: x.percent ?? null
      }))
    : [],
  image_front_url: p.image_front_url ?? null,
  image_url: p.image_url ?? null,
  completeness: p.completeness ?? null,
  last_modified_t: p.last_modified_t ?? null
};

console.log("\nAPI RESPONSE SUMMARY");
console.log(JSON.stringify(result, null, 2));

if (!result.product_name) {
  throw new Error("API returned the barcode but no product_name");
}
if (!result.ingredients_text && !result.ingredients_count) {
  throw new Error("Product has no usable ingredient data");
}

console.log("\nPASS: API returned product and ingredient data.");
