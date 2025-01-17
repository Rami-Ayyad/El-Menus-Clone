import 'bootstrap/dist/css/bootstrap.min.css';
import './Dineout.css'
import DineoutbyPlace from './DineoutbyPlace/DineoutbyPlace';
import DineoutByCity from './DineoutByCity/DineoutByCity'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import pizzaImg from './../../images/Dineout/pizza.jpg'
import BurgersImg from './../../images/Dineout/Burgers.jpg'
import ChinessImg from './../../images/Dineout/Chiness.jpg'
import FriedChickenImg from './../../images/Dineout/FriedChicken.jpg'
import KosharyImg from './../../images/Dineout/koshary.jpg'
import SandwichesImg from './../../images/Dineout/Sandwiches.jpg'
// FireStore
import { db } from './../../Firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'


export default function Dineout() {
    // //Restaurants Collection
    const [Restaurants, setRestaurants] = useState([]);
    const resturantsCollection = collection(db, "Restaurant")

    //Branches Collection
    const [Branches, setBranches] = useState([]);
    const BranchesCollection = collectionGroup(db, "Branches")

    // //QuerybyType
    const [QueryByType, setQueryByType] = useState([]);


    useEffect(() => {
        // Restaurant Collection
        const getRestaurants = async () => {
            const Resdata = await getDocs(resturantsCollection)
            // console.log(Resdata)
            setRestaurants(Resdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getRestaurants()

        //Branches Collection
        const getBranches = async () => {
            const Branchesdata = await getDocs(BranchesCollection)
            // console.log(Branchesdata)
            setBranches(Branchesdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getBranches()

        //Restaurant Query By Type

    }, [])


    const [dineOutbyPlace, setDineoutbyPlace] = useState([
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14d74-2225-11e8-924e-0242ac110011.jpg", title: "Work Or Study" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15181-2225-11e8-924e-0242ac110011.jpg", title: "Casual Dining" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14c1e-2225-11e8-924e-0242ac110011.jpg", title: "Hidden Gems" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15211-2225-11e8-924e-0242ac110011.jpg", title: "Food with a View" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14fc6-2225-11e8-924e-0242ac110011.jpg", title: "Romantic" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14a55-2225-11e8-924e-0242ac110011.jpg", title: "Fancy Dining" },
    ])

    const [dineOutbyType, setDineoutbyType] = useState([
        { urlImage: pizzaImg, title: "Pizza" },
        { urlImage: BurgersImg, title: "Burgers" },
        { urlImage: ChinessImg, title: "Chiness" },
        { urlImage: KosharyImg, title: "Koshary" },
        { urlImage: FriedChickenImg, title: "Fried chicken" },
        { urlImage: SandwichesImg, title: "Sandwiches" },
    ])

    const [dineOutbyNewRes, setDineOutbyNewRes] = useState([
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "pizza" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Burgers" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Chiness" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Koshary" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "FriedChecken" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Sandwiches" },
    ])


    //Functions
    const [clicked, setClicked] = useState(false);
    const filterByType = (e) => {
        setQueryByType([])
        if(clicked == false){
            const QueryByTypeDocs = query(
                collection(db, "Restaurant"),
                limit(10),
                where("Type", "array-contains", e.target.text)
            );
    
            const getResByTypeQuery = async () => {
                const QueryData = await getDocs(QueryByTypeDocs)
                // console.log(Branchesdata)
                setQueryByType(QueryData.docs.map((doc) => ({ ...doc.data() })))
            }
            getResByTypeQuery()

            setClicked(true)
        }
        else{
            setClicked(false)
        }

       
    }

  
    



    return (
        <>
            {/* FOR TESTING ONLY */}
            {/* <div>
                {
                    QueryByMood.map((test) => {
                        return (
                            <div>
                                {test.ResName}
                            </div>
                        )
                    })
                }
            </div> */}

            {/* Discover By MOOD */}
            <section className="container-fluid my-5">
                <div className="row mx-md-4">
                    <div className="col-12 text-center p-3">
                        <h1 className="fw-bold">Discover restaurants to dine-out</h1>
                    </div>

                    <div className="col-12 d-flex justify-content-between mt-4">
                        <h3 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }} >Discover by Moods</h3>
                        <div>
                            <a href="#">see All</a>
                            <span></span>
                        </div>
                    </div>

                    {/* Dine-out CONTENT */}
                    <div className="col-12 col-lg-6 d-flex px-0 bg-danger mt-4 dine-coffee" >
                        <div
                            className="inner-coffee">
                            <h1 className="mt-auto text-light fw-bold p-4" style={{ cursor: "pointer" }}>Coffeeshops</h1>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 d-flex mt-4">
                        <div className="row px-md-3">
                            {
                                dineOutbyPlace.map((place) => {
                                    return (
                                        <DineoutbyPlace urlImage={place.urlImage} title={place.title}></DineoutbyPlace>
                                    )
                                })
                            }

                        </div>
                    </div>

                  


                </div>
            </section>


            {/* Discover BY Types */}
            <section className="disByDishes-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-3 py-3">
                        <h3 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover by Dishes</h3>
                    </div>

                    <div className="col-12">
                        <div id="disByDishes-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex" id="cardDishes">
                                            {/* <!-- Dieshes Container filled by JS --> */}

                                            {
                                                // onClick={(e) => { filterByType(e) }}
                                                dineOutbyType.map((Type) => {
                                                    return (
                                                        <div class="item-1 px-2 p-2">
                                                        <div class="box-newResturants" style={{ height: "35vh" }}>
                                                            <div class="slide-img">
                                                                <img
                                                                    src={Type.urlImage} style={{ height: "19vh" }}
                                                                    alt="" />
                                                                <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                    <a style={{ cursor: "pointer"}} class="meal-kind" onClick={(e) => { filterByType(e) }}>{Type.title}</a>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Filter By Type Display */}
                    <div className="col-12">
                        <div id="disByDishes-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex" id="cardDishes">
                                            {/* <!-- Dieshes Container filled by JS --> */}

                                            {
                                                QueryByType.map((Type) => {
                                                    return (
                                                     
                                                        <div class="item-1 px-2 p-2">
                                                            <div class="box-newResturants" style={{ height: "35vh" }}>
                                                                <div class="slide-img">
                                                                    <img
                                                                        src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg" style={{ height: "19vh" }}
                                                                        alt="" />
                                                                    <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                        <a href="#" class="meal-kind">{Type.ResName}</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Discover BY City */}
            <section className="disArear-Slider container-fluid my-5 overflow-hidden">
                <div className="row">

                    <div className="col-12 mx-3 py-3">
                        <h4 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover Maadi</h4>
                    </div>

                    <div className="col-12">
                        <div id="disArear-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            {

                                                Restaurants.map((Res) => {
                                                    return (
                                                        <DineoutByCity Address={Branches.Adddress} Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/155c7faa-aff2-439f-a4bc-89fd1746258f.jpg"></DineoutByCity>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Discover By MOOD */}
            <section className="hiddenGems-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-5 py-4">
                        <h4 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>Hidden Gems</h4>
                    </div>
                    <div className="col-12">
                        <div id="hiddenGems-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            {
                                                Restaurants.map((Res) => {
                                                    return (
                                                        <DineoutByCity Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/de7f35a3-9f76-41ce-8ee1-d0d43bad4e63.jpg"></DineoutByCity>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discover By New Resturants */}
            <section className="newResturants-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-5 py-4">
                        <h3 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>New Restaurants</h3>
                    </div>
                    <div className="col-12">
                        <div id="newResturants-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            {/* <p class="resturantDesc" style={{ color: "rgb(161, 157, 157)", fontSize: "10px", margin: "auto", position: "relative", top: "15px"}}>
                                                                            {Res.Type}
                                                                        </p> */}
                                            {
                                                Restaurants.map((Res) => {
                                                    return (

                                                        <div class="item-1 px-2 p-2">
                                                            <div class="box-newResturants" style={{ height: "35vh" }}>
                                                                <div class="slide-img">
                                                                    <img
                                                                        src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg" style={{ height: "19vh" }}
                                                                        alt="" />
                                                                    <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                        <a href="#" class="meal-kind">{Res.ResName}</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}