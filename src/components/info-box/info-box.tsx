import styles from './info-box.module.scss'
import PropTypes from 'prop-types';

interface InfoBoxProps {
  title: string, value:string | number,
  icon: string
}

InfoBox.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any,
  icon: PropTypes.string,
}; 

export default function InfoBox({ title, value, icon}: InfoBoxProps) {
  return <div className={styles['info-box']}>
  <span className={styles['info-box__title']}>{ title }</span>
  <i className={icon}></i>
  <span className={styles['info-box__value']}>{ value }</span>
</div>
}
