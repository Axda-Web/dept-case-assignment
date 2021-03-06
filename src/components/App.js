import { useState, useEffect } from "react";

import StyledApp from "./styles/App.styled";

import NavBar from "./NavBar";
import Menu from "./Menu";
import HeroSection from "./HeroSection";
import SubHeroSection from "./SubHeroSection";
import ClientCardContainer from "./ClientCardContainer";
import ScaledCardLeft from "./ScaledCardLeft";
import ScaledCardRight from "./ScaledCardRight";
import ClientQuote from "./ClientQuote";
import ClientList from "./ClientList";
import Form from "./Form";
import Footer from "./Footer";



const App = () => {

  const [ data, setData ] = useState({
    work: [
        {
            id: 1,
            brand: "BOL.COM",
            title: "A Summer island in the Netherlands",
            img_url: "./assets/img/work/bol-card-bg-img.jpg"
        }, {
            id: 2,
            brand: "KEMPEN",
            title: "Not some average banking website",
            img_url: "./assets/img/work/kempen-card-bg-img.jpg"
        }, {
            id: 3,
            brand: "PHILIPS",
            title: "Beautiful design meets innovative technology",
            img_url: "./assets/img/work/philips-card-bg-img.jpg"
        }, {
            id: 4,
            brand: "GEMEENTEMUSEUM",
            title: "A 100 years of Mondriaan & De Stijl",
            img_url: "./assets/img/work/gemeentemuseum-card-bg-img.jpg"
        }, {
            id: 5,
            brand: "FLORENSIS",
            title: "Rethinking the entire online ecosystem",
            img_url: "./assets/img/work/florensis-card-bg-img.jpg"
        }, {
            id: 6,
            brand: "MICROSOFT",
            title: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            img_url: ""
        }, {
          id: 7,
          brand: "O'NEILL",
          title: "Integrating existing content into O’Neills’s new e-commerce platform",
          img_url: ""
        }, {
          id: 8,
          brand: "MICROSOFT",
          title: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
          img_url: ""
        }, {
          id: 9,
          brand: "BE LIGHTNING",
          title: "Delivering clarity on a global scale",
          img_url: "./assets/img/work/belightning-card-bg-img.jpg"
        }, {
          id: 10,
          brand: "TUI",
          title: "Swipe to find your next holiday destination",
          img_url: "./assets/img/work/tui-card-bg-img.jpg"
        }, {
            id: 11,
            brand: "AMAZON",
            title: "Starting with delivering through drones",
            img_url: ""
        }, {
            id: 12,
            brand: "O'NEILL",
            title: "Integrating existing content into O’Neills’s new e-commerce platform",
            img_url: ""
        }, {
            id: 13,
            brand: "MICROSOFT",
            title: "Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels",
            img_url: ""
        }, {
            id: 14,
            brand: "FLORENSIS",
            title: "Rethinking the entire online ecosystem",
            img_url: "./assets/img/work/florensis2-card-bg-img.jpg"
        }, {
            id: 15,
            brand: "CHOCOMEL",
            title: "A campaign for the limited edition letter packs",
            img_url: "./assets/img/work/chocomel-card-bg-img.jpg"
        }, {
            id: 16,
            brand: "JBL",
            title: "Live like a champion with Jerome Boateng",
            img_url: "./assets/img/work/jbl-card-bg-img.jpg"
        }, {
            id: 17,
            brand: "ZALANDO",
            title: "Innovative SEO and content strategy for Zalando",
            img_url: "./assets/img/work/zalando-card-bg-img.jpg"
        }, {
            id: 18,
            brand: "KONINKLIJKE BIBLIOTHEEK",
            title: "The search of the most influential book ever",
            img_url: "./assets/img/work/koninklijke-card-bg-img.jpg"
        }, {
            id: 19,
            brand: "LIBERTY GLOBAL",
            title: "Delivering complex commerce solutions",
            img_url: "./assets/img/work/libertyglobal-card-bg-img.jpg"
        }, {
            id: 20,
            brand: "ARLA",
            title: "Swipe to find your next holiday destination",
            img_url: "./assets/img/work/arla-card-bg-img.jpg"
        }
    ],
    brands: [
        {
            id: 100,
            name: "Google",
            logo_url: "./assets/img/brands/google-logo.svg"
        }, {
            id: 101,
            name: "Levis",
            logo_url: "./assets/img/brands/levis-logo.svg"
        }, {
          id: 103,
          name: "Spotify",
          logo_url: "./assets/img/brands/spotify-logo.svg"
        }, {
          id: 104,
          name: "Patagonia",
          logo_url: "./assets/img/brands/patagonia-logo.svg"
        }, {
          id: 106,
          name: "Adyen",
          logo_url: "./assets/img/brands/adyen-logo.svg"
        }, {
          id: 107,
          name: "Audi",
          logo_url: "./assets/img/brands/audi-logo.svg"
        }, {
          id: 109,
          name: "Tesla",
          logo_url: "./assets/img/brands/tesla-logo.svg"
        }, {
          id: 110,
          name: "Asos",
          logo_url: "./assets/img/brands/asos-logo.svg"
        }, {
          id: 108,
          name: "Triumph",
          logo_url: "./assets/img/brands/triumph-logo.svg"
        }, {
          id: 102,
          name: "Netflix",
          logo_url: "./assets/img/brands/netflix-logo.svg"
        }, {
          id: 111,
          name: "Takeaway",
          logo_url: "./assets/img/brands/takeaway-logo.svg"
        }, {
          id: 105,
          name: "Fujitsu",
          logo_url: "./assets/img/brands/fujitsu-logo.svg"
        }
    ]
  })

  // useEffect( () => {

  //   const fetchData = async () => {
  //     const res = await fetch('./data/fakeAPI.json')
  //     const json = await res.json()
  //     setData(json)
  //   }
  //   fetchData()

  // }, [data] )
  

  /* Manage showMenu state */
  const [ showMenu, setShowMenu ] = useState(false)

  const handleMenuBtnClick = () => {
    setShowMenu(!showMenu)
  }
  /* Manage showMenu state END */



  /* Manage Form section state */
  const [ formValues, setFormValues ] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [ formErrors, setFormErrors ] = useState({})
  const [ formSubmit, setFormSubmit ] = useState(false)

  const handleFormChange = e => {
    const { name, value } = e.target
    setFormValues( prev => ({
      ...prev,
      [name]: value
    }))
  }

  const formValidation = (values) => {

    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    const requiredErrorMessage = 'This field is required'

    if (!formValues.name) {
      errors.nameError = requiredErrorMessage
    }

    if (!formValues.email) {
      errors.emailError = requiredErrorMessage
    } else if (!regex.test(formValues.email)) {
      errors.emailError = "This is not a valid email format";
    }
    if (!formValues.message) {
      errors.messageError = requiredErrorMessage
    } 

    return errors;
  }   

  const handleFormSubmit = e => {
    e.preventDefault()
    setFormErrors(formValidation(formValues))
    setFormSubmit(true)
  }
  /* Manage Form section state END */


  return (
    //<>{ Object.keys(formErrors).length === 0 ? <p>Loading...</p> :
    <StyledApp>
      { showMenu ? <Menu handleMenuBtnClick={handleMenuBtnClick} /> : (<>
      <NavBar handleMenuBtnClick={handleMenuBtnClick} />
      <HeroSection />
      <SubHeroSection />
      <ClientCardContainer data={data.work.slice(0, 4)} />
      <ScaledCardLeft card={data.work.find( card => card.id === 5 )}
                      notes={data.work.slice(5, 8)}
                    />
      <ClientCardContainer data={data.work.filter( work => work.id === 9 || work.id === 10 )} />
      <ScaledCardRight  card={data.work.find( card => card.id === 14 )}
                        notes={data.work.slice(10, 13)}
                    />
      <ClientCardContainer data={data.work.slice(14, 18)} />
      <ClientQuote />
      <ClientCardContainer data={data.work.slice(18)} />
      <ClientList data={data.brands} />
      <Form formValues={formValues}
            formErrors={formErrors}
            formSubmit={formSubmit}
            handleFormChange={handleFormChange}
            handleFormSubmit={handleFormSubmit}
          />
      <Footer />
      </>)}
    </StyledApp> //}</>
  );
}

export default App;
