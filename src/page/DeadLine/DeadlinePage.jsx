import React from 'react'
import TableDeadline from '../../component/DeedLine/TableDeadline'
import Deadline from '../../component/DeedLine/Deadline'
import MainLayout from '../../component/MainPage/MainLayout'

export const DeadlinePage = () => {
    return (
        <div>
            <MainLayout/>
            <Deadline/>
            <TableDeadline/>
        </div>
    )
}
export default DeadlinePage