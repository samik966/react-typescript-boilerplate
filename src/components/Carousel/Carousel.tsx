import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Carousel = (props: Props) => {
  return <div {...props}>Carousel</div>
}

export default Carousel
