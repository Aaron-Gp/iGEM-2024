<!-- components/PdfViewer.vue -->
<template>
    <div class="pdf-viewer">
      <iframe
        :src="pdfUrl"
        width="100%"
        height="100%"
        style="border: none;"
      ></iframe>
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
  