import React from "react";



export default class Message extends Component {
    constructor(props) {
        super(props) {
            this.state = {

            }
        };
        this.handleChange = this.handleChange.bind( this );
        this.edit = this.edit.bind ( this )
    }

    handleChange( ) {
        this.setState({ puppies: event.target.value });
    }

edit() {

}
}