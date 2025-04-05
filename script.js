// モバイルメニューの切り替え
const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// スムーススクロール (CSSでオフセットを処理するため、JSでの計算は不要)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // e.preventDefault(); // デフォルトのアンカー動作を許可

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    // モバイルメニューが開いていれば閉じる
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      mobileMenu.classList.remove("active"); // ハンバーガーメニューのアイコンも戻す
    }
  });
});

// FAQの切り替え
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// 言語切り替えは不要
