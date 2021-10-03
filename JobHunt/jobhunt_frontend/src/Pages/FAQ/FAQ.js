import { Box, Container } from '@material-ui/core'
import React from 'react'
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
import { Question } from './components/Question'
const questions=[
    {question:'What is a dummy text? ',answer:'Designer at work who don’t have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes. A dummy text is also helpful to present a design without content to a client to show how the text is going to look like without irritating the client by real texts.'},
    {question:'Why another dummy text generator?',answer:'Designer at work who don’t have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes. A dummy text is also helpful to present a design without content to a client to show how the text is going to look like without irritating the client by real texts.'},
    {question:'Why doesn’t the generator put as many characters as I told him? ',answer:'Designer at work who don’t have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes. A dummy text is also helpful to present a design without content to a client to show how the text is going to look like without irritating the client by real texts.'},
    {question:'What means “Print special chars as HTML entities”? ',answer:'Designer at work who don’t have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes. A dummy text is also helpful to present a design without content to a client to show how the text is going to look like without irritating the client by real texts.'},
    {question:'Why is a template text recommended to be as long as possible? ',answer:'Designer at work who don’t have any content for their product yet have the possibility to insert a dummy text into their design to judge on the arrangement of text on their site, on readability or on fonts and sizes. A dummy text is also helpful to present a design without content to a client to show how the text is going to look like without irritating the client by real texts.'},
]
const FAQ = () => {
    return (
        <Box>
            <Jh_HomePagesHeader page="Faq" description="Keep up to date with the latest news"/>
            <Container maxWidth="lg">
                <Box my={3}>
                {questions.map((question)=>(
                    <Question question={question.question} answer={question.answer}/>
                ))}
                </Box>
            </Container>
            
        </Box>
    )
}
export default FAQ