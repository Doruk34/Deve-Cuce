import React, { useState, useEffect } from "react";

// Komik cümleler dizisi
const komikCumleler = [
  "Devede akıl olsa eşşeğin arkasından gitmez!",
  "Her Devenin eti yenmez!",
  "Deve kırk yıl sonra intikam almış. Ne çabuk oldu demiş!",
  "Deveye sormuşlar boynun neden eğri diye. Nerem doğru ki demiş!",
  "Deveye bir çömlek yapıver demişler, yedi kazan sütü devirmiş, çok şükür bi kazasız çıktım demiş!",
  "Deveye sormuşlar yokuşu mu seversin inişi mi? Düz başıma mı yıkıldı demiş!"
];

function Deve() {
  const [randomCumle, setRandomCumle] = useState("");

  // Component ilk yüklendiğinde rastgele bir cümle seçme
  useEffect(() => {
    selectRandomCumle();
  }, []);

  // Rastgele bir cümle seçen fonksiyon
  const selectRandomCumle = () => {
    const randomIndex = Math.floor(Math.random() * komikCumleler.length);
    setRandomCumle(komikCumleler[randomIndex]);
  };

  return (
    <div className="p-4 text-white bg-primary rounded">
      <p className="p-text">Deve</p>
      <p className="p-2">{randomCumle}</p>
    </div>
  );
}

export default Deve;

