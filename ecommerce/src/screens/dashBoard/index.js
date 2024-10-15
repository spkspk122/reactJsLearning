import { useNavigate } from "react-router-dom";
import "./style.scss";
import NavBarLayout from "../../layouts/navbar";
import { icons } from "../../assets/images/iconpath";
import { Strings } from "../../constants";
import Button from "../../components/button";
import { brandsData } from "../../constants/staticData";
export default function DashBoard() {
  //images destructure
  const { banner } = icons;
  const { slogan, txt1, shopNow, txt200, brands } = Strings;

  return (
    <div className="custom_container">
      <div className="d-flex">
        <img src={banner} alt="no img" className="custom_container__img" />
        <div className="custom_container__banner_txt_container">
          <label className="custom_container__slogan">{slogan}</label>
          <label className="custom_container__desc">{txt1}</label>
          <div className="custom_container__btn_container">
            <Button
              customClassName={"custom_container__shopBtn"}
              lable={shopNow}
            />
          </div>
          <div className="custom_container__main_quality_container">
            <div className="custom_container__quality_container">
              <div className="custom_container__quality_sub_container">
                <span>
                  <label className="custom_container__200txt">{txt200}</label>
                </span>
                <span className="custom_container__brand_container">
                  <label className="custom_container__brandtxt">{brands}</label>
                </span>
              </div>
              <span className="custom_container__borderLine" />
            </div>
            <div className="custom_container__quality_container">
              <div className="custom_container__quality_sub_container">
                <span>
                  <label className="custom_container__200txt">{txt200}</label>
                </span>
                <span className="custom_container__brand_container">
                  <label className="custom_container__brandtxt">{brands}</label>
                </span>
              </div>
              <span className="custom_container__borderLine" />
            </div>
            <div className="custom_container__quality_container">
              <div className="custom_container__quality_sub_container">
                <span>
                  <label className="custom_container__200txt">{txt200}</label>
                </span>
                <span className="custom_container__brand_container">
                  <label className="custom_container__brandtxt">{brands}</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom_container__brands_tag">
        {brandsData?.map((item, i) => (
          <div className="custom_container_brand_div" key={i}>
            <label className="custom_container_brand_txt">{item?.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
