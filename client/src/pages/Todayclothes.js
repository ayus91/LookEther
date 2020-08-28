import React from "react";
import DefaultImg from "./DefaultImg";
import { clothesAll } from "../../public/defaultClothes/clothesAll";
import "./Todayclothes.css";

const Todayclothes = (props) => {
  let defaultClothes = {
    shirts: "",
    pants: "",
    outer: "",
    shoes: "",
    etc: "",
  };

  const weather = props.weather.weather;

  if (5 < weather.uvi) {
    defaultClothes.etc = clothesAll.summerhat;
  }
  if (5 >= weather.uvi) {
    defaultClothes.etc = clothesAll.sunscreen;
  }
  if (weather.rain) {
    defaultClothes.etc = clothesAll.umbralla;
  }
  if (weather.temp >= 28) {
    defaultClothes.shirts = clothesAll.sleeveless;
    defaultClothes.pants = clothesAll.shortPants;
    defaultClothes.shoes = clothesAll.slipper;
  } else if (28 > weather.temp && weather.temp >= 23) {
    defaultClothes.shirts = clothesAll.shortShirts;
    defaultClothes.pants = clothesAll.shortPants;
    defaultClothes.shoes = clothesAll.slipper;
  } else if (23 > weather.temp && weather.temp >= 20) {
    defaultClothes.shirts = clothesAll.longShirts;
    defaultClothes.pants = clothesAll.pants;
    defaultClothes.shoes = clothesAll.shoes;
  } else if (20 > weather.temp && weather.temp >= 17) {
    defaultClothes.outer = clothesAll.cardigan;
    defaultClothes.shirts = clothesAll.longShirts;
    defaultClothes.pants = clothesAll.pants;
    defaultClothes.shoes = clothesAll.shoes;
  } else if (17 > weather.temp && weather.temp >= 12) {
    defaultClothes.outer = clothesAll.coat;
    defaultClothes.shirts = clothesAll.hoodie;
    defaultClothes.pants = clothesAll.pants;
    defaultClothes.shoes = clothesAll.shoes;
  } else if (12 > weather.temp && weather.temp >= 9) {
    defaultClothes.outer = clothesAll.coat;
    defaultClothes.shirts = clothesAll.sweater;
    defaultClothes.pants = clothesAll.winterpnats;
    defaultClothes.shoes = clothesAll.shoes;
  } else if (9 >= weather.temp && weather.temp !== "") {
    defaultClothes.outer = clothesAll.wintrtjacket;
    defaultClothes.shirts = clothesAll.sweater;
    defaultClothes.pants = clothesAll.winterpnats;
    defaultClothes.shoes = clothesAll.ugg;
  }
  return (
    <div id="cloth-icon">
      <DefaultImg default={defaultClothes} />
    </div>
  );
};

export default Todayclothes;
