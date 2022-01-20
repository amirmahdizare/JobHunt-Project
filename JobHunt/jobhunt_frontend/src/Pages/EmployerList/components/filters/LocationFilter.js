import { Box, IconButton, InputBase } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Jh_Card } from '../../../../components/Jh_Card'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import SearchState from '../../../../components/SearchState'
export const LocationFilter = ({ addFilter, clearFilter }) => {
	const [state, setState] = useState()

	useEffect(() => {
		if (!state) {
			clearFilter('stateFilter')
		}
		else
			addFilter(
				'stateFilter',{

					field: 'state_id',
					value: state.id,
					command: 'and'

				}
			)

	}, [state])
	return (
		<Box my={2}>
			<SearchState setState={setState} state={state} />
		</Box>
	)
}
