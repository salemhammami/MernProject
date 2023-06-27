import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { deletePost, getOnePost } from "../../Redux/Actions/PostActions"
import picanto from '/Users/mac/Desktop/GoMyCode/Carea/carea/client/src/Assets/picanto.jpg'
import{subTitleStyle, titleStyle2,categoryStyle, iconStyles,lineStyle, FormStyle3} from '../Styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Button, Card } from "react-bootstrap"
import { current } from "../../Redux/Actions/AuthActions"
import profile from '/Users/mac/Desktop/GoMyCode/Carea/carea/client/src/Assets/profile.png'



const DescriptionPost = ({el}) => {
  const {id} = useParams()
  const dispatch = useDispatch()

useEffect(()=>{
   dispatch(getOnePost(id))
   dispatch(current())
},[dispatch,id])
const user = useSelector(state=>state.AuthReducer.user)
  const post = useSelector(state=>state.PostReducer.onePost)
const navigate = useNavigate()
  
  return (
    
          
<>

{post && 


    <div className="row pt-4 m-2 ">
    <div class="col-lg-5 col-md-6 col-sm-12">
      <img src={'../../../../'+post?.image} alt="post-image" className="rounded mt-3"/>
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12">
        <section>
          <h1 style={titleStyle2}>{post.title}</h1>
          <h2 style={subTitleStyle}>{post.price} <span className='dt'>DT</span></h2>
          <h3 style={categoryStyle}><FontAwesomeIcon icon={faList} style={iconStyles}/>{post.category}</h3>
          <h3 style={categoryStyle}><FontAwesomeIcon icon={faLocationDot} style={iconStyles}/>{post.gouvernorat}, {post.delegation}</h3>
          </section>
          <hr style={lineStyle} />


          <h1 style={titleStyle2} className="mt-3">Description</h1>
          <p>{post.description}</p>
          <hr style={lineStyle} />

          
          <h1 style={titleStyle2} className="mt-3">Critères</h1>

          <section className="d-flex flex-wrap justify-content-start">
            
            <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Marque:</Card.Title>
                  <Card.Text>
                  {post.marque}
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Modèle:</Card.Title>
                  <Card.Text>
                  {post.modele}
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Kilométrage:</Card.Title>
                  <Card.Text>
                  {post.kilometrage} km
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Année:</Card.Title>
                  <Card.Text>
                  {post.year}
                  </Card.Text>
              </Card.Body>
             </Card>


             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Puissance fiscale:</Card.Title>
                  <Card.Text>
                  {post.puissanceF}
                  </Card.Text>
              </Card.Body>
             </Card>
             
             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Boîte de vitesses:</Card.Title>
                  <Card.Text>
                  {post.boite}
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Type de carrosserie:</Card.Title>
                  <Card.Text>
                  {post.carrosserie}
                  </Card.Text>
              </Card.Body>
             </Card>

             <Card  style={FormStyle3}>
              <Card.Body>
                <Card.Title>Carburant</Card.Title>
                  <Card.Text>
                  {post.carburant}
                  </Card.Text>
              </Card.Body>
             </Card>
          
             
          </section>
          {(user?._id == post?.owner?._id  || user?.role == 'admin')&& 
           <>
           <Button as={Link}  to ={`/EditPost/${post._id}`} >Edit</Button>
           <Button onClick={()=>dispatch(deletePost(post._id,navigate))} >Delete</Button>
           </>}
         

          <div>
          <div className='styleProfile'>
            <Card.Img
        src={profile}
        className="rounded-circle border border-dark-2 border-4"
        style={{ width: '100px', height: '100px' }}
        alt="Profile Image"/>
         <h1>{post?.owner?.name}</h1>
           <h1>{post?.phone}</h1>
        </div>
          
          </div>



      </div>

     
    </div>



    }</>

  )
}

export default DescriptionPost