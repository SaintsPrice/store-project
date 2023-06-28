import DeviceStore from "./DeviceStore";
import UserStore from "./UserStore";

class RootStore {
  user = UserStore
  device = DeviceStore
}

export default RootStore