import { useState } from 'react';
import { Field,  useFormikContext } from "formik";
import styles from "../styles.module.css"

const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1);
const monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 101 }, (_, i) => currentYear - i);

const DateInput = () => {
    const { setFieldValue } = useFormikContext();
    const [localDay, setLocalDay] = useState(1);
    const [localMonth, setLocalMonth] = useState(1);
    const [localYear, setLocalYear] = useState(currentYear);
  
    const updateBirthDate = (day, month, year) => {
      setFieldValue("dateOfBirth", `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`);
    };
  
    return (
      <div className={styles.dateForm}>
        <Field 
          as="select" 
          value={localDay}
          onChange={e => {
            const day = Number(e.target.value);
            setLocalDay(day);
            updateBirthDate(day, localMonth, localYear);
          }}
          className={`form-select ${styles.field}`}
        >
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </Field>
        <Field
          as="select"
          value={localMonth}
          onChange={e => {
            const month = Number(e.target.value);
            setLocalMonth(month);
            updateBirthDate(localDay, month, localYear);
          }}
          className={`form-select ${styles.field}`}
        >
          {monthOptions.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </Field>
        <Field 
          as="select" 
          value={localYear}
          onChange={e => {
            const year = Number(e.target.value);
            setLocalYear(year);
            updateBirthDate(localDay, localMonth, year);
          }}
          className={`form-select ${styles.field}`}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Field>
      </div>
    );
  };

export default DateInput;
