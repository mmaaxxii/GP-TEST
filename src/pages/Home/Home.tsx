import React from 'react';

import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data/people';

export interface HomeProps {}


const Home : React.FC<HomeProps> = () => {
	const pageSize = 5;
	const columns = [
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{ params.value }</> 
		} 
	];
	return <div>
		<DataGrid 
		
			columns={columns} 
			rows={People}
			disableColumnSelector
			disableRowSelectionOnClick
			autoHeight 
			initialState={{
				pagination: {
				  paginationModel: {
					pageSize: 5,
				  },
				},
			  }}
			  pageSizeOptions={[5]}
			/>
	</div>;
};

export default Home;
