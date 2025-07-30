import './home.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import data from '../../../public/data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Header></Header>
        <main>
            <section className='container hero'>
                {data.map((mah,i)=>{
                    return <Link to={'/product/'+i} ><Card mahsulot={mah} key={i}></Card></Link>
                })}
                
            </section>
        </main>
    </div>
  )
}

export default Home