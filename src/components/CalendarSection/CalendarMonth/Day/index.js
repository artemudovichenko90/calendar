import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Day.module.scss'
import { isWithinInterval, startOfMonth, endOfMonth, isToday } from 'date-fns'



class Day extends Component {
  constructor(props) {
    super(props);
  }

  setColor(day) {
    const { selectedMonth } = this.props;
    if (isToday(day)) {
      return styles.today;
    }
    const isCurrentMonth = isWithinInterval(
      day,
      {
        start: startOfMonth(selectedMonth),
        end: endOfMonth(selectedMonth)
      }
    );
    if (isCurrentMonth) {
      return styles.dark;
    }
    return styles.light;
  }

  render() {
    const { day } = this.props;
    return (
      <div className={this.setColor(day)}>{day.getDate()}</div>
    );
  }
}
Day.propTypes = {
  day: PropTypes.instanceOf(Date).isRequired
};
export default Day;