
<template>
  <div>
    <form @submit.prevent="handleSubmit">

      <div class="form-group">
        <label for="name">Name:</label>
        <input class="form-control" type="text" id="name" v-model="name" />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>


      <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="email" id="email" v-model="email" />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>


      <div class="form-group">
        <label for="password">Password:</label>
        <input class="form-control" type="password" id="password" v-model="password" />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>

      <button class="btn" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const errors = ref({
  name: '',
  email: '',
  password: '',
});

const validateForm = () => {
  errors.value.name = '';
  errors.value.email = '';
  errors.value.password = '';

  let isValid = true;

  if (!name.value) {
    errors.value.name = 'Name is required.';
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    errors.value.email = 'Please enter a valid email.';
    isValid = false;
  }

  if (password.value.length < 6) {
    errors.value.password = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!');
    name.value = '';
    email.value = '';
    password.value = '';
  }else{
    alert('Data provided is not valid!');
  }
};
</script>
<style>
/* Form Group Styling */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
  color: #818181;
  font-family: "Inter", sans-serif;
}

/* Form Control Styling (similar to Bootstrap) */
.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Focus State */
.form-control:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

/* Invalid Input State (if needed) */
.form-control.is-invalid {
  border-color: #e3342f;
  padding-right: calc(1.5em + 0.75rem);
  background-image: none;
}

.form-control.is-invalid:focus {
  border-color: #e3342f;
  box-shadow: 0 0 0 0.2rem rgba(227, 52, 47, 0.25);
}

/* Error Message Styling */
.error-message {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: #ff4e4e;
}

/* Button Styling (Bootstrap-like) */
.btn {
  display: inline-block;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: #45494e;
  border: 1px solid #69737e;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Button Hover */
.btn:hover {
  background-color: #1d1f23;
  border-color: #1e2022;
}

/* Button Focus */
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}

/* Button Active */
.btn:active {
  background-color: #004085;
  border-color: #004085;
  box-shadow: none;
}
</style>