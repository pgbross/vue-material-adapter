import { mdcTypoMixin } from './typography-mixin.js';

export const mdcHeadline1 = {
  name: 'mdc-headline1',
  mixins: [mdcTypoMixin('h1', 'headline1')],
};

export const mdcHeadline2 = {
  name: 'mdc-headline2',
  mixins: [mdcTypoMixin('h2', 'headline2')],
};

export const mdcHeadline3 = {
  name: 'mdc-headline3',
  mixins: [mdcTypoMixin('h3', 'headline3')],
};

export const mdcHeadline4 = {
  name: 'mdc-headline4',
  mixins: [mdcTypoMixin('h4', 'headline4')],
};

export const mdcHeadline5 = {
  name: 'mdc-headline5',
  mixins: [mdcTypoMixin('h5', 'headline5')],
};

export const mdcHeadline6 = {
  name: 'mdc-headline6',
  mixins: [mdcTypoMixin('h6', 'headline6')],
};

export const mdcSubtitle1 = {
  name: 'mdc-subtitle1',
  mixins: [mdcTypoMixin('h6', 'subtitle1')],
};
export const mdcSubtitle2 = {
  name: 'mdc-subtitle2',
  mixins: [mdcTypoMixin('h6', 'subtitle2')],
};

export const mdcBody1 = {
  name: 'mdc-body1',
  mixins: [mdcTypoMixin('p', 'body1')],
};

export const mdcBody2 = {
  name: 'mdc-body2',
  mixins: [mdcTypoMixin('p', 'body2')],
};

export const mdcButton1 = {
  name: 'mdc-button1',
  mixins: [mdcTypoMixin('span', 'button', 'mdc-button1')],
};

export const mdcCaption = {
  name: 'mdc-caption',
  mixins: [mdcTypoMixin('span', 'caption')],
};

export const mdcOverline = {
  name: 'mdc-overline',
  mixins: [mdcTypoMixin('span', 'overline')],
};
