import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="left">
        <i className='fa fa-bars'></i>
        <a href="/Home">Be</a>
      </div>
        <div className="right">
        <i className='fa fa-bell'></i>
        <a href="/App">Use App</a>
        <i className='fa fa-search'></i>
      </div>
      

      
    </div>
  )
}

export default Navbar
