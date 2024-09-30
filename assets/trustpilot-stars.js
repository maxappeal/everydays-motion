const trustStars = document.querySelector(".trustpilot__stars"),
  starsWrap = document.createElement("div");
if (trustStars) {
  let t = "",
    s = "",
    e = Shopify.locale.split("-");
  e[1] ? (t = `${e[0].toLowerCase()}-${e[1].toUpperCase()}`, s = e[0].toLowerCase()) : (t = `${e[0].toLowerCase()}-${e[0].toUpperCase()}`, s = e[0].toLowerCase());
  const a = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100`,
    u = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=2`,
    r = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=3`,
    i = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=4`,
    p = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=5`,
    o = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=6`,
    q = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=7`,
    w = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=8`,
    n = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100`,
    c = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=2`,
    l = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=3`,
    g = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=4`,
    d = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=5`,
    m = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=6`,
    f = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=7`,
    h = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustStars.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustStars.dataset.sku}&locale=${t}&language=${s}&perPage=100&page=8`;
  Promise.all([fetch(a), fetch(u), fetch(r), fetch(i), fetch(p), fetch(o), fetch(n), fetch(q), fetch(w), fetch(c), fetch(l), fetch(g), fetch(d), fetch(m), fetch(f), fetch(h)]).then((t => Promise.all(t.map((function (t) {
    return t.json()
  }))))).then((t => {
    let s = [];
    t.map((t => {
      for (const e of t.productReviews) s.push(e)
    }));
    if (s.length) {
      let t = 0,
        e = 0;
      for (const t of s) e += t.stars;
      t = parseFloat((e / s.length).toFixed(1));
      const a = JSON.parse(trustStars.dataset.strings),
        u = `<div class="trustpilot__stars__summary">\n          <div class="trustpilot__widget__summary__starswrap">\n              <div class="trustpilot__widget__summary__stars" style="width: ${10 * Math.round(2 * t + .4)}%"></div>\n          </div>\n          <div class="trustpilot__widget__summary__rating">\n              <span class="trustpilot__widget__summary__count"><strong>${s.length}</strong> ${a.reviews}</span>\n          </div>\n          <div class="trustpilot__widget__summary__read-more"></div>\n      </div>`;
      trustStars.innerHTML += u, trustStars.addEventListener("click", (function () {
        const t = document.getElementById("trustpilot-widget").offsetTop - 60;
        if (t) {
          scroll({
            top: t,
            behavior: "smooth"
          })
        }
      }))
    }
  }))
}