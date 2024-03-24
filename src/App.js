import "./index.css";
import { useEffect, useState } from "react";
import Cuce from "./cuce";
import Deve from "./deve";

function App() {
  const [devecuce, setDeveCuce] = useState(true);
  const [sayac, setSayac] = useState(0);
  const [tiklama, setTiklama] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const aralik = setInterval(() => {
      const randomElement = Math.random() > 0.5 ? true : false;

      setDeveCuce(randomElement);
      setTiklama(false);
      setClick(false);
    }, 2000);

    return () => {
      clearInterval(aralik);
    };
  }, []);

  function deveHesapla() {
    if (!tiklama && !click) {
      setClick(true);
      setTiklama(true);

      devecuce
        ? setSayac((eskideğer) => eskideğer + 1)
        : setSayac((eskideğer) => eskideğer - 1);
    }
  }

  function cuceHesapla() {
    if (!tiklama && !click) {
      setClick(true);
      setTiklama(true);
      devecuce
        ? setSayac((eskideğer) => eskideğer - 1)
        : setSayac((eskideğer) => eskideğer + 1);
    }
  }

  function refreshPage() {
    setSayac(0); // Skoru sıfırla
    window.location.reload(); // Sayfayı yeniden yükle
  }

  return (
    <>
      <div className="main">
        <div className="row">
          <h2>Deve Cüce</h2>
          {devecuce ? <Deve /> : <Cuce />}
          <div className="button-container">
            <button
              onClick={deveHesapla}
              className={` btn btn-primary dev-button ${
                click ? "opacity" : ""
              }`}
            >
              🐪 Deve
            </button>
            <button
              onClick={cuceHesapla}
              className={`btn btn-primary cuc-button ${click ? "opacity" : ""}`}
            >
              🧝 Cüce
            </button>
            <button onClick={refreshPage} className="btn btn-success refresh-button">
              Sayfayı Yenile
            </button>
            <div className="p-2 skor">Skor = {sayac} </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
