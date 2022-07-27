export const device = {
  tablet: 600,
  desktop: 1280,
}

export const media = {
  phone: `@media screen and (max-width: ${device.tablet - 1}px)`,
  tablet: `@media screen and (max-width: ${device.desktop - 1}px)`,
};