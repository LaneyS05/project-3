import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Filter, Sort } from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                //to limit items on orders page
                allowPaging
                //Allows user to sort orders
                allowSorting
                //for deleting and editing customers
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width='auto'
            >
                <ColumnsDirective>
                    {/* Looping to customers data */}
                    {customersGrid.map((item, index) =>
                    (<ColumnDirective
                        key={index} {...item}
                    />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customers

