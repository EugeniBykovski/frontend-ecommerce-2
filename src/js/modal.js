const modal = document.getElementById('#myModal')

modal.on('shown.bs.modal', () => modal.trigger('focus'))