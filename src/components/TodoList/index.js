import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsFillXCircleFill } from "react-icons/bs";
import ContentEditable from 'react-contenteditable'

let nextId = 0;

export function TodoList(Details) {

    const { modalShow, handleClose, settodoDetails, todoDetails, setTodos, Todos, scheduleDate, YearsState, Month } = Details;
    
    // Inline Edit.
    const handleChange = (e, id, EditId) => {
        
        const { value } = e.target;
        console.log(EditId);
        setTodos((TodosList) =>
        TodosList?.map((list, index) =>
        
                index === id ? { ...list, year: YearsState, month: Month, date: scheduleDate, task: value } : list
            )
        );
    }

    // Delete Task.

    const deleteTask = (e,deltedId) => {
        
        const newArrayObj = Todos.filter(object => {

            return object.id !== deltedId;
        
        });

        setTodos(newArrayObj);
        console.log(newArrayObj);
    }

    return (

        <Modal show={modalShow} onHide={handleClose} dialogClassName="schedulemodel">
            <Modal.Body className="show-grid">
                <Container>
                    { Todos.length > 0 &&  Todos.map((Todo,index) => {
                        if( Todo.date === scheduleDate && Todo.year === YearsState && Todo.month === Month ){
                            return (
                                <>
                                    <Row className="justify-content-md-center todoRow">
                                        <Col className='col-md-8 col-12'>
                                            <ContentEditable  html={Todo.task} onChange={(e) => handleChange(e, index, Todo.id)} />
                                        </Col>
                                        <Col className='col-md-4 col-6'><BsFillXCircleFill className='delteTodo' onClick={(e) => deleteTask(e,Todo.id)} /></Col>
                                    </Row>
                                </>
                            )
                        }else{
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
                            <Button className='addTodo btn-success' 
                                onClick={() => {
                                    if( todoDetails.length > 0 ){
                                        settodoDetails('');
                                        setTodos([
                                        ...Todos,
                                        { id: nextId++, date: scheduleDate, year: YearsState, month: Month, task: todoDetails }
                                        ]);
                                    }
                                }}>Add</Button>
                        </Col>
                    </Row>
                </Container>
                
            </Modal.Body>
        </Modal>
    )
}