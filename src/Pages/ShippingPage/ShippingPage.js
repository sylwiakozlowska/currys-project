import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CardComponent } from "../../Components/CardComponent/CardComponent";
import { Button } from "../../Components/Button/Button";
import { DropdownComponent } from "../../Components/DropdownComponent/DropdownComponent";

export const ShippingPage = () => {
  const [selected, setSelected] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChangeSelectedDelivery = (e) => {
    const { checked } = e.target;
    setSelected((current) => !current);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="shipping-page-component">
      <h1 className="title is-1">Delivery Options</h1>
      <CardComponent>
        <p>SAMSUNG Galaxy Tab A8 10.5" Tablet - 32 GB, Graphite</p>
        <p> We’ll deliver Mon 22 May, All day 8am-8pm - £4.99</p>
      </CardComponent>
      <h1 className="title is-1">Customer Details</h1>
      <form className="check-out-form" onSubmit={handleSubmit(onSubmit)}>
        <CardComponent>
          <DropdownComponent />
          <div className="details">
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="firstName"
                {...register("firstName", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="First name"
              />

              {errors?.firstName?.type === "required" && (
                <p className="error-message">
                  Please enter a first name to continue.
                </p>
              )}
              {errors?.firstName?.type === "minLength" && (
                <p className="error-message">
                  First name cannot be less than 2 characters
                </p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className="error-message">
                  First name cannot exceed 20 characters
                </p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className="error-message">Alphabetical characters only</p>
              )}
            </div>
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="lastName"
                {...register("lastName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="Last Name"
              />
              {errors?.lastName?.type === "required" && (
                <p className="error-message">
                  Please enter a last name to continue.
                </p>
              )}
              {errors?.lastName?.type === "minLength" && (
                <p className="error-message">
                  Last name cannot be less than 2 characters
                </p>
              )}
              {errors?.lastName?.type === "maxLength" && (
                <p className="error-message">
                  Last name cannot exceed 30 characters
                </p>
              )}
              {errors?.lastName?.type === "pattern" && (
                <p className="error-message">Alphabetical characters only</p>
              )}
            </div>
            <div className="column is-half">
              <input
                className="input"
                type="tel"
                name="phoneNumber"
                {...register("phoneNumber", {
                  required: true,
                  pattern: /((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/g,
                })}
                placeholder="Phone number"
              />
              {/* {errors?.phoneNumber?.type === "pattern" && (
                <p className="error-message">Alphabetical characters only</p>
              )} */}
              {errors?.phoneNumber?.type === "required" && (
                <p className="error-message">
                  Please enter a phone number to continue.
                </p>
              )}
              {errors?.phoneNumber?.type === "pattern" && (
                <p className="error-message">
                  Please enter a valid phone number to continue.
                </p>
              )}
            </div>
          </div>
          <div className="postCode column is-half">
            <input
              className="input"
              type="text"
              name="postCode"
              {...register("postCode", {
                required: true,
                pattern: /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
              })}
              placeholder="Postcode"
            />
            {errors?.postCode?.type === "required" && (
              <p className="error-message">
                Please enter a post code to continue.
              </p>
            )}
          </div>
          <div className="companyName column is-half">
            <input
              className="input"
              type="text"
              name="companyName"
              {...register("companyName", {
                required: false,
              })}
              placeholder="Company or business name (optional)"
            />
          </div>
          <div className="address">
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="address1"
                {...register("address", {
                  required: true,
                })}
                placeholder="address 1"
              />
              {errors?.address?.type === "required" && (
                <p className="error-message">
                  Please enter an address to continue.
                </p>
              )}
            </div>
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="address2"
                {...register("address2", {
                  required: false,
                })}
                placeholder="address 2 (optional)"
              />
            </div>
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="town"
                {...register("town", {
                  required: true,
                })}
                placeholder="Town/City"
              />
              {errors?.town?.type === "required" && (
                <p className="error-message">
                  Please enter a town or city to continue.
                </p>
              )}
            </div>
            <div className="column is-half">
              <input
                className="input"
                type="text"
                name="county"
                {...register("county", {
                  required: false,
                })}
                placeholder="County (optional)"
              />
            </div>
          </div>
          <div className="delivery-checkbox">
            <input
              type="checkbox"
              checked={selected}
              onChange={onChangeSelectedDelivery}
              name="delivery"
            />
            <p>Use my delivery details as my billing details.</p>
          </div>
        </CardComponent>
        <p className="extra-info">
          We may contact you regarding your purchase and related services.
        </p>
        <CardComponent>
          <h3 className="title is-3">Let's stay in touch</h3>
          <p>
            Count me in! I’d love to join Currys Perks to hear about all the
            latest news, products, services and special offers. I want to enjoy
            benefits like: Member discounts. Discounts and offers on top tech
            brands throughout the year Monthly surprises. The chance to enter
            competitions and prize draws to win the hottest new tech, cashback
            or more* Partner benefits. From premium partners including some of
            the biggest brands
          </p>
        </CardComponent>
        <p className="extra-info">
          We promise to keep your details safe and secure. We will never sell or
          misuse your information. You can unsubscribe at any time. To find out
          more, please see our Privacy Policy.
        </p>
        <div className="payment-button">
          <Button className="is-primary">Continue to payments</Button>
        </div>
      </form>
    </div>
  );
};
