import React, { useState, useEffect } from "react";

const komikCumleler = [
  "Cüce, dağa da çıksa cüce, dev, kuyuya da girse devdir!",
  "Ayağını yorganına göre uzatmaya kasmana hiç gerek yok!",
  "Her sakallıyı deden sanma. Baban, kuzenin, dayın hatta halan bile olabilir. Belki de hic bir seyin degildir!",
  "Cüce, yükseklik korkusu değil, tepeden bakış kompleksiyle yaşar!",
  "Cüce, küçük bedeniyle büyük fırtınalar koparır, ama genellikle çay bardağında!",
  "Cüce, uyurken düşer ve dünyayı sallar!",
];

function Cuce() {
  const [komikCumle, setKomikCumle] = useState("");

  useEffect(() => {
    // Yeni bir komik cümle seçmek için rastgele bir index seçelim
    const randomIndex = Math.floor(Math.random() * komikCumleler.length);
    // Seçilen index'teki komik cümleyi ayarlayalım
    setKomikCumle(komikCumleler[randomIndex]);
  }, []);

  return (
    <div className="p-4 text-white bg-danger rounded">
      <p className="p-text">Cüce</p>
      <p className="p-2">{komikCumle}</p>
    </div>
  );
}

export default Cuce;
