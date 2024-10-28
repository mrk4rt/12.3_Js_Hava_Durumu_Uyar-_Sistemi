# Proje: Hava Durumu Uyarı Sistemi

## Amaç
Kullanıcıdan hava durumu hakkında bilgi alarak uygun kıyafet önerisi veya uyarı veren bir program yazmak. Bu program, kullanıcının verdiği duruma göre (örneğin, güneşli, yağmurlu, karlı, rüzgarlı) uygun öneriyi ekrana yazdıracak.

## Gereksinimler
1. Kullanıcıdan hava durumunu (güneşli, yağmurlu, karlı, rüzgarlı) alın.
2. Hava durumu seçimine göre uygun öneriyi belirleyin.
3. Belirlenen öneriyi kullanıcıya gösterin.

### Hava Durumu Önerileri
- Güneşli: "Güneş kremi sürmeyi unutmayın!"
- Yağmurlu: "Şemsiyenizi yanınıza alın!"
- Karlı: "Kalın giyin, sıcak tutan bir şeyler giyin!"
- Rüzgarlı: "Rüzgârda uçuşan şeyler giymeyin!"

## Adımlar

### 1. Kullanıcı Girişi Alma
`prompt()` ile hava durumu bilgisini al ve bir değişkene atayın.

### 2. Geçerlilik Kontrolü
`if-else` ile kullanıcının geçerli bir seçenek (güneşli, yağmurlu, karlı, rüzgarlı) girip girmediğini kontrol edin.
- Geçerli değilse "Lütfen geçerli bir hava durumu girin!" mesajını gösterin ve programı sonlandırın.

### 3. Kıyafet Önerisi Belirleme
`switch-case` yapısını kullanarak her hava durumu için farklı bir öneriyi temsil eden `case` oluşturun.
- Kullanıcıdan alınan değere göre doğru öneriyi belirleyin.

### 4. Çıktı Gösterme
Kullanıcıya hava durumuna uygun öneriyi ekrana yazdırın.

## İpuçları
- Hatalı giriş durumunda `console.log()` veya `alert()` ile kullanıcıya bilgi verebilirsiniz.
- Farklı hava durumlarını test ederek programın doğru önerileri verdiğinden emin olun.
