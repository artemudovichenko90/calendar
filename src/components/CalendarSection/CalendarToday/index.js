import React, { Component } from 'react';
import { getDate, format } from 'date-fns';
import styles from './CalendarToday.module.scss'

class CalendarToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  render() {
    const { date } = this.state;
    return (
      <section className={styles.today}>
        <p className={styles['today__day-week']}>{format(date, 'EEEE')}</p>
        <p className={styles['today__day-month']}>{getDate(date)}</p>

      </section>
    );
  }
}
export default CalendarToday;