import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';


function Calculadora() {

    const [potenciaDePanel, setPotenciaDePanel] = useState("");
    const [cantidadDePaneles, setCantidadDePaneles] = useState("");
    const [inversor, setInversor] = useState("");
    const [bateriaPrecio, setBateriaPrecio] = useState("");
    const [cantidadBaterias, setCantidadBaterias] = useState("");
    const [estructuraCableado, setEstructuraCableado] = useState("");


    console.log(potenciaDePanel);



    return (


        <div>
            <div className='row mt-3'>
                <div className='col-lg-3'>
                    <div className='form-group mt-3'>
                        <h4>Potencia de Panel (W)</h4>
                        <input id='potenciaDePanel' name='potenciaDePanel' placeholder='450' type='number' className='form-control' value={potenciaDePanel} onChange={(e) => setPotenciaDePanel(parseInt(e.target.value))}></input>
                    </div>
                    <div className='form-group mt-3'>
                        <h4>Inversor (precio)</h4>
                        <input id='inversor' name='inversor' placeholder='650000' type='number' className='form-control' value={inversor} onChange={(e) => setInversor(parseInt(e.target.value))}></input>
                    </div>
                    <div className='form-group mt-3'>
                        <h4>Cantidad baterías</h4>
                        <input id='cantidadBaterias' name='cantidadBaterias' placeholder='1' type='number' className='form-control' value={cantidadBaterias} onChange={(e) => setCantidadBaterias(parseInt(e.target.value))}></input>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div className='form-group mt-3'>
                        <h4>Cantidad de Paneles</h4>
                        <input id='cantidadDePaneles' name='cantidadDePaneles' placeholder='8' type='number' className='form-control' value={cantidadDePaneles} onChange={(e) => setCantidadDePaneles(parseInt(e.target.value))}></input>
                    </div>
                    <div className='form-group mt-3'>
                        <h4>Batería (precio unidad)</h4>
                        <input id='bateriaPrecio' name='bateriaPrecio' placeholder='320000' type='number' className='form-control' value={bateriaPrecio} onChange={(e) => setBateriaPrecio(parseInt(e.target.value))}></input>
                    </div>
                    <div className='form-group mt-3'>
                        <h4>Estruct./Cableado</h4>
                        <input id='estructuraCableado' name='estructuraCableado' placeholder='180000' type='number' className='form-control' value={estructuraCableado} onChange={(e) => setEstructuraCableado(parseInt(e.target.value))}></input>
                    </div>
                </div>

                <br />



                <div className='col-lg-6'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );

}

export default Calculadora;