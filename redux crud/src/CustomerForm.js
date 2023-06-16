// CustomerForm.js
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "./CustomerSlice";

const validationSchema = Yup.object({
  id: Yup.number().typeError('Must be a number').required('Required'),
  name: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, 'Must be 11 digits')
    .required('Required'),
  address: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

const CustomerForm = ({ hideForm }) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      phone: "",
      address: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (customers.find((customer) => customer.id === values.id)) {
        alert("Customer ID already exists");
      } else {
        dispatch(addCustomer(values));
        resetForm();
        hideForm();
      }
    },
  });

  return (
    <>
      <h3>Customer Forum</h3>
      <form className="ms-3 mt-5" onSubmit={formik.handleSubmit}>
        <div className="container text-center row">
          <div className="col-6">
            <label className="me-3" htmlFor="id">Customer ID</label>
            <input className="me-3" id="id" type="text" {...formik.getFieldProps("id")} />
            {formik.touched.id && formik.errors.id ? (
              <div className="text-danger">{formik.errors.id}</div>
            ) : null}
          </div>
          <div className="col-6">
            <label className="me-3" htmlFor="name">Name</label>
            <input className="me-3" id="name" type="text" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
        </div>{" "}
        <br /> <br />
        <div className="container text-center row">
          <div className="col-6">
            <label className="me-3" htmlFor="phone">Phone</label>
            <input className="me-3" id="phone" type="text" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="col-6">
            <label className="me-3" htmlFor="address">Address</label>
            <input
            className="me-3"
              id="address"
              type="text"
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-danger">{formik.errors.address}</div>
            ) : null}
          </div>
        </div><br />
        <div className="container text-center row">
          <div className="col-6">
            <label className="me-3" htmlFor="country">Country</label>
            <input
            className="me-3"
              id="country"
              type="text"
              {...formik.getFieldProps("country")}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-danger">{formik.errors.country}</div>
            ) : null}
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-1">
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
          <div className="col-2">
            <button className="btn btn-danger" type="button" onClick={hideForm}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CustomerForm;
