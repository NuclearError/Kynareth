import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Month from '../components/month';

class MonthsList extends Component {

  renderList() {
    return this.props.months.map(month =>
      <Month key={`month-${month.abbr}`} abbr={month.abbr} name={month.name} onMonthSelect={this.props.onMonthSelect} />
    );
  };

  render() {
    return (
      <ul className="months-list">
        {this.renderList()}
      </ul>
    );
  };

}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside MonthsList
  // ie. contained within 'this.props'
  return {
    months: state.months
  }
}

MonthsList.propTypes = {
  months: PropTypes.array.isRequired,
  onMonthSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MonthsList);
