import { useForm } from "react-hook-form";

const UserRegisterForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group hide">
        <label htmlFor="role">Account type</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="role"
          id="role"
          value="seeker"
          readOnly
        />
      </div>
      <div className="form-group">
        <label htmlFor="avatar">Your Avatar URL</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="avatar"
          id="avatar"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="name"
          id="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="username"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Cell phone number</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="phone"
          id="phone"
        />
      </div>
      <div className="form-group">
        <label htmlFor="linked">LinkedIn URL</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="linked"
          id="linked"
        />
      </div>
      <div className="form-group">
        <label htmlFor="jobtitle">Title of the job YOU WANT</label>
        <input
          ref={register}
          type="text"
          className="form-control"
          name="jobtitle"
          id="jobtitle"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={register}
          type="password"
          className="form-control"
          name="password"
          id="password"
        />
      </div>
      <div className="form-group">
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          ref={register}
          type="password"
          className="form-control"
          name="passwordConfirmation"
          id="passwordConfirmation"
        />
      </div>
      <div className="form-group textarea">
        <label htmlFor="stack">Tech stack</label>
        <textarea
          ref={register}
          type="text"
          className="form-control"
          name="stack"
          id="stack"
        />
      </div>
      <div className="form-group textarea">
        <label htmlFor="cv">Plain text CV</label>
        <textarea
          ref={register}
          type="text"
          className="form-control"
          name="cv"
          id="cv"
        />
      </div>
      <button type="submit" className="btn btn-main bg-blue py-2 ttu">
        Submit
      </button>
    </form>
  );
};

export default UserRegisterForm;
