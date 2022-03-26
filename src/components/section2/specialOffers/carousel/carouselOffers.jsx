import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

import Img1 from "../img/platos/img1.png";
import Img2 from "../img/platos/img2.png";
import Img3 from "../img/platos/img3.png";
import Img4 from "../img/platos/img4.png";
import Img5 from "../img/platos/img5.png";
import Img6 from "../img/platos/img6.png";
import Img7 from "../img/platos/img7.png";
import Img8 from "../img/platos/img8.png";
import Img9 from "../img/platos/img9.png";
import Img10 from "../img/platos/img10.png";
import Img11 from "../img/platos/img11.png";
import Img12 from "../img/platos/img12.png";
import Img13 from "../img/platos/img13.png";
import Img14 from "../img/platos/img14.png";
import Img15 from "../img/platos/img15.png";
import Img16 from "../img/platos/img16.png";
import Img17 from "../img/platos/img17.png";

import LeftICon from "./img/chevron-left.svg";
import RightIcon from "./img/chevron-right.svg";
import "./carouselOffers.css";

function CarouselOffers() {
  const { t } = useTranslation();

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div className="containercarousel">
        <div id="carousel" ref={carousel}>
          <div id="items-wrapper">
            <div id="items">
              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img1} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img2} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img3} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img4} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img5} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img6} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img7} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img8} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img9} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img10} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img11} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img12} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img13} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img14} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img15} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img16} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>

              <div id="item">
                <p className="h-subtitle bold textcolor ml-1 bgprice right">
                  {t("price.price1")}
                </p>
                <img src={Img17} alt="Dish of the day" />
                <p className="h-subtitle bold mt-2">{t("Offers.dish4")}</p>
                <p className="p-ingredients mb-2">{t("Offers.ingredient4")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button className="btnleft" onClick={handleLeftClick}>
            <img src={LeftICon} alt="Scroll Left" />
          </button>
          <button className="btnright" onClick={handleRightClick}>
            <img src={RightIcon} alt="Scroll Right" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselOffers;
