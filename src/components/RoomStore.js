import { makeAutoObservable } from "mobx";
import axios from "axios";

class RoomStore {
  rooms = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchRooms = async () => {
    try {
      const fetchResponse = await axios.get(
        "https://coded-task-axios-be.herokuapp.com/rooms"
      );
      this.rooms = fetchResponse.data;
    } catch (error) {}
  };

  createRooms = async (room) => {
    try {
      const addResponse = await axios.post(
        "https://coded-task-axios-be.herokuapp.com/rooms",
        room
      );
      this.rooms = [...this.rooms, addResponse.data];
    } catch (error) {}
  };

  deleteRooms = async (roomId) => {
    try {
      await axios.delete(
        `https://coded-task-axios-be.herokuapp.com/rooms/${roomId}`
      );
      this.rooms = this.rooms.filter((room) => room.id !== roomId);
    } catch (error) {
      console.log(error);
    }
  };
}
const roomstore = new RoomStore();
roomstore.fetchRooms();
roomstore.createRooms();
roomstore.deleteRooms();
export default roomstore;
