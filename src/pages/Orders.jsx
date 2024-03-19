import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'
import { resize } from '@syncfusion/ej2/maps'
import { pdfExport } from '@syncfusion/ej2/pivotview'


const Orders = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category="Page" title="Orders" />
            <GridComponent
                id='gridcomp'
                dataSource={ordersData}
                //to limit items on orders page
                allowPaging
                //Allows user to sort orders
                allowSorting
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) =>
                    (<ColumnDirective
                        key={index} {...item}
                    />))}
                </ColumnsDirective>
                {/* to show pages under orders */}
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
            </GridComponent>
        </div>
    )
}

export default Orders