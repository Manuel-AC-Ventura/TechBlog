import './App.css'
import { Header } from './components/header/Header'
import { Container } from './components/container/Container'
import { Footer } from './components/footer/Footer'


export const App = ()=>{
  return(
    <div>
      <Header/>
      <Container/>
      <Footer/>
    </div>
  )
}