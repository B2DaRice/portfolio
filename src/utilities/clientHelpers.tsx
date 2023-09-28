export const scrollIntoViewWithOffset = ({ element, offset }: { element: Element, offset: number }) => {
  window.scrollTo({
    behavior: 'smooth',
    top:
      element.getBoundingClientRect().top -
      document.body.getBoundingClientRect().top -
      offset,
  })
}