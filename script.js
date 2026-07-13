const links = {
  codex: "https://chatgpt.com/codex/",
  desktop: "https://chatgpt.com/features/desktop/",
  appDocs: "https://learn.chatgpt.com/docs/app",
  useChatGPT: "https://learn.chatgpt.com/docs/use-chatgpt",
  pricing: "https://learn.chatgpt.com/docs/pricing",
  rateCard: "https://help.openai.com/en/articles/20001106-codex-rate-card",
  plugins: "https://learn.chatgpt.com/docs/plugins",
  computerUse: "https://learn.chatgpt.com/docs/computer-use",
  skillsPlugins: "https://learn.chatgpt.com/docs/skills-and-plugins",
  buildSkills: "https://learn.chatgpt.com/docs/build-skills",
  githubRank: "https://github.com/EvanLi/Github-Ranking/blob/master/Top100/Top-100-stars.md",
  superpowers: "https://github.com/obra/superpowers",
  ohMySkills: "https://github.com/AIjunja/oh-my-skills",
  getdesign: "https://getdesign.md/",
  ohMyDesign: "https://oh-my-design.kr/",
  noonnu: "https://noonnu.cc/font_page/366",
  lucide: "https://lucide.dev/icons/",
  portfolio: "https://portpolio-at0.pages.dev/",
  jirit: "https://github.com/AIjunja/Microsoft_ML_project_JiRit",
  cardNews: "https://github.com/AIjunja/Codex-Auto-Card-News",
  youtube: "https://www.youtube.com/@AI쭌",
  instagram: "https://www.instagram.com/ai_jjuun/",
  threads: "https://www.threads.com/@ai_jjuun",
  classNotion: "https://app.notion.com/p/39c223206063816c8199fca0ccb7f619",
  chatgpt: "https://chatgpt.com/",
};

const img = {
  codex: "./assets/screenshots/01_codex_official_hero.png",
  desktop: "./assets/screenshots/02_chatgpt_desktop_download.png",
  appDocs: "./assets/screenshots/03_chatgpt_app_docs.png",
  useChatGPT: "./assets/screenshots/04_use_chatgpt_work_codex_compare.png",
  pricing: "./assets/screenshots/05_pricing_plan_table.png",
  rateCard: "./assets/screenshots/06_codex_rate_card.png",
  plugins: "./assets/screenshots/07_plugins_docs.png",
  computerUse: "./assets/screenshots/08_computer_use_docs.png",
  skillsPlugins: "./assets/screenshots/09_skills_and_plugins_docs.png",
  buildSkills: "./assets/screenshots/10_build_skills_docs.png",
  githubRank: "./assets/screenshots/11_github_ranking_superpowers.png",
  superpowers: "./assets/screenshots/12_superpowers_github.png",
  ohMySkillsRepo: "./assets/screenshots/13_oh_my_skills_github.png",
  getdesign: "./assets/screenshots/14_getdesign_home.png",
  ohMyDesign: "./assets/screenshots/15_oh_my_design_home.png",
  noonnu: "./assets/screenshots/16_noonnu_gmarket_sans.png",
  lucide: "./assets/screenshots/17_lucide_icons.png",
  portfolio: "./assets/screenshots/18_portfolio_site.png",
  jiritRepo: "./assets/screenshots/19_project_jirit_repo.png",
  cardNewsRepo: "./assets/screenshots/20_project_card_news_repo.png",
  youtubeShot: "./assets/screenshots/21_youtube_aijjun.png",
  instagramShot: "./assets/screenshots/22_instagram_aijjun.png",
  threadsShot: "./assets/screenshots/23_threads_aijjun.png",
  jirit: "./assets/projects/jirit.png",
  cardNews: "./assets/projects/card-news.png",
  ohMySkills: "./assets/projects/oh-my-skills.png",
  neededCodexTab: "./assets/needed/needed_01_codex_tab_in_chatgpt_app.png",
  neededModel: "./assets/needed/needed_02_codex_model_dropdown.png",
  neededProjectChat: "./assets/needed/needed_03_project_vs_chat_real_screen.png",
  neededPlugin: "./assets/needed/needed_04_plugin_browser_computer_use.png",
  neededSuperpowers: "./assets/needed/needed_05_superpowers_install_flow.png",
  neededPortfolio: "./assets/needed/needed_06_portfolio_first_result.png",
  qrYoutube: "./assets/qr/youtube.png",
  qrInstagram: "./assets/qr/instagram.png",
  qrThreads: "./assets/qr/threads.png",
  qrClass: "./assets/qr/class_notion.png",
};

const slides = [
  {
    theme: "dark",
    cover: true,
    kicker: "VIBE 코딩 실습",
    title: "코덱스\n왜 안 쓰세요?",
    body: "ChatGPT 유료 구독 중이면, 오늘부터 프로젝트 속도가 달라집니다.",
    definition: ["오늘 목표", "설명보다 실습. 검색보다 제작. 완성보다 직접 수정하는 감각."],
    mediaMode: "single",
    media: [
      card("Codex 공식 화면", img.codex, links.codex),
    ],
  },
  {
    kicker: "목차",
    title: "오늘은 이렇게 갑니다.",
    body: "캡처를 보고, 바로 열고, 그대로 따라 합니다.",
    agenda: [
      "1. 코덱스와 GPT 앱 요금제 / 코덱스 개념",
      "2. 코덱스 설치 및 로그인",
      "3. 모델 선택 / 프로젝트와 채팅 차이",
      "4. 일반 프롬프트로 포트폴리오 만들기",
      "5. 플러그인과 Computer Use",
      "6. 스킬과 GitHub Skill",
      "7. 플러그인과 스킬의 차이",
      "8. 하네스 엔지니어링과 Superpowers",
      "9. 디자인 하네스 구축",
      "10. 만든 프로젝트 소개",
      "11. Q&A / 구독 CTA",
    ],
    mediaMode: "single",
    media: [
      card("전체 캡처 에셋 시트", "./assets/screenshots_contact_sheet.png", "./assets/screenshots_contact_sheet.png"),
    ],
  },
  {
    kicker: "01 / Codex & Plan",
    title: "앱 구조만 먼저 잡습니다.",
    body: "Codex는 파일을 만들고 고치는 AI 코딩 파트너입니다.",
    definition: ["Codex", "대화로 요구사항을 받고, 파일 생성·수정·실행·검수까지 이어가는 작업 공간."],
    steps: ["요금제는 접속 가능 여부와 Usage 확인이 핵심", "Codex 사용량은 작업 크기와 모델 선택에 따라 달라짐"],
    media: [
      card("Codex 공식 소개", img.codex, links.codex),
      card("요금제 화면", img.pricing, links.pricing),
      card("Codex Rate Card", img.rateCard, links.rateCard),
      card("ChatGPT 앱 문서", img.appDocs, links.appDocs),
    ],
  },
  {
    kicker: "02 / Install & Login",
    title: "먼저 앱을 엽니다.",
    body: "ChatGPT 데스크톱 앱을 열고, 같은 계정으로 로그인합니다.",
    steps: ["ChatGPT 앱 설치", "로그인", "왼쪽 메뉴에서 Codex 확인"],
    media: [
      card("데스크톱 앱 다운로드", img.desktop, links.desktop),
      card("ChatGPT 앱 문서", img.appDocs, links.appDocs),
      card("Codex 탭 캡처 필요", img.neededCodexTab, links.chatgpt),
    ],
  },
  {
    kicker: "03 / Model & Workspace",
    title: "모델은 빠르게, 깊게.",
    body: "Chat은 물어보는 곳. Project는 실제로 만드는 곳.",
    definition: ["선택 기준", "Fast는 빠른 확인, Balanced는 기본 제작, Deep은 막힌 문제 해결."],
    media: [
      card("Chat / Work / Codex 비교", img.useChatGPT, links.useChatGPT),
      card("모델 선택 캡처 필요", img.neededModel, links.chatgpt),
      card("Project vs Chat 캡처 필요", img.neededProjectChat, links.chatgpt),
    ],
  },
  {
    kicker: "04 / First Prompt",
    title: "프롬프트 하나로 만듭니다.",
    body: "처음 결과물은 완성이 아니라 대화의 시작입니다.",
    prompt: `개인 포트폴리오 웹사이트를 만들어줘.

대상: 강사, 리크루터, 협업자
필수 섹션: Hero / About / Projects 3개 / 교육 경험 / Contact
디자인: 미니멀, 신뢰감, 카드 radius 8px 이하, Lucide 아이콘

먼저 파일 구조를 제안하고 구현해줘.`,
    media: [
      card("포트폴리오 예시", img.portfolio, links.portfolio),
      card("첫 결과물 캡처 필요", img.neededPortfolio, links.chatgpt),
    ],
  },
  {
    kicker: "05 / Plugin",
    title: "Plugin은 도구 연결입니다.",
    body: "밖의 기능을 연결해서 Codex가 할 수 있는 일을 늘립니다.",
    definition: ["Plugin", "외부 앱, 서비스, 브라우저, 문서, GitHub 같은 기능을 붙이는 확장."],
    steps: ["대표 예시: Computer Use", "웹 지원서, 브라우저 확인, 반복 입력에 사용"],
    media: [
      card("Plugins 문서", img.plugins, links.plugins),
      card("Computer Use 문서", img.computerUse, links.computerUse),
      card("Computer Use 캡처 필요", img.neededPlugin, links.chatgpt),
    ],
  },
  {
    kicker: "06 / Skill",
    title: "Skill은 작업법입니다.",
    body: "반복해서 잘하고 싶은 일을 AI에게 설명서처럼 붙입니다.",
    definition: ["Skill", "특정 업무를 같은 방식으로 처리하게 만드는 지침, 자료, 스크립트 묶음."],
    steps: ["Humanize Korean: 한국어 자연화", "oh-my-skills: 필요한 스킬 검색/설치 흐름", "GitHub Rank: 유명한 레포 확인"],
    media: [
      card("Skills & Plugins", img.skillsPlugins, links.skillsPlugins),
      card("Build Skills", img.buildSkills, links.buildSkills),
      card("GitHub Skill Rank", img.githubRank, links.githubRank),
      card("oh-my-skills", img.ohMySkillsRepo, links.ohMySkills),
    ],
  },
  {
    kicker: "07 / Plugin vs Skill",
    title: "연결과 습관은 다릅니다.",
    body: "Plugin은 밖으로 나가게 하고, Skill은 일하는 방식을 바꿉니다.",
    cards: [
      ["Plugin", "외부 기능 연결. 브라우저, GitHub, 문서, 컴퓨터 조작."],
      ["Skill", "작업 절차 내장. 글쓰기, 리뷰, 제작, 검수 방식."],
      ["같이 쓰면", "도구는 플러그인으로 연결하고, 반복 방식은 스킬로 고정."],
    ],
    media: [
      card("Plugins 문서", img.plugins, links.plugins),
      card("Skills 문서", img.skillsPlugins, links.skillsPlugins),
    ],
  },
  {
    kicker: "08 / Harness",
    title: "Harness는 작업대입니다.",
    body: "AI가 일할 입력, 도구, 규칙, 검수 기준, 출력을 한 번에 묶습니다.",
    definition: ["Harness Engineering", "그냥 부탁하는 것이 아니라, AI가 안정적으로 일할 환경을 설계하는 방식."],
    prompt: `using-superpowers를 사용해서
개인 포트폴리오 웹사이트를 만들어줘.

목표 정리 → 파일 구조 제안 → 구현 → 검수 → 개선 순서로 진행해줘.`,
    media: [
      card("Superpowers GitHub", img.superpowers, links.superpowers),
      card("GitHub Ranking", img.githubRank, links.githubRank),
      card("Superpowers 설치 캡처 필요", img.neededSuperpowers, links.superpowers),
    ],
  },
  {
    kicker: "09 / Design Harness",
    title: "디자인은 기준으로 줍니다.",
    body: "감으로 고치지 말고 DESIGN.md, 폰트, 아이콘 기준을 붙입니다.",
    definition: ["Design Harness", "디자인 취향을 말로 설명하지 않고, 참고 사이트와 규칙 파일로 전달하는 방식."],
    prompt: `첨부한 DESIGN.md를 기준으로
현재 포트폴리오 웹사이트의 디자인을 개선해줘.

첫 화면, 프로젝트, 버튼, 모바일 줄바꿈, 타이포그래피, 여백, CTA를 확인해줘.`,
    media: [
      card("getdesign.md", img.getdesign, links.getdesign),
      card("oh-my-design", img.ohMyDesign, links.ohMyDesign),
      card("눈누 G마켓 산스", img.noonnu, links.noonnu),
      card("Lucide Icons", img.lucide, links.lucide),
    ],
  },
  {
    kicker: "10 / Projects",
    title: "실제로 만든 것들.",
    body: "강의 예시는 직접 만든 프로젝트에서 가져옵니다.",
    mediaMode: "three",
    media: [
      card("찌릿", img.jirit, links.jirit),
      card("오 마이 디자인", img.ohMyDesign, links.ohMyDesign),
      card("카드뉴스 자동화", img.cardNews, links.cardNews),
      card("oh-my-skills", img.ohMySkills, links.ohMySkills),
      card("찌릿 GitHub", img.jiritRepo, links.jirit),
      card("카드뉴스 GitHub", img.cardNewsRepo, links.cardNews),
    ],
  },
  {
    theme: "dark",
    kicker: "11 / Q&A",
    title: "질문하고, 계속 같이 만듭시다.",
    body: "오늘 만든 건 끝이 아니라 다음 프로젝트에서 바로 쓰는 시작입니다.",
    qr: [
      ["YouTube", img.qrYoutube, links.youtube],
      ["Instagram", img.qrInstagram, links.instagram],
      ["Threads", img.qrThreads, links.threads],
      ["수업자료", img.qrClass, links.classNotion],
    ],
    meta: "youtube.com/@AI쭌 · instagram.com/ai_jjuun · threads.com/@ai_jjuun",
  },
];

function card(title, src, href) {
  return { title, src, href };
}

function createImageCard(item) {
  const a = document.createElement("a");
  a.className = "image-card";
  a.href = item.href || item.src;
  a.target = "_blank";
  a.rel = "noreferrer";

  const image = document.createElement("img");
  image.src = item.src;
  image.alt = item.title;
  image.loading = "lazy";

  const caption = document.createElement("div");
  caption.className = "card-caption";
  caption.innerHTML = `<span class="card-title">${escapeHtml(item.title)}</span><span class="card-url">${escapeHtml(item.href || item.src)}</span>`;

  a.append(image, caption);
  return a;
}

function createSlide(slide, index) {
  const section = document.createElement("section");
  section.id = `slide-${index}`;
  section.className = [
    "slide",
    slide.theme === "dark" ? "dark" : "",
    slide.cover ? "cover" : "",
    index === 0 ? "active" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const copy = document.createElement("div");
  copy.className = "copy-panel";
  copy.innerHTML = `
    <p class="kicker">${escapeHtml(slide.kicker)}</p>
    <h1 class="slide-title">${formatTitle(slide.title)}</h1>
    <p class="body-copy">${escapeHtml(slide.body || "")}</p>
  `;

  if (slide.definition) {
    const box = document.createElement("div");
    box.className = "definition";
    box.innerHTML = `<strong>${escapeHtml(slide.definition[0])}</strong>${escapeHtml(slide.definition[1])}`;
    copy.append(box);
  }

  if (slide.steps) {
    const ul = document.createElement("ul");
    ul.className = "steps";
    ul.innerHTML = slide.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("");
    copy.append(ul);
  }

  if (slide.agenda) {
    const ol = document.createElement("ol");
    ol.className = "agenda-list";
    ol.innerHTML = slide.agenda.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    copy.append(ol);
  }

  if (slide.prompt) {
    const pre = document.createElement("pre");
    pre.className = "prompt-box";
    pre.textContent = slide.prompt;
    copy.append(pre);
  }

  if (slide.cards) {
    const cards = document.createElement("div");
    cards.className = "media-grid three";
    cards.innerHTML = slide.cards
      .map(
        ([title, text]) =>
          `<article class="mini-card"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span></article>`,
      )
      .join("");
    copy.append(cards);
  }

  if (slide.meta) {
    const meta = document.createElement("p");
    meta.className = "meta-line";
    meta.textContent = slide.meta;
    copy.append(meta);
  }

  const media = document.createElement("div");
  if (slide.qr) {
    media.className = "qr-grid";
    slide.qr.forEach(([title, src, href]) => {
      const a = document.createElement("a");
      a.className = "qr-card";
      a.href = href;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.innerHTML = `<img src="${src}" alt="${escapeHtml(title)} QR" loading="lazy" /><span>${escapeHtml(title)}</span>`;
      media.append(a);
    });
  } else {
    media.className = `media-grid ${slide.mediaMode || ""}`;
    (slide.media || []).forEach((item) => media.append(createImageCard(item)));
  }

  section.append(copy, media);
  return section;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatTitle(value) {
  return escapeHtml(value).replaceAll("\n", "<br>");
}

const deck = document.getElementById("deck");
const progressBar = document.getElementById("progressBar");
const counter = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;

slides.forEach((slide, index) => deck.append(createSlide(slide, index)));

function updateProgress() {
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
  progressBar.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

function goToSlide(index) {
  currentSlide = Math.min(slides.length - 1, Math.max(0, index));
  document.querySelectorAll(".slide").forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
  updateProgress();
}

prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
  },
  { passive: false },
);

window.addEventListener(
  "touchmove",
  (event) => {
    event.preventDefault();
  },
  { passive: false },
);

window.addEventListener("resize", updateProgress);
updateProgress();
