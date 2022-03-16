import { css } from '@emotion/react';

export const codeHighlight = css`
  code[class*='language-'],
  pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #282a36;
  }

  /* Inline code */
  :not(pre) > code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #6272a4;
  }

  .token.punctuation {
    color: #f8f8f2;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #ff79c6;
  }

  .token.boolean,
  .token.number {
    color: #bd93f9;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #50fa7b;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #f8f8f2;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #f1fa8c;
  }

  .token.keyword {
    color: #8be9fd;
  }

  .token.regex,
  .token.important {
    color: #ffb86c;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  /**
   * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .code-highlight.
   */
  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .code-line {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -18px;
    margin-right: -16px;
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: rgba(31, 41, 55, 0); /* Set code background color */
  }

  .code-line.inserted {
    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
  }

  .code-line.deleted {
    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
  }

  .highlight-line {
    margin-left: -18px;
    margin-right: -16px;
    background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
    border-left-width: 4px;
    border-left-color: rgb(59, 130, 246); /* Set highlight accent border color */
  }

  .line-number::before {
    display: inline-block;
    width: 1rem;
    text-align: right;
    margin-right: 16px;
    margin-left: -8px;
    color: rgb(156, 163, 175); /* Line number color */
    content: attr(line);
  }
`;
