


const planetsList = async () => {
    const url = 'https://planet-dashboard.vercel.app/api/planets';
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }

const planetsBySlug = async (slug:string) => {
    const url = `https://planet-dashboard.vercel.app/api/planet/${slug}`;
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data[0]
  }
  
export { planetsList, planetsBySlug }
