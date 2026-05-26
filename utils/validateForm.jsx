export const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const validateRequired = (value) => value.trim() !== "";
