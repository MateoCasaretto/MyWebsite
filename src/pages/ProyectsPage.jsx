import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProyectCard from '../features/components/ProyectCard'

const ProyectsPage = () => {
    const [proyects, setProyects] = useState([])

    useEffect(() => {
        axios.get('https://api.github.com/users/MateoCasaretto/repos')
            .then((response) => {
                setProyects(response.data)
            })
            .catch((error) => {
                console.error('Error fetching projects:', error)
            })
    }, [])
  return (
    <div className="proyects-page">
        <h2 className="proyects-title">PROJECTS</h2>
        <div className="proyects-grid">
            {proyects.map((p) => <ProyectCard key={p.id} proyect={p} />)}
        </div>
    </div>
  )
}

export default ProyectsPage