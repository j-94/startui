import * as externals from './externals';

const externalsStyles = Object.values(externals).reduce(
  (acc, cur) => ({ ...acc, ...cur }),
  {}
);

export const styles = {
  global: {
    html: {
      bg: 'gray.800',
    },
    body: {
      bg: 'gray.50',
      WebkitTapHighlightColor: 'transparent',
    },
    '#chakra-toast-portal > *': {
      pt: 'safe-top',
      pl: 'safe-left',
      pr: 'safe-right',
      pb: 'safe-bottom',
    },
    ...externalsStyles,
  },
};
