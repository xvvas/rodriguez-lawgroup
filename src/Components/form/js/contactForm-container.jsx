import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form">
      <div className="form_title">
        <p className="form_p"></p>
      </div>

      <div className="body_separator"></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form_form"
        name="Email Us"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <div className="form_smField">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" ref={register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="form_smField">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            ref={register('lastName', { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
        </div>

        <div className="form_smField">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>The email format is incorrect</p>
          )}
        </div>

        <div className="form_smField">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" ref={register('phone', { required: true })} />
          {errors.phone && <span>This field is required</span>}
        </div>

        <div className="form_lgField">
          <label htmlFor="message">Message:</label>
          <textarea name="message" ref={register('message', { required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>

        <div data-netlify-recaptcha="true"></div>

        <button className="form_send" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;