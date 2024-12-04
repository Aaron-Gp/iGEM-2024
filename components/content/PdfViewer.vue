<!-- components/PdfViewer.vue -->
<template>
    <div class="flex justify-center">
            <iframe :src="pdfUrl" width="100%"
              class="pdf-viewer h-[50vh]" title="PDF"></iframe>
          </div>
  </template>
  
  <script setup>
  defineProps(['pdfUrl']);
  </script>
  
  <style scoped>
  .pdf-viewer {
    height: 300px; /* 高度根据需要设置 */
    width: 100%; /* 宽度设置为100% */
  }
  </style>
  