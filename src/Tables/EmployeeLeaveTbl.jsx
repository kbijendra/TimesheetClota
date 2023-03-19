import React, { useEffect, useState } from "react";

const EmployeeLeaveTbl =() =>{

    const [empLeave, setEmpLeaves ] = useState([]);

    useEffect(() =>{

        fetch('http://localhost:8085/empLeave')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            setEmpLeaves(data);
        })
        .catch((err) =>{
            console.log(err.message);
        });
    }, []);


    return(
        <div className="posts-container">

            <table className="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                {empLeave.map((empLeave) => {

                    return(

                        <tr>
                            <td>{empLeave.Id}</td>
                            <td>{empLeave.Id}</td>
                            <td>{empLeave.Id}</td>
                            <td>{empLeave.Id}</td>
                        </tr>

                    );
                })}
            </tbody>
            </table>
        </div>
    );
};

const ClotaHolidays =()=>{
    const [holidays, setHolidays ] = useState([]);

    useEffect(() =>{

        fetch('http://localhost:8085/holidays')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            setHolidays(data);
        })
        .catch((err) =>{
            console.log(err.message);
        });
    }, []);


    return(
        <div className="posts-container">

            <table className="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                {holidays.map((holidays) => {

                    return(

                        <tr>
                            <td>{holidays.Id}</td>
                            <td>{holidays.Id}</td>
                            <td>{holidays.Id}</td>
                            <td>{holidays.Id}</td>
                        </tr>

                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

const EmployeeLeaves =()=>{

    const [leaves, setLeaves ] = useState([]);

    useEffect(() =>{

        fetch('http://localhost:8085/leaves')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            setLeaves(data);
        })
        .catch((err) =>{
            console.log(err.message);
        });
    }, []);


    return(
        <div className="posts-container">

            <table className="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                {leaves.map((leaves) => {

                    return(

                        <tr>
                            <td>{leaves.Id}</td>
                            <td>{leaves.Id}</td>
                            <td>{leaves.Id}</td>
                            <td>{leaves.Id}</td>
                        </tr>

                    );
                })}
            </tbody>
            </table>
        </div>
    );
}

export {ClotaHolidays ,EmployeeLeaveTbl, EmployeeLeaves };