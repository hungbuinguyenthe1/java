document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('sortable-list');

  let draggingElement;

  list.addEventListener('dragstart', function(event) {
    draggingElement = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', draggingElement.textContent);
    event.target.classList.add('dragging');
  });

  list.addEventListener('dragover', function(event) {
    event.preventDefault();
    const targetElement = event.target.closest('li');
    if (targetElement && targetElement !== draggingElement) {
      const rect = targetElement.getBoundingClientRect();
      const nextElement = (event.clientY - rect.top) / (rect.bottom - rect.top) > 0.5 ? targetElement.nextSibling : targetElement;
      list.insertBefore(draggingElement, nextElement);
    }
  });

  list.addEventListener('dragend', function() {
    draggingElement.classList.remove('dragging');
    draggingElement = null;
  });
});
