import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";

function DatePicker({ date = new Date() }) {

  return (
    <Flatpickr
      value={date}
      onChange={([date]) => {
        this.setState({ date });
      }}
    />
  );
}