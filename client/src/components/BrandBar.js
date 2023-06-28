import { useEffect } from "react"
import { useStores } from "../contexts/rootStoreContext"
import {observer} from "mobx-react-lite";

function BrandBar(props) {

  const {device} = useStores()

  console.log(device.selectedBrand)

  useEffect(() => {
    device.getBrands()
  }, [])

  return (
    <ul className="brand-bar">
      {
        device.brands.map((brand) => {
          return (
            <li className={`brand-bar__element ${brand.id === device.selectedBrand && 'brand-bar__element_active'}`} onClick={() => device.setSelectedBrand(brand.id)} key={brand.id}>
              {brand.name}</li>
          )
        })
      }
    </ul>
  )
}

export default observer(BrandBar)