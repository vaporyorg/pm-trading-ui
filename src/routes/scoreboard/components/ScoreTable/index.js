import 'react-table/react-table.css'
import * as React from 'react'
import ReactTable from 'react-table'
import { 
    badgeCell,
    rankCell,
    olyCell,
    rewardCell,
    ownTrCallback,
    ownTheadCallback
} from './table'

const tableStyle = {
    border: 'none',
}

const headerStyle = {
    backgroundColor: '#EBEBEB',
    border: 'none',
    lineHeight: '42px',
    fontWeight: 'bold',
    padding: 0,
}

const headerLeft = {
    ...headerStyle,
    textAlign: 'left',
    paddingLeft: '5px',
}

const columnStyle = {
    textAlign: 'center',
    border: 'none',
    borderBottom: '1px solid #C5C5C5',
    lineHeight: '33px',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    color: '#626262',
}

const columnBold = {
    ...columnStyle,
    fontWeight: '500',
}

const columns = [{
    Header: '#',
    id: 'currentRank',
    accessor: 'currentRank',
    headerStyle,
    style: { ...columnBold, color: '#000000' },
    width: 50,
}, {
    Header: 'Rank Change',
    accessor: 'diffRank',
    id: 'diffRank',
    Cell: rankCell,
    headerStyle,
    style: columnBold,
    width: 120,
}, {
    Header: 'User',
    accessor: 'account',
    headerStyle: headerLeft,
    style: { ...columnStyle, textAlign: 'left' },
    width: 385,
}, {
    Header: 'Total Score (OLY)',
    accessor: 'score',
    headerStyle,
    style: { ...columnBold, color: '#000000', letterSpacing: '0.5px' },
    Cell: olyCell('score'),
}, {
    Header: 'Total Balance (OLY)',
    accessor: 'balance',
    headerStyle,
    style: columnStyle,
    Cell: olyCell('balance'),
}, {
    Header: 'Predicted Profits',
    accessor: 'predictedProfit',
    headerStyle,
    style: columnStyle,
    Cell: olyCell('predictedProfit'),
}, {
    Header: 'Badge',
    accessor: 'predictions',
    id: 'predictions',
    Cell: badgeCell,
    headerStyle,
    style: columnStyle
}, {
    Header: 'Reward',
    accesor: 'currentRank',
    id: 'reward',
    headerStyle,
    style: columnStyle,
    Cell: rewardCell,
}]

const EmptyData = () => <div />

const ScoreBoard = ({ tableData, myAccount }) => {
    const size = tableData ? tableData.length > 11 ? 11 : tableData.length : 0;

    return <ReactTable
        data={ tableData }
        columns={ columns }
        showPagination={ false }
        defaultPageSize={ size }
        style={ tableStyle }
        getTrProps={ ownTrCallback(myAccount) }
        getTheadProps={ ownTheadCallback }
        sortable={ false }
        NoDataComponent={ EmptyData }
    />
}

export default ScoreBoard
