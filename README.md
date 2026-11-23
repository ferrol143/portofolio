# Portofolio Ferrol Azki Mashudi

Website portofolio statis untuk menampilkan proyek, layanan, dan pengalaman Ferrol sebagai software engineer.

## Isi

- **Beranda** (`index.html`): perkenalan, statistik, tiga proyek pilihan, layanan dengan alur kerja yang bisa dibuka, dan kontak.
- **Indeks proyek** (`proyek.html`): tujuh proyek dengan filter, catatan detail, publikasi, dan kompetisi.
- Mode terang sebagai bawaan; pilihan terang/gelap disimpan di browser.
- Responsif, ramah keyboard, dan menghormati `prefers-reduced-motion`.

## Teknologi

HTML, CSS, dan JavaScript tanpa framework atau build step. anime.js, gambar, dan aset lain disimpan di repo. Font dimuat dari Google Fonts.

## Menjalankan lokal

Buka `index.html` langsung, atau jalankan server statis dari folder ini:

```bash
npx serve .
```

## Deploy ke Vercel

Repo ini siap di-deploy sebagai situs statis:

1. Import repo `ferrol143/portofolio` di Vercel.
2. Vercel mendeteksi situs statis; tidak perlu build command.
3. Deploy.

Lewat CLI:

```bash
npx vercel --prod
```

`vercel.json` mengaktifkan clean URL tanpa trailing slash.

## Struktur

```
index.html / proyek.html   dua halaman
styles.css / proyek.css    tampilan
script.js / proyek.js      interaksi
assets/proyek/             gambar proyek
vendor/                    anime.js
```

Folder `public_html/` berisi aset lama dan tidak dipakai.

## Tautan

- GitHub: https://github.com/ferrol143
- LinkedIn: https://www.linkedin.com/in/ferrol-azki-mashudi/
