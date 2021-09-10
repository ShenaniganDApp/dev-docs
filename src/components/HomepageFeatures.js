import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Setup Your Environment',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Shenanigan code repositories each have their own setup process with 
        unique environment variables and build commands 
      </>
    ),
  },
  {
    title: 'Implement Our Best Practices',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We utilize industry best practices to make sure our code is readable, 
        atomic, and scalable. Review our best practices for Git, React, Relay,
        Solidity, and Jest.
      </>
    ),
  },
  {
    title: 'Learn To Read, Review, and Test Code',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        It helps to be a well rounded developer. Learn to read and review our
        code so you can improve the qualities of your future Pull Requests.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
