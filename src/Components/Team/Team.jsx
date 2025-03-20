import React from 'react'
import Back from '../Common/Back/Back'
import BackDocentes from '../Common/Back/BackDocentes'
import TeamCard from './TeamCard'
import WspButton from '../WhatsappButton/WspButton'

const Team = () => {
  return (
    <>
    <BackDocentes title='Docentes'/>
    <section className='team padding'>
      <div className="container grid">
        <TeamCard />
      </div>
    </section>
    <WspButton />
    </>
  )
}

export default Team
