import { BasePlugin } from '@mcwv/base';
import { mdcTypoMixin } from './typography-mixin.js';

export const mdcHeadline1 = {
  name: 'mdc-headline1',
  functional: true,
  mixins: [mdcTypoMixin('h1', 'headline1')],
};

export const mdcHeadline2 = {
  name: 'mdc-headline2',
  functional: true,
  mixins: [mdcTypoMixin('h2', 'headline2')],
};

export const mdcHeadline3 = {
  name: 'mdc-headline3',
  functional: true,
  mixins: [mdcTypoMixin('h3', 'headline3')],
};

export const mdcHeadline4 = {
  name: 'mdc-headline4',
  functional: true,
  mixins: [mdcTypoMixin('h4', 'headline4')],
};

export const mdcHeadline5 = {
  name: 'mdc-headline5',
  functional: true,
  mixins: [mdcTypoMixin('h5', 'headline5')],
};

export const mdcHeadline6 = {
  name: 'mdc-headline6',
  functional: true,
  mixins: [mdcTypoMixin('h6', 'headline6')],
};

export const mdcSubtitle1 = {
  name: 'mdc-subtitle1',
  functional: true,
  mixins: [mdcTypoMixin('h6', 'subtitle1')],
};
export const mdcSubtitle2 = {
  name: 'mdc-subtitle2',
  functional: true,
  mixins: [mdcTypoMixin('h6', 'subtitle2')],
};

export const mdcBody1 = {
  name: 'mdc-body1',
  functional: true,
  mixins: [mdcTypoMixin('p', 'body1')],
};

export const mdcBody2 = {
  name: 'mdc-body2',
  functional: true,
  mixins: [mdcTypoMixin('p', 'body2')],
};

export const mdcButton1 = {
  name: 'mdc-button1',
  functional: true,
  mixins: [mdcTypoMixin('span', 'button', 'mdc-button1')],
};

export const mdcCaption = {
  name: 'mdc-caption',
  functional: true,
  mixins: [mdcTypoMixin('span', 'caption')],
};

export const mdcOverline = {
  name: 'mdc-overline',
  functional: true,
  mixins: [mdcTypoMixin('span', 'overline')],
};

export default BasePlugin({
  mdcHeadline1,
  mdcHeadline2,
  mdcHeadline3,
  mdcHeadline4,
  mdcHeadline5,
  mdcHeadline6,
  mdcOverline,
  mdcSubtitle1,
  mdcSubtitle2,
  mdcBody1,
  mdcBody2,
  mdcButton1,
  mdcCaption,
});
