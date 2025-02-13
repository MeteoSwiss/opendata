import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({id: 'homepage.main_title', message: 'Documentation under construction', description: 'Title on the main page'}),
    Svg: require('@site/static/img/construction-site.svg').default,
    description: (
      <>
        <Translate id="homepage.main_text" description="The main explanation text on the homepage">The documentations of the Open Data products linked below explain what the data represents, its models, abstractions and terminology.</Translate><br/><br/>

        ⚠️ <strong><Translate>Status</Translate>:</strong> <Translate id="homepage.status_text" description="The status text on the homepage">We are currently setting up our service as ALPHA. Everything is subject to change without prior notice.</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
