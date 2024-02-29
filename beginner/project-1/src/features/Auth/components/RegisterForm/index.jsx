import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-router-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,

};

function RegisterForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Please enter title').min(5, 'Title is too short'),

    });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values);
        }
        form.reset();
    }
    return (
        <div>
      <div className="container">
        <header className="heading">
          <h2>Get’s started.</h2>
          <span className="heading-content">
            {haveAccountText}{" "}
            <span className="sign-up" onClick={toggleAction}>
              {action}
            </span>
          </span>
        </header>
        <div className="social">
          <button className="fb">
            <img src={facebook_icon} alt="Facebook" />
          </button>
          <button className="google">
            <img src={google_icon} alt="Google" />
          </button>
          <button className="X">
            <img src={x_icon} alt="Close" />
          </button>
        </div>
        <div className="middle">
          <div className="rectangle"></div>
          <span>or login with email</span>
          <div className="rectangle"></div>
        </div>

        <div className="content">
          {action === "Sign in" && (
            <div className="input">
              <span className="text">Name</span>
              <input
                className="text-input"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                autoFocus
                required
              />
            </div>
          )}
          <div className="input">
            <span className="text">Email</span>
            <input
              className="text-input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
              autoFocus
              required
            />
          </div>
          <div className="input">
            <span className="text">Password</span>
            <input
              className="text-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="check-box">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </div>
        <div className="summit-container">
          {action === "Sign in" ? (
            <button type="button" className="sign-in" onClick={handleSignUp}>
              Sign up
            </button>
          ) : (
            <button type="button" className="sign-in" onClick={handleSignIn}>
              Sign in
            </button>
          )}
        </div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
    );
}

export default RegisterForm;