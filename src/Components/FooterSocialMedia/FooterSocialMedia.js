import React from "react";
import "../../styles.scss";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
  BsYoutube,
} from "react-icons/bs";

export const FooterSocialMedia = () => {
  return (
    <div className="footer-social-media-component">
      <div className="footer-social-media-content">
        <div className="terms-and-conditions">
          <a href="#">Privacy & cookies policy</a>|
          <a href="#">Terms & conditions</a>|
          <a href="#">Sitemap</a>
        </div>
        <div className="social-media">
          <ul className="social-media-list">
            <li className="social-media-item">
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#">
                <BsTwitter />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#">
                <BsPinterest />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#">
                <BsInstagram />
              </a>
            </li>
            <li className="social-media-item">
              <a href="#">
                <BsYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          Currys plc ("Currys") registered in England & Wales No.07105905.
          Currys Retail Limited registered in England & Wales No.2142673. Currys
          Group Limited registered in England & Wales No.504877. Registered
          office: 1 Portal Way, London, W3 6RS. Currys Group Limited and Currys
          Retail Limited are authorised and regulated by the Financial Conduct
          Authority. Credit available on purchases from £99. Exclusions apply.
          Credit subject to status. Currys Group Limited acts as a credit broker
          and not as a lender. Credit is provided by Creation Consumer Finance
          Ltd. Both Currys Group Limited and Creation Consumer Finance Ltd are
          authorised and regulated by the Financial Conduct Authority.
        </p>
      </div>
    </div>
  );
};
