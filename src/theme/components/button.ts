const customVariant = ({
  bg,
  bgHover = bg,
  bgActive = bgHover,
  color,
  colorHover = color,
  boxShadowFocus = 'outline',
}) => {
  return {
    bg,
    color: color,
    _focus: {
      boxShadow: boxShadowFocus,
    },
    _hover: {
      bg: bgHover,
      color: colorHover,
      _disabled: {
        bg,
      },
    },
    _active: { bg: bgActive },
  };
};

export default {
  variants: {
    // Custom variants
    '@primary': customVariant({
      bg: 'brand.500',
      bgHover: 'brand.600',
      bgActive: 'brand.700',
      color: 'white',
      boxShadowFocus: 'outline-brand',
    }),
    '@secondary': customVariant({
      bg: 'brand.50',
      bgHover: 'brand.100',
      bgActive: 'brand.200',
      color: 'brand.600',
      colorHover: 'brand.700',
      boxShadowFocus: 'outline-brand',
    }),
    '@danger': customVariant({
      bg: 'error.50',
      bgHover: 'error.100',
      bgActive: 'error.200',
      color: 'error.600',
      colorHover: 'error.700',
      boxShadowFocus: 'outline-error',
    }),
    '@warning': customVariant({
      bg: 'warning.50',
      bgHover: 'warning.100',
      bgActive: 'warning.200',
      color: 'warning.600',
      colorHover: 'warning.700',
      boxShadowFocus: 'outline-warning',
    }),

    // Default variants
    solid: ({ colorScheme }) => ({
      bg: colorScheme === 'gray' ? `${colorScheme}.100` : `${colorScheme}.600`,
      _hover: {
        bg:
          colorScheme === 'gray' ? `${colorScheme}.200` : `${colorScheme}.700`,
      },
    }),
    ghost: ({ colorScheme }) => ({
      bg: `${colorScheme}.50`,
      _hover: {
        bg: `${colorScheme}.100`,
      },
    }),
  },
};
