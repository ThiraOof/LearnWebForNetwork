// fetch.js
import { ref, watchEffect, toValue } from 'vue'
export default function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = (dt) => {
    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    // reset state before fetching..
    fetchData(url)
  })

  return { data, error }
}
