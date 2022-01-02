import { add } from 'date-fns'
import React from 'react'
import { SectionLoading } from '../../../../components/SectionLoading'
import { useCategories } from '../../../../hooks'
import { AccordionFilterBox } from '../AccordionFilterBox'

export const CategoryFilter = ({ addFilter }) => {
    const [categories, error, loadingCategories] = useCategories()
    const handleChange = (catsArr) => {
        addFilter({
            field:'category_id',
            value:catsArr,
            command:'inArr'
        })
    }
    return (
        <>
            {loadingCategories && <SectionLoading />}
            {!loadingCategories && categories && <AccordionFilterBox
                title="Categories"
                handleFilter={handleChange}
                items={categories} />}
        </>
    )
}
