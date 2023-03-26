
import SignIn from "./login"
import Footer from "./footer"
import DispImg from '../media/nf.jpg'

function LoginPage(){
    return (
        <div className='grid-container'>
            <div>
                <img src={DispImg} alt="alt text" className='disp-img' />
            </div>
            <div>
                <SignIn />
                <Footer />
            </div>
        </div>
    )
}
export default LoginPage;