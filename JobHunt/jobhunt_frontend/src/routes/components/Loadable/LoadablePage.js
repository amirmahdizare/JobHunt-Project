import { Button, Typography } from "@material-ui/core";
import Loadable from "react-loadable"
import { Loading } from "./Loading"
const loading = ({ pastDelay, error, retry, timedOut }) => {
    if (error)
        return <div><Typography variant="h4">Error!</Typography> <Button color="primary" variant="contained" onClick={retry}>Retry</Button></div>;
    else if (timedOut)
        return <div><Typography variant="h4">Taking a long time...</Typography>  <Button color="primary" variant="contained" onClick={retry}>Retry</Button></div>;
    else 
        return <Loading />
}
const LoadablePage = ({pageName}) =>{
    const LoadablePageComponent=Loadable({
        loader:()=>import(`../../../Pages/${pageName}/${pageName}`),
        loading:loading,
        delay:400
    })
    return <LoadablePageComponent/>
}
export  {LoadablePage}