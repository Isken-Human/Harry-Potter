import { MDBFooter } from 'mdb-react-ui-kit'


const Footer = () => {
  return(
  <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <img width="40px" height="40px" src="http://ocs.alatoo.edu.kg/pluginfile.php/1/core_admin/logocompact/300x300/1641178708/Logo.png" alt="IAU logo"></img>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      Iskender Tologonov & Ellada Ismailova 
     
    </div>
    
  </MDBFooter>)
    

}


export default Footer;