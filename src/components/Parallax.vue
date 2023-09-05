<template>
    <div>

    <img :src="img1" data-speed="5" class="layer" />
    <img :src="img2" data-speed="5" class="layer" />
    <img :src="img3" data-speed="2" class="layer" />
    <img :src="img4" data-speed="6" class="layer" />

    <img :src="img5" data-speed="8" class="layer" />
    <img :src="img8" data-speed="5" class="layer" />

    <img :src="img9" data-speed="2" class="layer" />
    <img :src="img11" data-speed="4" class="layer" />


    </div>
</template>

<script setup>
import img1 from '@/assets/images/shapes/1.png'
import img2 from '@/assets/images/shapes/2.png'
import img3 from '@/assets/images/shapes/3.png'
import img4 from '@/assets/images/shapes/4.png'

import img5 from '@/assets/images/shapes/5.png'
import img6 from '@/assets/images/shapes/6.png'
import img7 from '@/assets/images/shapes/7.png'
import img8 from '@/assets/images/shapes/8.png'

import img9 from '@/assets/images/shapes/9.png'
import img10 from '@/assets/images/shapes/10.png'
import img11 from '@/assets/images/shapes/11.png'
import { useMouse } from '@vueuse/core'


import { ref, watch } from 'vue'

const { x, y, sourceType } = useMouse()
 const layerElements = ref([])


watch([x,y], ([newX, newY], [oldX, oldY]) => {
                const elements = document.querySelectorAll('.layer')
                elements.forEach((element) => {
                    const speed = element.getAttribute('data-speed')

                    const transformX = (newX - oldX*speed)/100
                    const transformY = (newY - oldY*speed)/100

                    // Apply the transform to the element's style
                    element.style.transform = `translate(${transformX}px), ${transformY}px)`
                    


                })
})



</script>

<style  scoped>
  img{
    position : absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
</style>