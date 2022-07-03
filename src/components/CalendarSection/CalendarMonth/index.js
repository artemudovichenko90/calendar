import React, { Component } from 'react';
import { format, addMonths, subMonths } from 'date-fns';
import Week from './Week';
import { get6weeks } from "../../../util";
import styles from './CalendarMonth.module.scss'


class HeaderWeek extends Component {
  render() {
    return <tr>
      <th className={styles['table__header']}>s</th>
      <th className={styles['table__header']}>m</th>
      <th className={styles['table__header']}>t</th>
      <th className={styles['table__header']}>w</th>
      <th className={styles['table__header']}>t</th>
      <th className={styles['table__header']}>f</th>
      <th className={styles['table__header']}>s</th>
    </tr>
  }
}

class CalendarMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  handlerButtonPrev = () => {
    this.setState(state => ({ date: subMonths(state.date, 1) }))
  }

  handlerButtonNext = () => {
    this.setState(state => ({ date: addMonths(state.date, 1) }))
  }

  renderWeeks = () => {
    const { date } = this.state;
    return get6weeks(date).map((e, i) => <Week selectedMonth={date} week={e} key={i} />)
  }

  render() {
    const { date } = this.state;
    return (
      <section className={styles.month}>
        <div className={styles['switch']}>
          <button className={styles.switch__button} onClick={this.handlerButtonPrev}>&lt;</button>
          <p className={styles.switch__title}>{format(date, 'LLLL y')}</p>
          <button className={styles.switch__button} onClick={this.handlerButtonNext}>&gt;</button>
        </div>
        <table className={styles.table}>
          <thead>
            <HeaderWeek />
          </thead>
          <tbody>
            {this.renderWeeks()}
          </tbody>
        </table>
      </section>
    );
  }
}
export default CalendarMonth;