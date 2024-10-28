//! Proje: Hava Durumu Uyarı Sistemi

//! Amaç
/*
 *Kullanıcıdan hava durumu hakkında bilgi alarak uygun kıyafet önerisi veya uyarı
 *veren bir program yazmak. Bu program, kullanıcının verdiği duruma göre
 *(örneğin, güneşli, yağmurlu, karlı, rüzgarlı) uygun öneriyi ekrana yazdıracak.
 */
//! Gereksinimler
/*
 * 1. Kullanıcıdan hava durumunu (güneşli, yağmurlu, karlı, rüzgarlı) alın.
 * 2. Hava durumu seçimine göre uygun öneriyi belirleyin.
 * 3. Belirlenen öneriyi kullanıcıya gösterin.
 */

//! Hava Durumu Önerileri
/*
 *- Güneşli: "Güneş kremi sürmeyi unutmayın!"
 *- Yağmurlu: "Şemsiyenizi yanınıza alın!"
 *- Karlı: "Kalın giyin, sıcak tutan bir şeyler giyin!"
 *- Rüzgarlı: "Rüzgârda uçuşan şeyler giymeyin!"
 */
//! Kullanıcıdan hava durumu bilgisini al
let havaDurumu = prompt(
  "Lütfen hava durumunu (güneşli, yağmurlu, karlı, rüzgarlı) girin."
);
//! Geçerlilik kontrolü
if (
  havaDurumu == "güneşli" ||
  havaDurumu == "yağmurlu" ||
  havaDurumu == "karlı" ||
  havaDurumu == "rüzgarlı"
) {
  //! Hava durumuna göre öneri belirleme
  switch (havaDurumu) {
    case "güneşli":
      console.log("Güneş kremi sürmeyi unutmayın!");
      break;
    case "yağmurlu":
      console.log("Şemsiyenizi yanınıza alın!");
      break;
    case "karlı":
      console.log("Kalın giyin, sıcak tutan bir şeyler giyin!");
      break;
    case "karlı":
      console.log("Rüzgârda uçuşan şeyler giymeyin!");
      break;
  }
} else {
  console.log("Lütfen geçerli bir hava durumu girin!");
}
