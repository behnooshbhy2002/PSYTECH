// import img from '../../images/ali-hemati.png'
import './Carddd.css'
function PPanelDoctorCard(props)
{
    let  img  = props.data?.img
    let name  = props.data?.name
    return (
        <>
            
            <div className="ppanel-card">
      <span className="ppanel-det">
        <div>
          <img
            src={img}
            alt="women"
            height="110"
            width="110"
            className="ppanel-card-img"
          />
        </div>
        <div className=" ppanel-name">
                        <h4 className=" ppanel-card-name">{ name}</h4>
        </div>
      </span>
      <div className="ppanel-list-butt">
        <button className="pp-card-butt pp-view-noskhe">مشاهده نسخه</button>
        <br></br>
       
      </div>
    </div>
        </>
    )
}
export default PPanelDoctorCard;