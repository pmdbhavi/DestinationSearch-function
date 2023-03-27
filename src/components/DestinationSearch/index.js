import {useState,useRef,useEffect} from 'react'

import DestinationItem from '../DestinationItem'

import {Container,Heading,Input,Con,Img,Ul} from './styledComponents'

const DestinationSearch=(props)=>{
    const [searchInput,setSearchInput]=useState('')
    const {destinationsList}=props
    const data=useRef(null);

    const onChangeSearchInput=(event)=>{
        setSearchInput(event.target.value)
    }

    useEffect(()=>{
        data.current.focus();
    },[])

    const searchResult=destinationsList.filter(each=>each.name.toLowerCase().includes(searchInput.toLowerCase()))

    return(
        <Container>
            <Heading>Destination Search</Heading>
            <Con>
                <Input value={searchInput} type="search" placeholder="Search" onChange={onChangeSearchInput} ref={data} />
                <Img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon"/>
            </Con>
            <Ul>
                {searchResult.map(each=>
                <DestinationItem details={each} key={each.id}/>
                    )}
            </Ul>
        </Container>
    )
}

export default DestinationSearch