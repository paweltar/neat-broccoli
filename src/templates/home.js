import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <h1>{_.get(this.props, 'pageContext.site.siteMetadata.homepage_heading')}</h1>
            <h2>{_.get(this.props, 'pageContext.frontmatter.sub_heading')}</h2>
            {htmlToReact(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
