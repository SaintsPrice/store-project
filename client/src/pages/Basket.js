import { observer } from "mobx-react-lite"
import BasketEmpty from "../components/BasketEmpty"
import BasketWithCards from "../components/BasketWithCards"
import { useStores } from "../contexts/rootStoreContext"

function Basket() {

  const {device} = useStores()

  return (
    <>
    {device.basketDevices.length >= 1 ? 
    <BasketWithCards /> :
    <BasketEmpty />
    }
    </>
  )
}

export default observer(Basket)