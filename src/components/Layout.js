import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                </Helmet>
                <div className="wrapper">
                  {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}
