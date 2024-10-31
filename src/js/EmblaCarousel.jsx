import React from 'react'
import { IosPickerItem } from './EmblaCarouselIosPickerItem'

const EmblaCarousel = (props) => {
  const { loop } = props

  return (
    <div className="embla">
      <IosPickerItem slideCount={24} perspective="left" loop={loop} />
    </div>
  )
}

export default EmblaCarousel
