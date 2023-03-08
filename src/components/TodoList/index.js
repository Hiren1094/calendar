import React, { useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsFillXCircleFill } from "react-icons/bs";
import ContentEditable from 'react-contenteditable'
import axios from 'axios';

export function TodoList(Details) {

    const { modalShow, handleClose, settodoDetails, todoDetails, setTodos, Todos, scheduleDate, YearsState, Month } = Details;
    const [loader, setLoader] = useState(false);
    const text = useRef('');
    const API_URL = `${process.env.REACT_APP_API}/api/task`;

    // Inline Edit.
    const handleChange = (e, id) => {

        const {value} = e.target;
        setTodos((TodosList) =>
                    TodosList?.map((list, index) =>

                        index === id ? { ...list, year: YearsState, month: Month, date: scheduleDate, task: value } : list
                    )
        );
        text.current = e.target.value;
    }

    // Update records.

    const  onBlurUpupdate = (e, updatedId) =>{
        
        setLoader(true);

        const updateUrl = `${API_URL}/${updatedId}`;
        axios.put(updateUrl,{
            todo_year: YearsState,
            todo_month: Month,
            todo_date: scheduleDate,
            task_name: text.current
        }).then(function (response) {
            setLoader(false);
            if (response.data.sucs) {
                
            } else {
                alert('Oops!something went wrong during save, please try again.');
            }
        }).catch(function (error) {
            setLoader(false);
            alert('Oops!something went wrong during save.');
        });

    }
    // Delete Task.

    const deleteTask = (e, deltedId) => {

        setLoader(true);

        axios.delete(`${API_URL}/${deltedId}`, {
            id: deltedId,
        }).then(function (response) {
            setLoader(false);
            if (response.data.sucs) {
                const newArrayObj = Todos.filter(object => {

                    return object.id !== deltedId;
        
                });
                setTodos(newArrayObj);
            } else {
                alert('Oops!something went wrong during save, please try again.');
            }
        }).catch(function (error) {
            setLoader(false);
            alert('Oops!something went wrong during save.');
        });

    }

    // Add Task.

    const addTask = (todoDetails, scheduleDt, scheduleYR, scheduleMonth) => {

        if (todoDetails.length > 0) {

            setLoader(true);

            axios.post(API_URL, {
                task_name: todoDetails,
                todo_year: scheduleYR,
                todo_month: scheduleMonth,
                todo_date: scheduleDt
            }).then(function (response) {
                setLoader(false);
                if (response.data.id) {
                    settodoDetails('');
                    setTodos([
                        ...Todos,
                        { id: response.data.id, date: scheduleDt, year: scheduleYR, month: scheduleMonth, task: todoDetails }
                    ]);
                } else {
                    alert('Oops!something went wrong during save, please try again.');
                }
            }).catch(function (error) {
                setLoader(false);
                alert('Oops!something went wrong during save.');
            });

        }
    }

    return (

        <Modal show={modalShow} onHide={handleClose} dialogClassName="schedulemodel">
            <Modal.Body className="show-grid">
                <Container>
                    {Todos.length > 0 && Todos.map((Todo, index) => {
                        
                        if (Number(Todo.date) === scheduleDate && Number(Todo.year) === YearsState && Number(Todo.month) === Month) {
                            return (
                                <>
                                    <Row className="justify-content-md-center todoRow">
                                        <Col className='col-md-8 col-12'>
                                            <ContentEditable html={Todo.task} onBlur={(e) => onBlurUpupdate(e, Todo.id)} onChange={(e) => handleChange(e, index)} />
                                        </Col>
                                        <Col className='col-md-4 col-6'><BsFillXCircleFill className='delteTodo' onClick={(e) => deleteTask(e, Todo.id)} /></Col>
                                    </Row>
                                </>
                            )
                        } else {
                            return '';
                        }
                    })
                    }

                    <Row>
                        <Col className='col-12 todo-details'>
                            <Form.Control
                                type="text"
                                placeholder="Enter your details."
                                value={todoDetails}
                                onChange={e => settodoDetails(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            {loader && <Button className='addTodo btn-success'>Loading..</Button>}
                            {!loader && <Button className='addTodo btn-success' onClick={() => addTask(todoDetails, scheduleDate, YearsState, Month)}>Add</Button>}
                        </Col>
                    </Row>
                </Container>

            </Modal.Body>
        </Modal>
    )
}