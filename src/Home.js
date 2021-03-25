import React, { Component } from "react";
import ContactBox from "./ContactBox";
import SidebarChats from "./SidebarChats";

import Sidebar from "./Sidebar";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      user_friends: "",
      user_friends_message: "",
      check_user_friends: "",
      showImage: false,
      new_image: "",
      new_name: "",
      image: "",
      list:[]
    };
  }

  showModel = () => {
    this.setState({ show: true });
  };
  hideModel = (e) => {
    const currentEmail =
      localStorage.getItem(this.props.location.state) &&
      JSON.parse(localStorage.getItem(this.props.location.state)).email;
    // console.log("username",currentEmail)
    const data = {
      user_friends: this.state.user_friends,
      image: this.state.image,
    };
    // console.log("data",data)
    const friend_list = JSON.parse(localStorage.getItem("friend_list")) || {};
    const arr = friend_list[currentEmail] || [];
    arr.push(data);
    friend_list[currentEmail] = arr;
    localStorage.setItem("friend_list", JSON.stringify(friend_list));
    //  console.log("end")
    this.setState({ show: false });
    // e.target.reset();
  };
  closeModel = () => {
    this.setState({ show: false });
  };
  handleChange = (e) => {
    const regExForUserName = /^[A-Za-z]+$/;
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "user_friends") {
      if (e.target.value.length === 0) {
        this.setState({ user_friends_message: "" });
        this.setState({ check_user_friends: false });
      } else if (e.target.value.length === 1 || e.target.value.length === 2) {
        if (regExForUserName.test(e.target.value)) {
          this.setState({ user_friends_message: "length must be of 3 " });
          this.setState({ check_user_friends: false });
        } else {
          this.setState({ user_friends_message: "use alphabet only" });
          this.setState({ check_user_friends: false });
        }
      } else if (e.target.value.length >= 15) {
        if (regExForUserName.test(e.target.value)) {
          this.setState({
            user_friends_message: "length can't be more than 15 ",
          });
          this.setState({ check_user_friends: false });
        } else {
          this.setState({ user_friends_message: "use alphabet only" });
          this.setState({ check_user_friends: false });
        }
      } else if (
        e.target.value.length >= 3 &&
        regExForUserName.test(e.target.value)
      ) {
        this.setState({ user_friends_message: "" });

        this.setState({ check_user_friends: true });
        console.log(this.state.check_firstname);
      } else {
        this.setState({ user_friends_message: "use alphabet only" });

        this.setState({ check_user_friends: false });
      }
    }
  };
  convertImage = (e) => {
    let binartString = e.target.result;
    this.setState({ image: btoa(binartString) });
  };
  handleImage = (e) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.convertImage.bind(this);
      reader.readAsBinaryString(file);
    }
  };
  convertImage = (e) => {
    let binartString = e.target.result;
    this.setState({ image: btoa(binartString) });
  };

  temp = () => {
    let friends = [];
    if (localStorage.getItem("friend_list")) {
      friends =
        JSON.parse(localStorage.getItem("friend_list"))[
          this.props.location.state
        ] || [];
    }
    // console.log(friends,"friends")

    return friends.map((element) => {
      return (
        <SidebarChats
          name={element.user_friends}
          new_name={this.state.new_name}
          new_image={this.state.new_image}
          image={element.image}
          close={this.close}
          fullImage={this.fullImage}
          showImage={this.state.showImage}
        />
      );
    });
  };

  fullImage = (clickedImage, name) => {
    console.log("fullimage", name);

    this.setState({ new_image: clickedImage });
    this.setState({ new_name: name });

    this.setState({ showImage: true });
  };
  close = () => {
    this.setState({ showImage: false });
  };

  async call(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data.length,"length")
    for(let i=0;i<data.length;i++)
    {
        <SidebarChats
        name={data[i].name}
        new_name={this.state.new_name}
        new_image={this.state.new_image}
        image={this.state.image}
        close={this.close}
        fullImage={this.fullImage}
        showImage={this.state.showImage}
      />
      console.log(data[i].name)
    }

  }

  componentDidMount = () => {
   this.call()
//    fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json.name));
  };
  render() {
    return (
      <div className="Home">
        <Sidebar
          user_name={this.props.location.state}
          show={this.state.show}
          user_friends={this.state.user_friends}
          user_friends_message={this.state.user_friends_message}
          check_user_friends={this.state.check_user_friends}
          image={this.state.image}
          showImage={this.state.showImage}
          showModel={this.showModel}
          hideModel={this.hideModel}
          handleChange={this.handleChange}
          convertImage={this.convertImage}
          handleImage={this.handleImage}
          hideModel={this.hideModel}
          closeModel={this.closeModel}
          temp={this.temp}
          close={this.close}
        />
        <ContactBox
          new_image={this.state.new_image}
          new_name={this.state.new_name}
        />
      </div>
    );
  }
}
