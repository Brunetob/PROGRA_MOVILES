import React from "react";
import { Avatar, Card, Carousel, Button, Flex } from "antd";

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#8239DE",
    lineHeight: "160px",
    textAlign: "center",
    background: "#8239DE",
};

const HeroCard: React.FC = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div>
            <Card
                title="Hero Card - Bruno"
                bordered={false}
                style={{ width: 400, height: 500 }}
            >
            <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar
                size={70}
                src={
                    "https://sm.ign.com/ign_es/screenshot/default/black-panther-2017-movie-1920x1080-black-panther-delivering_6988.jpg"
                }
            />
            <div
                style={{
                    marginLeft: "10px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h2 style={{ margin: 0 }}>Black Panter</h2>
                <p style={{ margin: 0 }}>T'Challa</p>
                <br />
                <Flex wrap="wrap" gap="small" justify="center">
                    <Button size="small" type="primary" danger>
                        Traje negro
                    </Button>
                    <Button size="small" danger>
                        Hecho de Vibranio
                    </Button>
                    <Button size="small" danger>
                        De Wakanda
                    </Button>
                </Flex>
            </div>
            <br />
            </div>{" "}
            <br />
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            src="https://super-ficcion.com/wp-content/uploads/2022/12/Vibranium-1280x640.webp"
                            alt="Vibranium"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            src="https://m.media-amazon.com/images/M/MV5BYmVlYTUwYTAtMjAwMS00ODU1LWJjNzUtNmQxODlhODQ4NGJkXkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_.jpg"
                            alt="Black Suit"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            src="https://i.pinimg.com/1200x/9c/00/02/9c0002e5226cabaf7ca2de83cc2905a9.jpg"
                            alt="FROM WAKANDAA"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img
                            src="https://st1.uvnimg.com/dims4/default/0446111/2147483647/thumbnail/400x225/quality/75/?url=https%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fassets%2Fvixes%2Fw%2Fwakanda_marvel_mcu_black_panther.jpg"
                            alt="From Wakanda"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </h3>
                </div>
            </Carousel>
            <br />
            <Flex
                wrap="wrap"
                gap="small"
                justify="center"
                style={{ marginTop: "10px" }}
            >
            <Button type="primary" danger>
                Descartar
            </Button>
            <Button danger>
                Usar
            </Button>
            </Flex>
        </Card>
    </div>
  );
};

export default HeroCard;
