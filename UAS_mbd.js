
// === UAS MBD ===
// Soal 1: Key-Value Model
use keyValueDB

db.kvCollection.insertMany([
  { "key": "nama", "value": "Dian" },
  { "key": "usia", "value": 21 },
  { "key": "kota", "value": "Bandung" },
  { "key": "hobi", "value": "Membaca" },
  { "key": "status", "value": "Mahasiswa" }
])

// Soal 2: Wide-Column Model
use wideColumnDB

db.users.insertMany([
  {
    "id": 1,
    "nama": "Ayu",
    "umur": 22,
    "alamat": {
      "kota": "Jakarta",
      "kode_pos": "10220"
    },
    "kontak": { "email": "ayu@mail.com" }
  },
  {
    "id": 2,
    "nama": "Rudi",
    "umur": 25,
    "pekerjaan": "Programmer"
  },
  {
    "id": 3,
    "nama": "Sari",
    "hobi": ["melukis", "berenang"]
  },
  {
    "id": 4,
    "nama": "Budi",
    "alamat": {
      "kota": "Surabaya"
    }
  },
  {
    "id": 5,
    "nama": "Tina",
    "umur": 28,
    "kontak": {
      "telepon": "081234567890"
    }
  }
])
