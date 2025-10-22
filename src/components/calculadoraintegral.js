import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';


function Calculadora() {

    const [potenciaDePanel, setPotenciaDePanel] = useState(0);





    return (


        <div className='row mt-3'>
                <div className='col-lg-6'>
                    <h4>Potencia de Panel</h4>
                    <label className='form-label' htmlFor='potenciaDePanel'>Ingrese potencia de panel</label>
                    <input id='potenciaDePanel' name='potenciaDePanel' placeholder='1000000' type='number' className='form-control' value={potenciaDePanel} onChange={(e) => setPotenciaDePanel(e.target.value)}></input>
                </div>

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
    );

}

export default Calculadora;