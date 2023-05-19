import styles from './title.module.scss'
import PropTypes from 'prop-types';

interface TitleProps {
  title: string
}

Title.propTypes = {
  slug: PropTypes.string
}; 

export default function Title({ title }: TitleProps) {
  return <h4 className={styles.title}>{title}</h4>
}
