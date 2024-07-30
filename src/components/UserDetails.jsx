import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    phone: yup
      .number()
      .required()
      .test(
        'len',
        'Must be exactly 10 digits',
        (val) => val && val.toString().length === 10
      ),
    age: yup.number().positive().integer().required().min(18).max(120),
  })
  .required();

const AccountDetails = () => {
  const [show, setShow] = useState(false);
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setAccount(data);
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-5">
      <h2>Account Details</h2>
      <div className="mb-3">
        <strong>Name:</strong> {account.name}
      </div>
      <div className="mb-3">
        <strong>Email:</strong> {account.email}
      </div>
      <div className="mb-3">
        <strong>Password:</strong> {account.password}
      </div>
      <div className="mb-3">
        <strong>Age:</strong> {account.age}
      </div>
      <div className="mb-3">
        <strong>Phone:</strong> {account.phone}
      </div>
      <button className="btn btn-primary" onClick={handleShow}>
        Edit Account
      </button>

      {show && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Account</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="formName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="formName"
                      name="name"
                      autoComplete="true"
                      {...register('name')}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      required
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formEmail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="formEmail"
                      name="email"
                      autoComplete="true"
                      {...register('email')}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      required
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="formPassword"
                      name="password"
                      {...register('password')}
                      aria-invalid={errors.password ? 'true' : 'false'}
                      required
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formAge" className="form-label">
                      Age
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="formAge"
                      name="age"
                      autoComplete="true"
                      {...register('age')}
                      aria-invalid={errors.age ? 'true' : 'false'}
                      required
                    />
                    {errors.age && (
                      <div className="invalid-feedback">{errors.age.message}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="formPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="formPhone"
                      name="phone"
                      autoComplete="true"
                      {...register('phone')}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      required
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">
                        {errors.phone.message}
                      </div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
