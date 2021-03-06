import StyledClientCardContainer from "./styles/ClientCardContainer.styled";

import ClientCard from "./ClientCard";


const ClientCardContainer = ({ data }) => {

    return (
        <StyledClientCardContainer>
            { data.map( work => <ClientCard key={work.id} data={work} /> ) }
        </StyledClientCardContainer>
    )
}

export default ClientCardContainer