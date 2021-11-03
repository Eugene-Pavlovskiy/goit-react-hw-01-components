import PropTypes, { func } from 'prop-types';
import s from './Statistics.module.css';

// Color generator
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


function Statistics ({title = null, stats}) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(el => {
                    const backgroundColor = getRandomHexColor();
                    const border = `${backgroundColor} 1px solid`;
                    return (
                        <li className={s.item}
                            style={{backgroundColor, border}}
                            key={el.id}>
                            <span className={s.label}>{el.label}</span>
                            <span className={s.percentage}>{el.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
  }


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };
  
  export default Statistics;