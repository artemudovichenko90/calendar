import { Component } from 'react';
import SectionToday from './SectionToday';
import SectionMonth from './SectionMonth';
import styles from './Calendar.module.scss'

class Calendar extends Component {
  constructor() {
    super();
    this.state = { selectedDay: new Date() }
  }

  changeSelectedDay = (selectedDay) => {
    this.setState({ selectedDay })
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <section className={styles.calendar}>
        <SectionToday selectedDay={selectedDay} />
        <SectionMonth changeSelectedDay={this.changeSelectedDay} />
      </section>
    );
  }
}
export default Calendar;