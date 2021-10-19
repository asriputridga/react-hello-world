import React, { Component } from 'react';

class Cardproduct extends Component {
    state = {
        order:4,
        name: 'Asri'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () =>{
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order>0){
            this.setState({
                order: this.state.order - 1
            }, () =>{
                this.handleCounterChange(this.state.order);
            })
        }
        
    }
    render() {
        return <div className="card">
                <div className="img-thumb-prod">
                    <img src="data:image/jpeg;base64,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" alt="product_image" />
                </div>
                <p className="product-title">Ayam</p>
                <p className="product-price">Rp 30000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
    
}
}
export default Cardproduct;