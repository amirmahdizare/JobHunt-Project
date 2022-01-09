import React ,{useState} from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ChooseCountry from './components/ChooseCountry';
import EnterJobTitle from './components/EnterJobTitle';
import HomeBackgroundVector from '../../../../asset/vectors/HomeBackgroundVector.png'
import SearchButton from './components/SearchButton';
import TextContainer from './components/TextContainer'
const useClasses = makeStyles((theme) => ({
    root: {
        alignContent: 'center',
        backgroundImage: `url(${HomeBackgroundVector}) , linear-gradient(-150deg,  rgba(36,51,169,1) 0%,rgba(234,49,124,1) 71%,rgba(234,49,124,1) 100%)`,
        backgroundPositionX: 'right',
        backgroundRepeat: 'no-repeat',
        direction: 'rtl',
        display: 'flex',
        height: '700px',
        position: 'relative',
        [theme.breakpoints.down('xs')]: { height: '450px' },
        [theme.breakpoints.down('md')]: { alignContent: 'flex-start' },
        [theme.breakpoints.up('md')]: { padding: '50px' },
    },
    container: {
        alignItems: 'center',
        display: 'flex',
        color: 'white',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignContent: 'flex-start',
        margin: '0px',
        textAlign: 'center',
    }
}))
const BackgroundImage = () => {
    const classes = useClasses()
    const [state,setState] = useState()
    const [category,setCategory]=useState()
    return (
        <Grid container className={classes.root}>
            <Grid container className={classes.container} spacing={2} >
                <TextContainer  />
                <EnterJobTitle setCategory={setCategory}/>
                <ChooseCountry setState={setState} />
                <SearchButton {...{category,state}}  />
            </Grid>
        </Grid>
    )
}
export default BackgroundImage