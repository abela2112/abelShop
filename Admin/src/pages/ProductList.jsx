import React, { useState } from 'react'
import styled from 'styled-components'
import { DataGrid, } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productRows } from '../data';
const Container = styled.div`
flex: 4;
`
const Button=styled.button`
    padding: 5px 10px;
    border:none;
    border-radius:10px;
    background-color: #3bb077;
    color: #fff;
    cursor:pointer;
    margin-right: 20px;

`
const ProductList = () => {
    const [products, setProducts] = useState(productRows)
    const handleDelete = (id) => {
        console.log('delete')

        setProducts(products.filter((product) => product.id !== id))

    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (param) => {
                return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', marginRight: '5px' }} src={param.row.img} alt="" />
                        {param.row.name}
                    </div>
                )

            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            // description: 'This column has a value getter and is not sortable.',
            // sortable: false,
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            // description: 'This column has a value getter and is not sortable.',
            sortable: false,

            width: 160,
            renderCell: (param) => {
                return (
                    <>
                        <Button>Detail</Button>
                        <DeleteOutline style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete(param.row.id)} />

                    </>
                )
            }

        },
    ];
    return (
        <Container>
            <DataGrid
                disableRowSelectionOnClick
                rows={products}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />

        </Container>
    )
}

export default ProductList