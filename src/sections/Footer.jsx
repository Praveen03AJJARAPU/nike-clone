import { SlSocialTwitter, SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import '../index.css'
import { iconsOnHover } from "../utils/constants";



const Footer = () => {
  return (
    <footer>
      <div className="bg-black py-10 text-white flex flex-col flex-wrap">
        <div className="flex justify-between items-center flex-wrap gap-4 px-6 pb-5">
          <div className="flex gap-20 flex-wrap">
            <div className="capitalize font-medium">
              <p>find a store</p>
              <p>become a member</p>
              <p>send us feedback</p>
            </div>
            <div className="capitalize grey">
              <h4>GET HELP</h4>
              <p>Order Status</p>
              <p>Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
              <p>Contact Us On Nike.com Inquiries</p>
              <p>Contact Us On All Other Inquiries</p>
            </div>
            <div className="grey">
              <h4>ABOUT NIKE</h4>
              <p>News</p>
              <p>Careers</p>
              <p>Investors</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div className="flex icons items-center gap-5  grey ">
            <a href="" className={`${iconsOnHover}`}><SlSocialTwitter   size={26}/></a>
            <a href="" className={`${iconsOnHover}`}><SlSocialFacebook  size={26}/></a>
            <a href="" className={`${iconsOnHover}`}><SlSocialInstagram size={26}/></a>
            <a href="https://www.linkedin.com/in/praveen-ajjarapu-229657226/" className={`${iconsOnHover}`}><SlSocialLinkedin  size={26}/></a>
          </div>
        </div>
        <div className="px-5 flex lg:justify-end ">
          <div className="flex flex-col md:flex-row grey gap-2 text-xs">
            <p>Terms-of-Sale</p>
            <p>Terms-of-Use</p>
            <p>Nike-Privacy-Policy</p>
            <p>Guides</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer