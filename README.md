# Portfolio

Portfolio dua halaman: beranda satu layar penuh dan indeks proyek. Keduanya memakai dua mode yang sama: **Kerja** terang (aksen teal) sebagai default, dan **Showcase** gelap (aksen merah). Token dan nada visualnya mengikuti panduan desain `gaya-personal`.

Halaman indeks memakai anime.js 4.5.0 yang sudah di-vendor. Tidak ada build step dan tidak ada dependensi runtime di luar file situs.

Aset template lama ada di `public_html/` dan tidak dipakai. Situs versi sebelumnya ada di `old/`, di luar folder ini, dan tidak diubah.

## Menjalankan

Buka `index.html` langsung di browser, lalu masuk ke halaman proyek lewat tautan **Lihat semua 7 proyek**. Tidak perlu server atau build step.

Font diambil dari Google Fonts (Nunito dan JetBrains Mono). Kalau mau offline, unduh kedua font lalu ganti tag `<link>` dengan `@font-face` dan host sendiri.

## Struktur

```
index.html   beranda: hero, statistik, tiga proyek pilihan, layanan, cara kerja, kontak
styles.css   token dua mode, layout beranda, komponen bersama
script.js    toggle mode + simpan pilihan, reveal, scroll-spy, tahun footer
proyek.html  indeks tujuh proyek, riset, kontak
proyek.css   layout indeks, filter, dialog, responsif, reduced-motion, print
proyek.js    tema, timeline hero, reveal, filter, hover, dialog, anime.js fallback
assets/proyek/ 14 gambar WebP: 7 proyek x 600/1200 px
vendor/      anime.umd.min.js 4.5.0 + lisensi
favicon.svg  ikon merah dengan huruf F
robots.txt   aturan crawler
public_html/ aset template lama, tidak dipakai
```

`old/` berada di root repo dan hanya menjadi arsip versi sebelumnya.

## Isi beranda

1. Hero: satu pernyataan, satu tombol utama, dan satu tautan email. Latar hero menampilkan langit: matahari besar di sudut saat terang, bulan sabit dan bintang saat gelap. Sakelar mode ada di bawah judul dan menjadi satu-satunya pemicu animasi langit.
2. Statistik: 1,5+ tahun pengalaman, 07 proyek, dan 02 juara 1 kompetisi.
3. Proyek: tiga kartu pilihan dengan rasio sama, kartu tengah diturunkan agar terasa showcase. Di bawahnya ada tautan **Lihat semua 7 proyek** ke `proyek.html` dan catatan kategori indeks.
4. Layanan: kata raksasa (Aplikasi web, API & data, Deployment). Tiap layanan bisa dibuka untuk melihat alur kerjanya dalam lima langkah.
5. Marquee teknologi: berhenti saat hover, mati saat `prefers-reduced-motion`.
6. Cara kerja: tiga kartu miring, krem di mode gelap dan putih bergaris di mode terang.
7. Kontak: satu kalimat dan tombol email.
8. Footer: email, LinkedIn, GitHub, Beranda, dan copyright. Tanpa wordmark raksasa.
9. Navbar: tiga tautan. Di halaman proyek, navbar menempel di atas dan memakai scroll-spy.

## Isi indeks proyek

Halaman `proyek.html` adalah arsip editorial, bukan pengulangan beranda:

- Hero memakai tangkapan layar asli Peta Bima sebagai proyek unggulan, dengan statistik 07 proyek, 02 proyek kementerian, dan 02 juara 1 kompetisi.
- Ticker berisi tujuh nama proyek.
- Filter: Semua 07, Pemerintahan 02, Produk 02, Marketplace 02, Blockchain 01.
- Tujuh catatan proyek: Peta Bima, KSTI 2025, siMenu, Maxpro, Aeternum, ProjectHub.ID, dan Butchery.
- Setiap catatan punya tombol **Catatan proyek** yang membuka dialog berisi peran, konteks, fokus, dan stack. Hanya siMenu yang punya tautan eksternal: DOI publikasinya.
- Bagian riset memuat lima publikasi dan empat jejak kompetisi dari CV. Di layar 960px ke atas, publikasi dan kompetisi disusun bersebelahan (kiri-kanan); di bawahnya menumpuk vertikal.
- Kontak dan footer sama nadanya dengan beranda.

Gambar proyek memakai artefak asli dari repositori: tangkapan layar Peta Bima dan KSTI 2025; poster/mockup untuk siMenu, Maxpro, Aeternum, ProjectHub.ID, dan Butchery. Beberapa poster memang memakai bahasa Inggris dan gradasi sebagai bagian dari karya aslinya. Aturan tanpa gradasi dan tanpa bayangan berlaku untuk UI situs, bukan untuk gambar proyek.

Semua gambar dioptimalkan ke WebP lebar 600 dan 1200 px. Versi asli yang besar tidak ikut dikirim.

## Token yang dipakai

| Hal | Gelap (Showcase) | Terang (Kerja) |
| --- | --- | --- |
| Latar | `#181616` | `#FAFAFB` |
| Teks | `#FFFDDB`, sekunder 55% opasitas | `#1B1F2A`, sekunder `#5B6475` |
| Aksen | `#FF3831` | `#0F8B8D`, tombol `#0B6F71` |
| Aksen kecil | `#B3261E` untuk chip/filter aktif | `#0B6F71` |
| Panel | `#333333` | `#FFFFFF` |
| Garis | `#46443D` | `#E4E7EC` |
| Radius | `0.8rem` | `8px` |
| Font | Nunito 400/500/700/800, italic 400 untuk kata aksen | sama |
| Mono | JetBrains Mono 400/500 | sama |
| Skala | `display` 11rem, `h2` 7.35, `h3` 4, `h5` 2.2, isi 1.8, caption 1.4 | sama, karena memakai skala fluid yang sama |
| Gerak | `0.75s cubic-bezier(.19, 1, .22, 1)` | hover 0,2s, tanpa sapuan tombol |
| Langit | Matahari turun, bulan naik, bintang muncul. `1.1s cubic-bezier(.45, 0, .15, 1)` | sama, dengan warna aksen teal |
| Sakelar | Knob bergeser `0.45s`, ikon matahari/bulan crossfade `0.3s` | sama |

`1rem` dihitung dari lebar layar: `(100vw / 1800) * 10`, mentok di 11px. Artinya di 1440px, 1rem sekitar 8px, dan di 1800px sekitar 10px.

Mode disimpan di `localStorage` dengan kunci `portfolio-mode`. Default-nya terang; pilihan pengguna dipertahankan saat halaman dibuka lagi, termasuk saat berpindah antara beranda dan indeks proyek.

`--accent-deep` hanya didefinisikan di `proyek.css` untuk teks kecil di atas bidang aksen: angka badge, filter aktif, dan hitungannya. Ini menjaga kontras 4.5:1 tanpa mengubah aksen merah/teal utama di komponen lain.

## Gerak dan interaksi

- anime.js 4.5.0 dimuat dari `vendor/anime.umd.min.js`, bukan CDN.
- Hero indeks memakai timeline: meta, baris judul, lede, tombol, gambar unggulan, statistik, dan ticker.
- Angka statistik menghitung naik dengan `outExpo`.
- Setiap proyek muncul saat masuk viewport dengan reveal opacity/translate dan clip-path pada media.
- Filter menganimasikan kartu keluar/masuk, memperbarui `aria-pressed`, atribut `hidden`, dan status live.
- Layanan memakai `<details>`/`<summary>` native. Panel terbuka dengan animasi tinggi dan clip-path, lalu bisa ditutup lewat ringkasan, label Tutup, atau Esc. Panel tidak saling menutup agar posisi layanan yang diklik tidak melompat.
- Hover kartu memperbesar gambar dan menggeser stempel nomor. Hanya aktif pada perangkat dengan hover dan pointer presisi.
- Dialog catatan proyek memakai `<dialog>` native, animasi panel, focus trap, pemulihan fokus, tombol Esc, klik backdrop, dan penguncian scroll dengan kompensasi scrollbar.
- Kalau anime.js gagal dimuat atau pengguna memilih `prefers-reduced-motion: reduce`, `proyek.js` menambahkan `motion-off`; semua konten langsung terlihat, filter tetap bekerja, dan ticker berhenti.
- Tanpa JavaScript, beranda tetap terbaca karena reveal hanya menyembunyikan konten saat kelas `.js` ada; layanan tetap bisa dibuka karena memakai `<details>` native. Halaman proyek tetap menampilkan semua proyek, meskipun filter dan dialog tidak aktif.

## Sumber isi

Isi diambil dari CV Ferrol Azki Mashudi, repositori kerja, publikasi terkait, serta panduan workflow backend dan DevOps pribadi. Angka yang dipakai: 1,5+ tahun pengalaman, 7.000+ peserta KSTI 2025, dan 2 juara 1 kompetisi. Proyek yang ditampilkan berjumlah tujuh.

Tautan yang dipakai hanya yang bisa dipastikan:

- DOI Osha Snack: `https://doi.org/10.53863/kst.v6i02.1407`
- DOI OpenCV: `https://doi.org/10.59581/jusiik-widyakarya.v2i4.4199`
- DOI siMenu: `https://doi.org/10.62951/switch.v3i1.327`
- DOI siMenu Waterfall: `https://doi.org/10.35194/mji.v17i1.5304`
- DOI Drops: `https://doi.org/10.61132/semantik.v3i2.1647`
- LinkedIn: `https://www.linkedin.com/in/ferrol-azki-mashudi/`
- GitHub: `https://github.com/ferrol143`

Tidak ada URL live yang dikarang untuk proyek yang belum punya alamat publik.

## Nada dan penamaan

- Nama lengkap **Ferrol Azki Mashudi** dipakai untuk identitas formal: title, meta, eyebrow hero, favicon, copyright footer, dan header indeks.
- Nama pendek **Ferrol** dipakai di copy orang pertama pada hero.
- Nada copy dibuat profesional dan tenang: menonjolkan bukti kerja, bukan hard-selling. Posisi utamanya **software engineer** yang membangun aplikasi web dari masalah nyata sampai rilis. Backend tetap terlihat lewat proyek, layanan API/data, dan alur kerjanya, tanpa menjadi satu-satunya identitas.
- Klaim "sistem yang dipakai" merujuk ke proyek yang benar-benar dipakai (Peta Bima, KSTI 2025, Maxpro), bukan janji hasil.
- Tidak ada angka, kutipan, atau hasil yang dikarang. Kalau bukti belum ada, bagian itu tidak ditulis.

## Yang bisa dilengkapi

- Kartu proyek di beranda memakai tangkapan layar asli dengan crop tengah, sama seperti halaman indeks. Nomor dan label kategori tetap ditumpuk di atas gambar agar urutan proyek terbaca.
- Kartu proyek di beranda belum bisa diklik. Setelah dianggap perlu, bungkus judul atau thumbnail dengan tautan ke anchor proyek di `proyek.html`.
- Pendidikan dan sertifikasi (IPB University, BNSP) belum masuk halaman. Kalau perlu, tambahkan satu section ringkas atau tautan unduh CV.
- CV PDF sudah tersedia di `public_html/assets/documents/`. Tambahkan tautan unduh di hero atau kontak kalau ingin ditampilkan.
- URL publik untuk proyek selain siMenu belum ada. Tambahkan di dialog proyek hanya kalau alamatnya sudah pasti.

## Keputusan isi

- Tidak ada testimoni palsu. Section kartu krem dipakai untuk prinsip kerja karena kutipan klien belum ada. Kalau nanti ada tiga kutipan asli, ganti isi `.note` dan pertahankan layoutnya.
- Section Layanan memakai akordeon native: tiap layanan bisa dibuka untuk menampilkan alur kerjanya dalam lima langkah. Isi API & data diringkas dari panduan workflow backend pribadi; deployment dari panduan DevOps; aplikasi web dari alur kerja antarmuka, integrasi API, dan QA. Topik lanjutan seperti cache, queue, dan full-text search tidak dimasukkan agar tetap terbaca.
- Panel layanan tidak saling menutup. Kalau panel di atas ikut menutup saat layanan bawah dibuka, ringkasan yang baru diklik akan melompat ke atas layar, terutama di mobile.
- Tiga kartu prinsip di bagian Cara kerja memakai urutan yang sama dengan alur kerja API & data: kontrak dulu, batas lapisan yang jelas, lalu rilis dengan bukti.
- Statistik memakai angka dari CV: 1,5+ tahun pengalaman, 7.000+ peserta KSTI 2025, dan 2 juara 1 kompetisi. Tidak ada angka yang dikarang.
- Beranda menampilkan tiga proyek yang mewakili cara kerja; indeks menampilkan seluruh tujuh proyek dengan kategori yang bisa difilter. Hitungan di beranda sudah disamakan menjadi 07.
- Tidak ada tautan proyek yang mati. Proyek tanpa URL publik hanya menampilkan catatan internal, bukan tombol yang mengarah ke alamat kosong.
- Footer sengaja minimal: email, LinkedIn, GitHub, Beranda, dan copyright. Wordmark raksasa dihapus agar halaman berakhir tenang.
- Satu elemen dominan per layar: judul display di hero. Footer tidak lagi memakai wordmark besar.
- Mode terang memakai token Kerja (teal, radius 8px, tombol tanpa sapuan). Layout, skala fluid, dan kartu miring tetap sama supaya kedua mode terasa satu situs.
- Halaman indeks memakai arah editorial sendiri: tipografi besar, gambar penuh, garis tipis, dan urutan proyek yang berselang-seling. Token warna dan nada tetap sama dengan beranda.

## Catatan penyimpangan kecil

Hal-hal ini berbeda dari spesifikasi, dengan alasan praktis:

1. **Batas baca di layar sedang.** Nilai `rem` membuat teks mengecil drastis di 650 sampai 1200px. Karena itu isi, caption, judul kartu, dan teks kartu krem diberi `max(nilai-rem, px)` supaya tetap terbaca. Di atas 1440px hasilnya sama dengan spesifikasi.
2. **Navbar beranda tetap muncul di mobile.** Spesifikasi menyembunyikannya. Untuk portfolio satu halaman, navigasi tiga tautan masih berguna, jadi versi mobile dikecilkan, bukan dihilangkan. Navbar indeks disembunyikan di bawah 800px karena ruang header dipakai merek dan sakelar mode.
3. **Footer tanpa wordmark raksasa.** Revisi akhir menghapus wordmark; footer hanya memuat email, LinkedIn, GitHub, Beranda, dan copyright.
4. **Mode terang tetap memakai skala fluid dan kartu miring.** Spesifikasi Kerja memakai px dan tanpa kemiringan, tapi keduanya akan merusak layout responsif dan identitas halaman. Warna, aksen, radius, dan perilaku tombol tetap mengikuti token Kerja.
5. **Latar langit hanya ada di hero beranda.** Matahari, bulan, orbit, dan bintang diposisikan sebagai latar, bukan kotak terpisah. Di mobile orbnya mengecil dan diletakkan di bawah navbar supaya tidak menabrak eyebrow dan judul.
6. **Hero beranda dirapatkan di landscape pendek.** Di bawah tinggi 500px, padding, jarak sakelar, dan gap teks dikurangi; kolom teks dilebarkan supaya CTA tetap masuk satu layar tanpa scroll.
7. **Hero indeks juga dirapatkan di landscape pendek.** Di bawah tinggi 520px, meta disembunyikan, padding dikurangi, dan ukuran judul/lede disesuaikan. CTA tetap terlihat di 844x390 dan 667x375 tanpa scroll.
8. **Halaman indeks memakai anime.js yang di-vendor.** Tidak ada build step dan tidak ada permintaan CDN. File lisensi disimpan di `vendor/animejs.LICENSE.md`.
9. **Beberapa gambar proyek memakai poster berbahasa Inggris dan gradasi.** Itu bagian dari artefak proyek asli; aturan tanpa gradasi dan tanpa bayangan hanya berlaku untuk UI.
10. **Gambar proyek dikirim dalam dua ukuran WebP.** Lebar 600 px untuk layar kecil dan 1200 px untuk layar besar; tidak ada file asli berukuran besar yang ikut.

## Aksesibilitas

- Body minimal 14px, paragraf dibatasi 46 sampai 68 karakter.
- Merah hanya untuk teks besar (tombol, kata layanan saat hover) dan elemen non-teks. Teks kecil di atas aksen memakai `--accent-deep` dengan kontras minimal 4.5:1.
- `:focus-visible` 2px: krem di mode gelap, teal `#0B6F71` di mode terang.
- Sakelar mode memakai `role="switch"` dan `aria-checked`; label kecil `siang`/`malam` hanya penanda visual dan disembunyikan dari pembaca layar.
- Filter memakai `aria-pressed` dan `aria-controls`; hasil filter diumumkan lewat `role="status"` dan `aria-live="polite"`.
- Layanan memakai `<details>`/`<summary>` native; status buka/tutup diumumkan browser, label berganti dari **Alur kerja** ke **Tutup**, dan Esc mengembalikan fokus ke ringkasan.
- Dialog memakai `<dialog>` native, `aria-labelledby`/`aria-describedby`, focus trap, pemulihan fokus ke tombol pemicu, penutupan lewat Esc/backdrop/tombol, dan penguncian scroll.
- Setiap tombol catatan proyek punya nama aksesibel yang menyebut nama proyeknya.
- Gambar proyek punya alt deskriptif; stempel nomor dan ornamen ditandai `aria-hidden`.
- Reveal, marquee, ticker, animasi dialog, dan animasi panel layanan dimatikan saat `prefers-reduced-motion: reduce`; `motion-off` menjadi fallback saat anime.js tidak tersedia.
- Latar langit dan sakelar mode tidak ikut dicetak. Dialog, filter, dan tombol catatan juga disembunyikan saat print.
- Semua hover dibungkus `@media (hover: hover) and (pointer: fine)`.
- Hasil uji terakhir (termasuk tiap panel layanan terbuka): axe tanpa pelanggaran WCAG A/AA di kedua mode, termasuk saat dialog terbuka. Lighthouse (mode terang bawaan): aksesibilitas 100, best practices 100, SEO 100; performa 99 pada emulasi mobile dan desktop.
- Uji responsif: 1440, 1280, 1024, 980, 768, 700, 650, 390, 360, 320, 844x390, dan 667x375; tiap panel layanan diuji terbuka di semua lebar itu. Tidak ada overflow horizontal; CTA hero indeks tetap terlihat di 844x390 dan 667x375.
- Filter dan tombol catatan proyek minimal 44px tinggi; dialog tetap bisa digulir sampai catatan penutup di layar 320px.
