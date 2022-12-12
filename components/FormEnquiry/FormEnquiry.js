import React, { useState, useRef, useEffect } from "react";
import FormEnquiryStyles from "./FormEnquiry.styled";
import Input from "../Input";
import Button from "../Button";
import { FormValidation } from "calidation";


export default function FormEnquiry() {
	const formSetStatus = useRef("not set");
  const ref = useRef();
  const rendered = useRef(false);
  const submitRef = useRef();

  const sendEnquiry = async ({ name, email, phone, message }) => {
    // try {
    //   const { data, error } = await request({
    //     url: `/api/enquiry/send`,
    //     method: "POST",
    //     data: {
    //       name,
    //       email,
    //       phone,
    //       message,
    //       items
    //     }
    //   });
    //   console.log(data, error);
    //   if(data?.success){
    //     addNotification(
    //       "Thank you for your enquiry, we will be in touch shortly.",
    //       false
    //     );
    //     reset();
    //   }
    // } catch (error) {
    //   addNotification(
    //     "There was a problem sending your message, please get in touch.",
    //     true
    //   );
    //   console.log(error);
    // }
  };

  const onSubmit = async ({ fields, errors, isValid }) => {
    if (!isValid) {
      return;
    }
    await sendEnquiry({ email: fields.email, name: fields.name, phone: fields?.phone, teamsProudestMoment: fields?.teamsProudestMoment });
  };

  const onUpdate = ({ setField, submitted, fields }) => {
    if (submitted || formSetStatus.current === "set") {
      return;
    }
  };

  const reset = async () => {
    const buttons = [...ref.current.querySelectorAll("button.reset-btn")];
    if (!buttons) {
      return;
    }
    buttons.map((button) => {
      button.click();
    });
    onOutsideClick();
    await delay(4000);
    removeAllNotifications();
  };

  const config = {
    name: {
      isRequired: "Please enter your name",
      isMinLength: {
        message: "Please enter a valid name",
        length: 1
      }
    },
    email: {
      isRequired: "Please enter your email",
      isEmail: {
        message: "Please provide a valid email"
      }
    },
    phone: {
      isRequired: "Please enter your phone number",
    },
  };

  useEffect(() => {
    rendered.current = true;
  }, []);

  const submitWithEnter = (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      submitRef.current();
    }
  };
	
	return (
    <FormEnquiryStyles>
			<h2>Free 20 minute consultation</h2>
      <FormValidation
        onSubmit={onSubmit}
        onUpdate={onUpdate}
        config={config}
        onKeyPress={submitWithEnter}
      >
        {({ errors, fields, submit, submitted }) => {
          submitRef.current = submit;
          return (
            <>
              <fieldset>
                <Input
                  type="text"
                  autocomplete="name"
                  name="name"
                  title="Name"
                  autoFocus={true}
                  hasError={submitted && errors?.name ? true : false}
                  error={errors?.name || null}
                />
                <Input
                  type="email"
                  autocomplete="email"
                  name="email"
                  title="Email"
                  hasError={submitted && errors?.email ? true : false}
                  error={errors?.email || null}
                />
                <Input
                  type="phone"
                  autocomplete="phone"
                  name="phone"
                  title="Telephone"
                  hasError={submitted && errors?.phone ? true : false}
                  error={errors?.phone || null}
                />
                <Input
                  type="teamsProudestMoment"
                  name="teamsProudestMoment"
                  title="Your team's proudest moment"
                  hasError={false}
                  error={null}
                />
              </fieldset>
              <fieldset>
                <Button text="Request a callback" type="submit" />
              </fieldset>
            </>
          );
        }}
      </FormValidation>
    </FormEnquiryStyles>
  );
}
