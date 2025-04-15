// src/components/Carousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box, Typography } from "@mui/material";

type Slide = {
  label: string;
  imgPath: string;
};

const slides: Slide[] = [
  {
    label: "富士山",
    imgPath: "fuji.png",
  },
  {
    label: "湖",
    imgPath: "lake.png",
  },
  {
    label: "都市",
    imgPath: "city.png",
  },
];

export const Carousel = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ borderRadius: 12, paddingBottom: 40 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.label}>
            <Box
              component="img"
              src={slide.imgPath}
              alt={slide.label}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
