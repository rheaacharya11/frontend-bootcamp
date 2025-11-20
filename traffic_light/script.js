document.querySelectorAll('.light').forEach(light => {
      light.addEventListener('click', function(e) {
        // Hide all labels first
        document.querySelectorAll('.light').forEach(l => l.classList.remove('show-label'));
        // Show the clicked label
        this.classList.add('show-label');
        // Prevent event bubbling so it doesn't immediately hide
        e.stopPropagation();
      });
    });