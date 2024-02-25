 
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Outlet,useNavigation} from "react-router-dom";
 

const Home = () => {
    const navigation = useNavigation();
    return (
        <div>
             <Header></Header>
              <Body></Body>
              {
                navigation.state  === "loading" ?
                <p>Loading....</p>:
                <Outlet></Outlet>
              }
             
             <Footer></Footer>
        </div>
    );
};

export default Home;