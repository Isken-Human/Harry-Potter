import { MDBFooter } from 'mdb-react-ui-kit'

const Footer = () => {
  return(
  <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      Iskender Tologonov & Ellada Ismailova
    </div>
</MDBFooter>)
    

}


export default Footer;