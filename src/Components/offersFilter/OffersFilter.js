import '../Delivery.scss'
import '../main-style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDoorOpen} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faPercent} from "@fortawesome/free-solid-svg-icons";
import RadioButton from '../Radiobutton/RadioButton';
const OffersFilter = ()=>{
    return(
        <>
        <section className="aFilterSec container-fluid">
                    <h3 className="aShowWord"> Show results for: </h3>
                    <div className="aOnlineOrder row">
                        <label className="switch position-relative d-inline-block mt-3 col-6">
                            <input type="checkbox" name="" id="" />
                            <span className="slider round position-absolute"></span>
                        </label>
                        <p className="col-6 aOnlinetext mt-3">Online ordering &nbsp;&nbsp;
                            <span style={{color: "#4caf50"}}>
                                <i className="fas fa-check-circle"></i> Order online
                            </span>
                        </p>
                    </div>
                    <hr />
                    <div>
                        <label className="abox position-relative d-block">
                            <input type="checkbox" name="" />
                            <span className="acheck position-absolute"><FontAwesomeIcon icon={faCheck} className="acheckmark"></FontAwesomeIcon></span>
                        </label>
                        <FontAwesomeIcon icon={faDoorOpen} style={{color: "#7b7d7f" ,marginLeft: "40px", fontSize:"15px"}}> &nbsp;
                            </FontAwesomeIcon>Open now
                        <br />
                        
                        <label className="abox position-relative d-block mt-2">
                            <input type="checkbox" name="" />
                            <span className="acheck position-absolute"><FontAwesomeIcon icon={faCheck} className="acheckmark"></FontAwesomeIcon></span>
                        </label>
                        <FontAwesomeIcon icon={faPercent} style={{color: "#7b7d7f" ,marginLeft: "40px", fontSize:"15px"}}> &nbsp;
                            </FontAwesomeIcon> Promo
                    </div>
                    <hr />
                    <h5 className="aSortbyTitle">Sort by:</h5>
                    <div className="container-fluid acontainerSort">
                        <div className="row">

                            <RadioButton data="popular" name="sort" />

                            <RadioButton data ="Rating" name="sort" />

                            <RadioButton data="Delivery Time" name="sort" />
                            
                        </div>
                    </div>
                    <hr />
                    <h5 className="aSortbyTitle">Dishes:</h5>
                    <div className="container-fluid acontainerSort">
                        <div className="row" id="afilterRowButtons">
                            <RadioButton data="Pizza" name="type" />

                            <RadioButton data="Pasta" name="type" />
                            <RadioButton data="Grilled Chicken" name="type" />
                            <RadioButton data="Burgers" name="type" />
                            <RadioButton data="Shawerma" name="type" />
                            <RadioButton data="Grilles" name="type" />

                            <div className="mt-2 mb-2"><a href="#" className="aLink33More">+33 more</a></div>
                        
                        
                        </div>
                    </div>
              </section>
        </>
    )
}

export default OffersFilter;