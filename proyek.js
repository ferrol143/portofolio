(() => {
  const root = document.documentElement;
  const animeLib = window.anime;
  const hasAnime =
    Boolean(animeLib) &&
    typeof animeLib.animate === "function" &&
    typeof animeLib.createTimeline === "function" &&
    typeof animeLib.stagger === "function";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!hasAnime || reduceMotion) {
    root.classList.add("motion-off");
  }

  /* ------------------------------------------------------------------------
     Tema
     ----------------------------------------------------------------------- */

  const themeToggle = document.querySelector(".theme-switch");
  const themeMeta = document.getElementById("theme-color");
  const modeLabel = document.querySelector(".index-mode-label");

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

  setMode(root.dataset.mode === "showcase" ? "showcase" : "kerja", false);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setMode(root.dataset.mode === "kerja" ? "showcase" : "kerja", true);
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  /* ------------------------------------------------------------------------
     Data catatan proyek
     ----------------------------------------------------------------------- */

  const projectData = {
    "peta-bima": {
      title: "Peta Bima",
      kicker: "Pemerintahan / Riset · 2025",
      summary:
        "Dasbor pemetaan riset nasional yang menghubungkan pernyataan masalah riset dengan delapan fokus Asta Cita. Kementerian memakainya sebagai acuan utama untuk melihat celah riset per wilayah, institusi, dan fokus.",
      facts: [
        ["Peran", "Pengembangan dasbor dan deployment."],
        [
          "Konteks",
          "Magang Software Engineer di Kementerian Pendidikan Tinggi, Sains, dan Teknologi, 2025.",
        ],
        [
          "Fokus",
          "Memetakan pernyataan masalah riset ke delapan fokus Asta Cita, lalu membacanya per wilayah, institusi, dan fokus.",
        ],
        ["Stack", "JavaScript, Leaflet, Tailwind CSS, JSON, Vercel."],
      ],
      link: null,
    },
    "ksti-2025": {
      title: "KSTI 2025",
      kicker: "Pemerintahan / Acara · 2025",
      summary:
        "Website resmi Konvensi Sains, Teknologi, dan Industri Indonesia. Mencakup pendaftaran, absensi, jadwal, dan informasi untuk 7.000+ peserta.",
      facts: [
        ["Peran", "Pengembangan website resmi, registrasi, absensi, dan jadwal acara."],
        ["Konteks", "KSTI 2025 di Kementerian Pendidikan Tinggi, Sains, dan Teknologi."],
        ["Peserta", "7.000+ peserta."],
        ["Stack", "Laravel 12, PHP, MySQL, JavaScript, PHPMailer."],
      ],
      link: null,
    },
    simenu: {
      title: "siMenu",
      kicker: "Produk / POS · Tugas akhir",
      summary:
        "Platform pemesanan berbasis QR Code untuk restoran. Alurnya mencakup pesanan pelanggan, dapur, waiter, dan dashboard admin dalam satu sistem.",
      facts: [
        ["Peran", "Pengembangan platform, pengujian, dan penulisan publikasi."],
        [
          "Konteks",
          "Tugas akhir; dipublikasikan di Switch Jurnal Sains dan Teknologi Informasi Vol. 03 No. 1 (2025).",
        ],
        [
          "Alur",
          "Pesanan pelanggan, dapur, waiter, dan dashboard admin dalam satu sistem.",
        ],
        [
          "Stack",
          "TypeScript, Express, Prisma, MySQL, React, Docker, Midtrans, WebSocket.",
        ],
      ],
      link: {
        href: "https://doi.org/10.62951/switch.v3i1.327",
        label: "Buka publikasi siMenu di DOI, tab baru",
      },
    },
    maxpro: {
      title: "Maxpro",
      kicker: "Produk / Outsourcing · Freelance",
      summary:
        "Platform berbasis web untuk mengelola proses outsourcing. Saya mengerjakan backend, migrasi API dari Express.js ke NestJS, dan desain database MySQL.",
      facts: [
        ["Peran", "Backend, desain database, dan migrasi API dari Express.js ke NestJS."],
        [
          "Konteks",
          "Freelance backend engineer di PT Bangun Sinar Indonesia, 2024–2026.",
        ],
        [
          "Cakupan",
          "Autentikasi, otorisasi, integrasi layanan pihak ketiga, dan deployment.",
        ],
        [
          "Stack",
          "TypeScript, NestJS, Prisma, MySQL, Next.js, Tailwind CSS, Leaflet, ApexCharts.",
        ],
      ],
      link: null,
    },
    aeternum: {
      title: "Aeternum",
      kicker: "Blockchain / Sertifikat · Kompetisi",
      summary:
        "Sertifikat digital yang aman dan terverifikasi dengan teknologi blockchain. Proyek ini mencakup penerbitan, verifikasi, dan halaman publik untuk memeriksa keaslian sertifikat.",
      facts: [
        ["Peran", "Pengembangan aplikasi web dan integrasi blockchain."],
        ["Konteks", "Proyek kompetisi."],
        [
          "Fokus",
          "Penerbitan, verifikasi, dan halaman publik untuk memeriksa keaslian sertifikat.",
        ],
        ["Stack", "React, Ethers.js, Web3, Truffle, Bootstrap."],
      ],
      link: null,
    },
    "projecthub-id": {
      title: "ProjectHub.ID",
      kicker: "Marketplace / Freelance",
      summary:
        "Platform marketplace kerja dan proyek yang membantu pengguna merekrut freelancer, mencari pekerjaan, dan mengamankan transaksi.",
      facts: [
        ["Peran", "Pengembangan aplikasi web."],
        ["Konteks", "Marketplace kerja dan proyek."],
        [
          "Fokus",
          "Rekrutmen freelancer, pencarian kerja, dan alur transaksi yang aman.",
        ],
        ["Stack", "Laravel 10, Tailwind CSS, daisyUI, Vite, Midtrans, Pusher."],
      ],
      link: null,
    },
    butchery: {
      title: "Butchery",
      kicker: "Marketplace / E-commerce",
      summary:
        "Platform layanan dan transaksi antara penjual dan pembeli daging. Mencakup katalog produk, keranjang, alamat pengiriman, dan pembayaran.",
      facts: [
        ["Peran", "Pengembangan aplikasi web."],
        ["Konteks", "Platform jual beli daging."],
        ["Fokus", "Katalog produk, keranjang, alamat pengiriman, dan pembayaran."],
        ["Stack", "Laravel 12, Tailwind CSS, daisyUI, MySQL, Midtrans."],
      ],
      link: null,
    },
  };

  /* ------------------------------------------------------------------------
     Animasi hero
     ----------------------------------------------------------------------- */

  const heroTitleLines = document.querySelectorAll(".index-hero__title .line > span");

  if (hasAnime && !reduceMotion) {
    const heroTimeline = animeLib.createTimeline({ defaults: { ease: "outQuart" } });

    heroTimeline
      .add(
        ".index-hero__meta",
        { opacity: [0, 1], translateY: [10, 0], duration: 650 },
        0
      )
      .add(
        heroTitleLines,
        {
          translateY: ["112%", "0%"],
          duration: 1000,
          delay: animeLib.stagger(110),
        },
        120
      )
      .add(
        ".index-hero__lede",
        { opacity: [0, 1], translateY: [18, 0], duration: 700 },
        430
      )
      .add(
        ".index-hero__actions",
        { opacity: [0, 1], translateY: [14, 0], duration: 650 },
        570
      )
      .add(".index-hero__feature", { opacity: [0, 1], duration: 700 }, 280)
      .add(
        ".index-hero__feature-frame",
        {
          clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
          duration: 1100,
        },
        280
      )
      .add(
        ".index-hero__feature img",
        { scale: [1.12, 1], duration: 1500 },
        280
      )
      .add(
        ".index-hero__stats li",
        {
          opacity: [0, 1],
          translateY: [16, 0],
          duration: 600,
          delay: animeLib.stagger(80),
        },
        760
      )
      .add(".index-ticker", { opacity: [0, 1], duration: 600 }, 880);

    document.querySelectorAll("[data-count]").forEach((el, index) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const counter = { value: 0 };

      animeLib.animate(counter, {
        value: target,
        duration: 1100,
        delay: 800 + index * 90,
        ease: "outExpo",
        onUpdate: () => {
          el.textContent = String(Math.round(counter.value)).padStart(2, "0");
        },
        onComplete: () => {
          el.textContent = String(target).padStart(2, "0");
        },
      });
    });
  }

  /* ------------------------------------------------------------------------
     Reveal saat scroll
     ----------------------------------------------------------------------- */

  const revealElements = Array.from(document.querySelectorAll("[data-reveal]"));
  let revealObserver = null;

  const revealElement = (el) => {
    if (el.dataset.revealed === "true") return;
    el.dataset.revealed = "true";
    el.classList.add("is-visible");

    if (!hasAnime || reduceMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    animeLib.animate(el, {
      opacity: [0, 1],
      translateY: [28, 0],
      duration: 800,
      ease: "outQuart",
    });

    const media = el.querySelector(".project__media");
    if (media) {
      animeLib.animate(media, {
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"],
        duration: 1000,
        ease: "outQuart",
      });
    }
  };

  if (!("IntersectionObserver" in window) || !hasAnime || reduceMotion) {
    revealElements.forEach(revealElement);
  } else {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          revealObserver.unobserve(entry.target);
          revealElement(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.04 }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        revealElement(el);
      } else {
        revealObserver.observe(el);
      }
    });
  }

  /* ------------------------------------------------------------------------
     Navigasi aktif
     ----------------------------------------------------------------------- */

  const navLinks = Array.from(document.querySelectorAll(".index-nav a"));
  const navTargets = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (navTargets.length && "IntersectionObserver" in window) {
    const setCurrent = (id) => {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );

    navTargets.forEach((target) => navObserver.observe(target));
  }

  /* ------------------------------------------------------------------------
     Filter proyek
     ----------------------------------------------------------------------- */

  const filterButtons = Array.from(document.querySelectorAll(".filter"));
  const projectCards = Array.from(document.querySelectorAll(".project"));
  const filterStatus = document.querySelector(".archive__status");
  let activeFilter = "semua";
  let filterBusy = false;

  const matchesFilter = (card, value) =>
    value === "semua" || card.dataset.category === value;

  const updateStatus = (value) => {
    if (!filterStatus) return;
    const count =
      value === "semua"
        ? projectCards.length
        : projectCards.filter((card) => card.dataset.category === value).length;
    filterStatus.textContent = `Menampilkan ${count} proyek.`;
  };

  const applyFilter = async (value) => {
    if (filterBusy || value === activeFilter) return;
    filterBusy = true;
    activeFilter = value;

    filterButtons.forEach((button) => {
      const active = button.dataset.filter === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const matching = projectCards.filter((card) => matchesFilter(card, value));
    updateStatus(value);

    if (!hasAnime || reduceMotion) {
      projectCards.forEach((card) => {
        const show = matching.includes(card);
        card.hidden = !show;
        if (show) {
          card.classList.add("is-visible");
          card.dataset.revealed = "true";
          card.style.opacity = "1";
          card.style.transform = "none";
        }
      });
      filterBusy = false;
      return;
    }

    const currentlyVisible = projectCards.filter((card) => {
      if (card.hidden) return false;
      return Number.parseFloat(getComputedStyle(card).opacity) > 0.04;
    });

    if (currentlyVisible.length) {
      const exits = currentlyVisible.map((card) => {
        animeLib.remove(card);
        return animeLib.animate(card, {
          opacity: [Number.parseFloat(getComputedStyle(card).opacity), 0],
          translateY: 10,
          duration: 220,
          ease: "inQuad",
        });
      });
      await Promise.all(exits);
    }

    projectCards.forEach((card) => {
      const show = matching.includes(card);
      card.hidden = !show;
      if (!show) return;

      if (revealObserver) revealObserver.unobserve(card);
      card.classList.add("is-visible");
      card.dataset.revealed = "true";
      card.style.opacity = "0";
      card.style.transform = "translateY(16px)";
    });

    const enter = animeLib.animate(matching, {
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 620,
      delay: animeLib.stagger(55),
      ease: "outQuart",
    });

    await enter;
    filterBusy = false;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.filter || "semua");
    });
  });

  /* ------------------------------------------------------------------------
     Hover kartu
     ----------------------------------------------------------------------- */

  if (canHover && hasAnime && !reduceMotion) {
    projectCards.forEach((card) => {
      const image = card.querySelector(".project__media img");
      const stamp = card.querySelector(".project__stamp");
      if (!image) return;

      const enter = () => {
        animeLib.remove(image);
        animeLib.animate(image, {
          scale: 1.045,
          duration: 900,
          ease: "outQuart",
        });
        if (stamp) {
          animeLib.remove(stamp);
          animeLib.animate(stamp, {
            translateY: -3,
            duration: 600,
            ease: "outQuart",
          });
        }
      };

      const leave = () => {
        animeLib.remove(image);
        animeLib.animate(image, {
          scale: 1,
          duration: 700,
          ease: "outQuart",
        });
        if (stamp) {
          animeLib.remove(stamp);
          animeLib.animate(stamp, {
            translateY: 0,
            duration: 500,
            ease: "outQuart",
          });
        }
      };

      card.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "touch") return;
        enter();
      });
      card.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "touch") return;
        leave();
      });
    });
  }

  /* ------------------------------------------------------------------------
     Dialog catatan proyek
     ----------------------------------------------------------------------- */

  const dialog = document.getElementById("project-dialog");
  const dialogPanel = dialog ? dialog.querySelector(".project-dialog__panel") : null;
  const dialogKicker = document.getElementById("dialog-kicker");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogSummary = document.getElementById("dialog-summary");
  const dialogFacts = document.getElementById("dialog-facts");
  const dialogLink = document.getElementById("dialog-link");
  let lastTrigger = null;
  let dialogClosing = false;

  const fillDialog = (data) => {
    if (dialogKicker) dialogKicker.textContent = data.kicker;
    if (dialogTitle) dialogTitle.textContent = data.title;
    if (dialogSummary) dialogSummary.textContent = data.summary;

    if (dialogFacts) {
      dialogFacts.replaceChildren();
      data.facts.forEach(([term, value]) => {
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        const dd = document.createElement("dd");
        dt.textContent = term;
        dd.textContent = value;
        row.append(dt, dd);
        dialogFacts.append(row);
      });
    }

    if (dialogLink) {
      if (data.link) {
        dialogLink.href = data.link.href;
        dialogLink.textContent = "Buka publikasi ↗";
        dialogLink.setAttribute("aria-label", data.link.label);
        dialogLink.hidden = false;
      } else {
        dialogLink.removeAttribute("href");
        dialogLink.removeAttribute("aria-label");
        dialogLink.textContent = "";
        dialogLink.hidden = true;
      }
    }
  };

  const lockScroll = () => {
    const scrollbar = window.innerWidth - root.clientWidth;
    root.style.setProperty("--dialog-scrollbar", `${scrollbar}px`);
    root.classList.add("dialog-open");
  };

  const unlockScroll = () => {
    root.classList.remove("dialog-open");
    root.style.removeProperty("--dialog-scrollbar");
  };

  const openDialog = (key, trigger) => {
    const data = projectData[key];
    if (!dialog || !data) return;

    fillDialog(data);
    lastTrigger = trigger;

    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }

    lockScroll();

    if (dialogPanel) {
      if (hasAnime && !reduceMotion) {
        animeLib.remove(dialogPanel);
        animeLib.animate(dialogPanel, {
          opacity: [0, 1],
          translateY: [24, 0],
          scale: [0.985, 1],
          duration: 440,
          ease: "outQuart",
        });
      } else {
        dialogPanel.style.opacity = "1";
        dialogPanel.style.transform = "none";
      }
    }
  };

  const closeDialog = () => {
    if (!dialog || !dialog.open || dialogClosing) return;
    dialogClosing = true;

    const finish = () => {
      dialog.close();
      dialogClosing = false;
    };

    if (dialogPanel && hasAnime && !reduceMotion) {
      animeLib.remove(dialogPanel);
      animeLib.animate(dialogPanel, {
        opacity: [1, 0],
        translateY: [0, 14],
        duration: 220,
        ease: "inQuad",
        onComplete: finish,
      });
    } else {
      finish();
    }
  };

  document.querySelectorAll(".project__open").forEach((button) => {
    button.addEventListener("click", () => {
      openDialog(button.dataset.project, button);
    });
  });

  if (dialog) {
    const closeButton = dialog.querySelector(".project-dialog__close");
    if (closeButton) closeButton.addEventListener("click", closeDialog);

    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog();
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog();
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        dialog.querySelectorAll("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])")
      ).filter((el) => !el.hidden && el.offsetParent !== null);
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    dialog.addEventListener("close", () => {
      unlockScroll();
      if (dialogPanel) {
        dialogPanel.style.removeProperty("opacity");
        dialogPanel.style.removeProperty("transform");
      }
      if (lastTrigger && document.contains(lastTrigger)) {
        lastTrigger.focus();
      }
    });
  }
})();
