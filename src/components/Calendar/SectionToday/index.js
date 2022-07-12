import React, { Component } from 'react';
import { getDate, format } from 'date-fns';
import styles from './SectionToday.module.scss'

class SectionToday extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedDay } = this.props;
    return (
      <section className={styles.today}>
        <p className={styles['today__day-week']}>{format(selectedDay, 'EEEE')}</p>
        <p className={styles['today__day-month']}>{getDate(selectedDay)}</p>
      </section>
    );
  }
}
export default SectionToday;