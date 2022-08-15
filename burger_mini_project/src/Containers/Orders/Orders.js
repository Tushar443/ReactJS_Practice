import { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-order";
class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount = () => {
        axios.get('/orders.json').then(res => {
            let fetchorders = [];
            console.log("Orders ", res.data);
            for (let key in res.data) {
                fetchorders.push({
                    id: key,
                    ...res.data[key]
                })
            }
            console.log("for ", fetchorders);
            this.setState({
                loading: false,
                orders: fetchorders
            })
            console.log(this.state);
        }).catch(err => {
            this.setState({
                loading: false
            })
        })
    }
    render() {

        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id} ingredients={order.ingredient} price={+order.totalPrice} />)
                )}
            </div>
        )
    }
}

export default Orders;