import { useEffect, useState } from "react";

interface HoroscopeCardData {
    title: string;
    img: string;
    description: string;
}

/*const horoscopeData: HoroscopeCardData[] = [
    { title: "aries", description: "", img: "/src/assets/aries.png" },
    { title: "taurus", description: "", img: "/src/assets/taurus.png" },
    { title: "gemini", description: "", img: "/src/assets/gemini.png" },
    { title: "cancer", description: "", img: "/src/assets/cancer.png" },
    { title: "leo", description: "", img: "/src/assets/leo.png" },
    { title: "virgo", description: "", img: "/src/assets/virgo.png" },
    { title: "libra", description: "", img: "/src/assets/libra.png" },
    { title: "scorpio", description: "", img: "/src/assets/scorpio.png" },
    { title: "sagitarius", description: "", img: "/src/assets/sagitarius.png" },
    { title: "crapricorn", description: "", img: "/src/assets/capricorn.png" },
    { title: "aquarius", description: "", img: "/src/assets/aquarius.png" },
    { title: "piscis", description: "", img: "/src/assets/piscis.png" },
];*/

export function HoroscopeCard({ title, img, description }: HoroscopeCardData) {
    return (
      <div className="card">
        <img className="image" src={process.env.PUBLIC_URL + img} alt={title} />
        <p className="description">{description}</p>
      </div>
    );
}


export function Horoscope() {
    const [horoscopes, setHoroscopes] = useState<HoroscopeCardData[]>([]);
  
    useEffect(() => {
      fetch(process.env.PUBLIC_URL + "/src/data/horoscopes.json")
        .then((res) => res.json())
        .then((res) => {
          setHoroscopes(res);
        });
    }, []);
  
    return (
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {horoscopes.map((horoscope, index) => (
          <HoroscopeCard
            key={index}
            img={horoscope.img}
            title={horoscope.title}
            description={horoscope.description}
          />
        ))}
      </div>
    );
  }