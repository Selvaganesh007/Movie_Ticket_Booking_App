import './Footer.scss';
import { useState } from 'react';
import ticketIcon from '../../assets/ticket2.svg'
import newsletterIcon from '../../assets/newsLetter.svg';
import customerCareIcon  from '../../assets/customerCare.svg'

function Footer () {

    return (
        <div>
            <div class="footter-actions">
                <div class="">
                    <a href="" class="icon-links">
                        <div class="">
                            <img src={customerCareIcon}></img>
                        </div>
                        <div>24/7 CUSTOMER CARE</div>
                    </a>
                </div>
                <div class="">
                    <a href="" class="icon-links">
                        <div class="">
                            <img src={ticketIcon}></img>
                        </div>
                        <div>RESEND BOOKING CONFIRMATION</div>
                    </a>
                </div>
                <div class="">
                    <a href="" class="icon-links">
                        <div class="">
                        <img src={newsletterIcon}></img>
                        </div>
                        <div>SUBSCRIBE TO THE NEWSLETTER</div>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
export default Footer;