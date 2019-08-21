import React from 'react'

export default class Physicians extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePhysician: undefined
        }
    }
    render() {
        const setClicked = (e) => {
            this.setState({activePhysician: e.target.id})
            this.props.setPhysician(e.target.id)
        }
        let physicianDisplay = undefined
        if (this.props.physicianList && this.props.physicianList.length > 0) {
            physicianDisplay = (<ul>
                {this.props.physicianList.map((physician, index) => {
                    return <div key={index} className="physicianContainer"><li id={physician.id} className={this.state.activePhysician === physician.id ? 'selectedPhysician' : null} onClick={setClicked}>{physician.lname}, {physician.fname}</li></div>
                })} </ul>)
        }
        return (
            <div className="physicians">
                <div className="imgWrapper">
                    <a href="https://notablehealth.com/"><img className='logo' src="notable-logo.svg" alt="Logo of Notable Health"/></a>
                </div>
                <b className="paddingLeft">PHYSICIANS</b>
                {physicianDisplay}
                <div className="btnWrapper">
                    <button className="logoutButton"><b>Logout</b></button>
                </div>
            </div>
        )
    }
}