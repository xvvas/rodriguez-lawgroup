import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "Luis",
      direccion: "Calle Gran Vía",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="ContactForm">
      <div>
        <p>Contact Form</p>
      </div>
      <div className="cta-Separator"></div>

      <form onSubmit={handleSubmit(onSubmit)} name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form_lt">
          <label>Name</label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>The name field is required</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p>The name field must be at least 3 characters long.</p>
          )}
        </div>

        <div className="form_lt">
          <label>Last Name</label>
          <input
            id="lastname"
            type="text"
            {...register("lastName", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>The Last Name field is required</p>
          )}
          {errors.nombre?.type === "minLength" && (
            <p>The Last Name field must be at least 3 characters long.</p>
          )}
        </div>

        <div className="form_lt">
          <label>Email</label>
          <input
            id="email"
            type="text"
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </div>

        <div className="form_lt">
          <label>Phone</label>
          <input
            id="phone"
            type="text"
            {...register("phone", {
              required: true,
              minLength: 3,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>The Phone field is required</p>
          )}
          {errors.nombre?.type === "minLength" && (
            <p>The Phone field must be at least 3 characters long.</p>
          )}
        </div>

        <div className="form_lg">
          <label>Message</label>
          <input
            id="message"
            type="text"
            {...register("message", {
              required: true,
            })}
          />
          {errors.nombre?.type === "required" && (
            <p>The Phone field is required</p>
          )}
        </div>

        <input type="submit" value="Submit message" />
      </form>
    </div>
  );
};

export default ContactForm;
