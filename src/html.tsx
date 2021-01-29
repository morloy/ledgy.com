import React from "react";

export default ((props: {
  [key: string]: any;
}) => <html lang="en" {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} // eslint-disable-line react/no-danger
    />
      {props.postBodyComponents}
    </body>
  </html>);
