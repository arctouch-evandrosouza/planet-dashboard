import styles from './content.module.scss'
import Title from '../title/title'
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface ContentProps {
  title: string,
  children: ReactNode
}

Content.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default function Content({ title, children }: ContentProps) {
  return <section className={styles.content}>
    {title && <Title title={title} />}
    {children}
  </section>
}
