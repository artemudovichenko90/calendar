import React, { Component } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import { getCalendarDays, lettersWeek } from '../../../util';
import styles from './SectionMonth.module.scss'
import Day from './Day';

class SectionMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: new Date()
    }
  }

  handlerButtonPrev = () => {
    this.setState(state => ({ selectedMonth: subMonths(state.selectedMonth, 1) }))
  }

  handlerButtonNext = () => {
    this.setState(state => ({ selectedMonth: addMonths(state.selectedMonth, 1) }))
  }

  renderWeek = () => {
    return lettersWeek.map((day, index) => <div key={index}>{day}</div>)
  }

  renderMonth = () => {
    const { selectedMonth } = this.state;
    const calendarDays = getCalendarDays(selectedMonth);
    return calendarDays.map((day, index) => <Day key={index} day={day} selectedMonth={selectedMonth} />)
  }

  handlerDay = ({ target: { attributes: { day } } }) => {
    const { changeSelectedDay } = this.props;
    changeSelectedDay(new Date(day.value));
  }

  render() {
    const { selectedMonth } = this.state;
    return (
      <section className={styles.month}>
        <div className={styles.switch}>
          <button className={styles.switch__button} onClick={this.handlerButtonPrev}>&lt;</button>
          <p className={styles.switch__title}>{format(selectedMonth, 'LLLL y')}</p>
          <button className={styles.switch__button} onClick={this.handlerButtonNext}>&gt;</button>
        </div>
        <div className={styles.table}>
          <div className={styles.table__header}>
            {this.renderWeek()}
          </div>
          <div onClick={this.handlerDay} className={styles.table__body}>
            {this.renderMonth()}
          </div>
        </div>
      </section>
    );
  }
}
export default SectionMonth;