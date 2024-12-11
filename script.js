document.getElementById("clean-water-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const selectedOption = document.querySelector('input[name="access"]:checked');
  if (selectedOption) {
      alert(`You selected: ${selectedOption.value}`);
  } else {
      alert("Please select an option.");
  }
});
