<template>
<div class="p-12 max-w-lg   bg-white rounded-lg shadow-mt-4">
  <div class="flex-shrink-0">
 
  </div>
  <div>
            <p class="text-2xl font-bold">{{quiz.questions[0].question}}</p>

    <label
      v-for="(option, index) in quiz.questions[0].options"
      :key="index"
      :for="index"
      class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
      :class="{
        'hover:bg-gray-100 cursor-pointer': selected == '',
        'bg-green-500 text-white': (selected == correctAnswer && index == Qindex) || selected != '' && correctAnswer == option,
        'bg-red-500 text-white': selected != correctAnswer && index == Qindex,
        'cursor-not-allowed': selected !== '' // Add this class to change cursor style
      }"
    >
      <input
        :id="index"
        type="radio"
        class="hidden"
        :value="index"
        :disabled="selected !== ''"
        @change="handleRadioChange(option, index)"
      />
      {{ option }}
    </label>

  </div>
</div>
</template>

<script setup>
   import { useQuizStore } from '@/Stores/quizStore.js'
   import { ref } from 'vue'





   let quiz = useQuizStore();

   
   let selected= ref("");
   let Qindex = ref(null)


   let correctAnswer = quiz.questions[0].correctAnswer

   const handleRadioChange = (value,index) => {
    selected.value = value;
    Qindex.value = index
   swal("Good job!", `You clicked the button ${selected} and correct answer is ${correctAnswer}`, "success")
   }
</script>

<style lang="scss" scoped>

</style>