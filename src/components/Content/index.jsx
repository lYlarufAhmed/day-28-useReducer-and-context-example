import styled from 'styled-components'
import Counter from "../Counter/counter";


const ContentWrapper = styled.div`
flex: 1 1 40%;
min-width: 80vh;
background: yellow;
max-height: 85vh;
overflow: auto;
padding: 2rem;
display: flex;
justify-content: center;
`


export default function Content() {
    return (
        <ContentWrapper>
            <Counter/>
        </ContentWrapper>
    )
}