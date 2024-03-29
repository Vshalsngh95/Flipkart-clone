/* eslint-disable react/jsx-key */
import { Box } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Swal from "sweetalert2";

const bannerData = [
    {
        id: 1,
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
    },
    {
        id: 2,
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
    },
    {
        id: 3,
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
    },
    {
        id: 4,
        url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Banner = () => {
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {bannerData.map((data) => (
                <Box
                    component={"div"}
                    key={data.id}
                    onClick={(e) => {
                        e.preventDefault();
                        Swal.fire(
                            "Oops!",
                            " We are working on this Page.",
                            "info"
                        );
                    }}
                    className="cursor-pointer "
                >
                    <img
                        src={data.url}
                        className=" w-[100%] md:h-[280px] sm:object-cover sm:h-[180px] "
                    />
                </Box>
            ))}
        </Carousel>
    );
};

export default Banner;
