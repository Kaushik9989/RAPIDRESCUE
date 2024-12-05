document.querySelectorAll('.action-btn').forEach((button) => {
    button.addEventListener('click', () => {
      alert(`You clicked: ${button.textContent}`);
    });
  });
  