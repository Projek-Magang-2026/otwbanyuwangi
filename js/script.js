/**
 * OTW BANYUWANGI — Core Script (Redesigned Edition)
 * Features: Mobile Navbar, Package Data with Realistic Nature Photography,
 * Catalog Filter, Dynamic Package Detail Router, Vanilla Lightbox, Contact Form Validation & WhatsApp Generator.
 */

'use strict';

/* ==========================================================================
   1. KONFIGURASI KONTAK (PLACEHOLDER CONFIGURATION)
   Ganti nilai konfigurasi di bawah ini dengan nomor resmi travel agency.
   ========================================================================== */
const CONTACT_CONFIG = {
  brandName: 'OTW BANYUWANGI',
  brandTagline: 'Open Trip Weekend Banyuwangi',
  // Placeholder WhatsApp (Ganti dengan nomor WhatsApp resmi)
  whatsappNumber: '6281234567890',
  // Placeholder Email (Ganti dengan email resmi)
  email: 'info@otwbanyuwangi.placeholder',
  operationalHours: 'Setiap Hari: 07.00 - 21.00 WIB',
  baseLocation: 'Banyuwangi Kota, Jawa Timur (Dekat Stasiun Banyuwangi Kota / Karangasem)',
  
  /**
   * Menghasilkan URL WhatsApp dengan pesan yang sudah di-encode
   */
  getWhatsAppUrl(message) {
    const cleanNumber = this.whatsappNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message.trim());
    return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
  }
};

/* ==========================================================================
   2. DATA KATALOG PAKET WISATA (STRUCTURED SAMPLE DATA)
   Menggunakan foto alam realistis Banyuwangi (Kawah Ijen, Baluran, Menjangan,
   Tabuhan, De Djawatan, Pulau Merah, Kawah Wurung).
   ========================================================================== */
const PACKAGES_DATA = {
  'ijen': {
    slug: 'ijen',
    title: 'Open Trip Kawah Ijen Midnight Blue Fire',
    category: 'open-trip',
    categoryLabel: 'Open Trip',
    duration: '1 Hari (Midnight - Pagi)',
    location: 'Kawah Ijen, Banyuwangi & Bondowoso',
    meetingPoint: 'Stasiun / Hotel Banyuwangi Kota (00.00 WIB)',
    price: 'Rp 250.000',
    priceUnit: '/ orang',
    isSamplePrice: true,
    image: 'assets/images/dest-ijen-card.jpg',
    heroImage: 'assets/images/hero-ijen.jpg',
    summary: 'Saksikan fenomena api biru (Blue Fire) langka di dunia, sunrise spektakuler di atas kaldera, dan danau belerang toska terasam di dunia.',
    description: 'Gunung Ijen adalah salah satu magnet wisata utama Banyuwangi dengan keajaiban alam fenomena api biru (Blue Fire) yang hanya ada dua di dunia. Bersama Open Trip OTW BANYUWANGI, kamu akan mendaki di dini hari dengan bimbingan guide lokal berpengalaman, perlengkapan masker gas standar, dan menikmati sunrise magis di bibir kaldera.',
    highlights: [
      'Menyaksikan api biru (Blue Fire) Kawah Ijen',
      'Panorama sunrise dan danau belerang toska terluas di dunia',
      'Pemandangan pohon cantigi dan jalur pendaluan Gunung Merapi tua',
      'Didampingi guide lokal yang memahami medan pendakian'
    ],
    itinerary: [
      {
        time: '00.00 - 00.30 WIB',
        title: 'Penjemputan Peserta',
        desc: 'Peserta dijemput di meeting point (Stasiun Banyuwangi Kota / Karangasem atau hotel area kota).'
      },
      {
        time: '00.30 - 01.45 WIB',
        title: 'Perjalanan ke Pos Paltuding',
        desc: 'Perjalanan darat menuju Basecamp Pos Paltuding di lereng Gunung Ijen dengan armada elf/mobil ber-AC.'
      },
      {
        time: '01.45 - 02.00 WIB',
        title: 'Briefing & Pembagian Alat',
        desc: 'Pengecekan tiket, briefing keselamatan oleh guide, serta pembagian masker gas respirator dan senter kepala.'
      },
      {
        time: '02.00 - 03.45 WIB',
        title: 'Pendakian Menuju Puncak Kawah',
        desc: 'Trekking mendaki sejauh ±3 km dengan ritme santai namun teratur didampingi tour leader.'
      },
      {
        time: '03.45 - 05.15 WIB',
        title: 'Eksplorasi Blue Fire',
        desc: 'Turun ke area kawah untuk mengamati Blue Fire dari jarak aman (sesuai arahan petugas BKSDA & kondisi vulkanik).'
      },
      {
        time: '05.15 - 06.30 WIB',
        title: 'Sunrise Spot & Danau Belerang',
        desc: 'Menikmati matahari terbit di bibir kaldera, spot foto pohon cantigi, dan lanskap danau toska yang memukau.'
      },
      {
        time: '06.30 - 08.15 WIB',
        title: 'Perjalanan Turun ke Paltuding',
        desc: 'Trekking turun kembali ke Pos Paltuding sembari menikmati pemandangan lereng pegunungan di pagi hari.'
      },
      {
        time: '08.15 - 10.00 WIB',
        title: 'Kembali ke Banyuwangi Kota',
        desc: 'Istirahat sejenak, perjalanan kembali ke kota, dan pengantaran ke titik awal. Trip selesai dengan penuh kenangan.'
      }
    ],
    includes: [
      'Transportasi AC Banyuwangi Kota - Paltuding PP',
      'Tiket masuk resmi TWA Kawah Ijen (WNI)',
      'Masker gas respirator khusus belerang',
      'Senter kepala (headlamp) per peserta',
      'Guide lokal bersertifikat / tour leader',
      'Air mineral selama perjalanan',
      'P3K standar perjalanan'
    ],
    excludes: [
      'Transportasi dari kota asal menuju Banyuwangi',
      'Penginapan pribadi sebelum/sesudah trip',
      'Sewa troli dorong (taksi dorong lokal) jika lelah mendaki',
      'Biaya surat keterangan sehat dokter (wajib regulasi BKSDA)',
      'Pengeluaran pribadi, makanan berat, dan tip sukarela'
    ],
    preparation: [
      'Wajib membawa Surat Keterangan Sehat dari dokter / klinik (berlaku maks 3 hari).',
      'Kenakan jaket gunung hangat atau windbreaker (suhu dini hari berkisar 8°C - 14°C).',
      'Gunakan celana panjang fleksibel dan sepatu trekking/sneakers bersol cengkeram kuat.',
      'Bawa sarung tangan, syal/kupluk hangat, dan botol minum isi ulang.',
      'Bagi penderita riwayat asma atau jantung dianjurkan berkonsultasi medis sebelum mendaki.'
    ],
    note: 'Jadwal dan operasional kawasan Kawah Ijen dapat berubah sewaktu-waktu sesuai dengan tingkat aktivitas vulkanik PVMBG dan regulasi BKSDA Jawa Timur.'
  },

  'menjangan-tabuhan': {
    slug: 'menjangan-tabuhan',
    title: 'Open Trip Pulau Menjangan & Pulau Tabuhan Snorkeling',
    category: 'open-trip',
    categoryLabel: 'Open Trip',
    duration: '1 Hari Penuh (07.30 - 17.00)',
    location: 'Taman Nasional Bali Barat & Selat Bali',
    meetingPoint: 'Pantai Grand Watu Dodol (GWD) Banyuwangi (07.30 WIB)',
    price: 'Rp 325.000',
    priceUnit: '/ orang',
    isSamplePrice: true,
    image: 'assets/images/dest-menjangan.jpg',
    heroImage: 'assets/images/dest-menjangan.jpg',
    summary: 'Jelajahi keindahan bawah laut terumbu karang dinding Pulau Menjangan dan sensasi pasir putih pulau tak berpenghuni Tabuhan.',
    description: 'Kombinasi dua pulau terbaik di Selat Bali dalam satu hari petualangan bahari. Pulau Menjangan terkenal dengan wall reef diving dan snorkeling bergradasi biru jernih, dilanjutkan ke Pulau Tabuhan dengan hamparan pasir putih bersih dan semilir angin selat yang menyegarkan.',
    highlights: [
      'Snorkeling di 2 spot terumbu karang terbaik Pulau Menjangan',
      'Eksplorasi pulau tak berpenghuni dan sandbar Pulau Tabuhan',
      'Alat snorkeling lengkap (masker, snorkel, life jacket, fin)',
      'Dokumentasi foto dan video bawah air dengan action camera'
    ],
    itinerary: [
      {
        time: '07.30 - 08.00 WIB',
        title: 'Meeting Point & Fitting Alat',
        desc: 'Berkumpul di Pantai Grand Watu Dodol (GWD), registrasi ulang, dan fitting peralatan snorkel serta pelampung.'
      },
      {
        time: '08.00 - 09.30 WIB',
        title: 'Penyeberangan Kapal ke Menjangan',
        desc: 'Mengarungi Selat Bali dengan kapal wisata tradisional bermesin menuju Taman Nasional Bali Barat.'
      },
      {
        time: '09.30 - 12.00 WIB',
        title: 'Snorkeling Spot 1 & Spot 2 Menjangan',
        desc: 'Sesi snorkeling di Coral Garden dan Sandy Slope. Melihat terumbu karang warna-warni dan aneka ikan tropis.'
      },
      {
        time: '12.00 - 13.00 WIB',
        title: 'Makan Siang di Dermaga Menjangan',
        desc: 'Istirahat makan siang kotak, relaksasi di tepi pantai, dan melihat rusa jinak penghuni pulau.'
      },
      {
        time: '13.00 - 14.15 WIB',
        title: 'Pelayaran Menuju Pulau Tabuhan',
        desc: 'Melanjutkan perjalanan bahari menuju pulau berpasir putih Tabuhan di perairan Banyuwangi.'
      },
      {
        time: '14.15 - 16.00 WIB',
        title: 'Eksplorasi Pulau Tabuhan',
        desc: 'Keliling pulau pasir putih, berenang di air dangkal toska, foto estetik di mercusuar, dan snorkeling tepi pulau.'
      },
      {
        time: '16.00 - 17.00 WIB',
        title: 'Kembali ke GWD & Penutupan',
        desc: 'Kapal kembali ke Pantai Grand Watu Dodol. Bersih-bersih diri dan pembagian file dokumentasi.'
      }
    ],
    includes: [
      'Kapal wisata penyeberangan reguler PP',
      'Izin sandar kapal & tiket masuk Pulau Menjangan (WNI)',
      'Tiket konservasi dan asuransi laut',
      'Peralatan snorkeling (masker, snorkel, fin kaki katak)',
      'Life jacket / pelampung standar keselamatan',
      'Makan siang kotak (lunch box) & air mineral',
      'Guide snorkeling & dokumentasi underwater (file digital)',
      'P3K kotak medis bahari'
    ],
    excludes: [
      'Transportasi darat menuju meeting point Pantai GWD',
      'Tiket masuk wisman/mancanegara (dikenakan tarif berbeda)',
      'Kamera sewa pribadi (jika ingin sewa terpisah)',
      'Bilas mandi di toilet umum dermaga (Rp 5.000)',
      'Pengeluaran pribadi & tip sukarela awak kapal'
    ],
    preparation: [
      'Kenakan baju renang atau pakaian santai cepat kering (dry-fit).',
      'Bawa pakaian ganti kering, handuk, dan perlengkapan mandi.',
      'Gunakan tabir surya (sunscreen ramah karang / reef-safe).',
      'Siapkan dry bag untuk mengamankan barang elektronik di atas kapal.',
      'Bawa kacamata hitam, topi pantai, dan sandal jepit.'
    ],
    note: 'Jadwal dan rute snorkeling dapat disesuaikan kapten kapal demi keselamatan bila ombak dan pasang surut laut berubah mendadak.'
  },

  'baluran': {
    slug: 'baluran',
    title: 'Paket Wisata Baluran & Kawah Wurung One Day',
    category: 'open-trip',
    categoryLabel: 'Open Trip',
    duration: '1 Hari (08.00 - 18.00)',
    location: 'Taman Nasional Baluran & Kawah Wurung',
    meetingPoint: 'Area Banyuwangi Kota / Stasiun (08.00 WIB)',
    price: 'Rp 275.000',
    priceUnit: '/ orang',
    isSamplePrice: true,
    image: 'assets/images/dest-baluran.jpg',
    heroImage: 'assets/images/dest-baluran.jpg',
    summary: 'Sensasi safari savana layaknya di Afrika, eksotika pohon Bekol, hutan mangrove Pantai Bama, dan perbukitan hijau Kawah Wurung.',
    description: 'Nikmati perpaduan dua lanskap alam kontras dalam sehari. Dari padang savana tropis terluas Jawa di Taman Nasional Baluran ("Little Africa in Java") lengkap dengan satwa liarnya, hingga segarnya perbukitan kaldera hijau bergelombang di Kawah Wurung.',
    highlights: [
      'Eksplorasi Padang Savana Bekol berlatar Gunung Baluran',
      'Spot foto ikonik pohon acacia & menara pandang satwa',
      'Menyusuri jalur jembatan mangrove Pantai Bama',
      'Pemandangan bukit hijau permadani Kawah Wurung'
    ],
    itinerary: [
      {
        time: '08.00 - 08.30 WIB',
        title: 'Meeting Point Banyuwangi Kota',
        desc: 'Penjemputan rombongan di titik kumpul stasiun atau penginapan kota Banyuwangi.'
      },
      {
        time: '08.30 - 09.45 WIB',
        title: 'Menuju Gerbang Baluran (Batangan)',
        desc: 'Perjalanan menuju pintu masuk Taman Nasional Baluran di kawasan Situbondo-Banyuwangi.'
      },
      {
        time: '09.45 - 12.00 WIB',
        title: 'Safari Savana Bekol',
        desc: 'Menikmati hamparan savana, naik menara pandang, mengamati kawanan rusa/banteng dari kejauhan, dan foto di Pohon Raisa.'
      },
      {
        time: '12.00 - 13.30 WIB',
        title: 'Pantai Bama & Makan Siang',
        desc: 'Menuju Pantai Bama di ujung taman nasional, makan siang bersama, dan menyusuri hutan mangrove.'
      },
      {
        time: '13.30 - 15.30 WIB',
        title: 'Perjalanan ke Kawah Wurung',
        desc: 'Melanjutkan perjalanan melintasi perkebunan kopi dan jalur dataran tinggi menuju Kawah Wurung.'
      },
      {
        time: '15.30 - 17.00 WIB',
        title: 'Eksplorasi Bukit Cincin Kawah Wurung',
        desc: 'Menikmati lanskap perbukitan hijau, berfoto di Bukit Bantengan, dan merasakan sejuknya angin pegunungan sore.'
      },
      {
        time: '17.00 - 18.30 WIB',
        title: 'Perjalanan Pulang ke Banyuwangi Kota',
        desc: 'Kembali menuju pusat kota Banyuwangi. Pengantaran kembali ke titik kumpul. Trip selesai.'
      }
    ],
    includes: [
      'Transportasi AC nyaman selama perjalanan',
      'Tiket masuk resmi TN Baluran (WNI)',
      'Tiket masuk kawasan Kawah Wurung (WNI)',
      'Makan siang 1x & air mineral botol',
      'Tour leader ramah pendamping perjalanan',
      'Biaya parkir dan retribusi area destinasi'
    ],
    excludes: [
      'Tiket transportasi menuju/keluar Banyuwangi',
      'Pengeluaran pribadi (camilan, suvenir)',
      'Tiket wahana tambahan jika ada',
      'Tip sukarela driver & tour leader'
    ],
    preparation: [
      'Gunakan pakaian santai yang nyaman dan menyerap keringat.',
      'Bawa kacamata hitam, topi, dan tabir surya untuk area savana yang terik.',
      'Bawa jaket tipis untuk mengantisipasi hawa sejuk di Kawah Wurung menjelang sore.',
      'Siapkan kamera atau smartphone dengan baterai penuh.'
    ],
    note: 'Kondisi savana Baluran bervariasi: hijau asri di musim hujan (Desember - Mei) dan cokelat eksotis keemasan di musim kemarau (Juni - November).'
  },

  'banyuwangi-3d2n': {
    slug: 'banyuwangi-3d2n',
    title: 'Open Trip Banyuwangi 3 Hari 2 Malam (All Highlights)',
    category: 'multihari',
    categoryLabel: 'Paket Multihari',
    duration: '3 Hari 2 Malam (Jumat - Minggu)',
    location: 'Ijen, Baluran, Menjangan, De Djawatan & Pulau Merah',
    meetingPoint: 'Stasiun / Bandara Banyuwangi (Jumat, 09.00 WIB)',
    price: 'Rp 1.150.000',
    priceUnit: '/ orang (Min. 4 pax)',
    isSamplePrice: true,
    image: 'assets/images/dest-djawatan.jpg',
    heroImage: 'assets/images/dest-djawatan.jpg',
    summary: 'Paket akhir pekan terlengkap untuk menjelajahi seluruh pesona terbaik Banyuwangi: kawah magis, savana eksotis, laut jernih, hutan purba, hingga matahari terbenam.',
    description: 'Pilihan paling ideal bagi wisatawan yang ingin memaksimalkan libur akhir pekan tanpa repot merancang transportasi dan jadwal sendiri. Menggabungkan pesona hutan magis De Djawatan (Lord of the Rings), sunset Pantai Pulau Merah, safari Savana Baluran, snorkeling bawah laut Menjangan, dan pendakian Kawah Ijen Blue Fire.',
    highlights: [
      'Jelajahi 5 destinasi ikonik utama Banyuwangi dalam 1 trip terpadu',
      'Termasuk penginapan hotel 2 malam di pusat kota Banyuwangi',
      'Snorkeling Menjangan dengan dokumentasi foto underwater',
      'Transportasi AC penuh didampingi pemandu wisata lokal'
    ],
    itinerary: [
      {
        time: 'HARI 1 — 09.00 - 18.30 WIB',
        title: 'Penjemputan, Hutan De Djawatan & Sunset Pulau Merah',
        desc: 'Penjemputan di stasiun/bandara, santap kuliner khas Nasi Tempong, foto estetik di pohon trembesi raksasa De Djawatan, dan menikmati sunset legendaris di Pantai Pulau Merah. Check-in hotel dan istirahat.'
      },
      {
        time: 'HARI 2 — 07.30 - 18.00 WIB',
        title: 'Snorkeling Menjangan, Tabuhan & Savana Baluran',
        desc: 'Pagi hari berlayar snorkeling di terumbu karang Menjangan dan pasir putih Tabuhan. Siang hari menuju Savana Bekol Taman Nasional Baluran dan Pantai Bama. Kembali ke hotel untuk istirahat persiapan trekking dini hari.'
      },
      {
        time: 'HARI 3 — 00.00 - 12.00 WIB',
        title: 'Midnight Kawah Ijen, Kuliner Khas & Drop-off',
        desc: 'Dini hari trekking Kawah Ijen melihat Blue Fire dan sunrise danau toska. Pagi hari kembali ke hotel, sarapan, mandi, check-out, belanja oleh-oleh khas Banyuwangi (kopi Osing & sale pisang), dan pengantaran pulang ke stasiun/bandara.'
      }
    ],
    includes: [
      'Transportasi AC privat rombongan selama 3 hari',
      'Akomodasi hotel 2 malam (twin share / sekamar berdua)',
      'Tiket masuk seluruh objek wisata yang tertera di jadwal',
      'Kapal snorkeling, perizinan Menjangan, & alat snorkeling lengkap',
      'Masker gas dan senter kepala pendakian Kawah Ijen',
      'Makan sesuai program (sarapan hotel & lunch box trip bahari)',
      'Air mineral harian selama perjalanan',
      'Dokumentasi foto perjalanan & guide profesional'
    ],
    excludes: [
      'Tiket transportasi kedatangan/kepulangan Banyuwangi (KA/pesawat)',
      'Makan malam di luar program paket',
      'Biaya surat keterangan sehat pendakian Ijen',
      'Pengeluaran pribadi & suvenir',
      'Tip sukarela driver & tour leader'
    ],
    preparation: [
      'Bawa pakaian ganti yang cukup untuk 3 hari termasuk baju renang dan pakaian hangat gunung.',
      'Siapkan sepatu trekking yang nyaman dan sandal outdoor.',
      'Bawa obat-obatan pribadi yang rutin dikonsumsi.',
      'Siapkan identitas resmi (KTP/Paspor).'
    ],
    note: 'Paket multihari ini berangkat setiap hari Jumat pagi dan selesai pada hari Minggu siang, sangat cocok untuk agenda liburan akhir pekan.'
  },

  'private-trip': {
    slug: 'private-trip',
    title: 'Custom Private Trip Banyuwangi Family & Group',
    category: 'private',
    categoryLabel: 'Private Trip',
    duration: 'Fleksibel (Custom 1 - 4 Hari)',
    location: 'Destinasi Pilihan Sesuai Permintaan',
    meetingPoint: 'Titik Temu Bebas (Stasiun / Bandara / Hotel Banyuwangi)',
    price: 'Mulai Rp 450.000',
    priceUnit: '/ orang (Tergantung kuota)',
    isSamplePrice: true,
    image: 'assets/images/dest-pulau-merah.jpg',
    heroImage: 'assets/images/dest-pulau-merah.jpg',
    summary: 'Trip privat eksklusif khusus untuk keluarga, sahabat, atau outing kantor dengan fleksibilitas jadwal, pilihan destinasi, dan kenyamanan tanpa digabung peserta lain.',
    description: 'Ingin liburan dengan ritme santai, tidak terikat jadwal rombongan orang asing, dan bebas menentukan destinasi impian di Banyuwangi? Paket Private Trip OTW BANYUWANGI memberikan keleluasaan penuh untuk keluarga besar, liburan pasangan, maupun outing instansi dengan armada dan pemandu khusus.',
    highlights: [
      'Jadwal, waktu penjemputan, dan rute perjalanan sepenuhnya fleksibel',
      'Armada kendaraan privat khusus rombonganmu (Avanza / Innova / HiAce)',
      'Pilihan destinasi dapat disesuaikan (Kawah Ijen, Baluran, Menjangan, Sukamade, Desa Adat Kemiren)',
      'Konsultasi gratis rancangan itinerary dari tim lokal Banyuwangi'
    ],
    itinerary: [
      {
        time: 'Sesuai Kesepakatan',
        title: 'Konsultasi & Penentuan Rute Impian',
        desc: 'Kamu dapat memilih kombinasi destinasi: alam bahari, pegunungan kaldera, wisata budaya suku Osing, hingga kuliner malam.'
      },
      {
        time: 'Hari Pelaksanaan',
        title: 'Penjemputan Personal',
        desc: 'Driver dan pemandu menjemput rombongan di lokasi dan jam yang disepakati tanpa menunggu peserta lain.'
      },
      {
        time: 'Selama Perjalanan',
        title: 'Perjalanan Nyaman Tanpa Terburu-buru',
        desc: 'Ritme wisata disesuaikan dengan kebutuhan peserta, sangat ramah untuk anak-anak maupun lansia.'
      }
    ],
    includes: [
      'Mobil privat ber-AC (Avanza / Innova / HiAce Premio) + Driver + BBM',
      'Tiket masuk seluruh destinasi yang disepakati',
      'Driver ramah merangkap pemandu perjalanan',
      'Air mineral selama perjalanan',
      'Biaya parkir dan retribusi jalan'
    ],
    excludes: [
      'Tiket transportasi utama ke Banyuwangi',
      'Hotel / penginapan (dapat dibantu pesan jika diminta)',
      'Makan dan konsumsi pribadi (rekomendasi resto kuliner lokal disediakan)',
      'Pengeluaran belanja pribadi & tip'
    ],
    preparation: [
      'Hubungi tim admin kami untuk berkonsultasi mengenai jumlah rombongan, waktu kedatangan, dan preferensi wisata.',
      'Sampaikan bila ada kebutuhan khusus (kursi roda, balita, atau diet makanan tertentu).'
    ],
    note: 'Harga akhir disesuaikan dengan jumlah peserta dalam rombongan, jenis armada kendaraan, serta destinasi yang dipilih.'
  }
};

/* ==========================================================================
   3. DATA GALERI FOTO DESTINASI (REALISTIC NATURE PHOTOGRAPHY)
   ========================================================================== */
const GALLERY_DATA = [
  {
    id: 1,
    title: 'Blue Fire & Danau Kaldera Kawah Ijen',
    category: 'Pegunungan',
    catSlug: 'pegunungan',
    image: 'assets/images/hero-ijen.jpg',
    alt: 'Fotografi lanskap danau toska Kawah Ijen Banyuwangi saat matahari terbit'
  },
  {
    id: 2,
    title: 'Savana Bekol & Siluet Gunung Baluran',
    category: 'Savana & Alam',
    catSlug: 'savana',
    image: 'assets/images/dest-baluran.jpg',
    alt: 'Fotografi padang savana Bekol saat golden hour dengan pohon akasia dan Gunung Baluran'
  },
  {
    id: 3,
    title: 'Terumbu Karang Dinding Pulau Menjangan',
    category: 'Bahari',
    catSlug: 'bahari',
    image: 'assets/images/dest-menjangan.jpg',
    alt: 'Fotografi bawah air koral warna-warni di perairan Pulau Menjangan'
  },
  {
    id: 4,
    title: 'Pulau Berpasir Putih Tabuhan Selat Bali',
    category: 'Bahari',
    catSlug: 'bahari',
    image: 'assets/images/dest-tabuhan.jpg',
    alt: 'Fotografi pulau pasir putih Tabuhan dan gradasi air laut toska di Selat Bali'
  },
  {
    id: 5,
    title: 'Kanopi Megah Hutan Purba De Djawatan',
    category: 'Savana & Alam',
    catSlug: 'savana',
    image: 'assets/images/dest-djawatan.jpg',
    alt: 'Fotografi pohon trembesi raksasa berselimut paku di Hutan De Djawatan Benculuk'
  },
  {
    id: 6,
    title: 'Matahari Terbenam di Pantai Pulau Merah',
    category: 'Bahari',
    catSlug: 'bahari',
    image: 'assets/images/dest-pulau-merah.jpg',
    alt: 'Fotografi panorama matahari terbenam di Pantai Pulau Merah Banyuwangi'
  },
  {
    id: 7,
    title: 'Perbukitan Hijau Kaldera Kawah Wurung',
    category: 'Pegunungan',
    catSlug: 'pegunungan',
    image: 'assets/images/dest-kawah-wurung.jpg',
    alt: 'Fotografi perbukitan hijau bergelombang di Kawah Wurung dataran tinggi Ijen'
  }
];

/* ==========================================================================
   4. INITIALIZATION & DOM READY
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initWhatsAppButtons();
  initCatalogFilters();
  initPackageDetailRenderer();
  initGalleryLightbox();
  initContactForm();
  initImageFallbackHandler();
});

/* ==========================================================================
   5. NAVBAR MOBILE TOGGLE & SCROLL DETECTION
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const menuWrapper = document.querySelector('.nav-menu-wrapper');
  const header = document.querySelector('.site-header');

  if (toggleBtn && menuWrapper) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : toggleBtn.getAttribute('aria-expanded') !== 'true';
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      menuWrapper.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggleBtn.addEventListener('click', () => toggleMenu());

    // Menutup menu jika link diklik
    const navLinks = menuWrapper.querySelectorAll('.nav-link, .nav-actions .btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Menutup menu bila tombol Escape ditekan
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuWrapper.classList.contains('open')) {
        toggleMenu(false);
        toggleBtn.focus();
      }
    });

    // Menutup menu bila klik di luar
    document.addEventListener('click', (e) => {
      if (menuWrapper.classList.contains('open') &&
          !menuWrapper.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }

  // Scroll detection untuk hero navbar transparan
  if (header && !header.classList.contains('subpage-header')) {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        header.style.backgroundColor = 'rgba(16, 45, 37, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
        header.style.position = 'fixed';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.backdropFilter = 'none';
        header.style.borderBottom = 'none';
        header.style.position = 'absolute';
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }
}

/* ==========================================================================
   6. GLOBAL WHATSAPP CONSULTATION HANDLER
   ========================================================================== */
function initWhatsAppButtons() {
  const waButtons = document.querySelectorAll('[data-wa-trigger]');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const customTopic = btn.getAttribute('data-wa-topic') || 'Konsultasi Umum Trip Banyuwangi';
      const msg = `Halo ${CONTACT_CONFIG.brandName}, saya ingin konsultasi mengenai: "${customTopic}". Boleh minta informasi jadwal dan ketersediaan kuotanya?`;
      const url = CONTACT_CONFIG.getWhatsAppUrl(msg);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ==========================================================================
   7. KATALOG PAKET FILTER (paket.html)
   ========================================================================== */
function initCatalogFilters() {
  const filterContainer = document.querySelector('.filter-bar');
  const packageCards = document.querySelectorAll('.packages-quad-grid .trip-card, .packages-grid .package-card');
  const filterCountEl = document.querySelector('.filter-status-count');
  if (!filterContainer || packageCards.length === 0) return;

  const filterButtons = filterContainer.querySelectorAll('.filter-btn');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetFilter = btn.getAttribute('data-filter') || 'all';
      let visibleCount = 0;

      packageCards.forEach(card => {
        const cardCat = card.getAttribute('data-category') || '';
        if (targetFilter === 'all' || cardCat === targetFilter) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (filterCountEl) {
        filterCountEl.textContent = `Menampilkan ${visibleCount} paket perjalanan`;
      }
    });
  });
}

/* ==========================================================================
   8. DYNAMIC PACKAGE DETAIL RENDERER (detail-paket.html)
   ========================================================================== */
function initPackageDetailRenderer() {
  const detailContainer = document.getElementById('detail-package-app');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const packageSlug = (urlParams.get('paket') || '').toLowerCase().trim();
  const pkg = PACKAGES_DATA[packageSlug];

  if (!pkg) {
    // Tampilan ramah 404 jika parameter URL tidak cocok
    detailContainer.innerHTML = `
      <div class="empty-state-card">
        <span class="badge badge-orange" style="margin-bottom: 1rem;">Paket Tidak Ditemukan</span>
        <h2>Maaf, Paket Wisata Belum Tersedia</h2>
        <p class="text-muted" style="margin-bottom: 2rem;">
          Paket wisata dengan kode <code>"${escapeHtml(packageSlug || 'kosong')}"</code> tidak ditemukan dalam katalog OTW BANYUWANGI.
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="paket.html" class="btn btn-primary">Lihat Seluruh Paket Wisata</a>
          <a href="kontak.html" class="btn btn-outline">Tanyakan ke Admin</a>
        </div>
      </div>
    `;
    document.title = 'Paket Tidak Ditemukan — OTW BANYUWANGI';
    return;
  }

  // Update page title
  document.title = `${pkg.title} — OTW BANYUWANGI`;

  const highlightsHtml = (pkg.highlights || []).map(item => `
    <li class="facility-item">
      <svg class="facility-icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${escapeHtml(item)}</span>
    </li>
  `).join('');

  const itineraryHtml = (pkg.itinerary || []).map(step => `
    <div class="timeline-item">
      <div class="timeline-time">${escapeHtml(step.time)}</div>
      <div class="timeline-title">${escapeHtml(step.title)}</div>
      <div class="timeline-desc">${escapeHtml(step.desc)}</div>
    </div>
  `).join('');

  const includesHtml = (pkg.includes || []).map(inc => `
    <li class="facility-item">
      <svg class="facility-icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${escapeHtml(inc)}</span>
    </li>
  `).join('');

  const excludesHtml = (pkg.excludes || []).map(exc => `
    <li class="facility-item">
      <svg class="facility-icon-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      <span>${escapeHtml(exc)}</span>
    </li>
  `).join('');

  const preparationHtml = (pkg.preparation || []).map(tip => `
    <li style="margin-bottom: 0.65rem; display: flex; gap: 0.5rem; font-size: 0.9rem; color: #38423E;">
      <span style="color: var(--color-orange); font-weight: bold;">•</span>
      <span>${escapeHtml(tip)}</span>
    </li>
  `).join('');

  const waBookingMessage = `Halo ${CONTACT_CONFIG.brandName}, saya ingin konsultasi & pemesanan paket: "${pkg.title}". Mohon info jadwal terdekat dan ketersediaan kuotanya.`;
  const waUrl = CONTACT_CONFIG.getWhatsAppUrl(waBookingMessage);

  detailContainer.innerHTML = `
    <!-- Breadcrumb -->
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">Beranda</a>
      <span class="breadcrumb-separator">/</span>
      <a href="paket.html">Paket Wisata</a>
      <span class="breadcrumb-separator">/</span>
      <span aria-current="page">${escapeHtml(pkg.title)}</span>
    </nav>

    <!-- Hero / Summary Section -->
    <div class="detail-hero-grid">
      <div class="detail-gallery-main">
        <img src="${escapeHtml(pkg.image)}" alt="${escapeHtml(pkg.title)}" loading="eager" />
      </div>

      <div class="detail-summary-card">
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.75rem;">
          <span class="badge badge-forest">${escapeHtml(pkg.categoryLabel)}</span>
          <span class="badge badge-sample">Data Contoh / PKL</span>
        </div>

        <h1 style="font-size: clamp(1.5rem, 2.5vw, 2.2rem); margin-bottom: 0.75rem;">${escapeHtml(pkg.title)}</h1>
        <p class="text-muted" style="font-size: 0.95rem; margin-bottom: 1.25rem;">${escapeHtml(pkg.summary)}</p>

        <div class="detail-meta-pills">
          <div class="meta-pill-item">
            <span class="meta-pill-label">Durasi</span>
            <span class="meta-pill-val">${escapeHtml(pkg.duration)}</span>
          </div>
          <div class="meta-pill-item">
            <span class="meta-pill-label">Lokasi Destinasi</span>
            <span class="meta-pill-val">${escapeHtml(pkg.location)}</span>
          </div>
          <div class="meta-pill-item" style="grid-column: span 2;">
            <span class="meta-pill-label">Titik Kumpul (Meeting Point)</span>
            <span class="meta-pill-val">${escapeHtml(pkg.meetingPoint)}</span>
          </div>
        </div>

        <div class="detail-price-box">
          <span class="meta-pill-label">Estimasi Biaya Paket (Contoh)</span>
          <div class="price-tag">${escapeHtml(pkg.price)} <span style="font-size: 0.9rem; font-weight: 500; color: var(--color-muted);">${escapeHtml(pkg.priceUnit)}</span></div>
          <div class="price-note">*Biaya tertera adalah data percontohan PKL. Silakan hubungi admin untuk kuota aktual.</div>
        </div>

        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg" style="width: 100%;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Konsultasi & Reservasi via WhatsApp
        </a>
      </div>
    </div>

    <!-- Main Content & Sidebar -->
    <div class="detail-layout-grid">
      <div class="detail-main-content">
        <!-- Deskripsi Paket -->
        <section class="detail-section-block">
          <h3>Deskripsi Perjalanan</h3>
          <p class="prose">${escapeHtml(pkg.description)}</p>

          <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem; font-size: 1.05rem;">Highlight Pengalaman</h4>
          <ul class="facility-list">
            ${highlightsHtml}
          </ul>
        </section>

        <!-- Itinerary -->
        <section class="detail-section-block">
          <h3>Rencana Perjalanan (Itinerary)</h3>
          <div class="timeline">
            ${itineraryHtml}
          </div>
        </section>

        <!-- Fasilitas Termasuk & Tidak Termasuk -->
        <section class="detail-section-block">
          <h3>Fasilitas & Layanan</h3>
          <div class="facilities-grid">
            <div>
              <h4 style="color: var(--color-forest); font-size: 0.95rem; margin-bottom: 1rem;">Termasuk dalam Paket</h4>
              <ul class="facility-list">
                ${includesHtml}
              </ul>
            </div>
            <div>
              <h4 style="color: #991B1B; font-size: 0.95rem; margin-bottom: 1rem;">Tidak Termasuk</h4>
              <ul class="facility-list">
                ${excludesHtml}
              </ul>
            </div>
          </div>
        </section>

        <!-- Tips Persiapan -->
        <section class="detail-section-block">
          <h3>Tips & Persiapan Perjalanan</h3>
          <ul style="padding-left: 0;">
            ${preparationHtml}
          </ul>
          ${pkg.note ? `
            <div class="form-note-box" style="margin-top: 1.5rem;">
              <strong>Catatan Penting:</strong> ${escapeHtml(pkg.note)}
            </div>
          ` : ''}
        </section>
      </div>

      <!-- Sticky Sidebar -->
      <aside class="sticky-sidebar">
        <div class="help-card">
          <h4>Butuh Tanya-tanya Dulu?</h4>
          <p>Admin trip kami siap membantu menyesuaikan jadwal kereta, penjemputan stasiun, atau sewa perlengkapan tambahan.</p>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%; margin-bottom: 0.75rem;">
            Chat Admin Trip
          </a>
          <a href="kontak.html" class="btn btn-outline-white" style="width: 100%;">
            Lihat Form Pertanyaan
          </a>
        </div>

        <div style="background-color: var(--color-white); border: 1px solid var(--color-border-card); border-radius: var(--radius-card); padding: 1.65rem; box-shadow: var(--shadow-subtle);">
          <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem;">Paket Lainnya</h4>
          <ul style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.875rem;">
            ${Object.values(PACKAGES_DATA).filter(p => p.slug !== pkg.slug).map(other => `
              <li style="border-bottom: 1px solid var(--color-border); padding-bottom: 0.5rem;">
                <a href="detail-paket.html?paket=${escapeHtml(other.slug)}" style="font-weight: 700; color: var(--color-deep-forest);">
                  ${escapeHtml(other.title)}
                </a>
                <div style="font-size: 0.75rem; color: var(--color-muted);">${escapeHtml(other.duration)}</div>
              </li>
            `).join('')}
          </ul>
          <a href="paket.html" class="btn btn-ghost" style="margin-top: 1rem; width: 100%; justify-content: flex-start; padding-left: 0;">
            ← Kembali ke Semua Paket
          </a>
        </div>
      </aside>
    </div>
  `;
}

/* ==========================================================================
   9. GALERI LIGHTBOX (galeri.html)
   ========================================================================== */
function initGalleryLightbox() {
  const galleryGrid = document.querySelector('.gallery-interactive-grid');
  const lightboxModal = document.getElementById('gallery-lightbox');
  if (!galleryGrid || !lightboxModal) return;

  const lbImg = lightboxModal.querySelector('.lightbox-image');
  const lbTitle = lightboxModal.querySelector('.lightbox-title');
  const lbCounter = lightboxModal.querySelector('.lightbox-counter');
  const btnClose = lightboxModal.querySelector('.lightbox-close');
  const btnPrev = lightboxModal.querySelector('.lightbox-prev');
  const btnNext = lightboxModal.querySelector('.lightbox-next');

  let currentIndex = 0;
  const galleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = galleryItems[currentIndex];
    const imgSrc = item.getAttribute('data-img-src') || item.querySelector('img').getAttribute('src');
    const title = item.getAttribute('data-img-title') || item.querySelector('img').getAttribute('alt');

    lbImg.setAttribute('src', imgSrc);
    lbImg.setAttribute('alt', title);
    lbTitle.textContent = title;
    lbCounter.textContent = `${currentIndex + 1} / ${galleryItems.length}`;
  }

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  btnClose.addEventListener('click', closeLightbox);
  btnNext.addEventListener('click', showNext);
  btnPrev.addEventListener('click', showPrev);

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  const galleryFilters = document.querySelectorAll('.gallery-filter-btn');
  galleryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';

      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   10. FORM VALIDATION & WHATSAPP GENERATOR (kontak.html)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-inquiry-form');
  if (!form) return;

  const nameInput = document.getElementById('input-name');
  const contactInput = document.getElementById('input-contact');
  const packageSelect = document.getElementById('select-package');
  const messageInput = document.getElementById('textarea-message');
  const statusAlert = document.getElementById('form-status-alert');

  function validateField(input, errorElement, condition, message) {
    if (!condition) {
      input.classList.add('is-invalid');
      errorElement.textContent = message;
      errorElement.classList.add('active');
      return false;
    } else {
      input.classList.remove('is-invalid');
      errorElement.classList.remove('active');
      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = nameInput.value.trim();
    const contactVal = contactInput.value.trim();
    const packageVal = packageSelect.value.trim();
    const messageVal = messageInput.value.trim();

    const nameError = document.getElementById('error-name');
    const contactError = document.getElementById('error-contact');
    const messageError = document.getElementById('error-message');

    let isValid = true;

    if (!validateField(nameInput, nameError, nameVal.length >= 2, 'Silakan masukkan nama lengkapmu.')) {
      isValid = false;
    }

    if (!validateField(contactInput, contactError, contactVal.length >= 6, 'Silakan masukkan nomor WhatsApp atau email yang aktif.')) {
      isValid = false;
    }

    if (!validateField(messageInput, messageError, messageVal.length >= 5, 'Mohon tuliskan pesan atau pertanyaanmu minimal 5 karakter.')) {
      isValid = false;
    }

    if (!isValid) return;

    const formattedMessage = [
      `*FORM KONSULTASI TRIP — ${CONTACT_CONFIG.brandName}*`,
      `• *Nama:* ${nameVal}`,
      `• *Kontak:* ${contactVal}`,
      `• *Pilihan Paket:* ${packageVal || 'Belum Menentukan / Tanya Rekomendasi'}`,
      `• *Pesan:* ${messageVal}`
    ].join('\n');

    const waUrl = CONTACT_CONFIG.getWhatsAppUrl(formattedMessage);

    if (statusAlert) {
      statusAlert.innerHTML = `
        <div style="font-weight: 700; margin-bottom: 0.5rem; font-size: 1rem;">Pesan Konsultasi Berhasil Disiapkan!</div>
        <p style="margin-bottom: 1rem; font-size: 0.875rem;">
          Karena website ini berjalan di sisi klien (frontend statis), silakan klik tombol di bawah untuk melanjutkan dan mengirim pesan langsung ke WhatsApp admin kami.
        </p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display: inline-flex;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          Buka & Kirim Pesan di WhatsApp
        </a>
      `;
      statusAlert.classList.add('success');
      statusAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

/* ==========================================================================
   11. IMAGE FALLBACK HANDLER
   ========================================================================== */
function initImageFallbackHandler() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', () => {
      if (!img.src.includes('placeholder.svg')) {
        img.src = 'assets/images/placeholder.svg';
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
