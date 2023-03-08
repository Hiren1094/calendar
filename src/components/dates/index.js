import React, { useState, useEffect } from 'react';
import { Dayes } from '../dayes';
import { TodoList } from '../TodoList';
import axios from 'axios';

export function Dates(Details) {

    const {YearsState, Month} = Details;
    const [dates, setDates] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
    const nowMonth = new Date(YearsState, Month, 0).getDate();
    const [todoDetails, settodoDetails] = useState('');
    const [Todos, setTodos] = useState([]);
    const [scheduleDate, setscheduleDate] = useState('');
    
    // Set days of the year.
    useEffect(() => {
        let datesOfYear = [];
        let now = Number(nowMonth);
        for (let i = 1; i < now + 1; i++) {

            datesOfYear.push(i);
        }

        setDates(datesOfYear);

        // Get all schedule details.
        let fetchTodo = [];
        async function fetchData() {

            const API_URL = `${process.env.REACT_APP_API}/api/task`;
            
            await axios.get(API_URL).then(function (response) {
                
                if (response.data.length > 0) {
                    
                    response.data.forEach((todoList,index) => {

                        // setTodos(result => [...result, { id: todoList.id, date: todoList.todo_date, year: todoList.todo_year, month: todoList.todo_month, task: todoList.task_name }]);

                        fetchTodo.push({ id: todoList.id, date: todoList.todo_date, year: todoList.todo_year, month: todoList.todo_month, task: todoList.task_name });
                       
                    });
                    
                } else {
                    alert('Oops!something went wrong during get schedule details.');
                }
    
            }).catch(function (error) {
                
                alert('Oops!something went wrong during get schedule details.');
            });

            setTodos( result => fetchTodo);
        }
        
        fetchData();
        
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

    // Set Model.
    
    const handleClose = () => setModalShow(false);

    const handleShow = (getscheduleDate) => {
        setscheduleDate(getscheduleDate);
        setModalShow(true);
    }
    // console.log(Todos);
    return (
        <>  
            
            {transpose(sliceIntoChunks(dates, 7)) && transpose(sliceIntoChunks(dates, 7)).map((date, i) => {
                
                const Currentdate = new Date();

                let Currentday = Currentdate.getDate();
                let Currentmonth = Currentdate.getMonth() + 1;
                let Currentyear = Currentdate.getFullYear();

                return (
                    <>
                        <tr key={i}>

                            {date.map((getdate, index) => {
                                
                                var dateClass = 'clddates';
                                var currentdateCls = '';
                                var scheduleCls = '';    
                                // Highligh current date.

                                if(Currentday === getdate && Month === Currentmonth && YearsState === Currentyear){

                                    currentdateCls = 'green';
                                }

                                // Highligh last month.

                                if (getdate === nowMonth && getdate === 29) {
                                    dateClass = 'yellow clddates';
                                } else if (getdate === nowMonth && getdate === 30) {
                                    dateClass = 'purple clddates';
                                } else if (getdate === nowMonth && getdate === 31) {
                                    dateClass = 'skye clddates';
                                } else if (getdate === nowMonth && getdate === 28) {
                                    dateClass = 'yellow clddates';
                                } else {
                                    dateClass = 'clddates';
                                }
                                
                                // Higlighted schedule date.
                                
                                if( Todos.length > 0 ){
                                    
                                    Todos.map((existingTodo) => {
                                        
                                        if( Number(existingTodo.date) === getdate && Month === Number(existingTodo.month) && YearsState === Number(existingTodo.year) ){
                                            scheduleCls = 'schedules';
                                            return scheduleCls;
                                        }else{
                                            return '';
                                        }
                                    })
                                }

                                return (
                                    <td onClick={() => handleShow(getdate)} key={index.toString()} className={`${dateClass} ${currentdateCls} ${scheduleCls}`}>{getdate}</td>
                                )
                            })}
                            {nowMonth === 28 && <td></td>}
                            { <Dayes Year={YearsState} Month={Month} Indexing={i} /> }
                        </tr>
                    </>
                )
            })}

                
            <TodoList YearsState={YearsState} Month={Month} scheduleDate={scheduleDate} setTodos={setTodos} Todos={Todos} modalShow={modalShow} handleClose={handleClose} settodoDetails={settodoDetails} todoDetails={todoDetails} />
        </>
    );
}