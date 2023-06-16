import React, { useState } from "react";
import { useTable } from "react-table";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomer } from "./CustomerSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles/table.css";

const validationSchema = Yup.object({
  id: Yup.number().typeError('Must be a number').required('Required'),
  name: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, 'Must be 11 digits')
    .required('Required'),
  address: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

const CustomerTable = () => {
  const data = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState(null);

  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      phone: "",
      address: "",
      country: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updateCustomer(values));
      setShowForm(false);
      setEditedCustomer(null);
    },
  });

  const handleEdit = (customer) => {
    formik.setValues(customer);
    setEditedCustomer(customer);
    setShowForm(true);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Customer ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <button className="editBtn" onClick={() => handleEdit(row.original)}>
            Edit
          </button>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="mainWrap  ">
      <div className=" tableWrap table-responsive ">
        <table
          className="table table-hover table-bordered align-middle"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                className="align-middle text-center border-bottom border-black"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="align-middle text-center border-bottom border-black"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="border border-black">
          <h3>Edit Customer Details</h3>
          <form className="ms-3 mt-5" onSubmit={formik.handleSubmit}>
            {/* <label htmlFor="id">Customer ID</label>
            <input id="id" type="text" {...formik.getFieldProps('id')} />
            {formik.touched.id && formik.errors.id ? (
              <div>{formik.errors.id}</div>
            ) : null} */}
            <div className="container text-center row">
              <div className="col-6">
                <label className="me-3" htmlFor="name">
                  Name
                </label>
                <input
                  className="me-3"
                  id="name"
                  type="text"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="col-6">
                <label className="me-3" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="me-3"
                  id="phone"
                  type="text"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-danger">{formik.errors.phone}</div>
                ) : null}
              </div>
            </div>
            <br /> <br />
            <div className="container row text-center">
              <div className="col-6">
                <label className="me-3" htmlFor="address">
                  Address
                </label>
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
              <div className="col-6">
                <label className="me-3" htmlFor="country">
                  Country
                </label>
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
            <div className="row justify-content-center mt-5 mb-5">
              <div className="col-1">
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
