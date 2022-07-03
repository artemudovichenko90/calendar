import { Component } from 'react';
import CalendarToday from './CalendarToday';
import CalendarMonth from './CalendarMonth';
import styles from './CalendarSection.module.scss'

class CalendarSection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section className={styles.calendar}>
        <CalendarToday />
        <CalendarMonth />
      </section>
    );
  }
}
export default CalendarSection;