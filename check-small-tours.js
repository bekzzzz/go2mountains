// ===== Tours Data =====
const TOURS = [
  {
    title_en: "Day 8 · Journey to the Nomadic Heart | Song Kol Alpine Lake",
    title_zh: "8日 走進遊牧之心｜高山頌湖 ",
    img: "assets/image-itinerary/8d-son-kol.png",
    link: "https://kyrgyzstan-tour.notion.site/8-Song-Kol-2c5e583a17c180d7a983d8e9086fd7e4",
    label_en: "Group date",
    label_zh: "<拼團/ 私人訂製團，首趟推薦>",
    desc_en:
      "At 3,000 meters, Song Kol offers a deep dive into the heart of true nomadic life — ideal for nature and outdoor lovers seeking a pure, slow rhythm.",
    desc_zh:
      "深入海拔 3,000 公尺的頌湖高原，走進真正的遊牧生活核心，推薦給 熱愛自然、戶外體驗、願意擁抱純粹與原始節奏的旅人。",
  },
  {
    title_en:
      "Day 8 · Exploring Issyk-Kul at the Foot of the Tien Shan Mountains",
    title_zh: "8 日 天山腳下的慢旅行｜伊塞克湖環湖",
    img: "assets/image-itinerary/8d-altyn-arashan.png",
    link: "https://kyrgyzstan-tour.notion.site/8-2c6e583a17c180a795aff4e2e5243277?pvs=74",
    label_en: "Group date",
    label_zh: "<拼團/ 私人訂製團，首趟推薦>",
    desc_en:
      "Travel along the Tien Shan and Issyk-Kul, taking in the region’s most beautiful valleys and lakes at a relaxed pace — ideal for families and senior travelers.",
    desc_zh:
      "沿著天山與伊塞克湖前行，細細收藏最純粹動人的山谷與湖泊風景，推薦給喜愛慢步調、放鬆旅行的你｜親子與長輩首選。",
  },
  {
    title_en:
      "Day 7 · Disconnect Among the Mountains | Horseback Journey Through the Highlands",
    title_zh: "7日  離線於群山之間 ｜高山騎馬遠征",
    img: "assets/image-itinerary/7d-horse-toktogul.png",
    link: "https://kyrgyzstan-tour.notion.site/7-2d5e583a17c180f1aa99fe5b793df407?pvs=74",
    label_en: "Private & Custom-Made Only",
    label_zh: "<私人訂製團限定>",
    desc_en:
      "Ride through remote alpine meadows and mountain passes, far from signal and crowds — ideal for travelers seeking true disconnection and long-distance horseback adventures.",
    desc_zh:
      "遠離訊號與人群，騎馬穿越高山草原與山口，推薦給 想真正斷線、沉浸自然與長距離騎馬體驗的旅人。",
  },

  // Add 3 more examples (replace images/links/text)
  {
    title_en: "8 Days | Nomadic Games & Mountain Horseback Adventure",
    title_zh: "8日 在地遊牧比賽 | 高山騎馬遠征",
    img: "assets/image-itinerary/8d-toktogul-nomads.png",
    link: "https://kyrgyzstan-tour.notion.site/8-2d5e583a17c1801cb4d9f4e433e577fb?pvs=74",
    label_en: "Private & Custom-Made Only",
    label_zh: "<私人訂製團限定>",
    desc_en:
      "Combining mountain horseback riding with summer-only nomadic games, this experience offers rare access to real herder life — perfect for travelers curious about cultural interaction and unique adventures.",
    desc_zh:
      "結合高山騎馬與夏季限定的遊牧競技活動，走進牧民真實生活現場，推薦給 對文化互動與特殊體驗充滿好奇的你。",
  },
  {
    title_en:
      "Day 10 · Alpine Nomadic Expedition | Horseback × Off-Road Adventure",
    title_zh: "10日 高山遊牧遠征｜騎馬 × 越野冒險",
    img: "assets/image-itinerary/10d-kel-suu.png",
    link: "https://kyrgyzstan-tour.notion.site/10-2d6e583a17c180f79366eaa62547fdf5?pvs=73",
    label_en: "Private & Custom-Made Only",
    label_zh: "<私人訂製團限定>",
    desc_en:
      "A full-scale adventure combining horseback travel and off-road routes across highlands, lakes, and hidden meadows.",
    desc_zh:
      "騎馬深入高原、越野車翻越山谷，串連世界級湖泊與秘境草原，推薦給 渴望完整冒險、願意把時間交給山與路的旅人。",
  },
];

// ===== Render / Filter / Load More =====
const grid = document.getElementById("toursGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const chips = document.querySelectorAll(".chip");

let activeFilter = "all";
let visibleCount = 6; // show 6 first (matches your request)

function cardHTML(tour, labelText) {
  const lang =
    (window.currentLang || localStorage.getItem("siteLang") || "en") === "zh"
      ? "zh"
      : "en";
  const title = tour[`title_${lang}`] || tour.title_en || tour.title || "";
  const desc = tour[`desc_${lang}`] || tour.desc_en || tour.desc || "";
  const btnText = lang === "zh" ? "查看行程" : "View itinerary";
  const tag = tour.tag || "";
  const badge = tour.badge || "";
  const days = tour.days || "";
  const badgeText =
    badge || days
      ? `<span class="tour-card__badge">${[badge, days]
          .filter(Boolean)
          .join(" • ")}</span>`
      : "";
  const daysMeta = days ? `<span>⏳ ${days}</span><span>•</span>` : "";

  return `
    <article class="tour-card" data-tag="${tag}">
      <div class="tour-card__media">
        ${badgeText}
        <img loading="lazy" src="${tour.img}" alt="${title}">
      </div>

      <div class="tour-card__body">
        <h3 class="tour-card__title">${title}</h3>

        <div class="tour-card__meta">
          ${daysMeta}
          <span>${labelText}</span>
        </div>

        <p class="tour-card__desc">${desc}</p>

        <div class="tour-card__actions">
          <a class="btn btn--primary" href="${tour.link}" target="_blank" rel="noopener">
            ${btnText}
          </a>
        </div>
      </div>
    </article>
  `;
}

function getFilteredTours() {
  if (activeFilter === "all") return TOURS;
  return TOURS.filter((t) => t.tag === activeFilter);
}

function render() {
  const list = getFilteredTours();
  const slice = list.slice(0, visibleCount);

  grid.innerHTML = slice
    .map((card, idx) => {
      const lang =
        (window.currentLang || localStorage.getItem("siteLang") || "en") ===
        "zh"
          ? "zh"
          : "en";
      const defaultLabel = lang === "zh" ? "拼團日期" : "Group date";
      const label =
        card[`label_${lang}`] ||
        card.label ||
        card.country ||
        defaultLabel ||
        idx + 1;
      return cardHTML(card, label);
    })
    .join("");

  // Load more button
  if (list.length <= visibleCount) {
    loadMoreBtn.classList.add("is-hidden");
  } else {
    loadMoreBtn.classList.remove("is-hidden");
  }
}

chips.forEach((btn) => {
  btn.addEventListener("click", () => {
    chips.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    activeFilter = btn.dataset.filter;
    visibleCount = 6; // reset when filter changes
    render();
  });
});

loadMoreBtn.addEventListener("click", () => {
  visibleCount += 6; // add another 6 each click
  render();
});

// initial render
render();

// re-render when language changes
window.renderTours = render;
