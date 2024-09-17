<script setup>
import { ref } from "vue";
import FileUpload from "primevue/fileupload";

defineProps({
  title: {
    type: String,
    default: null,
  },
});

const error = ref(null);
const allowedExtensions = ["txt", "doc", "docx"];

const formatFileSize = (size) => {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    " " +
    ["B", "KB", "MB", "GB", "TB"][i]
  );
};

const handleFileSelect = (event) => {
  const file = event.originalEvent.target.files[0];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  if (!allowedExtensions.includes(fileExtension)) {
    error.value = "Файл должен быть в формате .txt, .doc или .docx";
    event.files.splice(0, event.files.length);
    event.files.push(file);
  } else {
    error.value = null;
    event.files.splice(0, event.files.length);
    event.files.push(file);
  }
};
</script>

<template>
  <FileUpload
    :multiple="false"
    @select="handleFileSelect"
    :pt="{
      input: { class: 'file-upload' },
      buttonbar: { class: 'buttonbar-file-upload' },
      content: { class: 'content-file-upload' },
      thumbnail: { class: 'thumbnail-file-upload' },
      details: { class: 'details-file-upload' },
      file: { class: 'file-file-upload' },
      fileSize: { class: 'file-size-file-upload' },
    }"
  >
    <template #header="{ files, uploadedFiles, chooseCallback, clearCallback }">
      <div :class="[{ 'file-upload-selected': files.length > 0 }]">
        <button
          :class="[
            'file-upload-button',
            { 'icon-paper-clip': files.length === 0 },
            { 'file-upload-button_selected': files.length > 0 },
          ]"
          @click="chooseCallback"
        >
          {{ files.length > 0 ? files[0].name : title }}

          <span v-if="files.length > 0" class="file-size">
            {{ formatFileSize(files[0].size) }}
          </span>
        </button>

        <button
          v-if="files.length > 0"
          @click="clearCallback"
          class="close-button icon-close"
        ></button>
      </div>
      <span v-if="error" class="error-message">{{ error }}</span>
    </template>
  </FileUpload>
</template>

<style lang="scss">
@import "../../assets/scss/helpers/fonts-mixin";

.file-size {
  @include font-link-1;
}

.content-file-upload {
  display: none;
}

.file-upload {
  display: none;
}

.buttonbar-file-upload {
  display: flex;
}

.file-file-upload {
  display: flex;
}

.details-file-upload {
  display: flex;
}

.file-size-file-upload {
  margin-left: 5px;
}

.file-upload-selected {
  display: flex;
  border: none;
  border-radius: 12px;
  padding: 0 9px 0 14px;
  background-color: var(--color-grey-light);
}

.file-upload-button {
  @include font-link-1;

  display: flex;
  text-align: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 14px 0;
  color: var(--color-black-subtitle);

  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.icon-paper-clip {
  &:after {
    content: "\0048";
    font-size: 15px;
    color: var(--color-black-subtitle);
    font-weight: inherit;
  }
}

.close-button {
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 5px;
}

.icon-close {
  &:after {
    content: "\004A";
    font-size: 12px;
    color: var(--color-black-subtitle);
    font-weight: inherit;
  }
}

.file-upload-button_selected {
  padding-right: 20px;
}

@media (max-width: 800px) {
  .icon-paper-clip {
    &:after {
      font-size: 12px;
    }
  }
}
</style>
