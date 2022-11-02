import { API } from "aws-amplify"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { getPlace, listPlaces } from "../graphql/queries"
import * as types from "../API"

export const usePlaceById = (id: string) => {
  const [place, setPlace] = useState<types.Place>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPlaceById(id, setLoading, setPlace)
  }, [])

  return {
    place,
    loading,
  }

}

export const usePlace = () => {
  const { user } = useAuthenticator((context) => [context.user])
  const [places, setPlaces] = useState<types.Place[]>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPlaces(user.getUsername(), setLoading, setPlaces)
  }, [])

  return {
    place: places && places[0],
    loading,
  }
}

const fetchPlaceById = async (id: string, setLoading: any, setPlace: any) => {
  const res: any = await API.graphql({
    query: getPlace,
    variables: { id },
  })
  setPlace(res.data.getPlace)
  setLoading(false)
}
const fetchPlaces = async (username: string, setLoading: any, setPlace: any) => {
  const res: any = await API.graphql({
    query: listPlaces,
    variables: { limit: 1, filter: { owner: { beginsWith: username } } },
  })
  setPlace(res.data.listPlaces.items)
  setLoading(false)
}
