import { useEffect } from "react"
import {observer} from "mobx-react-lite";
import { useStores } from "../contexts/rootStoreContext"
import BrandBar from "../components/BrandBar";
import Card from "../components/Card";

function TypeShop () {

  const {device} = useStores()

  useEffect(() => {
    device.getDevices(device.selectedType, device.selectedBrand, device.page, device.limit)
  }, [device.selectedType, device.selectedBrand, device.page, device.limit])

  const pageCount = Math.ceil(device.totalCount / device.limit)
  const pages = []

  for(let i = 0; i <pageCount; i++) {
    pages.push(i+1)
  }

  console.log(device.devices)

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
      <div className="pagination">
      {pages.map((page) => {
        return (
          <p key={page} onClick={() => device.setPage(page)} className={`pagination__page ${device.page === page && "pagination__page_active"}`}>{page}</p>
        )
      })}
      </div>
    </>
  )
}

export default observer(TypeShop)