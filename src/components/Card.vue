<template>
<div class="p-12 max-w-xl    bg-white rounded-lg shadow-mt-4">
  <div class="flex-shrink-0">
 
  </div>
  <div>
            <p class="text-2xl font-bold">{{quiz.questions[NumberQuestion].question}}</p>

    <label
      v-for="(option, index) in quiz.questions[NumberQuestion].options"
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
        v-model="selected"
        @change="handleRadioChange(option, index)"
      />
      {{ option }}
    </label>

  </div>
              <div class="mt-6 flow-root">
              <button
                @click="nextQuestion"
                v-show="showbtn"
                class="float-right bg-cyan-600 text-white text-sm font-bold tracking-wide rounded-full px-2 py-2"
          
              >
                <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="w-6 h-6" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </button>
              <button
                @click="Result"
                v-show="showresult"
                class="float-right bg-cyan-600 text-white text-sm font-bold tracking-wide rounded-full px-2 py-2"
          
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6 text-white" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z"/>
            </svg>
              </button>

            </div>
</div>
</template>

<script setup>
   import { useQuizStore } from '@/Stores/quizStore.js'
   import swal from 'sweetalert';
   import { ref } from 'vue'




   let showbtn = ref(false);
   let showresult = ref(false);
   let quiz = useQuizStore();
   let NumberQuestion = ref(0);

   
   let selected= ref("");
   let Qindex = ref(null)


   let correctAnswer = quiz.questions[NumberQuestion.value].correctAnswer

    const handleRadioChange = (value, index) => {
      selected.value = value;
      Qindex.value = index;

      if (selected.value !== correctAnswer) {
        swal("Oops!", `Your selected answer ${selected.value} is incorrect. The correct answer is ${correctAnswer}.`, "error");
        quiz.incorrect++;
      } else {
        swal("Good job!", `You selected the correct answer ${selected.value}.`, "success");
        quiz.correct++;
      }
      showbtn.value = true

      if(quiz.questions.length <= NumberQuestion.value+1)
      {
         showbtn.value = false
                  showresult.value = true

      }
    

    };

    const  nextQuestion = () => {
      if(quiz.questions.length >= NumberQuestion.value+1)
      {

      
        selected.value = ""
        Qindex.value = null
        NumberQuestion.value++
        correctAnswer = quiz.questions[NumberQuestion.value].correctAnswer
                showbtn.value = false

      }
      else{
        showbtn.value = false
        swal(`${quiz.questions.length}, ${NumberQuestion.value+1}`)

      } 
    }
    const Result = () => {
        swal({
        icon: 'info',
        title: "Your Result is :",
        text: `Correct Answer : ${quiz.correct}, incorrect Answer : ${quiz.incorrect},`,
        timer: 5000
      });
      
    }


</script>

<style lang="scss" scoped>

</style>