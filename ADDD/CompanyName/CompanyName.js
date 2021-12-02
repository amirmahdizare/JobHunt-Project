import { Box, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCompany } from '../../../../api/employer'
import { Loading } from '../../../../components/Loading'
import { SectionHeader } from '../../../../components/SectionHeader'
import { AddOrEditCompany } from './components/AddOrEditCompany/AddOrEditCompany'
import { ShowCompany } from './components/ShowCompany'

export const CompanyName = () => {
    const [companyState, setCompanyState] = useState({
        data:{},
        action:null
    })
    const [action, setAction] = useState()
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        setLoading(true)
        getCompany()
            .then((data) => {
                setLoading(false)
                if (!data.length)
                     handleCompanyStateChange({action: 'add'})
                else {
                    console.log(data)
                    handleCompanyStateChange({action:'show',data:data[0]})
                }
            })
            .catch(()=>setLoading(false))

    }, [])
    // useEffect(() => {
    //     getCompany().then((data) => setCompanyInfo(data[0]))
    // }, [action])

    const handleCompanyStateChange = (obj) => {
        setCompanyState({...companyState,...obj})
    }
    const SelectSection = () => {
        //console.log(companyState.data)
        switch (companyState.action) {
            case 'add':
                return <AddOrEditCompany handleCompanyStateChange={handleCompanyStateChange} mode="add" />
            case 'edit':
                return <AddOrEditCompany handleCompanyStateChange={handleCompanyStateChange} data={companyState.data} mode="edit" />
            case 'show' :
                return <ShowCompany info={companyState.data} handleCompanyStateChange={handleCompanyStateChange} />
            default: 
            return <Loading/>
            }
    }
    return (
        <Box>
            <SectionHeader title="Company Name" />
              <SelectSection />
        </Box>
    )
}
