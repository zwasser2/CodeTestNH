import React from 'react'

export default class ClientTable extends React.Component {
    render() {
        const tableOfClients = (<table><tbody><tr><th>#</th><th>Name</th><th>Time</th><th>Kind</th></tr>
            {this.props.clientList && this.props.clientList.length > 0 ? this.props.clientList.map((client, index) => {
                return <tr key={index}><th>{index + 1}</th><th>{client.fname + " " + client.lname}</th><th>{client.time}</th><th>{client.kind}</th></tr>
            }) : null}</tbody></table>)
        let name = ''
        let email = ''
        if (typeof this.props.currentPhysician !== 'undefined') {
            name = 'Dr. ' + this.props.currentPhysician.fname + ' ' + this.props.currentPhysician.lname
            email = this.props.currentPhysician.email
        }
        return (
            <div className="clients">
                <h1 className="clientHeader">{name}</h1>
                <h2 className="clientHeader">{email}</h2>
                {tableOfClients}
            </div>
        )
    }
}