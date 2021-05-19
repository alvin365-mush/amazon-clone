import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';
import { Redirect, useHistory } from 'react-router-dom'

function Orders() {
    //pull user from react context api

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        } else {
            setOrders([]);
            history.push('/login');
        }

    }, [])
    //onsnapshot give us pic of what database looks like
    //desc = decending order
    return (
        <div className="orders">
            <h1>Your Order</h1>
            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
