import React from 'react'
import { SectionLoading } from '../../../../components/SectionLoading'
import { useCategories } from '../../../../hooks'
import { AccordionFilterBox } from './components/AccordionFilterBox'

export const CategoryFilter = ({ addFilter, clearFilter }) => {
    const [categories, error, loadingCategories] = useCategories()
    const handleChange = (catsArr) => {
        if (catsArr.length == 0) {
            clearFilter('categoryFilter')
        }
        else
            addFilter('categoryFilter',
                {
                    field: 'category_id',
                    value: catsArr,
                    command: 'inArr'
                }
            )
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
