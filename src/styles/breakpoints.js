export const breakpoints = (size, dimension = "width") => {
  const sizes = {
    xs: `@media (max-${dimension}: 480px)`,
    sm: `@media (max-${dimension}: 600px)`,
    md: `@media (max-${dimension}: 960px)`,
    lg: `@media (max-${dimension}: 1280px)`,
    xl: `@media (max-${dimension}: 1600px)`,
  }
  if (!sizes[size]) {
    return `@media (max-${dimension}: ${size}px)`
  }
  return sizes[size] ?? sizes.md
}
