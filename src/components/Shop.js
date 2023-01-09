import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

export default function Shop() {
    // useDispatch hook -> altering state
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            {/* <button className="btn btn-primary mt-2 mx-5" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Add to Cart
            <button className="btn btn-primary mt-2 mx-5" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            
            <button className="btn btn-primary mt-2 mx-5" onClick={()=>{withdrawMoney(100)}}>-</button>
            Add to Cart
            <button className="btn btn-primary mt-2 mx-5" onClick={()=>{depositMoney(100)}}>+</button>
        </div>
    )
}
