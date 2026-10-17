# AnimeGo — GitHub Pages

Website statis untuk halaman publik download AnimeGo. Tampilan memakai tema gelap AnimeGo dan Font Awesome dari CDN.

## File APK

Website mengharapkan nama file **`animego.apk`** dan lokasi file harus satu folder dengan `index.html`.

- Jika website dipasang di root repository Pages, unggah APK sebagai `/animego.apk`.
- Jika website ditaruh di folder `/docs` pada repository aplikasi, unggah APK sebagai `/docs/animego.apk`.

APK tidak disertakan dalam arsip ini karena berkas APK sumber belum diberikan. Tombol download akan menampilkan pesan jika `animego.apk` belum ada.

## Publikasikan pada repository `reyhanaarch64/animego`

Cara yang tidak mengganggu source aplikasi adalah menaruh isi website ke folder **`docs/`**:

1. Ekstrak ZIP ini.
2. Buat folder `docs` di root repository `reyhanaarch64/animego` jika belum ada.
3. Salin `index.html`, `assets/`, `previews/`, `.nojekyll`, dan file website lain ke dalam `docs/`.
4. Salin APK yang mau dirilis ke `docs/animego.apk`.
5. Commit dan push perubahan ke branch `main`.
6. Buka **Settings → Pages** pada repository.
7. Pada bagian **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/docs`, kemudian tekan **Save**.
8. Tunggu proses deployment selesai. URL halaman akan ditampilkan pada halaman Settings → Pages.

Alternatif: pakai repository khusus website dan taruh seluruh isi folder ini pada root repository, lalu set GitHub Pages ke branch `main` dan folder `/(root)`.

## Detail teknis halaman

- HTML, CSS, dan JavaScript statis; tidak memerlukan build step atau backend.
- Preview berjumlah lima: beranda, detail anime, pemutar video, floating popup, dan unduhan offline.
- File preview SVG adalah **ilustrasi UI** berdasarkan tema aplikasi, bukan tangkapan layar langsung dari perangkat. Ganti file di folder `previews/` dengan screenshot asli kapan pun tersedia; pertahankan nama file atau ubah referensi di `index.html`.
- Ukuran APK 382 KB mengikuti informasi yang diberikan untuk halaman. Jika build berikutnya memiliki ukuran berbeda, ubah angka yang tampil di `index.html`.
- Minimum Android ditampilkan sebagai Android 6.0 / API 23 berdasarkan `minSdkVersion 23` pada manifest aplikasi. Versi maksimum tidak ditetapkan; Android 13+ ditandai belum terverifikasi.
