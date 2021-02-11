import React, { useEffect, useReducer } from "react";
import Form from "./components/Form";
import Date from "./components/Date";
import dateReducer from "./components/dateReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("date")) || [];
};

const App = () => {
  const [dates, dispatch] = useReducer(dateReducer, [], init);

  console.log(dates);

  useEffect(() => {
    localStorage.setItem("date", JSON.stringify(dates));
  }, [dates]);

  const handleDelete = (dateId) => {
    dispatch({
      type: "delete",
      payload: dateId,
    });
  };
  const appointmentTitle =
    dates.length === 0 ? "Add an Appointment!" : "Manage Appointments";

  return (
    <div>
      <h1 className="m-8 text-4xl font-bold text-center">
        Manage Appointments App
      </h1>
      <section className="grid grid-cols-2">
        <article>
          <Form dispatch={dispatch} />
        </article>
        <article>
          <h2 className="mb-8 text-4xl font-bold text-center">
            {appointmentTitle}
          </h2>
          <div className="p-4 bg-gray-800 rounded">
            {dates.map((date) => (
              <Date key={date.id} {...date} handleDelete={handleDelete} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default App;
