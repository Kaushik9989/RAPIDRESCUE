function acceptRequest() {
    fetch('/accept-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ requestId: 1, status: 'accepted' }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  function needHelp() {
    alert('Redirecting to help page...');
    window.location.href = '/need-help';
  }
