import React, { useState }  from 'react';
import './home.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Years} from '../../components/years';
import {Dates} from '../../components/dates';
import {MonthDetails} from '../../components/month';
export function Home() {
    
    const [YearsState, setYears] = useState(new Date().getFullYear());
    const [Month, setMonth] = useState(1);
    
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