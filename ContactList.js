import React from "react"
import ContactListItem from "./ContactListItem";
import {View, ScrollView} from "react-native";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contact: []};
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=20").then(
            response => response.json()
        ).then(data=>{
            this.setState({contact: data.results});
        })
    }

    renderItems() {
        return this.state.contact.map((c,index) => (
          <ContactListItem
            name={`${c.name.title} ${c.name.first} ${c.name.last}`}
            profileImage={c.picture.thumbnail}
            index={index}
          />
        ));
      }
     render() {
        return <ScrollView>{this.renderItems()}</ScrollView>
    }
}

export default ContactList;