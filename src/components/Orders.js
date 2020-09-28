import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ user }] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //acces the users collection
    //you're getting the specific user from firebase db
    //get into de collection
    //order them (the most recent on the top)
    //setorders; mapping all the list , and get the id and the data
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order, id) => (
          <Order 
          key={id}
          order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
