import React from "react";
import Card from "antd/es/card/Card"; // Card
import Meta from "antd/es/list"; // Card
import Carousel from "antd"; // Carousel

/* //* Código héroe */
interface Hero {
    realName: string;
    heroName: string;
    img: string;
}

const hero: Hero = {
    realName: "Iron Man",
    heroName: "Tony Stark",
    img: "https://img.asmedia.epimg.net/resizer/xgCpqQeMhhwX1npviA73I6EAESw=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/IQJZUIY3QRDWTKU4SFKTCYTMC4.jpg";
}

/* //* Código carrusel de imágenes */
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


function CardHero() {
    const Meta = Card;
    const Carousel = Card;

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <div>
                    <Carousel afterChange={onChange}>
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
                    <img
                        id="#fotito"
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                </div>
            }
        >
            <Meta title={hero.heroName} description={hero.realName} />
        </Card>
    );
}

export default CardHero;
