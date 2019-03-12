import React from 'react';

/**
 * 
 */
class Cadena extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookValue: 0,
            penValue: 0,
            totalValue: 0
        };
    
        this.handleBookChange = this.handleBookChange.bind(this);
        this.handlePenChange = this.handlePenChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleBookChange(event) {
        this.setState({
            bookValue: parseInt(event.target.value)
            // total: this.state.total + parseInt(event.target.value)
        });
    }

    handlePenChange(event) {
        this.setState({
            penValue: parseInt(event.target.value),
            // total: this.state.total + parseInt(event.target.value)
        });
    } 

    handleSubmit = () => {
        const { bookValue, penValue } = this.state
        let totalValue = bookValue + penValue
        
        console.log("totatl:", totalValue)
    }

    render() {
        return (
            <div>
                <select onChange={this.handleBookChange}>
                    <option value={1}>Book 1</option>
                    <option value={2}>Book 2</option>
                    <option value={3}>Book 3</option>
                </select><br />
                <select onChange={this.handlePenChange}>
                    <option value={4}>Pen 4</option>
                    <option value={5}>Pen 5</option>
                    <option value={6}>Pen 6</option>
                </select><br />
                <button onClick={this.handleSubmit}>
                    Done
                </button>
            </div>
        )
    }
}

export default Cadena;