import SignIn from "./login"
import Footer from "./footer"
import DispImg2 from '../media/ls.webp'
function LoginPage(){
    return (
        <div className='grid-container'>
            <div>
                <img src={DispImg2} alt="alt text" className='disp-img' />
            </div>
            <div>
                <SignIn />
                <Footer />
            </div>
        </div>
    )
}
export default LoginPage;