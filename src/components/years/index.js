import React from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

export function Years(Years) {

    const {YearsState, setYears} = Years;

    // Next Year.
    const nextYear = () =>{

        const getNextYear = YearsState+1;
        setYears(getNextYear);
    }

    // Previous Year.
    const previousYear = () =>{

        const getPreviousYear = YearsState-1;
        setYears(getPreviousYear);
    }

    return (
        <>
            <BsFillCaretLeftFill className='previousyear' onClick={previousYear} /> 
             <span>{YearsState}</span> 
            <BsFillCaretRightFill className='nextyear' onClick={nextYear} />
        </>
    );
}