import React from 'react';

export function MonthDetails(Details) {

    const { YearsState, Month, setMonth } = Details;

    const months = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    // Get month details.

    function getMonthDetails() {

        const nowMonth = new Date(YearsState, Month, 0).getDate();
        let datesOfYear = [];

        for (let i = 1; i < Number(nowMonth) + 1; i++) {

            datesOfYear.push(i);
        }

        return datesOfYear;
    }

    // Get all month details.

    function getAllMonth() {

        const datesRes1 = [];
        const datesRes2 = [];
        const datesRes3 = [];
        const datesRes4 = [];
        const datesRes5 = [];
        const datesRes6 = [];
        const datesRes7 = [];
        const datesRes = [];

        for (var month = 0; month <= 11; month++) {

            for (var dates = 1; dates <= getMonthDetails().length; dates++) {

                var d = new Date(YearsState, month, dates); // Year, Month, Date

                // var currentdate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + (d.getDay());
                var currentdate = d.getMonth() + 1;

                if (d.getDay() === 1 && dates === 1) {

                    datesRes1.push(currentdate);
                }

                if (d.getDay() === 2 && dates === 1) {

                    datesRes2.push(currentdate);
                }

                if (d.getDay() === 3 && dates === 1) {

                    datesRes3.push(currentdate);
                }

                if (d.getDay() === 4 && dates === 1) {

                    datesRes4.push(currentdate);
                }

                if (d.getDay() === 5 && dates === 1) {

                    datesRes5.push(currentdate);
                }

                if (d.getDay() === 6 && dates === 1) {

                    datesRes6.push(currentdate);
                }

                if (d.getDay() === 0 && dates === 1) {

                    datesRes7.push(currentdate);
                }
            }
        }


        datesRes.push(datesRes1, datesRes2, datesRes3, datesRes4, datesRes5, datesRes6, datesRes7);

        return datesRes;

    }

    // Change date when click on month.
    
    const changeDates = (getmonth) =>{
        
        setMonth(getmonth);
    }

    // Render month in tr td.

    const  RenderMonth = () => {

        var first_row_1, second_row_1, third_row_1 = '';
        var first_row_2, second_row_2, third_row_2 = '';
        var first_row_3, second_row_3, third_row_3 = '';
        var first_row_4, second_row_4, third_row_4 = '';
        var first_row_5, second_row_5, third_row_5 = '';
        var first_row_6, second_row_6, third_row_6 = '';
        var first_row_7, second_row_7, third_row_7 = '';

        let first_row_first_column  = (getAllMonth()[0].length > 1) ? months[getAllMonth()[0][0]] : months[getAllMonth()[0]];
        let first_row_second_column = (getAllMonth()[1].length > 1) ? months[getAllMonth()[1][0]] : months[getAllMonth()[1]];
        let first_row_third_column  = (getAllMonth()[2].length > 1) ? months[getAllMonth()[2][0]] : months[getAllMonth()[2]];
        let first_row_forth_column  = (getAllMonth()[3].length > 1) ? months[getAllMonth()[3][0]] : months[getAllMonth()[3]];
        let first_row_five_column   = (getAllMonth()[4].length > 1) ? months[getAllMonth()[4][0]] : months[getAllMonth()[4]];
        let first_row_six_column    = (getAllMonth()[5].length > 1) ? months[getAllMonth()[5][0]] : months[getAllMonth()[5]];
        let first_row_seven_column  = (getAllMonth()[6].length > 1) ? months[getAllMonth()[6][0]] : months[getAllMonth()[6]];

        let second_row_first_column     = (getAllMonth()[0].length > 1) ? months[getAllMonth()[0][1]] : '';
        let second_row_second_column    = (getAllMonth()[1].length > 1) ? months[getAllMonth()[1][1]] : '';
        let second_row_third_column     = (getAllMonth()[2].length > 1) ? months[getAllMonth()[2][1]] : '';
        let second_row_forth_column     = (getAllMonth()[3].length > 1) ? months[getAllMonth()[3][1]] : '';
        let second_row_five_column      = (getAllMonth()[4].length > 1) ? months[getAllMonth()[4][1]] : ''
        let second_row_six_column       = (getAllMonth()[5].length > 1) ? months[getAllMonth()[5][1]] : '';
        let second_row_seven_column     = (getAllMonth()[6].length > 1) ? months[getAllMonth()[6][1]] : '';

        let third_row_first_column     = (getAllMonth()[0].length > 1) ? months[getAllMonth()[0][2]] : '';
        let third_row_second_column    = (getAllMonth()[1].length > 1) ? months[getAllMonth()[1][2]] : '';
        let third_row_third_column     = (getAllMonth()[2].length > 1) ? months[getAllMonth()[2][2]] : '';
        let third_row_forth_column     = (getAllMonth()[3].length > 1) ? months[getAllMonth()[3][2]] : '';
        let third_row_five_column      = (getAllMonth()[4].length > 1) ? months[getAllMonth()[4][2]] : '';
        let third_row_six_column       = (getAllMonth()[5].length > 1) ? months[getAllMonth()[5][2]] : '';
        let third_row_seven_column     = (getAllMonth()[6].length > 1) ? months[getAllMonth()[6][2]] : '';

        // First row.
        if( first_row_first_column === 'APR' || first_row_first_column === 'NOV' || first_row_first_column === 'JUN' || first_row_first_column === 'SEP' ){
            
            first_row_1 = 'purple';

        }else if( first_row_first_column === 'FEB' ){
            
            first_row_1 = 'yellow';

        }else{
            
            first_row_1 = 'skye';
        }
        
        if( first_row_second_column === 'APR' || first_row_second_column === 'NOV' || first_row_second_column === 'JUN' || first_row_second_column === 'SEP' ){
            
            first_row_2 = 'purple';

        }else if( first_row_second_column === 'FEB' ){
            
            first_row_2 = 'yellow';

        }else{
            
            first_row_2 = 'skye';
        }
        
        if( first_row_third_column === 'APR' || first_row_third_column === 'NOV' || first_row_third_column === 'JUN' || first_row_third_column === 'SEP' ){
            
            first_row_3 = 'purple';

        }else if( first_row_third_column === 'FEB' ){
            
            first_row_3 = 'yellow';

        }else{
            
            first_row_3 = 'skye';
        }
        
        if( first_row_forth_column === 'APR' || first_row_forth_column === 'NOV' || first_row_forth_column === 'JUN' || first_row_forth_column === 'SEP' ){
            
            first_row_4 = 'purple';

        }else if( first_row_forth_column === 'FEB' ){
            
            first_row_4 = 'yellow';

        }else{
            
            first_row_4 = 'skye';
        }
        
        if( first_row_five_column === 'APR' || first_row_five_column === 'NOV' || first_row_five_column === 'JUN' || first_row_five_column === 'SEP' ){
            
            first_row_5 = 'purple';

        }else if( first_row_five_column === 'FEB' ){
            
            first_row_5 = 'yellow';

        }else{
            
            first_row_5 = 'skye';
        }
        
        if( first_row_six_column === 'APR' || first_row_six_column === 'NOV' || first_row_six_column === 'JUN' || first_row_six_column === 'SEP' ){
            
            first_row_6 = 'purple';

        }else if( first_row_six_column === 'FEB' ){
            
            first_row_6 = 'yellow';

        }else{
            
            first_row_6 = 'skye';
        }
        
        if( first_row_seven_column === 'APR' || first_row_seven_column === 'NOV' || first_row_seven_column === 'JUN' || first_row_seven_column === 'SEP' ){
            
            first_row_7 = 'purple';

        }else if( first_row_seven_column === 'FEB' ){
            
            first_row_7 = 'yellow';

        }else{
            
            first_row_7 = 'skye';
        }

        // Second row.
        if( second_row_first_column === 'APR' || second_row_first_column === 'NOV' || second_row_first_column === 'JUN' || second_row_first_column === 'SEP' ){
            
            second_row_1 = 'purple';

        }else if( second_row_first_column === 'FEB' ){
            
            second_row_1 = 'yellow';

        }else{
            
            second_row_1 = 'skye';
        }
        
        if( second_row_second_column === 'APR' || second_row_second_column === 'NOV' || second_row_second_column === 'JUN' || second_row_second_column === 'SEP' ){
            
            second_row_2 = 'purple';

        }else if( second_row_second_column === 'FEB' ){
            
            second_row_2 = 'yellow';

        }else{
            
            second_row_2 = 'skye';
        }
        
        if( second_row_third_column === 'APR' || second_row_third_column === 'NOV' || second_row_third_column === 'JUN' || second_row_third_column === 'SEP' ){
            
            second_row_3 = 'purple';

        }else if( second_row_third_column === 'FEB' ){
            
            second_row_3 = 'yellow';

        }else{
            
            second_row_3 = 'skye';
        }
        
        if( second_row_forth_column === 'APR' || second_row_forth_column === 'NOV' || second_row_forth_column === 'JUN' || second_row_forth_column === 'SEP' ){
            
            second_row_4 = 'purple';

        }else if( second_row_forth_column === 'FEB' ){
            
            second_row_4 = 'yellow';

        }else{
            
            second_row_4 = 'skye';
        }
        
        if( second_row_five_column === 'APR' || second_row_five_column === 'NOV' || second_row_five_column === 'JUN' || second_row_five_column === 'SEP' ){
            
            second_row_5 = 'purple';

        }else if( second_row_five_column === 'FEB' ){
            
            second_row_5 = 'yellow';

        }else{
            
            second_row_5 = 'skye';
        }
        
        if( second_row_six_column === 'APR' || second_row_six_column === 'NOV' || second_row_six_column === 'JUN' || second_row_six_column === 'SEP' ){
            
            second_row_6 = 'purple';

        }else if( second_row_six_column === 'FEB' ){
            
            second_row_6 = 'yellow';

        }else{
            
            second_row_6 = 'skye';
        }
        
        if( second_row_seven_column === 'APR' || second_row_seven_column === 'NOV' || second_row_seven_column === 'JUN' || second_row_seven_column === 'SEP' ){
            
            second_row_7 = 'purple';

        }else if( second_row_seven_column === 'FEB' ){
            
            second_row_7 = 'yellow';

        }else{
            
            second_row_7 = 'skye';
        }

        // Third row.
        if( third_row_first_column === 'APR' || third_row_first_column === 'NOV' || third_row_first_column === 'JUN' || third_row_first_column === 'SEP' ){
            
            third_row_1 = 'purple';

        }else if( third_row_first_column === 'FEB' ){
            
            third_row_1 = 'yellow';

        }else{
            
            third_row_1 = 'skye';
        }
        
        if( third_row_second_column === 'APR' || third_row_second_column === 'NOV' || third_row_second_column === 'JUN' || third_row_second_column === 'SEP' ){
            
            third_row_2 = 'purple';

        }else if( third_row_second_column === 'FEB' ){
            
            third_row_2 = 'yellow';

        }else{
            
            third_row_2 = 'skye';
        }
        
        if( third_row_third_column === 'APR' || third_row_third_column === 'NOV' || third_row_third_column === 'JUN' || third_row_third_column === 'SEP' ){
            
            third_row_3 = 'purple';

        }else if( third_row_third_column === 'FEB' ){
            
            third_row_3 = 'yellow';

        }else{
            
            third_row_3 = 'skye';
        }
        
        if( third_row_forth_column === 'APR' || third_row_forth_column === 'NOV' || third_row_forth_column === 'JUN' || third_row_forth_column === 'SEP' ){
            
            third_row_4 = 'purple';

        }else if( third_row_forth_column === 'FEB' ){
            
            third_row_4 = 'yellow';

        }else{
            
            third_row_4 = 'skye';
        }
        
        if( third_row_five_column === 'APR' || third_row_five_column === 'NOV' || third_row_five_column === 'JUN' || third_row_five_column === 'SEP' ){
            
            third_row_5 = 'purple';

        }else if( third_row_five_column === 'FEB' ){
            
            third_row_5 = 'yellow';

        }else{
            
            third_row_5 = 'skye';
        }
        
        if( third_row_six_column === 'APR' || third_row_six_column === 'NOV' || third_row_six_column === 'JUN' || third_row_six_column === 'SEP' ){
            
            third_row_6 = 'purple';

        }else if( third_row_six_column === 'FEB' ){
            
            third_row_6 = 'yellow';

        }else{
            
            third_row_6 = 'skye';
        }
        
        if( third_row_seven_column === 'APR' || third_row_seven_column === 'NOV' || third_row_seven_column === 'JUN' || third_row_seven_column === 'SEP' ){
            
            third_row_7 = 'purple';

        }else if( third_row_seven_column === 'FEB' ){
            
            third_row_7 = 'yellow';

        }else{
            
            third_row_7 = 'skye';
        }

        return (
            <>
                <tr>
                    <td onClick={ () => changeDates(months.indexOf(first_row_first_column)) }  className={first_row_1}>{first_row_first_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_second_column)) } className={first_row_2}>{first_row_second_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_third_column)) } className={first_row_3}>{first_row_third_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_forth_column)) } className={first_row_4}>{first_row_forth_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_five_column)) } className={first_row_5}>{first_row_five_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_six_column)) } className={first_row_6}>{first_row_six_column}</td>
                    <td onClick={ () => changeDates(months.indexOf(first_row_seven_column)) } className={first_row_7}>{first_row_seven_column}</td>
                </tr>
                <tr>
                    <td onClick={ () => changeDates(months.indexOf(second_row_first_column)) } className={second_row_1}>{ second_row_first_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_second_column)) } className={second_row_2}>{ second_row_second_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_third_column)) } className={second_row_3}>{ second_row_third_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_forth_column)) } className={second_row_4}>{ second_row_forth_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_five_column)) } className={second_row_5}>{ second_row_five_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_six_column)) } className={second_row_6}>{ second_row_six_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(second_row_seven_column)) } className={second_row_7}>{ second_row_seven_column }</td>
                </tr>

                <tr>
                    <td onClick={ () => changeDates(months.indexOf(third_row_first_column)) } className={third_row_1}>{ third_row_first_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_second_column)) } className={third_row_2}>{ third_row_second_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_third_column)) } className={third_row_3}>{ third_row_third_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_forth_column)) } className={third_row_4}>{ third_row_forth_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_five_column)) } className={third_row_5}>{ third_row_five_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_six_column)) } className={third_row_6}>{ third_row_six_column }</td>
                    <td onClick={ () => changeDates(months.indexOf(third_row_seven_column)) } className={third_row_7}>{ third_row_seven_column }</td>
                </tr>
            </>
        )

    }

    return (
        <>
            {RenderMonth()}
        </>
    )

}