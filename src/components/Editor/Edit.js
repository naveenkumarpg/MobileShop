import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../Editor/Edit.scss';

export default function UserForm() {
  // componentWillMount() {
  //   let url = 'http://localhost:3001/mobiles/' + this.props.match.params.id;

  //   const fetchPhonesData = new Promise(function (resolve, reject) {
  //     fetch(url)
  //       .then((data) => {
  //         return data.json();
  //       })
  //       .then((data) => {
  //         resolve(data);
  //       });
  //   });

  //   fetchPhonesData.then((data) => {
  //     this.setState({ ...data });
  //   });
  // }

  // useEffect(() => {
  //   first;

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  return (
    <div className="container">
      <Formik
        initialValues={{
          name: this.state.name || '',
          price: this.state.price || '',
          oprice: this.state.oprice || '',
          config: this.state.config || '',
          img: this.state.img || '',
          cnadv: this.state.cnadv || '',
          description: this.state.description || 'Test desc'
        }}
        enableReinitialize
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Phone Name is required'),
          price: Yup.string().required('Phone Price is Mandatory'),
          config: Yup.string().required('Phone Config is required')
        })}
        onSubmit={(data, actions) => {
          let url =
            'http://localhost:3001/mobiles/' + this.props.match.params.id;

          fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => res.json())
            .then((response) => {
              console.log('Success:', JSON.stringify(response));
              actions.setSubmitting(false);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }}
        render={({
          setFieldValue,
          values,
          errors,
          touched,
          isSubmitting,
          enableReinitialize
        }) => (
          <Form>
            <div className="formwrapper row">
              <div className="col-md-6 text-center">
                <img
                  className="product-img"
                  src="https://dummyimage.com/300x500/f9f9f9/999.jpg"
                  alt="img"
                />
              </div>

              <div className="col-sm-6">
                <div className="felwrap">
                  <label className="plabel">Phone Name : </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="name"
                    value={values.name}
                  />
                  <ErrorMessage
                    name="name"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap">
                  <label className="plabel">Phone Price : </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="price"
                    value={values.price}
                  />
                  <ErrorMessage
                    name="price"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap">
                  <label className="plabel">Color and Variant : </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="cnadv"
                    value={values.cnadv}
                  />
                  <ErrorMessage
                    name="cnadv"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap">
                  <label className="plabel">Offer Price : </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="oprice"
                    value={values.oprice}
                  />
                  <ErrorMessage
                    name="oprice"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap">
                  <label className="plabel">Phone Configuration : </label>
                  <Field
                    type="text"
                    className="form-control"
                    name="config"
                    value={values.config}
                  />
                  <ErrorMessage
                    name="config"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap">
                  <label className="plabel">Phone Description : </label>
                  <Field
                    component="textarea"
                    rows="6"
                    className="form-control"
                    name="description"
                    value={values.description}
                  />
                  <ErrorMessage
                    name="config"
                    className="alert alert-danger"
                    component="span"
                  />
                </div>

                <div className="felwrap text-right">
                  <button
                    className="btn btn-success"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
