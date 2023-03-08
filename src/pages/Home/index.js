import React, { useState } from 'react';
import './home.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Years } from '../../components/years';
import { Dates } from '../../components/dates';
import { MonthDetails } from '../../components/month';

export function Home() {

    const [YearsState, setYears] = useState(new Date().getFullYear());
    const Currentdate = new Date();
    let Currentmonth = Currentdate.getMonth() + 1;
    const [Month, setMonth] = useState(Currentmonth);

    return (

        <Table responsive bordered>
            <tbody>
                <tr>
                    <td colSpan={5} rowSpan={4} className="year">
                        <Years YearsState={YearsState} setYears={setYears} />
                    </td>
                </tr>
                <MonthDetails YearsState={YearsState} Month={Month} setMonth={setMonth} />
                <Dates YearsState={YearsState} Month={Month} />
            </tbody>
        </Table>
    );
} 