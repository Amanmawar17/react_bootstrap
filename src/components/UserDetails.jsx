import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';


// Schema validation of error handling
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),
    phone: yup.number()
      .required()
      .test(
        'len',
        'Must be exactly 10 digits',
        (val) => val && val.toString().length === 10
      ),
    age: yup.number().positive().integer().required().min(18).max(120),
  })
  .required();

export default function UserDetails () {
  // Using useState hook for state rendering

  const [show, setShow] = useState(false);
  const [account, setAccount] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
  });

  // connecting yup function for error handling 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // handling data submition
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
        { /* Form as model  */}
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
              {/* form for user details and edit changes to details */}
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
                      {...register('name', {
                        message:'Provide valid user name.'
                      })}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      required
                    />
                    {errors.name && (
                      <p className="invalid-feedback text-danger">{errors.name.message}</p>
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
                      {...register('email',{
                        message:'Provide valid email address.'
                      })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      required
                    />
                    {errors.email && (
                      <p className="invalid-feedback text-danger">{errors.email.message}</p>
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
                      {...register('password',{
                        message:'Provide valid 8 charactor password.'
                      })}
                      aria-invalid={errors.password ? 'true' : 'false'}
                      required
                    />
                    {errors.password && (
                      <p className="invalid-feedback text-danger">
                        {errors.password.message}
                      </p>
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
                      {...register('age',{
                        message:'Provide valid age between 18 to 120.'
                      })}
                      aria-invalid={errors.age ? 'true' : 'false'}
                      required
                    />
                    {errors.age && (
                      <p className="invalid-feedback text-danger">{errors.age.message}</p>
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
                      {...register('phone',{
                        message:'Provide valid 10 digit phone number.'
                      })}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      required
                    />
                    {errors.phone && (
                      <p className="invalid-feedback text-danger">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

