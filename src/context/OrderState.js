import React,{useState} from 'react';
import orderContext from './OrderContext';

export default function OrderState(props) {
    const host = "http://localhost:5000";
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [num, setNum]= useState(0);
    const [userOrders, setUserOrders]= useState([]);

    const getOrders =async()=>{
        try{
            const response =await fetch(`${host}/api/orders/fetchallorders`,{
                method :"GET",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
    
            const json = await response.json();
            setOrders(json);

        }catch(error){
            console.log(error);
        }    
    }

    const addOrder =async(id, title, image, price)=>{
        try{
            const response =await fetch(`${host}/api/orders/addorder`,{
                method :"POST",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({id, title, image, price})
            });
    
            const json = await response.json();
            setOrders(orders.concat(json));
            setTotal(total + Number(price));
            setNum(Number(num)+1);
        }catch(error){
            console.log(error);
        }
    }

    const deleteOrder =async(id, price)=>{
        try{
            const response =await fetch(`${host}/api/orders/deleteorder/${id}`,{
                method :"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
    
            const json = await response.json();
            console.log(json);
            setOrders(orders.filter((order)=>{return order._id!==id}));
            setTotal(total-Number(price));
            setNum(num-1);
        }catch(error){
            console.log(error);
        }
    }

    const deleteAll = async() =>{
        try{
            const response =await fetch(`${host}/api/orders/deleteallorders`,{
                method :"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
    
            const json = await response.json();
            console.log(json);
            setOrders([]);
            setTotal(0);
            setNum(0);
        }catch(error){
            console.log(error);
        }
    }

    const getUserOrders =async()=>{
        try{
            const response =await fetch(`${host}/api/orders/getuserorders`,{
                method :"GET",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                }
            });
    
            const json = await response.json();
            setUserOrders(json);

        }catch(error){
            console.log(error);
        }    
    }

    const addUserOrder =async(id, title, image, price)=>{
        try{
            const response =await fetch(`${host}/api/orders/adduserorder`,{
                method :"POST",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token": localStorage.getItem("token")
                },
                body: JSON.stringify({id, title, image, price})
            });
    
            const json = await response.json();
            setUserOrders(userOrders.concat(json));
        }catch(error){
            console.log(error);
        }
    }

  return (
    <orderContext.Provider value={{orders, getOrders, addOrder, deleteOrder,deleteAll, total, num, setNum, getUserOrders, addUserOrder, userOrders}}>
        {props.children}
    </orderContext.Provider>
  )
}
