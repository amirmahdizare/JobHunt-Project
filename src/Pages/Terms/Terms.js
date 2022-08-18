import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import { Jh_HomePagesHeader } from '../../components/Jh_HomePagesHeader'
const items=[
    {
        title:'Terms',
        description:'By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.'
    },
    {
        title:'Limitations',
        description:'Whilst we try to ensure that the standard of the Website remains high and to maintain the continuity of it, the internet is not an inherently stable medium, and errors, omissions, interruptions of service and delays may occur at any time. We do not accept any liability arising from any such errors, omissions, interruptions or delays or any ongoing obligation or responsibility to operate the Website (or any particular part of it) or to provide the service offered on the Website. We may vary the specification of this site from time to time without notice.'
    },
    {
        title:'Revisions and Errata',
        description:'You may only use the Website for lawful purposes when seeking employment or help with your career, when purchasing training courses or when recruiting staff. You must not under any circumstances seek to undermine the security of the Website or any information submitted to or available through it. In particular, but without limitation, you must not seek to access, alter or delete any information to which you do not have authorised access, seek to overload the system via spamming or flooding, take any action or use any device, routine or software to crash, delay, damage or otherwise interfere with the operation of the Website or attempt to decipher, disassemble or modify any of the software, coding or information comprised in the Website.'
    },
    {
        title:'Site Terms of Use Modifications',
        description:'Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on instantaneously. Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally.'
    },
    
]
export const Terms = () => {
    return (
        <Box>
            <Jh_HomePagesHeader page="Terms and Conditions" description="Keep up to date with the latest news"/>
            <Container maxWidth="lg">
            {items.map((item,index)=>(
                <Box my={4}>
                <Typography variant="h6" gutterBottom>{index+1}.&nbsp;{item.title}</Typography>
                <Typography color="textSecondary" variant="body2" gutterBottom>{item.description}</Typography>
                </Box>
            ))}
            </Container>
            
        </Box>
    )
}
