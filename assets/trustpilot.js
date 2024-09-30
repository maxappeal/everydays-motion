const trustWdgt = document.querySelector(".trustpilot__widget"),
  testimonialsWrap = document.createElement("div");
if (trustWdgt) {
  let locale = '';
  let language = '';
  let splitLocal = Shopify.locale.split('-');
  if (splitLocal[1]) {
    locale = `${splitLocal[0].toLowerCase()}-${splitLocal[1].toUpperCase()}`;
    language = splitLocal[0].toLowerCase();
  } else {
    locale = `${splitLocal[0].toLowerCase()}-${splitLocal[0].toUpperCase()}`;
    language = splitLocal[0].toLowerCase();
  }
  const t = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100`,
    e = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=2`,
    s = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=3`,
    i = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=4`,
    n = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=5`,
    r = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=6`,
    z = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=7`,
    m = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=8`,
    a = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100`,
    u = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=2`,
    o = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=3`,
    p = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=4`,
    c = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=5`,
    d = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=6`,
    q = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=7`,
    b = `https://api.trustpilot.com/v1/product-reviews/business-units/${trustWdgt.dataset.businessunit}/imported-reviews?apikey=ZuNOmsXgPQ7mBfA5KGpjhCbqUcfAuuXE&sku=${trustWdgt.dataset.sku}&locale=${locale}&language=${language}&perPage=100&page=8`;
  Promise.all([fetch(t), fetch(e), fetch(s), fetch(i), fetch(n), fetch(r), fetch(z), fetch(m), fetch(a), fetch(u), fetch(o), fetch(p), fetch(c), fetch(d), fetch(q), fetch(b)]).then((t => Promise.all(t.map((function (t) {
    return t.json()
  }))))).then((t => {
    let e = [];
    t.map((t => {
      for (const s of t.productReviews) e.push(s)
    }));
    if (e.length) {
      let t = 0,
        s = 0,
        i = [],
        n = [];
      const r = 5;
      let a = -1,
        u = [],
        d = [],
        o = [],
        l = [],
        c = [];
      for (const t of e)
        if (s += t.stars, t.attributeRatings)
          for (const e of t.attributeRatings) {
            let t = n[e.attributeName] || "";
            t = t ? t + "," + e.rating : e.rating, n[e.attributeName] = t
          }
      t = parseFloat((s / e.length).toFixed(1)), Object.keys(n).length && Object.entries(n).forEach((([t, e]) => {
        let s = 0,
          n = [];
        n = e.length ? e.split(",") : [e];
        for (const t of n) s += parseInt(t);
        let r = (s / n.length).toFixed(1);
        i[t] = parseFloat(r)
      }));
      const strings = JSON.parse(trustWdgt.dataset.strings);
      const _ = `<div class="trustpilot__widget__summary">\n<div class="trustpilot__widget__summary__starswrap">\n    <div class="trustpilot__widget__summary__stars" style="width: ${10 * Math.round(2 * t + .4)}%"></div>\n</div>\n<div class="trustpilot__widget__summary__rating">\n    <span class="rating">${t.toFixed(1)}</span> / 5\n    <span class="separator">•</span>\n    <span class="trustpilot__widget__summary__count"><strong>${e.length}</strong> ${strings.reviews}</span>\n</div>\n</div>`,
        p = (t, e) => `\n<div class="trustpilot__widget__attribute">\n<div class="trustpilot__widget__attribute__label">${t}</div>\n<div class="trustpilot__widget__summary__starswrap">\n    <div class="trustpilot__widget__summary__stars" style="width: ${10 * Math.round(2 * e + .4)}%"></div>\n</div>\n<div class="trustpilot__widget__summary__rating">\n    <span class="rating">${e.toFixed(1)}</span> / 5\n</div>\n</div>`;
      for (const t of e) switch (t.stars) {
        case 5:
          c.push(t);
          break;
        case 4:
          l.push(t);
          break;
        case 3:
          o.push(t);
          break;
        case 2:
          d.push(t);
          break;
        default:
          u.push(t)
      }
      let m = e;
      const g = (t, e, s, i, n = null) => {
        const r = new Date(e);
        let a = `\n<div class="trustpilot__widget__testimonial">\n<div class="trustpilot__widget__testimonial__heading">\n    <div class="trustpilot__widget__testimonial__name">${t}</div>\n    <div class="trustpilot__widget__testimonial__date">${r.toLocaleString(locale, { day: "numeric" })} ${r.toLocaleString(locale, { month: "long" })}</div>\n</div>\n<div class="trustpilot__widget__testimonial__rating">\n    <div class="trustpilot__widget__summary__starswrap">\n        <div class="trustpilot__widget__summary__stars" style="width: ${10 * Math.round(2 * s)}%"></div>\n    </div>`;
        if (n) {
          a += `\n    <div class="trustpilot__widget__testimonial__details">\n        ${strings.more_details} <span class="arrow"></span>\n        <div class="more">`;
          for (const t of n) a += p(t.attributeName, t.rating);
          a += "\n        </div>\n    </div>"
        }
        a += `\n</div>\n<div class="trustpilot__widget__testimonial__text">\n    ${i}\n</div>\n<div class="trustpilot__widget__testimonial__source">\n    ${strings.verified}\n    <div class="trustpilot__widget__testimonial__information">\n        <span>${strings.info}</span>\n        <ul>\n            <li>${strings.list_1}</li>\n            <li>${strings.list_2}</li>\n        </ul>\n        <p><a href="https://`
        if (language != 'en') {
          a += `${language}.`
        }
        a += `trustpilot.com/trust/how-reviews-work?utm_medium=Trustbox&amp;utm_source=ProductListImportedSEO" target="_blank">${strings.label}</a></p>\n    </div>\n</div>\n</div>`
        return a
      },
        v = (t, s, i) => `\n<div class="trustpilot__widget__filter ${t.length > 0 ? "" : "trustpilot__widget__filter--disabled"}">\n<div id="stars-wrap-${s}"></div>\n<label class="trustpilot__widget__filter__label" for="stars-${s}">\n    <span class="trustpilot__widget__filter__rating">${i}</span>\n    <div class="trustpilot__widget__filter__progress-bar">\n        <span class="trustpilot__widget__filter__progress-bar__status" style="width: ${(t.length / e.length * 100).toFixed(0)}%;"></span>\n    </div>\n    <div class="trustpilot__widget__filter__percentage">${(t.length / e.length * 100).toFixed(0)} %</div>\n</label>\n</div>`,
        h = () => {
          m = e, a = 0, testimonialsWrap.innerHTML = ""
        },
        b = () => {
          const t = document.querySelector(".trustpilot__widget__more");
          t && t.parentNode.removeChild(t);
          for (const t of m.slice(a, a + r)) {
            const e = t.consumer.displayName || t.consumer.name,
              s = t.attributeRatings || null;
            testimonialsWrap.innerHTML += g(e, t.createdAt, t.stars, t.content, s)
          }
          if (a + r < m.length) {
            const t = document.createElement("div");
            t.className = "trustpilot__widget__more", trustWdgt.appendChild(t);
            const e = document.createElement("button");
            e.className = "btn", e.textContent = strings.load_more, t.appendChild(e), e.addEventListener("click", (() => {
              a += r, b()
            }))
          }
        };
      let w = [];
      const f = () => {
        const t = document.querySelectorAll(".trustpilot__widget__filter input[type=checkbox]"),
          s = document.querySelectorAll(".trustpilot__widget__filter__label");
        w = Array.from(t).filter((t => t.checked)).map((t => t.value));
        for (const t of s) t.querySelector(".trustpilot__widget__filter__progress-bar__status").classList.remove("active");
        for (const t of w) {
          const e = `label[for="stars-${t}"]`;
          document.querySelector(e).querySelector(".trustpilot__widget__filter__progress-bar__status").classList.add("active")
        }
        if (h(), w.length) {
          let t = [];
          for (const s of w) {
            let i = e.filter((t => t.stars == s));
            t = t.concat(i), m = t.sort(((t, e) => {
              const s = new Date(t.createdAt);
              return new Date(e.createdAt) - s
            }))
          }
        } else m = e;
        b()
      };
      if (trustWdgt.innerHTML += _, Object.keys(i).length) {
        const t = document.createElement("div");
        t.className = "trustpilot__widget__attributes", trustWdgt.appendChild(t), Object.entries(i).forEach((([e, s]) => {
          t.innerHTML += p(e, s)
        }))
      }
      const y = document.createElement("div");
      y.className = "trustpilot__widget__filters", trustWdgt.appendChild(y), y.innerHTML += v(c, 5, strings.excellent), y.innerHTML += v(l, 4, strings.great), y.innerHTML += v(o, 3, strings.average), y.innerHTML += v(d, 2, strings.poor), y.innerHTML += v(u, 1, strings.bad);
      const E = document.createElement("input");
      E.setAttribute("type", "checkbox"), E.setAttribute("id", "stars-5"), E.setAttribute("value", "5"), E.addEventListener("change", f), document.body.appendChild(E);
      const k = document.createElement("input");
      k.setAttribute("type", "checkbox"), k.setAttribute("id", "stars-4"), k.setAttribute("value", "4"), k.addEventListener("change", f), document.body.appendChild(k);
      const A = document.createElement("input");
      A.setAttribute("type", "checkbox"), A.setAttribute("id", "stars-3"), A.setAttribute("value", "3"), A.addEventListener("change", f), document.body.appendChild(A);
      const B = document.createElement("input");
      B.setAttribute("type", "checkbox"), B.setAttribute("id", "stars-2"), B.setAttribute("value", "2"), B.addEventListener("change", f), document.body.appendChild(B);
      const W = document.createElement("input");
      W.setAttribute("type", "checkbox"), W.setAttribute("id", "stars-1"), W.setAttribute("value", "1"), W.addEventListener("change", f), document.body.appendChild(W), setTimeout((() => {
        const t = document.getElementById("stars-5"),
          e = document.getElementById("stars-wrap-5");
        e.parentNode.insertBefore(t, e);
        const s = document.getElementById("stars-4"),
          i = document.getElementById("stars-wrap-4");
        i.parentNode.insertBefore(s, i);
        const n = document.getElementById("stars-3"),
          r = document.getElementById("stars-wrap-3");
        r.parentNode.insertBefore(n, r);
        const a = document.getElementById("stars-2"),
          u = document.getElementById("stars-wrap-2");
        u.parentNode.insertBefore(a, u);
        const d = document.getElementById("stars-1"),
          o = document.getElementById("stars-wrap-1");
        o.parentNode.insertBefore(d, o)
      }), 1e3), testimonialsWrap.className = "trustpilot__widget__testimonials", trustWdgt.appendChild(testimonialsWrap), b()
    }
  }))
}