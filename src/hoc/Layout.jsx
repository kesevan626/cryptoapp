import   React  from   'react'
import Footer from '../components/Footer';
import Navbar from '../components/NavBar'


const  Layout  =(props) =>  {
          return(
                    <div>
                              <Navbar />
                                        {props.children}
                              <Footer />
                    </div>
          )
             
};

export default Layout;