import 'bootstrap/dist/css/bootstrap.min.css';
import './../Dineout.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DineoutbyCity(props) {


    return (
        <>
         <div class="item-1 " >
            <div class="box-disArear m-2" style={{ height: "65vh"}}>
            <div class="slide-img ">
                <img
                src={props.srcImage} 
                alt="" style={{height: "40vh"}}/>
                <div class="detail-box ">
                <img
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/c3855416-6df2-4b0e-acc8-20dcf78554f8.jpg"
                    alt="" style={{ width: "50px", maxWidth: "100%", height: "auto", padding: "5px 0"}}/>
                <div class="px-3">
                    <p class="resturantDesc m-0" style={{ color: "color: rgb(161, 157, 157)", fontSize: "10px"}}>
                    {props.ResType}
                    </p>
                    <a href="#" class="meal-kind">{props.ResName}</a>
                    <div class="d-flex">
                    <p class="resturantRate text-warning">
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                   
                    <i class="fa fa-star-half" aria-hidden="true"></i>
                        <span style={{ color: "#474747", fontSize: "10px"}}> {props.Rate} Rating</span>
                    </p>
                    
                    </div>
                </div>
                    </div>
                    <div style={{ position: "relative", bottom: "20px", padding: "0 20px"}}>
                    <p style= {{ fontSize: "16px", color: "rgb(161, 157, 157)"}}>
                        <span style={{ color: "black"}}>Adress</span>: city street
                    </p>
                    </div>
                </div>
                </div>
            </div>
            {/* <div class="item-1 px-2 ">
                <div class="box-disArear" >
                    <div class="slide-img">
                        <img src={props.srcImage} alt="" />
                        <div class="detail-box py-3">
                            <img src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/c3855416-6df2-4b0e-acc8-20dcf78554f8.jpg"
                                alt="" style={{ width: "50px", maxWidth: "100%", height: "auto", padding: "5px 0" }} />
                            <div class="px-3">
                                <p class="resturantDesc m-0" style={{ color: "rgb(161, 157, 157)", fontSize: "10px" }} >
                                    {props.ResType}
                                </p>
                                <a href="#" class="meal-kind">{props.ResName}</a>
                                <div class="d-flex">
                                    <p class="resturantRate text-warning">
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star" aria-hidden="true"></i>
                                        <i class="fa fa-star-half" aria-hidden="true"></i>
                                        <span style={{ color: "#474747", fontSize: "10px" }}>{props.Rate}</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <p style={{ fontSize: "14px", color: "rgb(161, 157, 157)", padding: "0 20px" }}>
                            Holiday Inn Hotel
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    );
}