import Form from 'react-bootstrap/Form';
import '/Users/mac/Desktop/GoMyCode/Carea/carea/client/src/Components/Posts/CustomForm.css';
import logo from '/Users/mac/Desktop/GoMyCode/Carea/carea/client/src/Assets/logoCarea.svg'
import Image from 'react-bootstrap/esm/Image';
import ListPosts from './Posts/ListPosts';
import { FormStyleHome, titleStyle, titleStyle2 } from './Styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPosts } from '../Redux/Actions/PostActions';
import CardPost from './Posts/CardPost';
import Filter from './Posts/Filter';


const Home = () => {
  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getAllPosts())
  },[dispatch])
  
  
 
  return (
    <div className='bgcolor2'>
      <div className='container-2'>
      <Image style={{width:'200px'}} src={logo} ></Image>
      {/* <h1 style={titleStyle}>Trouvez votre voiture sur carea.tn</h1> */}
      
            <Form.Group className='mt-5' controlId="exampleForm.ControlInput1">

                <Form.Control style={FormStyleHome} type="text" placeholder='Rechercher sur Carea' className='custom-input-2'/>
            </Form.Group>
            {/* <ListPosts /> */}

      </div>

    </div>
    
    // <div className=''>
    //  <div className='bgcolor2'>
    //    <div className='container-2' >

    //   <div className=''>
    //   <Image src={logo} ></Image>
    //     <h1 className='headerTextStyle'>Trouvez votre voiture sur carea.tn</h1>
    //       <Form.Group className='my-4' controlId="exampleForm.ControlInput1">
    //         <Form.Control style={FormStyleHome} type="text"/>
    //       </Form.Group>

    //   </div>
    //   </div>

      
    //   </div> 
    //  <div>
   

    //  </div>

    //  <div>
   
//      </div>


//     </div>
  );
};

export default Home;
