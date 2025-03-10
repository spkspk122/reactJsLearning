import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { icons } from "../../assets/images/iconpath";
import Button from "../../components/button";
import ProductCard from "../../components/card/productCard";
import { Strings } from "../../constants";
import { brandsData, Procut } from "../../constants/staticData";
import "./style.scss";

export default function DashBoard() {
  //images destructure
  const { banner } = icons;
  //string destructure
  const { slogan, txt1, shopNow, txt200, brands, newArrival } = Strings;

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
      <div className="custom_container__arravial_container">
        <label className="custom_container__arravial_title">{newArrival}</label>
        <div className="custom_container__arravial_card_container">
      {Procut.map((item,i)=>{
        return(
          <ProductCard title={item?.title} productDesc={item?.productDesc} price={item?.price} priceType={item?.priceType} onlyLeft={item?.onlyLeft} image={item?.image}/>
        )
      })}
        </div>
      </div>
      <Box
      sx={{
        bgcolor: "black", // Background color
        color: "white",
        py: 3, // Padding (top & bottom)
        mt: 4, // Margin top
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Company Name
            </Typography>
            <Typography variant="body2">© 2025 All Rights Reserved</Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="hover">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Contact
            </Link>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@example.com</Typography>
            <Typography variant="body2">Phone: +1 234 567 890</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
}
