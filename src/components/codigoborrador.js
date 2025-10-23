  const [inversor, setInversor] = useState(0);
    const [bateriaPrecio, setBateriaPrecio] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estructuraCableado, setEstructuraCableado] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);


    // Como poner varias filas sin poner otra row

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function CotizadorPrincipal() {

    const [precioCpu, setPrecioCpu] = useState(0);

    const [precioGpu, setPrecioGpu] = useState(0);
    const [cantRam, setCantRam] = useState(0);
    const [cantDescuento, setCantDescuento] = useState(0);
    const [tipoGarantia, setTipoGarantia] = useState("");


    //const Total = precioCpu + precioGpu + cantRam - cantDescuento;
    const adicionalGarantia = tipoGarantia == 1 ? 0 : 100000;

    const subTotal = parseInt(precioCpu) + parseInt(precioGpu) + parseInt(cantRam);
    const totalIva = parseInt(subTotal)*0.19;
    const Total = parseInt(subTotal) + parseInt(totalIva) - parseInt(cantDescuento) + parseInt(adicionalGarantia);
   

    return (
        <div>
            <div className='row'>
                <div className='col-lg-12 text-center bg-secondary text-white p-3 rounded'>
                    <h2>DEMO:</h2>
                    <h4>Cotizador de Componentes</h4>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-lg-6'>
                   

                    <label className='form-label' htmlFor='precioCpu'>Precio CPU</label>
                    <input id='precioCpu' name='precioCpu' placeholder='1000000' type='number' className='form-control' value={precioCpu} onChange={(e) => setPrecioCpu(e.target.value)}></input>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='precioGpu'>Precio GPU (por módulo)</label>
                        <input type='number' id='precioGpu' name='precioGpu' className='form-control' value={precioGpu} placeholder='250000' onChange={(e) => setPrecioGpu(e.target.value)}></input>
                    </div>
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='cantRam'>Cantidad módulos RAM (por módulo)</label>
                        <input type='number' id='cantRam' name='cantRam' className='form-control' value={cantRam} placeholder='250000' onChange={(e) => setCantRam(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='tipoGarantia'>Garantía</label>
                        <select className='form-select' id='tipoGarantia' name='tipoGarantia' value={tipoGarantia} onChange={(e) => setTipoGarantia(e.target.value)}>
                            <option>Seleccione garantía</option>
                            <option value={1}>Normal</option>
                            <option value={2}>Extendida</option>
                        </select>
                    </div>
                   
                    <div className='form-group mt-3'>
                        <label className='form-label' htmlFor='cantDescuento'>Descuento</label>
                        <input type='number' id='cantDescuento' name='cantDescuento' className='form-control' value={cantDescuento} placeholder='250000' onChange={(e) => setCantDescuento(e.target.value)}></input>
                    </div>

                    <div className='form-group mt-3'>
                        <a className='btn btn-warning' onClick={(e) => {
                           
                           setPrecioCpu(0);
                            setCantRam(0);
                            setCantDescuento(0);
                            setPrecioGpu(0);
                            setTipoGarantia("");

                        } } ><i class="fa-solid fa-poo"></i> Limpiar </a>
                    </div>

                </div>

                <div className='col-lg-6'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Subtotal</td>
                                <td>$ {parseInt(subTotal).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>IVA (19%)</td>
                                <td>$ {totalIva.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Descuento </td>
                                <td>$ {cantDescuento.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Total</td>
                                <td>$ {Total.toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>

    );
}

export default CotizadorPrincipal;