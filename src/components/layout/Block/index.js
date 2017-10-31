import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import * as React from 'react'
import * as css from './index.css'

const cx = classNames.bind(css)

class Block extends React.PureComponent {

    render() {
        const { margin, children, className, ...props } = this.props

        return (
          <div className={cx(margin, className)} {...props}>
            { children }
          </div>
        )
    }
}

Block.propTypes = {
    margin: PropTypes.string,
    children: PropTypes.node,
}

export default Block
