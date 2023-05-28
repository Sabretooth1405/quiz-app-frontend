import Footer from "./footer"
import DispImg from '../media/nf.jpg'
import SignUp from "./SignUp"

function SignUpPage() {
    return (
        <div className='grid-container'>
            <div>
                <img src={DispImg} alt="alt text" className='disp-img' />
            </div>
            <div>
                <SignUp />
                <Footer />
            </div>
        </div>
    )
}
export default SignUpPage;