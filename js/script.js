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
  // Nomor WhatsApp resmi (Ganti dengan nomor WhatsApp aktif, format 62...)
  whatsappNumber: '6281234567890',
  defaultChatMessage: 'Halo OTW Banyuwangi, saya ingin bertanya mengenai paket wisata.',
  // Email resmi
  email: 'info@otwbanyuwangi.com',
  operationalHours: 'Setiap Hari: 07.00 - 21.00 WIB',
  baseLocation: 'Banyuwangi Kota, Jawa Timur (Dekat Stasiun Banyuwangi Kota / Karangasem)',

  // Konfigurasi tautan media sosial resmi
  social: {
    youtube: 'https://youtube.com/@otwbanyuwangi',
    tiktok: 'https://tiktok.com/@otwbanyuwangi',
    instagram: 'https://instagram.com/otwbanyuwangi',
    whatsapp: 'https://wa.me/6281234567890?text=Halo%20OTW%20Banyuwangi%2C%20saya%20ingin%20bertanya%20mengenai%20paket%20wisata.'
  },
  
  /**
   * Menghasilkan URL WhatsApp dengan pesan yang sudah di-encode
   */
  getWhatsAppUrl(message) {
    const cleanNumber = this.whatsappNumber.replace(/[^0-9]/g, '');
    const textToSend = message ? message.trim() : this.defaultChatMessage;
    const encodedMessage = encodeURIComponent(textToSend);
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
  initActiveNavScroll();
  initWhatsAppButtons();
  initCatalogFilters();
  initPackageToggle();
  initPackageModal();
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
   5B. ACTIVE NAVBAR LINK ON SCROLL (Single-Page Navigation)
   ========================================================================== */
function initActiveNavScroll() {
  const sections = document.querySelectorAll('section[id], header[id], main > section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (sections.length === 0 || navLinks.length === 0) return;

  const onScroll = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
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
  const filterContainer = document.querySelector('.package-filter-bar, .filter-bar:not(.gallery-filter-bar)');
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
   7C. TOGGLE MORE PACKAGES (Simplified View)
   ========================================================================== */
function initPackageToggle() {
  const toggleBtn = document.getElementById('toggle-more-packages');
  const extraCards = document.querySelectorAll('.trip-card-extra');
  if (!toggleBtn || extraCards.length === 0) return;

  toggleBtn.addEventListener('click', () => {
    const isShowing = extraCards[0].classList.contains('visible');
    extraCards.forEach(card => card.classList.toggle('visible', !isShowing));
    toggleBtn.innerHTML = !isShowing
      ? 'Tampilkan Lebih Ringkas'
      : `Lihat Semua Paket (${extraCards.length + 3}) <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>`;
  });
}

/* ==========================================================================
   7B. PACKAGE DETAIL MODAL (Single-Page Experience)
   ========================================================================== */
function initPackageModal() {
  const modal = document.getElementById('package-detail-modal');
  if (!modal) return;

  const modalBody = document.getElementById('modal-package-body');
  const modalBadge = document.getElementById('modal-package-badge');
  const modalLoc = document.getElementById('modal-package-location');
  const modalPrice = document.getElementById('modal-package-price');
  const modalWaBtn = document.getElementById('modal-package-wa-btn');
  const closeBtns = modal.querySelectorAll('.package-modal-close, .package-modal-close-btn');

  function openPackage(slug) {
    const pkg = PACKAGES_DATA[slug];
    if (!pkg) return;

    if (modalBadge) {
      modalBadge.textContent = pkg.categoryLabel || 'PAKET WISATA';
      modalBadge.className = `trip-badge ${pkg.category === 'open-trip' ? 'trip-badge-forest' : 'trip-badge-warm'}`;
    }
    if (modalLoc) {
      modalLoc.textContent = pkg.location || 'Banyuwangi';
    }
    if (modalPrice) {
      modalPrice.innerHTML = `${escapeHtml(pkg.price)} <span class="price-unit">${escapeHtml(pkg.priceUnit)}</span>`;
    }

    const waMsg = `Halo ${CONTACT_CONFIG.brandName}, saya ingin konsultasi & pemesanan paket: "${pkg.title}". Mohon info jadwal terdekat dan ketersediaan kuotanya.`;
    if (modalWaBtn) {
      modalWaBtn.href = CONTACT_CONFIG.getWhatsAppUrl(waMsg);
    }

    const highlightsHtml = (pkg.highlights || []).map(item => `
      <li class="detail-feature-item">
        <div class="feature-icon-box" aria-hidden="true">
          <svg class="facility-icon-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span>${escapeHtml(item)}</span>
      </li>
    `).join('');

    const timelineHtml = (pkg.itinerary || []).map(step => `
      <div class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-content">
          <div class="timeline-time">${escapeHtml(step.time)}</div>
          <h4 class="timeline-title">${escapeHtml(step.title)}</h4>
          <p class="timeline-desc">${escapeHtml(step.desc)}</p>
        </div>
      </div>
    `).join('');

    const includesHtml = (pkg.includes || []).map(inc => `
      <li class="facility-item">
        <div class="facility-icon-wrap include-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span>${escapeHtml(inc)}</span>
      </li>
    `).join('');

    const excludesHtml = (pkg.excludes || []).map(exc => `
      <li class="facility-item">
        <div class="facility-icon-wrap exclude-icon" aria-hidden="true">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <span>${escapeHtml(exc)}</span>
      </li>
    `).join('');

    const prepHtml = (pkg.preparation || []).map(p => `
      <li class="preparation-item">
        <span class="prep-bullet" aria-hidden="true">•</span>
        <span>${escapeHtml(p)}</span>
      </li>
    `).join('');

    if (modalBody) {
      modalBody.innerHTML = `
        <div class="detail-header-tags">
          <h3 id="modal-package-title" class="detail-title-main" style="margin-bottom: 0.5rem; font-size: clamp(1.35rem, 2.5vw, 1.85rem);">
            ${escapeHtml(pkg.title)}
          </h3>
          <p class="detail-summary-lead" style="margin-bottom: 1.25rem;">
            ${escapeHtml(pkg.summary)}
          </p>
        </div>

        <div style="border-radius: var(--radius-sm); overflow: hidden; max-height: 320px; aspect-ratio: 16/9; background-color: var(--color-deep-forest);">
          <img src="${escapeHtml(pkg.heroImage || pkg.image)}" alt="${escapeHtml(pkg.title)}" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <div class="detail-specs-grid" style="margin-block: 0.5rem;">
          <div class="spec-item">
            <span class="spec-label">Durasi Waktu</span>
            <span class="spec-value">${escapeHtml(pkg.duration)}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Kategori Trip</span>
            <span class="spec-value">${escapeHtml(pkg.categoryLabel)}</span>
          </div>
          <div class="spec-item spec-span-2">
            <span class="spec-label">Titik Kumpul (Meeting Point)</span>
            <span class="spec-value">${escapeHtml(pkg.meetingPoint)}</span>
          </div>
        </div>

        <div class="detail-panel-section">
          <h4 class="detail-panel-title">Deskripsi &amp; Pengalaman</h4>
          <p class="detail-body-prose" style="margin-bottom: 1rem;">
            ${escapeHtml(pkg.description)}
          </p>
          <ul class="detail-feature-list">
            ${highlightsHtml}
          </ul>
        </div>

        <div class="detail-panel-section">
          <h4 class="detail-panel-title">Rencana Perjalanan (Itinerary)</h4>
          <div class="detail-vertical-timeline">
            ${timelineHtml}
          </div>
        </div>

        <div class="detail-panel-section">
          <h4 class="detail-panel-title">Fasilitas Perjalanan</h4>
          <div class="facilities-grid">
            <div class="facilities-col">
              <h5 class="facilities-heading" style="color: #2F614E;">Sudah Termasuk (Include):</h5>
              <ul class="facilities-list">
                ${includesHtml}
              </ul>
            </div>
            <div class="facilities-col">
              <h5 class="facilities-heading" style="color: #A34E36;">Tidak Termasuk (Exclude):</h5>
              <ul class="facilities-list">
                ${excludesHtml}
              </ul>
            </div>
          </div>
        </div>

        ${prepHtml ? `
          <div class="detail-panel-section">
            <h4 class="detail-panel-title">Tips &amp; Perlengkapan yang Perlu Disiapkan</h4>
            <ul class="preparation-list">
              ${prepHtml}
            </ul>
          </div>
        ` : ''}

        ${pkg.note ? `
          <div class="detail-notice-box">
            <svg class="notice-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <div class="notice-text">
              <strong>Catatan Penting:</strong> ${escapeHtml(pkg.note)}
            </div>
          </div>
        ` : ''}
      `;
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-package]');
    if (trigger) {
      e.preventDefault();
      const slug = trigger.getAttribute('data-open-package');
      if (slug) openPackage(slug);
    }
  });

  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const pkgParam = urlParams.get('paket');
  if (pkgParam && PACKAGES_DATA[pkgParam]) {
    openPackage(pkgParam);
  } else if (window.location.hash.startsWith('#paket-')) {
    const hashSlug = window.location.hash.replace('#paket-', '');
    if (PACKAGES_DATA[hashSlug]) {
      openPackage(hashSlug);
    }
  }
}

/* ==========================================================================
   9. GALERI LIGHTBOX (galeri.html)
   ========================================================================== */
function initGalleryLightbox() {
  const galleryGrid = document.querySelector('.gallery-biolink-grid, .gallery-interactive-grid');
  const lightboxModal = document.getElementById('gallery-lightbox');
  if (!galleryGrid || !lightboxModal) return;

  const lbImg = lightboxModal.querySelector('.lightbox-image');
  const lbTitle = lightboxModal.querySelector('.lightbox-title');
  const lbCounter = lightboxModal.querySelector('.lightbox-counter');
  const btnClose = lightboxModal.querySelector('.lightbox-close');
  const btnPrev = lightboxModal.querySelector('.lightbox-prev');
  const btnNext = lightboxModal.querySelector('.lightbox-next');

  let currentIndex = 0;
  const galleryItems = Array.from(galleryGrid.querySelectorAll('.gallery-biolink-item, .gallery-item'));
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

  // Navigasi sentuh (touch swipe) pada mode mobile
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  const minSwipeDistance = 40; // Jarak minimal swipe dalam px

  function getCoords(e) {
    if (e.changedTouches && e.changedTouches.length > 0) {
      return {
        x: e.changedTouches[0].clientX || e.changedTouches[0].screenX,
        y: e.changedTouches[0].clientY || e.changedTouches[0].screenY
      };
    }
    return { x: e.clientX || 0, y: e.clientY || 0 };
  }

  lightboxModal.addEventListener('touchstart', (e) => {
    const c = getCoords(e);
    touchStartX = c.x;
    touchStartY = c.y;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    const c = getCoords(e);
    touchEndX = c.x;
    touchEndY = c.y;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Pastikan gestur lebih horizontal daripada vertikal
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) >= minSwipeDistance) {
      if (diffX < 0) {
        // Geser ke kiri -> Foto berikutnya
        showNext();
      } else {
        // Geser ke kanan -> Foto sebelumnya
        showPrev();
      }
    }
  }

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
        <div style="font-weight: 700; margin-bottom: 0.5rem; font-size: 1rem;">Format Pesan Konsultasi Berhasil Disiapkan!</div>
        <p style="margin-bottom: 1rem; font-size: 0.875rem;">
          Silakan klik tombol di bawah untuk langsung membuka obrolan dan mengirimkan detail pesanmu ke WhatsApp resmi admin kami.
        </p>
        <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="display: inline-flex;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill="currentColor" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
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
