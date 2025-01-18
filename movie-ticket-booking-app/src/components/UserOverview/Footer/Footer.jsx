import "./Footer.scss";
import { FcCustomerSupport } from "react-icons/fc";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";




function Footer() {
  return (
    <div>
      <div className="footter-actions">
        <div className="">
          <a href="" className="icon-links">
            <div><FcCustomerSupport className="icon"/></div>
            <div>24/7 CUSTOMER CARE</div>
          </a>
        </div>
        <div className="">
          <a href="" className="icon-links">
            <div><BsFillTicketPerforatedFill className="icon"/></div>
            <div>RESEND BOOKING CONFIRMATION</div>
          </a>
        </div>
        <div className="">
          <a href="" className="icon-links">
            <div><SlEnvolopeLetter className="icon"/></div>
            <div>SUBSCRIBE TO THE NEWSLETTER</div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
