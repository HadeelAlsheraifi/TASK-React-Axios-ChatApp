import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import ChatRoomsList from "./components/ChatRoomsList";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [rooms, setRooms] = useState([]);

  // const createRoom = async (newRoom) => {
  //   // to do : call BE to create a room
  //   try {
  //     const createResponse = await axios.get("");
  //     this.setRooms = createResponse.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // fetchRooms = async () => {
  //   try {
  //     const fetchResponse = await axios.get(
  //       "https://coded-task-axios-be.herokuapp.com/rooms"
  //     );
  //     this.rooms = fetchResponse.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteRoom = (id) => {
    // to do : call BE to delete a room
  };

  return (
    <div className="__main">
      <div className="main__chatbody">
        <center>
          <Routes>
            <Route
              path="/room/:roomSlug"
              element={<ChatRoom rooms={rooms} />}
            />
            <Route exact path="/" element={<ChatRoomsList rooms={rooms} />} />
          </Routes>
        </center>
      </div>
    </div>
  );
};

export default App;
