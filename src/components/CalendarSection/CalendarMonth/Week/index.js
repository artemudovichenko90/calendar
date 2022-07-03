import { Component } from 'react';
import Day from '../Day';
import PropTypes from 'prop-types';
import styles from './../CalendarMonth.module.scss'


class Week extends Component {
  constructor(props) {
    super(props);
  }
  renderWeek = () => {
    const { week, selectedMonth } = this.props;
    return week.map((e, i) =>
      <td key={i} className={styles.table__cell}>
        <Day selectedMonth={selectedMonth} day={e} />
      </td>
    )
  }
  render() {
    return (
      <tr>{this.renderWeek()}</tr>
    );
  }
}
Week.propTypes = {
  week: PropTypes.array
};
export default Week;