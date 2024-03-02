import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD, DELETE, REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

    const [data, setData] = useState([]);
    console.log(data);

    const dispatch = useDispatch();

    const history = useNavigate();

    //Returns an object of key/value pairs of the dynamic params from the current 
    //URL that were matched by the route path.
    //id(jo url me pass) go get karne kelye useParams method use karnte
    const { id } = useParams();
    // console.log("id"+id)
   

    // A function that takes a selector function as its first argument. The selector function is responsible for selecting a part of the Redux store's state or computing derived data
    const getData = useSelector((state) => state.cartreducer.carts);
    // console.log("cartdetails" + getData);

    const compare = () => {
        let comparedata = getData.filter((e) => {
            return e.id == id;
        })

        setData(comparedata);
    }

    useEffect(() => {
        compare();
    }, [id])
    
    //add data
    const send = (e)=>{
       dispatch(ADD(e));
    }

    const dlt = (id)=>{
        dispatch(DELETE(id))
        history("/");
    }

    //remove one 
    const remove = (item)=>{
        dispatch(REMOVE(item))
    }


    return (
        <>
            <div className="container mt-2">
                <h2 className='text-center'>Iteams Details Page
                </h2>
                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {
                            data.map((ele, id) => {
                                return (
                                    <>
                                        <div className="items_img">
                                            <img src={ele.imgdata} alt="" />
                                        </div>

                                        <div className="details">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <p> <strong>Restaurant</strong>  : {ele.rname}</p>
                                                        <p> <strong>Price</strong>  : ₹{ele.price}</p>
                                                        <p> <strong>Dishes</strong>  : {ele.address}</p>
                                                        <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>

                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span style={{ fontSize: 24 }} onClick={ele.qnty <=1 ? ()=>dlt(ele) : ()=>remove(ele)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

                                                        </div>

                                                    </td>
                                                    <td>
                                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                                                        <p><strong>Order Review :</strong> {ele.somedata} </p>
                                                        <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails