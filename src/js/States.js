import React, { useState } from "react";
import { Button } from '@mui/material';
import '../../src/css/States.css'
const currencyOptions = {
    minimumFractionDigits: 2,
    // maximumFractionDigits: 3,
    style: 'currency',
    currency: 'INR'
}
function getTotal(total) {
    return total.toLocaleString(undefined, currencyOptions)
}

function States() {

    const products = [
        {
            emoji: '🍦',
            name: 'ice cream',
            price: 5
        },
        {
            emoji: '🍩',
            name: 'donuts',
            price: 2.5,
        },
        {
            emoji: '🍉',
            name: 'watermelon',
            price: 4
        },
        {
            emoji: '🍫',
            name: 'Chocolate',
            price: 5
        },
        {
            emoji: '🍌',
            name: 'Banana',
            price: 2.5,
        },
        {
            emoji: '🍎',
            name: 'Apple',
            price: 4
        },
        {
            emoji: '🍏',
            name: 'Green Apple',
            price: 5
        },
        {
            emoji: '🥕',
            name: 'Carrot',
            price: 2.5,
        },
        {
            emoji: '🚘',
            name: 'Volvo Car',
            price: 4
        },
        {
            emoji: '📚',
            name: 'Books',
            price: 5
        },
        {
            emoji: '🖋️',
            name: 'Pen',
            price: 2.5,
        },
        {
            emoji: '✏️',
            name: 'Pencil',
            price: 4
        },
        {
            emoji: '👕',
            name: 'Men Shrit',
            price: 4
        },
        {
            emoji: '👖',
            name: 'Pant',
            price: 4
        },
        {
            emoji: '👗',
            name: 'Fock',
            price: 4
        },
        {
            emoji: '👘',
            name: 'Sweeter',
            price: 4
        },
        {
            emoji: '🥻',
            name: 'Saree',
            price: 4
        },
        {
            emoji: '👔',
            name: 'Blazzers',
            price: 4
        },
        {
            emoji: '👓',
            name: 'Spectacle Frames',
            price: 4
        },
        {
            emoji: '☂️',
            name: 'Umbrilla',
            price: 4
        },
        {
            emoji: '👚',
            name: 'Shrit',
            price: 4000
        },
        {
            emoji: '🎽',
            name: 'T-Shrit',
            price: 400
        },
        {
            emoji: '🩳',
            name: 'Short',
            price: 400
        },
        {
            emoji: '🍰',
            name: 'Cake',
            price: 40
        },
        {
            emoji: '🍦',
            name: 'ice cream',
            price: 5
        },
        {
            emoji: '🍩',
            name: 'donuts',
            price: 2.5,
        },
        {
            emoji: '🍉',
            name: 'watermelon',
            price: 4
        },
        {
            emoji: '🍫',
            name: 'Chocolate',
            price: 5
        },
        {
            emoji: '🍌',
            name: 'Banana',
            price: 2.5,
        },
        {
            emoji: '🍎',
            name: 'Apple',
            price: 4
        },
        {
            emoji: '🍏',
            name: 'Green Apple',
            price: 5
        },
        {
            emoji: '🥕',
            name: 'Carrot',
            price: 2.5,
        },
        {
            emoji: '🚘',
            name: 'Volvo Car',
            price: 4
        },
        {
            emoji: '📚',
            name: 'Books',
            price: 5
        },
        {
            emoji: '🖋️',
            name: 'Pen',
            price: 2.5,
        },
        {
            emoji: '✏️',
            name: 'Pencil',
            price: 4
        },
        {
            emoji: '👕',
            name: 'Men Shrit',
            price: 4
        },
        {
            emoji: '👖',
            name: 'Pant',
            price: 4
        },
        {
            emoji: '👗',
            name: 'Fock',
            price: 4
        },
        {
            emoji: '👘',
            name: 'Sweeter',
            price: 4
        },
        {
            emoji: '🥻',
            name: 'Saree',
            price: 4
        },
        {
            emoji: '👔',
            name: 'Blazzers',
            price: 4
        },
        {
            emoji: '👓',
            name: 'Spectacle Frames',
            price: 4
        },
        {
            emoji: '☂️',
            name: 'Umbrilla',
            price: 4
        },
        {
            emoji: '👚',
            name: 'Shrit',
            price: 4000
        },
        {
            emoji: '🎽',
            name: 'T-Shrit',
            price: 400
        },
        {
            emoji: '🩳',
            name: 'Short',
            price: 400
        },
        {
            emoji: '🍰',
            name: 'Cake',
            price: 40
        }
    ];

    Object.keys(products).forEach(key => {
        console.log(key, products[key]);
    });

    function getPrice(price) {
        return price.toLocaleString(undefined, currencyOptions)
    }

    const [cart, setCart] = useState([]);
    const [history, setHistory] = useState([]);
    const [total, setTotal] = useState(0);
    const [final, setfinal] = useState([]);
    const [change, setChange] = useState({
        edit: false
    })
    // console.log(cart);
    const countArray = {};
    cart.forEach(element => {
        countArray[element] = (countArray[element] || 0) + 1;
    });
    // console.log(history);
    // console.log(countArray);

    const add = (eachobj) => {
        setCart(current => [...current, eachobj.name]);
        setTotal(current => current + eachobj.price);
        // setfinal(current => current + eachobj.price);
    }
    const remove = () => {
        setCart([]);
        setTotal(0);
    }
    const placeorder = () => {
        if (Object.keys(countArray).length === 0) {
            alert("!.....Please Select Items....!");
        }
        else {
            alert("!...Order successful...!");
            setCart([]);
            setTotal(0);
            setHistory([...history, countArray,]);
            setfinal(current => [...current, total]);
        }
    }
    const d = {
        currentDateTime: Date().toLocaleString()
    }
    const changebutton = () => {
        setChange({
            edit: true
        })
    }

    const closebutton = () => {
        setChange({
            edit: false
        })
    }
    // console.log("hiskjhdkfkjkdfgk", history);
    return (
        <div className="wrapper">
            <div className="top">
                <div className="container">
                    <div className="cartdetails">
                        Shopping Cart: {cart.length} total items.

                        <div>Total: {getTotal(total)}</div>
                        <Button style={{ margin: "" }} variant="contained" color="success" onClick={placeorder}>Place Order</Button>
                    </div>

                    <div className="orderdetails">
                        <fieldset>
                            <legend>Order Deatails</legend>

                            {
                                Object.keys(countArray).map((eachobj) => {
                                    return (
                                        <Display data={eachobj} value={countArray[eachobj]} />
                                    )
                                })
                            }
                        </fieldset>
                    </div>
                    <div>
                        <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={remove}>Delete Order</Button>
                        <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={changebutton}>Your Orders</Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {
                    change.edit &&
                    <div className="container1">
                        <h1>History</h1>

                        <span>Total Orders : {history.length}</span>
                        <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={closebutton}>close</Button>

                        <div className="ordercard">
                            {
                                history.map((eachobj, i) => {

                                    return (
                                        <div className="ordercardcontent">
                                            <table border={1} style={{ borderCollapse: "collapse" }}>
                                                <tr>
                                                    <td><strong>Order</strong>  </td>
                                                    <td>{i + 1}</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Data & Time </strong> </td>
                                                    <td>{d.currentDateTime}</td>
                                                </tr>
                                                {/* <span><strong>Order</strong>  {i + 1}</span><br /> */}
                                                {/* <span><strong>Data & Time </strong>: {d.currentDateTime}</span> */}
                                                <tr>
                                                    <td><strong>Items</strong></td>
                                                    <td>
                                                        <table>
                                                            {
                                                                Object.keys(eachobj).map((val) => {
                                                                    return (

                                                                        <tr>
                                                                            <td> {val} </td>
                                                                            <td> {eachobj[val]}</td>
                                                                        </tr>

                                                                    )
                                                                })
                                                            }
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span><strong>Total price</strong></span></td>
                                                    <td>{final[i]}</td>
                                                </tr>

                                            </table>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                }
                <div className="products">
                    {
                        products.map((eachobj) => {
                            const { emoji, name, price } = eachobj;
                            return (

                                <div className="product">
                                    <span role="img" aria-label="ice cream">{emoji}</span>
                                    <h5>product : {name}</h5>
                                    <h5>price : {getPrice(price)}</h5>
                                    <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={() => add(eachobj)}>Add</Button>
                                    {/* <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={remove}>Remove</Button> */}
                                </div>

                            )
                        })
                    }
                </div>

            </div>
            <Footer />
        </div>

    )
};

const Display = (props) => {
    const { data, value } = props
    return (
        <article>
            <h3>{data} : {value}</h3>
        </article>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <span>Gampala Online Stores</span>
        </div>
    )
}

const History = (props) => {
    const [data, value, length] = props;
    return (

        <div className="historybox">
            <span>Total Orders : {length}</span>
            <div className="box">
                {/* <span>Order : {index+1}</span> */}
                <h1>{data} : {value} </h1>
            </div>
        </div>
    )
}
export default States;