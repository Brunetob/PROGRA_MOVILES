//import React from "react";
import {Card, Carousel} from "antd"; // Card
//const { Meta } = Card;

//* Código héroe
interface Hero {
    realName: string;
    heroName: string;
    img: string;
}

const hero: Hero = {
    realName: "Iron Man",
    heroName: "Tony Stark",
    img: "https://img.asmedia.epimg.net/resizer/xgCpqQeMhhwX1npviA73I6EAESw=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IQJZUIY3QRDWTKU4SFKTCYTMC4.jpg"
};

// Código carrusel
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '300px'
};

function CardHero() {
    // Código Carrusel
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    }; //  Código Carrusel

    return(
        <div className="main-content">
            <Card
                hoverable
                style={{ width: "400px", display: "flex", flexDirection: "column"}}
                cover={<img className = "herocard" alt={hero.heroName} src={hero.img} style={ {width: 100, height: 100, marginLeft: 50, marginTop: 10, borderRadius: 100}} />}
            >
            {/*<Meta title={hero.heroName} description={hero.realName} />*/}
            <h1> {hero.heroName}</h1>
            <p> {hero.realName} </p>
            <div>
                <Carousel afterChange={onChange} style={{ marginTop: 10 }}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
            </Card>
        </div>
    );
}

export default CardHero;