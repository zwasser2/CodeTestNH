import React from 'react';
import './App.css';
import Physicians from './Physicians.js'
import ClientTable from './ClientTable.js'

const xhttp = new XMLHttpRequest();
xhttp.open("GET", 'http://localhost:3001/users');
xhttp.send();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhysician: undefined,
            physicianList: undefined,
            clientList: undefined
        }
    }
    render() {
        let self = this
        xhttp.onreadystatechange = function() {
            if ((this.readyState === 4 && this.status === 200)) {
                self.setState({physicianList: JSON.parse(xhttp.responseText)})
            }
        };
        let setPhysician = (physicianId) => {
            const xhttpClients = new XMLHttpRequest()
            xhttpClients.onreadystatechange = function() {
                if ((this.readyState === 4 && this.status === 200)) {
                    self.setState({clientList: JSON.parse(xhttpClients.responseText)})
                }
            }
            xhttpClients.open("GET", 'http://localhost:3001/clients?id=' + physicianId)
            xhttpClients.send()
            const physician = this.state.physicianList.find((physician) => {
                return physician.id === physicianId
            })
            this.setState({currentPhysician: physician})
        }
        return (
            <div className="App">
                <div className="container">
                    <Physicians physicianList={this.state.physicianList} setPhysician={setPhysician}/>
                    <ClientTable clientList={this.state.clientList} currentPhysician={this.state.currentPhysician} />
                </div>
            </div>
        )
    }
}

export default App;
