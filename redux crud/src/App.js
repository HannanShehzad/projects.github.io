// App.js
import { useState } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import customerReducer from './CustomerSlice';
import CustomerForm from './CustomerForm';
import CustomerTable from './CustomerTable';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/styles/app.css"

const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = () => {
    setShowForm(!showForm);
  };

  return (
    <Provider store={store}>
      <h3>Customer List</h3>
      <button className='btn btn-primary ms-10' onClick={handleAddCustomer}>
        {showForm ? 'Hide Form' : 'Add Customer'}
      </button>
      <CustomerTable />
      {showForm && <CustomerForm hideForm={()=>{setShowForm(false)}} />}
    </Provider>
  );
};

export default App;
