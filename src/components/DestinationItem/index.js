import {Contain,Para,Img} from './styledComponents'

const DestinationItem=(props)=>{
    const {details}=props
    const {imgUrl,name}=details

    return(
        <Contain>
            <Img src={imgUrl} alt={name}/>
            <Para>{name}</Para>
        </Contain>
    )
}

export default DestinationItem