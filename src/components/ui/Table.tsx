import { Table as TableA, TableProps as TablePropsA } from 'antd';
import { AnyObject } from 'antd/es/_util/type';


export const Table = (props: TablePropsA<AnyObject>) => {
    return <TableA {...props}/>
}
