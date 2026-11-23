const root = document.documentElement;
const themeToggle = document.querySelector(".theme-switch");
const themeMeta = document.getElementById("theme-color");
const modeLabel = document.querySelector(".hero__mode-label");

const setMode = (mode, persist) => {
  const light = mode === "kerja";
  root.dataset.mode = mode;

  if (themeToggle) {
    themeToggle.setAttribute("aria-checked", light ? "false" : "true");
    themeToggle.title = light ? "Ganti ke mode gelap" : "Ganti ke mode terang";
  }

  if (modeLabel) {
    modeLabel.textContent = light ? "siang" : "malam";
  }

  if (themeMeta) {
    themeMeta.content = light ? "#FAFAFB" : "#181616";
  }

  if (persist) {
    try {
      localStorage.setItem("portfolio-mode", mode);
    } catch (error) {}
  }
};

setMode(root.dataset.mode === "kerja" ? "kerja" : "showcase", false);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setMode(root.dataset.mode === "kerja" ? "showcase" : "kerja", true);
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = Array.from(document.querySelectorAll(".reveal"));

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0 }
  );

  const inFirstView = (item) => {
    const rect = item.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
  };

  revealItems.forEach((item) => {
    if (inFirstView(item)) {
      item.classList.add("is-visible");
    } else {
      revealer.observe(item);
    }
  });
}

const navLinks = Array.from(document.querySelectorAll(".nav a"));
const spyTargets = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const clearCurrent = () => {
  navLinks.forEach((link) => link.removeAttribute("aria-current"));
};

if (spyTargets.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  spyTargets.forEach((target) => spy.observe(target));

  const hero = document.getElementById("atas");
  if (hero) {
    const heroSpy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) clearCurrent();
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    heroSpy.observe(hero);
  }
}

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
