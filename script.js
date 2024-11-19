const map = L.map('map').setView([33.67345752177457, 130.44140661378802], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//アイコン
//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });

    L.marker([33.67345752177457, 130.44140661378802], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！<img src="images/img01.png" alt="img">').openPopup();

  
  L.marker([33.674649, 130.439311], { icon: whiteIcon }).addTo(map).bindPopup('こんにちは！');
  L.marker([33.673319, 130.447841], { icon: pinkIcon }).addTo(map).bindPopup('こんにちは！');

  L.tileLayer('国土地理院のタイルURL', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);
  // Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
  }).addTo(map);
  const circle = L.circle([33.664368, 130.420761], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);
  circle.bindPopup("半径1kmの範囲");

    // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

  // 多角形の表示
const polygon = L.polygon([
    [33.673341, 130.447782],
    [33.67606, 130.445834],
    [33.677961, 130.451338]
  ], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3
  }).addTo(map);

