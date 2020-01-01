import React from "react";

const LoginRegistration = () => {
  return (
    <main>
      {/* Header */}
      <section className="section section--color_info">
        <div className="section__header">
          <div className="line line--half_width line--brown"></div>
          <h2>Login & Sign Up</h2>
          <div className="line line--half_width line--brown"></div>
        </div>
      </section>

      <section
        className="section section--color_white"
        style={{ height: "65vh" }}
      >
        <div className="section__content section__content--divided">
          {/* Login form */}
          <div className="split split--width_50">
            <div className="form_container form_container--column">
              <header className="form_container__header form_container__header--color_alert">
                Login
              </header>
              <form className="form">
                <div className="form__group">
                  <input className="input" type="text" placeholder="Email" />
                </div>
                <div className="form__group">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button className="button button--alert button--full_width">
                  Login
                </button>
              </form>
            </div>
          </div>

          {/* Registration form */}
          <div className="split split--width_50">
            <div className="form_container form_container--column">
              <header className="form_container__header form_container__header--color_alert">
                Register
              </header>
              <form className="form">
                <legend className="form__legend form__legend--dark">
                  Don't have an account. Sign up now!
                </legend>
                <div className="form__group">
                  <input className="input" type="text" placeholder="Email" />
                </div>
                <div className="form__group">
                  <input className="input" type="text" placeholder="Username" />
                </div>
                <div className="form__group">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="form__group">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <button className="button button--alert button--full_width">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginRegistration;
