import { API } from "aws-amplify"
import { useAuthenticator } from "@aws-amplify/ui-react"
import { useEffect, useState } from "react"
import { listPlaces } from "../graphql/queries"
import * as types from "../API"

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

const fetchPlaces = async (username: string, setLoading: any, setPlace: any) => {
  const res: any = await API.graphql({
    query: listPlaces,
    variables: { limit: 1, filter: { owner: { beginsWith: username } } },
  })
  setPlace(res.data.listPlaces.items)
  setLoading(false)
}
