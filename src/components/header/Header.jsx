import  './header.css'

function Header() {
  return (
    <div className='header'>
        <header className='container'>
            <img src="./Logo.png" alt="" />
            <input type="text" placeholder='search' />
        </header>
    </div>
  )
}

export default Header