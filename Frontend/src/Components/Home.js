import '../App.css'
import Navbar from './NavBar';

function Home()
{
    return(
        <>
    <h1 className="heading">Interview Portal</h1>
    <Navbar/>
    <div className='container' >Register YourSelf</div>
      <form method='POST'>
          <input type="text" name="name" placeholder="Enter Name" required/>
          <input type="email" name="email" placeholder="Enter Email" required/>
          <input type="text" name="role"  defaultValue={'User'}/>
        <input type="submit" value="Submit" />
      </form>
    </>
    )
}

export default Home;