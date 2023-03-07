import React, { useState, useEffect } from 'react';
import { Dayes } from '../dayes';
export function Dates(Details) {

    const {YearsState, Month} = Details;
    const [dates, setDates] = useState([]);
    const nowMonth = new Date(YearsState, Month, 0).getDate();
    // Set days of the year.
    useEffect(() => {
        let datesOfYear = [];
        let now = Number(nowMonth);
        for (let i = 1; i < now + 1; i++) {

            datesOfYear.push(i);
        }

        setDates(datesOfYear);
    }, [nowMonth]);

    // Return chunk of dates.
    function sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    // Transpose row with columns.
    const transpose = (a) => {

        // Calculate the width and height of the Array
        var w = a.length || 0;
        var h = a[0] instanceof Array ? a[0].length : 0;

        // In case it is a zero matrix, no transpose routine needed.
        if (h === 0 || w === 0) { return []; }

        /**
         * @var {Number} i Counter
         * @var {Number} j Counter
         * @var {Array} t Transposed data is stored in this array.
         */
        var i, j, t = [];

        // Loop through every item in the outer array (height)
        for (i = 0; i < h; i++) {

            // Insert a new row (array)
            t[i] = [];

            // Loop through every item per item in outer array (width)
            for (j = 0; j < w; j++) {

                // Save transposed data.
                t[i][j] = a[j][i];
            }
        }

        return t;
    }

    return (
        <>  
            
            {transpose(sliceIntoChunks(dates, 7)) && transpose(sliceIntoChunks(dates, 7)).map((date, i) => {
                
                return (
                    <>
                        <tr key={i}>
                            {date.map((getdate, index) => {
                                var dateClass = '';
                                if (getdate === nowMonth && getdate === 29) {
                                    dateClass = 'yellow';
                                } else if (getdate === nowMonth && getdate === 30) {
                                    dateClass = 'purple';
                                } else if (getdate === nowMonth && getdate === 31) {
                                    dateClass = 'skye';
                                } else if (getdate === nowMonth && getdate === 28) {
                                    dateClass = 'yellow';
                                } else {
                                    dateClass = '';
                                }
                                return (
                                    <td key={index.toString()} className={dateClass}>{getdate}</td>
                                )
                            })}
                            {nowMonth === 28 && <td></td>}
                            { <Dayes Year={YearsState} Month={Month} Indexing={i} /> }
                        </tr>
                    </>
                )
            })}
        </>
    );
}