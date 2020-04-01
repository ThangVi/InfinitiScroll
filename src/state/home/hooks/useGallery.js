import { useState } from 'react'
import { useStateValue } from '../../index'
import { loadGallery } from '../queries'
import {
  setGallery,
} from '../actions'

const useGallery = () => {
  const [{gallery}, dispatch] = useStateValue()
  const [isLoading, setIsLoading] = useState(false)

  const request = async (pageSize, pageIndex) => {
    setIsLoading(true)
    const response = await loadGallery(pageSize, pageIndex);
    if (response) {
      dispatch(setGallery(response))
    } else {
      const err = []
      dispatch(setGallery(err))
    }
    setIsLoading(false)
  }

  return [gallery, isLoading, request]
}

export default useGallery
