import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = props => {
  return (
    <Slider
      sx={{
        color: "#00CC22",
        "& .MuiSlider-track": {
          color: "#8B8B8B", // цвет неактивной части слайдера
        },
        "& .MuiSlider-thumb": {
          width: 18, // Ширина бегунка
          height: 18, // Высота бегунка
          backgroundColor: "white", // Цвет фона бегунка (зеленый)
          border: 1,
          borderColor: "#00CC22", // Без границы
          borderRadius: "50%", // Круглая форма бегунка

          "&:before": {
            content: '""',
            position: "absolute",
            width: 6, // Ширина точки внутри бегунка
            height: 6, // Высота точки внутри бегунка
            backgroundColor: "#00CC22", // Цвет точки (зеленый)
            borderRadius: "50%", // Круглая форма точки
            top: "50%", // Центрирование точки по вертикали
            left: "50%", // Центрирование точки по горизонтали
            transform: "translate(-50%, -50%)", // Центрирование точки
          },
          "&:focus, &:hover": {
            borderColor: "#8B8B8B", // Тень при фокусе/наведении/активации
          },
        },
        // стили для слайдера // пишет студент
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
