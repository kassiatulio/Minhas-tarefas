$(document).ready(() => {
  $(".delete").click((event) => {
    // Obtém item da lista para deletar
    const habit = $(event.target).parent()

    // Obtém modal
    const confirmationModal = $(".modal-deletation-confirm")
    
    // Abre janela de confirmação
    confirmationModal.modal()

    // Adiciona função ao clicar em confirmar remoção
    confirmationModal.find(".btn-confirm").click(() => {
      confirmationModal.modal("hide")
      habit.remove()
    })
  })

  $(".btn-new-habit").click(() => {
    const newHabitModal = $(".modal-new-habit")

    newHabitModal.modal()

    newHabitModal.find(".btn-confirm").click(() => {
      const habitDescription = newHabitModal.find("input[name='description']").val()
      const lastId = parseInt($(".habit-list li").last().attr("id"))
      const nextId = lastId + 1

      const excludeButton = $("<i></i>").addClass("action delete fas fa-trash")
      const habitItem = $("<li></li>")
        .attr("id", nextId)
        .addClass("habit list-group-item")
        .html(habitDescription)
        .append(excludeButton)

      $(".habit-list").append(habitItem)

      newHabitModal.modal("hide")
    })
  })
})