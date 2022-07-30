import { render } from "@testing-library/react";
import { Component } from "react";
import Modal from '../../Components/UI/Modal/Modal'
import Auxillery from "../Auxillery";
const withErrorHandler =(WrappedComponent ,axios)=>{
    return class extends Component {
        state ={
            error : null
        }
        // or we can used Constructor 
        componentWillMount(){
            this.reqInceptor =axios.interceptors.request.use(req=>{
                this.setState({error : null})
                return req;
            })
            this.resInceptor = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error : error})
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInceptor);
            axios.interceptors.response.eject(this.resInceptor);
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Auxillery >
                <Modal show={this.state.error} purchasedCancel = {this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
                </Auxillery>
            )
        }
    }
}

export default withErrorHandler;