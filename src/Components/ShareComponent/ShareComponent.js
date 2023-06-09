import React, { useState, useEffect } from "react";
import "../../styles.scss";
import { CardComponent } from "../CardComponent/CardComponent";
import {
  BsFacebook,
  BsTwitter,
  BsPinterest,
  BsInstagram,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const ShareComponent = () => {
  return (
    <div className="share-component">
      {/* <div className="social-media"> */}
        <ul className="social-media-list">
          <li className="social-media-item">
            <a href="#">
              <BsFacebook />
              <span>Facebook</span>
            </a>
          </li>
          <li className="social-media-item">
            <a href="#">
              <BsTwitter />
              <span>Twitter</span>
            </a>
          </li>
          <li className="social-media-item">
            <a href="#">
              <BsPinterest />
              <span>Pinterest</span>
            </a>
          </li>
          <li className="social-media-item">
            <a href="#">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </li>
          <li className="social-media-item">
            <a href="#">
              <HiOutlineMail />
              <span>Email</span>
            </a>
          </li>
        </ul>
      {/* </div> */}
    </div>
  );
};
