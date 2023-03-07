import React, { useState } from "react";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = ({hideDateDiv}) => {
  const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const onChange= (dates)=>{
		const [start,end]= dates;
		setStartDate(start);
		setEndDate(end)
		setDate(dates)
	}
	const setDate=(dates)=>{
		hideDateDiv(dateFormat(dates[0]),dateFormat(dates[1]))
	}
	const dateFormat= (selectdate)=>{
		if(selectdate){
			const year= selectdate.getFullYear();
			const month= selectdate.getMonth()+1;
			const monthformat= String(month).length===1? '0'+month : month
			const date= selectdate.getDate();
			const dateformat= String(date).length===1? '0'+date : date
			return `${year}-${monthformat}-${dateformat}`
		}
	}

  return (
    <DatePicker selected={startDate} onChange={onChange}
		startDate={startDate}
		endDate={endDate}
		minDate={new Date()} locale={ko} 
		monthsShown={2}
		selectsRange
		inline
		/>
  );
};

export default Example;