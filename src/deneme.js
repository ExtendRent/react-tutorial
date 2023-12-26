import React, { useState } from 'react';

export const Deneme = () => {
  // State'leri burada tanımla
  const [sayi1, setSayi1] = useState(0);
  const [sayi2, setSayi2] = useState(0);
  const [sonuc, setSonuc] = useState(0);

  // Toplama işlemi
  const topla = () => {
    const toplam = sayi1 + sayi2;
    setSonuc(toplam);
  };

  return (
    <>
      <input type='text' value={sayi1} onChange={(e) => setSayi1(e.target.value)} />
      <input type='text' value={sayi2} onChange={(e) => setSayi2(e.target.value)} />
      <button onClick={topla}>Topla</button>
      <p>Sonuç: {sonuc}</p>
    </>
  );
};
