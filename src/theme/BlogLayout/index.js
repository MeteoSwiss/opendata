import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
export default function BlogLayout(props) {
  const {sidebar, toc, children, ...layoutProps} = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const rss_url = "https://opendatadocs.meteoswiss.ch/changelog/rss.xml"; // don't se useBaseUrl() here since this URL must not be localized
  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <BlogSidebar sidebar={sidebar} />
          <main
            className={clsx('col', {
              'col--7': hasSidebar,
              'col--9 col--offset-1': !hasSidebar,
            })}>
              <p>Subscribe to the <strong><a href={rss_url}>RSS feed</a></strong> to stay up-to-date about upcoming and released changes of our Open Data service.</p>
              <p>For upcoming changes and the changelog of the `Numerical weather forecasting model ICON-CH1/2-EPS` please refer to <a href={https://opendatadocs.meteoswiss.ch/e-forecast-data/e2-e3-numerical-weather-forecasting-model-changelog}>here</a>.</p>
            {children}
          </main>
          {toc && <div className="col col--2">{toc}</div>}
        </div>
      </div>
    </Layout>
  );
}
