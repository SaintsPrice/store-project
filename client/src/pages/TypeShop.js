import { useEffect } from "react"
import {observer} from "mobx-react-lite";
import { useStores } from "../contexts/rootStoreContext"
import BrandBar from "../components/BrandBar";
import Card from "../components/Card";

function TypeShop () {

  const {device} = useStores()

  useEffect(() => {
    device.getDevices(device.selectedType, device.selectedBrand)
  }, [device.selectedType, device.selectedBrand])

  //console.log(device.types)
  console.log(device.selectedType)
  console.log(device.selectedBrand)

  return (
    <>
      <BrandBar />
      <div className="cards">
        {
          device.devices.map((card) => {
            return (
              <Card key={card.id} id={card.id} name={card.name} image={card.img} price={card.price} rating={card.rating} />
            )
          })
        }
      </div>
    </>
  )
}

export default observer(TypeShop)