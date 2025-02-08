import "./Footer.scss";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";

const footerActions = [
  {
    icon: <RiCustomerService2Line className="icon" />,
    description: "24/7 CUSTOMER CARE",
    link: "",
  },
  {
    icon: <BsFillTicketPerforatedFill className="icon" />,
    description: "RESEND BOOKING CONFIRMATION",
    link: "",
  },
  {
    icon: <SlEnvolopeLetter className="icon" />,
    description: "SUBSCRIBE TO THE NEWSLETTER",
    link: "",
  },
];

function Footer() {
  return (
    <div className="footer-actions">
      {footerActions.map((act) => {
        return <div key={act.link} className="">
          <a href={act.link} className="icon-links">
            {act.icon}
            <p className="link_description">{act.description}</p>
          </a>
        </div>
      })}
    </div>
  );
}
export default Footer;
